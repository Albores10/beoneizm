import React, { useState } from 'react';

const MapPin = ({ type, x, y, onClick }) => {
    const isGold = type === 'gold';
    const color = isGold ? '#FFD700' : '#007AFF';

    return (
        <div
            onClick={onClick}
            style={{
                position: 'absolute',
                left: x,
                top: y,
                transform: 'translate(-50%, -100%)',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            className="map-pin"
        >
            {/* Pin Icon */}
            <div style={{
                width: '32px',
                height: '32px',
                background: color,
                borderRadius: '50% 50% 50% 0',
                transform: 'rotate(-45deg)',
                boxShadow: `0 0 15px ${color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid white'
            }}>
                <div style={{ width: '10px', height: '10px', background: 'white', borderRadius: '50%' }}></div>
            </div>

            {/* Pulse Effect */}
            <div style={{
                position: 'absolute',
                bottom: '-5px',
                width: '20px',
                height: '10px',
                background: color,
                borderRadius: '50%',
                filter: 'blur(5px)',
                opacity: 0.6,
                animation: 'pulse 2s infinite'
            }}></div>
        </div>
    );
};

const MapDetailCard = ({ activePin, onClose }) => {
    if (!activePin) return null;

    const isGold = activePin.type === 'gold';

    return (
        <div className="glass-panel" style={{
            position: 'absolute',
            bottom: '100px',
            left: '20px',
            right: '20px',
            padding: '20px',
            animation: 'slideUp 0.3s ease',
            zIndex: 100,
            borderLeft: `4px solid ${isGold ? '#FFD700' : '#007AFF'}`
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>{activePin.title}</h3>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{activePin.location}</div>
                </div>
                <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                {isGold ? (
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
                )}
            </div>

            <button style={{
                marginTop: '16px',
                width: '100%',
                padding: '12px',
                background: isGold ? 'var(--color-secondary)' : 'var(--color-primary)',
                color: isGold ? 'black' : 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer'
            }}>
                {isGold ? 'HİSSE AL' : 'SU AL'}
            </button>
        </div>
    );
};

const Map = () => {
    const [activePin, setActivePin] = useState(null);
    const [transform, setTransform] = useState({ x: -100, y: -50, scale: 1 });

    // Mock Data
    const pins = [
        { id: 1, type: 'gold', x: '40%', y: '30%', title: 'Skyline Tower A', location: 'Alsancak Kordon' },
        { id: 2, type: 'gold', x: '60%', y: '50%', title: 'BeOne Lojmanları', location: 'Bornova Kampüs' },
        { id: 3, type: 'blue', x: '25%', y: '60%', title: 'Su Noktası #12', location: 'Göztepe Sahil' },
        { id: 4, type: 'blue', x: '75%', y: '35%', title: 'Su Noktası #08', location: 'Karşıyaka Çarşı' },
        { id: 5, type: 'gold', x: '50%', y: '70%', title: 'Green Office', location: 'Bayraklı' },
    ];

    return (
        <div style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            background: '#0a192f'
        }}>
            {/* Map Container */}
            <div style={{
                width: '200%', // Larger than screen for panning
                height: '200%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                transition: 'transform 0.1s ease-out',
                backgroundImage: 'url("https://placehold.co/1200x1200/111827/334155?text=Izmir+City+Map")', // Placeholder map asset
                backgroundSize: 'cover'
            }}>
                {/* Grid Overlay for Tech Feel */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'linear-gradient(rgba(0, 122, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 122, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    pointerEvents: 'none'
                }}></div>

                {/* Pins */}
                {pins.map(pin => (
                    <MapPin
                        key={pin.id}
                        {...pin}
                        onClick={() => setActivePin(pin)}
                    />
                ))}

                {/* Hotspot/Zone Animation (Voting) */}
                <div style={{
                    position: 'absolute',
                    top: '40%',
                    left: '80%',
                    width: '100px',
                    height: '100px',
                    border: '2px solid #ef4444',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                }}>
                    <div style={{
                        position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)',
                        background: '#ef4444', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap'
                    }}>
                        OYLAMA AKTİF
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button className="glass-panel" onClick={() => setTransform(p => ({ ...p, scale: Math.min(p.scale + 0.2, 2) }))} style={{ width: '40px', height: '40px', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>+</button>
                <button className="glass-panel" onClick={() => setTransform(p => ({ ...p, scale: Math.max(p.scale - 0.2, 0.5) }))} style={{ width: '40px', height: '40px', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>-</button>
                <button className="glass-panel" onClick={() => setTransform({ x: 0, y: 0, scale: 1 })} style={{ width: '40px', height: '40px', border: 'none', color: 'white', fontSize: '12px', cursor: 'pointer' }}>↺</button>
            </div>

            {/* Detail Overlay */}
            <MapDetailCard activePin={activePin} onClose={() => setActivePin(null)} />

            <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes ping {
          75%, 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        .map-pin:hover { transform: translate(-50%, -110%) scale(1.1) !important; transition: all 0.2s; }
      `}</style>
        </div>
    );
};

export default Map;
