import React, { useEffect, useState } from 'react';

const Logistics = () => {
    // Simulate specific dark/neon mode for this page
    // In a real app we'd use a context/layout wrapper, here we just style inline style overrides or local state

    return (
        <div style={{
            padding: '20px 20px 100px 20px',
            minHeight: '100%',
            background: '#050A18', // Deep dark blue/black
            color: '#00F0FF', // Neon Cyan
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Grid Background Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                zIndex: 0,
                perspective: '500px',
                transform: 'rotateX(60deg) scale(1.5)'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: '24px',
                    marginBottom: '24px',
                    textShadow: '0 0 10px #00F0FF',
                    textAlign: 'center',
                    fontFamily: 'monospace'
                }}>
                    GÖKYÜZÜ KONTROL
                </h2>

                {/* Map Area */}
                <div style={{
                    height: '400px',
                    border: '1px solid #00F0FF',
                    borderRadius: '16px',
                    position: 'relative',
                    background: 'rgba(0, 240, 255, 0.05)',
                    overflow: 'hidden',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.2) inset'
                }}>
                    {/* Map Layers (Simplified) */}
                    <div style={{ opacity: 0.5, filter: 'grayscale(100%) invert(100%) blur(1px)', height: '100%', background: 'url("https://placehold.co/600x400/000/FFF?text=City+Map") center/cover' }}></div>

                    {/* Routes */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        {/* Path 1: Drone */}
                        <path d="M 50 350 Q 150 150 350 50" stroke="#39FF14" strokeWidth="2" fill="none" strokeDasharray="5,5">
                            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                        </path>
                        {/* Path 2: eVTOL */}
                        <path d="M 300 350 C 200 300 100 200 50 100" stroke="#00F0FF" strokeWidth="3" fill="none" />
                    </svg>

                    {/* Moving Object: eVTOL */}
                    <div style={{
                        position: 'absolute',
                        top: '100px',
                        left: '50px',
                        width: '40px',
                        height: '40px',
                        animation: 'flyRoute 10s linear infinite'
                    }}>
                        <div style={{ fontSize: '24px', transform: 'rotate(45deg)', filter: 'drop-shadow(0 0 5px #00F0FF)' }}>✈️</div>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '20px',
                            fontSize: '10px',
                            color: '#FFF',
                            background: 'rgba(0,0,0,0.8)',
                            padding: '2px 4px',
                            whiteSpace: 'nowrap',
                            border: '1px solid #00F0FF'
                        }}>
                            eVTOL-01 (Yolcu)
                        </div>
                    </div>

                    {/* Moving Object: Drone */}
                    <div style={{
                        position: 'absolute',
                        bottom: '50px',
                        left: '50px',
                        width: '20px',
                        height: '20px',
                        animation: 'flyDrone 8s linear infinite reverse'
                    }}>
                        <div style={{ fontSize: '18px', filter: 'drop-shadow(0 0 5px #39FF14)' }}>🚁</div>
                    </div>
                </div>

                {/* Status Panel */}
                <div style={{ marginTop: '20px' }}>
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid #39FF14', // Neon Green
                        padding: '16px',
                        borderRadius: '8px',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            background: '#39FF14',
                            borderRadius: '50%',
                            boxShadow: '0 0 10px #39FF14',
                            animation: 'pulse 1s infinite'
                        }}></div>
                        <div>
                            <div style={{ color: '#39FF14', fontSize: '12px', fontWeight: 'bold' }}>SİPARİŞ DURUMU</div>
                            <div style={{ color: '#FFF' }}>Paket Urla Sky-Port'a indi.</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ background: 'rgba(0,240,255,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,240,255,0.3)' }}>
                            <div style={{ fontSize: '12px', opacity: 0.7 }}>HAVA TRAFİĞİ</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>YOĞUN</div>
                        </div>
                        <div style={{ background: 'rgba(0,240,255,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(0,240,255,0.3)' }}>
                            <div style={{ fontSize: '12px', opacity: 0.7 }}>RÜZGAR</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>12 km/s KB</div>
                        </div>
                    </div>
                </div>

                <style>{`
          @keyframes flyRoute {
             0% { transform: translate(0, 0) }
             50% { transform: translate(250px, 200px) }
             100% { transform: translate(0, 0) }
          }
           @keyframes flyDrone {
             0% { transform: translate(0, 0) }
             100% { transform: translate(300px, -300px) }
          }
          @keyframes pulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}</style>
            </div>
        </div>
    );
};

export default Logistics;
