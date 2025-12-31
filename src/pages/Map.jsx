import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEmergency } from '../context/EmergencyContext'; // New Import

// Fix for default Leaflet icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons
const createCustomIcon = (color) => {
    return new L.DivIcon({
        className: 'custom-pin',
        html: `<div style="
            background-color: ${color};
            width: 24px;
            height: 24px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 2px solid white;
            box-shadow: 0 0 10px ${color};
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div>
        </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -24]
    });
};

const goldIcon = createCustomIcon('#FFD700');
const blueIcon = createCustomIcon('#007AFF');
const greenIcon = createCustomIcon('#4ade80'); // Safe Zone Icon
const alertIcon = createCustomIcon('#ef4444'); // Danger Icon

const Map = () => {
    // Center on Izmir Konak Square
    const position = [38.4189, 27.1287];
    const [activePin, setActivePin] = useState(null);
    const { isEmergency } = useEmergency(); // Access Context

    // Normal Mode Pins
    const regularPins = [
        { id: 1, type: 'gold', pos: [38.4220, 27.1260], title: 'Skyline Tower A', location: 'Alsancak Kordon' },
        { id: 2, type: 'gold', pos: [38.4550, 27.2000], title: 'BeOne Lojmanları', location: 'Bornova Kampüs' },
        { id: 3, type: 'blue', pos: [38.3950, 27.0850], title: 'Su Noktası #12', location: 'Göztepe Sahil' },
        { id: 4, type: 'blue', pos: [38.4600, 27.1000], title: 'Su Noktası #08', location: 'Karşıyaka Çarşı' },
        { id: 5, type: 'gold', pos: [38.4500, 27.1650], title: 'Green Office', location: 'Bayraklı' },
    ];

    // Emergency Mode Pins (Safe Zones)
    const emergencyPins = [
        { id: 99, type: 'safe', pos: [38.4250, 27.1350], title: 'GÜVENLİ BÖLGE: KÜLTÜRPARK', location: 'Toplanma Alanı A1' },
        { id: 98, type: 'safe', pos: [38.4050, 27.1200], title: 'GÜVENLİ BÖLGE: KARANTİNA', location: 'Toplanma Alanı A2' },
        { id: 97, type: 'safe', pos: [38.4600, 27.2100], title: 'GÜVENLİ BÖLGE: EGE KAMPÜS', location: 'Afet Koordinasyon Merkezi' },
        { id: 96, type: 'danger', pos: [38.4189, 27.1287], title: 'RİSKLİ BÖLGE: SAHİL ŞERİDİ', location: 'Tahliye Ediliyor' },
    ];

    const displayPins = isEmergency ? emergencyPins : regularPins;

    return (
        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100%', width: '100%', background: '#0a192f' }}
                zoomControl={false}
            >
                {/* Dark/Neon Map Tiles - Darker in Emergency */}
                <TileLayer
                    url={isEmergency
                        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    }
                    attribution='&copy; CARTO'
                />

                {displayPins.map(pin => (
                    <Marker
                        key={pin.id}
                        position={pin.pos}
                        icon={pin.type === 'safe' ? greenIcon : (pin.type === 'danger' ? alertIcon : (pin.type === 'gold' ? goldIcon : blueIcon))}
                        eventHandlers={{
                            click: () => setActivePin(pin),
                        }}
                    >
                    </Marker>
                ))}
            </MapContainer>

            {/* Custom overlays / Voting Hotspots */}
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}>
                <div className="glass-panel" style={{ padding: '8px 12px', border: isEmergency ? '1px solid #ef4444' : undefined }}>
                    <div style={{ fontSize: '10px', color: isEmergency ? '#ef4444' : 'rgba(255,255,255,0.7)' }}>LOKASYON</div>
                    <div style={{ fontWeight: 'bold', color: isEmergency ? '#ef4444' : 'white' }}>İZMİR / KONAK</div>
                </div>
            </div>

            {/* Detail Card Overlay */}
            {activePin && (
                <div className="glass-panel" style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    padding: '20px',
                    zIndex: 999,
                    animation: 'slideUp 0.3s ease',
                    borderLeft: `4px solid ${activePin.type === 'gold' ? '#FFD700' : (activePin.type === 'safe' ? '#4ade80' : (activePin.type === 'danger' ? '#ef4444' : '#007AFF'))}`,
                    background: isEmergency ? 'rgba(20, 0, 0, 0.95)' : undefined
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <div>
                            <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: isEmergency ? (activePin.type === 'safe' ? '#4ade80' : '#ef4444') : 'white' }}>{activePin.title}</h3>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{activePin.location}</div>
                        </div>
                        <button onClick={() => setActivePin(null)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>×</button>
                    </div>

                    <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                        {isEmergency ? (
                            <>
                                <div>
                                    <div style={{ fontSize: '10px', color: activePin.type === 'safe' ? '#4ade80' : '#ef4444' }}>DURUM</div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{activePin.type === 'safe' ? 'GÜVENLİ' : 'TEHLİKELİ'}</div>
                                </div>
                                {activePin.type === 'safe' && (
                                    <div>
                                        <div style={{ fontSize: '10px', color: '#4ade80' }}>KAPASİTE</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>%12 DOLU</div>
                                    </div>
                                )}
                            </>
                        ) : (
                            activePin.type === 'gold' ? (
                                <>
                                    <div>
                                        <div style={{ fontSize: '10px', color: '#FFD700' }}>DOLULUK</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>%98</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', color: '#FFD700' }}>KİRA GETİRİSİ</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>₺ 124,500</div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div style={{ fontSize: '10px', color: '#007AFF' }}>pH DEĞERİ</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>7.8</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '10px', color: '#007AFF' }}>DOLULUK</div>
                                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>%45</div>
                                    </div>
                                </>
                            )
                        )}
                    </div>

                    {!isEmergency && (
                        <button style={{
                            marginTop: '16px',
                            width: '100%',
                            padding: '12px',
                            background: activePin.type === 'gold' ? 'var(--color-secondary)' : 'var(--color-primary)',
                            color: activePin.type === 'gold' ? 'black' : 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            {activePin.type === 'gold' ? 'DETAYLARI GÖR' : 'SU AL'}
                        </button>
                    )}

                    {isEmergency && activePin.type === 'safe' && (
                        <button style={{
                            marginTop: '16px',
                            width: '100%',
                            padding: '12px',
                            background: '#4ade80',
                            color: 'black',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            ROTA OLUŞTUR
                        </button>
                    )}
                </div>
            )}
            <style>{`
                 @keyframes slideUp {
                   from { transform: translateY(100%); opacity: 0; }
                   to { transform: translateY(0); opacity: 1; }
                 }
             `}</style>
        </div>
    );
};

export default Map;
