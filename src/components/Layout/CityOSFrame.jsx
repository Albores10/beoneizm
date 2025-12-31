import React, { useState, useEffect } from 'react';

const CityOSFrame = ({ children, mode }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    };

    const isClassic = mode === 'classic';
    const borderColor = isClassic ? '#1a1a1a' : '#00F0FF';
    const textColor = isClassic ? '#1a1a1a' : '#00F0FF';

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // Allow clicks to pass through frame content
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Top Status Bar (HUD) */}
            <div style={{
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: isClassic ? 'rgba(255,255,255,0.8)' : 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
                borderBottom: isClassic ? '1px solid #ddd' : 'none',
                pointerEvents: 'auto'
            }}>
                {/* Left: System Status */}
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 'bold', color: textColor, opacity: 0.8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '8px', height: '8px', background: '#00ff00', borderRadius: '50%', boxShadow: '0 0 5px #00ff00' }}></span>
                        ONLINE
                    </div>
                    <div>NET: 5G++</div>
                </div>

                {/* Center: System Title */}
                <div style={{
                    fontSize: '14px',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    color: isClassic ? '#333' : 'white',
                    textShadow: isClassic ? 'none' : '0 0 10px rgba(255,255,255,0.5)'
                }}>
                    BEONE CITY OS <span style={{ fontSize: '10px', opacity: 0.7 }}>v2.0</span>
                </div>

                {/* Right: Environment */}
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 'bold', color: textColor, opacity: 0.8 }}>
                    <div>☀️ 24°C</div>
                    <div>{formatTime(time)}</div>
                </div>
            </div>

            {/* System Notification Ticker (New) */}
            <div style={{
                background: isClassic ? '#f0f0f0' : 'rgba(0, 240, 255, 0.1)',
                borderBottom: isClassic ? '1px solid #ddd' : '1px solid rgba(0, 240, 255, 0.2)',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                pointerEvents: 'none'
            }}>
                <div style={{
                    whiteSpace: 'nowrap',
                    animation: 'ticker 20s linear infinite',
                    fontSize: '10px',
                    color: isClassic ? '#555' : '#00F0FF',
                    paddingLeft: '100%'
                }}>
                    ⚡ SİSTEM: GÜNEŞ ENERJİSİ ÜRETİMİ %12 ARTTI • 💧 SU TASARRUFU HEDEFİNE ULAŞILDI • 📢 BEONE MECLİS YENİ OYLAMA: "PARK PROJESİ" • 🚀 E-VTOL AĞI OPTİMİZE EDİLDİ
                </div>
                <style>{`
                    @keyframes ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                `}</style>
            </div>

            {/* Decorative Corners (Tech Frame) */}
            {!isClassic && (
                <>
                    {/* Top Left Corner */}
                    <div style={{ position: 'absolute', top: '50px', left: '20px', width: '20px', height: '20px', borderTop: `2px solid ${borderColor}`, borderLeft: `2px solid ${borderColor}` }}></div>
                    {/* Top Right Corner */}
                    <div style={{ position: 'absolute', top: '50px', right: '20px', width: '20px', height: '20px', borderTop: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}` }}></div>
                    {/* Bottom Left Corner (above nav) */}
                    <div style={{ position: 'absolute', bottom: '100px', left: '20px', width: '20px', height: '20px', borderBottom: `2px solid ${borderColor}`, borderLeft: `2px solid ${borderColor}` }}></div>
                    {/* Bottom Right Corner (above nav) */}
                    <div style={{ position: 'absolute', bottom: '100px', right: '20px', width: '20px', height: '20px', borderBottom: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}` }}></div>
                </>
            )}

            {/* Main Content Area Passthrough */}
            <div style={{ flex: 1, position: 'relative', pointerEvents: 'auto' }}>
                {children}
            </div>
        </div>
    );
};

export default CityOSFrame;
