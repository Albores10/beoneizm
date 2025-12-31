import React, { useState, useEffect } from 'react';

const LoginScreen = ({ onLogin }) => {
    const [status, setStatus] = useState('BEKLEMEDE');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setStatus('BİYOMETRİK TARAMA BAŞLATILIYOR...');

        let p = 0;
        const interval = setInterval(() => {
            p += 2;
            setProgress(p);

            if (p === 30) setStatus('YÜZ TANINIYOR...');
            if (p === 60) setStatus('RETİNA DOĞRULANIYOR...');
            if (p === 80) setStatus('KİMLİK EŞLEŞTİRİLDİ');

            if (p >= 100) {
                clearInterval(interval);
                setStatus('ERİŞİM ONAYLANDI');
                setTimeout(onLogin, 800);
            }
        }, 30); // 1.5s total scan time approx

        return () => clearInterval(interval);
    }, [onLogin]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            color: '#00F0FF',
            fontFamily: 'monospace'
        }}>
            {/* Hexagon/Face Target Graphic */}
            <div style={{
                position: 'relative',
                width: '200px',
                height: '200px',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px'
            }}>
                {/* Rotating Rings */}
                <div style={{
                    position: 'absolute',
                    width: '180px',
                    height: '180px',
                    borderLeft: '2px solid #00F0FF',
                    borderRight: '2px solid #00F0FF',
                    borderRadius: '50%',
                    animation: 'spin 2s linear infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    width: '140px',
                    height: '140px',
                    borderTop: '2px solid #00F0FF',
                    borderBottom: '2px solid #00F0FF',
                    borderRadius: '50%',
                    animation: 'spinReverse 3s linear infinite'
                }}></div>

                {/* Face Placeholder */}
                <div style={{ fontSize: '60px', opacity: 0.8 }}>👤</div>

                {/* Scan Line */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#00F0FF',
                    boxShadow: '0 0 15px #00F0FF',
                    animation: 'scan 1.5s ease-in-out infinite'
                }}></div>
            </div>

            <h1 style={{ letterSpacing: '4px', marginBottom: '8px' }}>BeOne <span style={{ color: 'white' }}>İZMİR</span></h1>
            <div style={{ fontSize: '14px', marginBottom: '24px', color: progress === 100 ? '#4ade80' : '#00F0FF' }}>
                [{status}]
            </div>

            {/* Progress Bar */}
            <div style={{ width: '200px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                <div style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: progress === 100 ? '#4ade80' : '#00F0FF',
                    boxShadow: `0 0 10px ${progress === 100 ? '#4ade80' : '#00F0FF'}`,
                    transition: 'width 0.1s linear'
                }}></div>
            </div>

            <style>{`
                @keyframes spin { 100% { transform: rotate(360deg); } }
                @keyframes spinReverse { 100% { transform: rotate(-360deg); } }
                @keyframes scan {
                    0% { top: 0; opacity: 1; }
                    50% { top: 100%; opacity: 1; }
                    51% { top: 0; opacity: 0; }
                    100% { top: 0; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default LoginScreen;
