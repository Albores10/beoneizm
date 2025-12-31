import React, { useState, useEffect } from 'react';
import { useEmergency } from '../../context/EmergencyContext'; // Import Context

const CityOSFrame = ({ children, mode }) => {
    const { isEmergency, toggleEmergency } = useEmergency(); // Use Context
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    };

    const isClassic = mode === 'classic';
    // Dynamic Colors based on Emergency
    const borderColor = isEmergency ? '#ef4444' : (isClassic ? '#1a1a1a' : '#00F0FF');
    const textColor = isEmergency ? '#fee2e2' : (isClassic ? '#1a1a1a' : '#00F0FF');

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
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
                background: isEmergency ? 'rgba(20, 0, 0, 0.9)' : (isClassic ? 'rgba(255,255,255,0.8)' : 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%)'),
                borderBottom: isEmergency ? '2px solid #ef4444' : (isClassic ? '1px solid #ddd' : 'none'),
                pointerEvents: 'auto',
                transition: 'all 0.3s ease'
            }}>
                {/* Left: System Status */}
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 'bold', color: textColor, opacity: 0.8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            background: isEmergency ? '#ef4444' : '#00ff00',
                            borderRadius: '50%',
                            boxShadow: isEmergency ? '0 0 10px red' : '0 0 5px #00ff00',
                            animation: isEmergency ? 'pulse 0.5s infinite' : 'none'
                        }}></span>
                        {isEmergency ? 'RED ALERT' : 'ONLINE'}
                    </div>
                    <div>{isEmergency ? 'ERR: CRITICAL' : 'NET: 5G++'}</div>
                </div>

                {/* Center: System Title */}
                <div style={{
                    fontSize: '14px',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    color: isEmergency ? '#ef4444' : (isClassic ? '#333' : 'white'),
                    textShadow: isEmergency ? '0 0 10px red' : (isClassic ? 'none' : '0 0 10px rgba(255,255,255,0.5)')
                }}>
                    BEONE CITY OS <span style={{ fontSize: '10px', opacity: 0.7 }}>v2.0</span>
                </div>

                {/* Right: Environment & SOS */}
                <div style={{ display: 'flex', items: 'center', gap: '16px' }}>
                    <button
                        onClick={toggleEmergency}
                        style={{
                            background: isEmergency ? 'white' : 'rgba(239, 68, 68, 0.2)',
                            color: isEmergency ? '#ef4444' : '#ef4444',
                            border: '1px solid #ef4444',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontWeight: 'bold',
                            fontSize: '10px',
                            cursor: 'pointer',
                            animation: isEmergency ? 'pulse 1s infinite' : 'none'
                        }}
                    >
                        {isEmergency ? 'DE-ESCALATE' : 'SOS'}
                    </button>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', fontWeight: 'bold', color: textColor, opacity: 0.8, alignItems: 'center' }}>
                        <div>{isEmergency ? '🔥 45°C' : '☀️ 24°C'}</div>
                        <div>{formatTime(time)}</div>
                    </div>
                </div>
            </div>

            {/* System Notification Ticker */}
            <div style={{
                background: isEmergency ? '#7f1d1d' : (isClassic ? '#f0f0f0' : 'rgba(0, 240, 255, 0.1)'),
                borderBottom: isEmergency ? '1px solid #ef4444' : (isClassic ? '1px solid #ddd' : '1px solid rgba(0, 240, 255, 0.2)'),
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
                    fontWeight: isEmergency ? 'bold' : 'normal',
                    color: isEmergency ? 'white' : (isClassic ? '#555' : '#00F0FF'),
                    paddingLeft: '100%'
                }}>
                    {isEmergency
                        ? "🚨 ACİL DURUM: İZMİR GENELİNDE DEPREM RİSKİ ALGILANDI • LÜTFEN GÜVENLİ BÖLGELERE GİDİNİZ • SAHİL ŞERİDİNDEN UZAKLAŞIN • ACİL EKİPLER YOLDA"
                        : "⚡ SİSTEM: GÜNEŞ ENERJİSİ ÜRETİMİ %12 ARTTI • 💧 SU TASARRUFU HEDEFİNE ULAŞILDI • 📢 BEONE MECLİS YENİ OYLAMA: 'PARK PROJESİ'"}
                </div>
            </div>

            {/* Decorative Corners (Tech Frame) */}
            {!isClassic && (
                <>
                    <div style={{ position: 'absolute', top: '50px', left: '20px', width: '20px', height: '20px', borderTop: `2px solid ${borderColor}`, borderLeft: `2px solid ${borderColor}` }}></div>
                    <div style={{ position: 'absolute', top: '50px', right: '20px', width: '20px', height: '20px', borderTop: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}` }}></div>
                    <div style={{ position: 'absolute', bottom: '100px', left: '20px', width: '20px', height: '20px', borderBottom: `2px solid ${borderColor}`, borderLeft: `2px solid ${borderColor}` }}></div>
                    <div style={{ position: 'absolute', bottom: '100px', right: '20px', width: '20px', height: '20px', borderBottom: `2px solid ${borderColor}`, borderRight: `2px solid ${borderColor}` }}></div>
                </>
            )}

            {/* Main Content Area Passthrough */}
            <div style={{ flex: 1, position: 'relative', pointerEvents: 'auto' }}>
                {children}
            </div>

            {/* Global Emergency Overlay (Red tint) */}
            {isEmergency && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, transparent 50%, rgba(255,0,0,0.3) 100%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>
            )}
        </div>
    );
};

export default CityOSFrame;
