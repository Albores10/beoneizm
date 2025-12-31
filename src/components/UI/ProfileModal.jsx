import React from 'react';

const ProfileModal = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            animation: 'fadeIn 0.3s ease'
        }}>
            {/* Holographic Card Container */}
            <div style={{
                width: '90%',
                maxWidth: '360px',
                background: 'rgba(0, 10, 30, 0.9)',
                border: '1px solid #00F0FF',
                borderRadius: '20px',
                padding: '24px',
                position: 'relative',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                overflow: 'hidden'
            }} className="glass-panel">

                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute', top: '15px', right: '15px',
                    background: 'none', border: 'none', color: '#00F0FF', fontSize: '24px', cursor: 'pointer', zIndex: 10
                }}>×</button>

                {/* Holographic Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(0, 240, 255, 0.3)', paddingBottom: '16px' }}>
                    <div style={{
                        width: '80px', height: '80px',
                        borderRadius: '12px',
                        border: '2px solid #00F0FF',
                        background: 'url(https://placehold.co/100) center/cover',
                        position: 'relative'
                    }}>
                        <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', background: '#00F0FF', color: 'black', fontSize: '10px', fontWeight: 'bold', padding: '2px 4px' }}>LVL 12</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '10px', color: '#00F0FF', letterSpacing: '1px' }}>BEONE CITIZEN ID</div>
                        <h2 style={{ margin: '4px 0', fontSize: '24px', textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>ŞAFAK BİROL</h2>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>ID: #8821-X992-IZM</div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    <StatBox label="VATANDAŞLIK PUANI" value="9,450" color="#FFD700" />
                    <StatBox label="IZM COIN" value="₺ 14,250" color="#00F0FF" />
                    <StatBox label="KARBON KREDİSİ" value="450 kg" color="#4ade80" />
                    <StatBox label="NÖRO-BAĞ" value="AKTİF" color="#a855f7" />
                </div>

                {/* Bio Data */}
                <div style={{ background: 'rgba(0, 240, 255, 0.05)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>Kan Grubu</span>
                        <span style={{ fontWeight: 'bold' }}>A Rh+</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>İkamet</span>
                        <span style={{ fontWeight: 'bold' }}>Alsancak / Konak</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>Rol</span>
                        <span style={{ fontWeight: 'bold', color: '#FFD700' }}>Sistem Mimarı</span>
                    </div>
                </div>

                {/* Scan Line Effect */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px', // Thin line
                    background: 'rgba(0, 240, 255, 0.5)',
                    boxShadow: '0 0 15px #00F0FF',
                    animation: 'scanCard 3s linear infinite',
                    pointerEvents: 'none'
                }}></div>

                <style>{`
                    @keyframes scanCard {
                        0% { top: 0; opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `}</style>
            </div>
        </div>
    );
};

const StatBox = ({ label, value, color }) => (
    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', borderLeft: `2px solid ${color}` }}>
        <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>{label}</div>
        <div style={{ fontWeight: 'bold', color: color, fontSize: '14px' }}>{value}</div>
    </div>
);

export default ProfileModal;
