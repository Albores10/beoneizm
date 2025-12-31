import React, { useState, useEffect } from 'react';
import { useToast } from '../components/UI/ToastManager';

const Logistics = () => {
    const { addToast } = useToast();
    const [droneDist, setDroneDist] = useState(85);
    const [isCalling, setIsCalling] = useState(false);

    // Simulate Live Tracking
    useEffect(() => {
        const interval = setInterval(() => {
            setDroneDist(prev => (prev > 0 ? prev - 1 : 100)); // Loop simulation
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleCallDrone = () => {
        setIsCalling(true);
        addToast("Drone Çağrısı Gönderildi: BEONE-X1", "info");
        setTimeout(() => {
            setIsCalling(false);
            addToast("Rota Onaylandı! Tahmini varış: 8 dk", "success");
        }, 2000);
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>BeOne <span style={{ color: '#00F0FF' }}>Lojistik</span></h1>

            {/* Status Panel */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-panel" style={{ padding: '16px', borderLeft: '3px solid #00F0FF' }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>HAVA SAHASI</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>AÇIK</div>
                    <div style={{ fontSize: '10px', color: '#4ade80' }}>⚡ Rüzgar: 12 km/s</div>
                </div>
                <div className="glass-panel" style={{ padding: '16px', borderLeft: '3px solid #FF00FF' }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>AKTİF DRONE</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>142 / 200</div>
                    <div style={{ fontSize: '10px', color: '#00F0FF' }}>%71 Doluluk</div>
                </div>
            </div>

            {/* Live Tracking Map Placeholder */}
            <div className="glass-panel" style={{
                padding: '0',
                height: '250px',
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden',
                background: 'url(https://placehold.co/600x400/050510/003366?text=Hava+Koridoru+Map) center/cover'
            }}>
                {/* Moving Drone Dot */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: `${100 - droneDist}%`,
                    width: '20px',
                    height: '20px',
                    background: '#00F0FF',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 15px #00F0FF, 0 0 30px #00F0FF',
                    transition: 'left 2s linear'
                }}></div>
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '12px', background: 'rgba(0,0,0,0.5)', padding: '4px' }}>
                    KARGO: TIBBİ MALZEME - <span style={{ color: '#00F0FF' }}>{droneDist}m</span> kaldı
                </div>
            </div>

            {/* Quick Actions */}
            <h2 style={{ fontSize: '16px', marginBottom: '12px' }}>Hızlı İşlemler</h2>
            <div className="glass-panel" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📦</div>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Kişisel Kargo</div>
                            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>50kg'a kadar taşıma</div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleCallDrone}
                    disabled={isCalling}
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: isCalling ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                        border: '1px solid #00F0FF',
                        color: '#00F0FF',
                        borderRadius: '8px',
                        cursor: isCalling ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    {isCalling ? 'DRONE ARANIYOR...' : 'DRONE ÇAĞIR 🛸'}
                </button>
            </div>
        </div>
    );
};

export default Logistics;
