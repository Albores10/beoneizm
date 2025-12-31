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
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)',
            animation: 'fadeIn 0.2s ease'
        }} onClick={onClose}>
            <div
                className="glass-panel"
                style={{ width: '90%', maxWidth: '400px', padding: '30px', position: 'relative', textAlign: 'center' }}
                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
            >
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF9966, #FF5E62)',
                    margin: '0 auto 20px auto',
                    border: '4px solid white',
                    boxShadow: '0 0 30px rgba(255, 94, 98, 0.4)'
                }}></div>

                <h2 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>Şafak Birol</h2>
                <div style={{ fontSize: '14px', color: '#00F0FF', marginBottom: '24px', letterSpacing: '2px' }}>MAHALLE HAMİSİ</div>

                {/* Level / XP Bar */}
                <div style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                        <span>Level 5</span>
                        <span>Level 6</span>
                    </div>
                    <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #00C6FF, #007AFF)' }}></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '10px', marginTop: '4px', color: 'rgba(255,255,255,0.5)' }}>3,450 / 4,000 XP</div>
                </div>

                {/* Badges Grid */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                    {['🌱', '🗳️', '🏙️'].map((badge, i) => (
                        <div key={i} style={{
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            {badge}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '30px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                    Sonraki seviye ödülü: <br />
                    <span style={{ color: '#FFD700' }}>+0.05 IZM Hissesi</span>
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default ProfileModal;
