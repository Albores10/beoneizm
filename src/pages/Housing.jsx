import React, { useState } from 'react';
import { useToast } from '../components/UI/ToastManager';

const Housing = () => {
    const { addToast } = useToast();
    const [bricks, setBricks] = useState(12);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePayRent = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Simulate API call / Animation delay
        setTimeout(() => {
            setBricks(b => b + 1);
            setIsAnimating(false);
            addToast("Kira Ödendi! (1 Tuğla Eklendi)", "success");
            addToast("+50 XP / +10 IZM Coin", "info");
        }, 1500);
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>BeOne <span style={{ color: '#FFD700' }}>Konut</span></h1>

            {/* Gamification Panel */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'center', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>EV SAHİPLİĞİ YOLCULUĞUN</div>

                {/* Brick Grid */}
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px', minHeight: '60px' }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} style={{
                            width: '30px',
                            height: '15px',
                            background: i < bricks ? '#FFD700' : 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            border: i < bricks ? '1px solid #B8860B' : '1px solid rgba(255,255,255,0.2)',
                            transition: 'all 0.5s ease',
                            transform: (i === bricks - 1 && isAnimating) ? 'scale(1.5)' : 'scale(1)',
                            boxShadow: i < bricks ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none'
                        }}></div>
                    ))}
                </div>

                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '4px' }}>%{(bricks / 100 * 10).toFixed(1)}</div>
                <div style={{ fontSize: '12px', color: '#4ade80' }}>HİSSE SAHİBİ (Hedef: %1)</div>

                {/* Coin Animation Container */}
                {isAnimating && (
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '40px',
                        animation: 'flyUp 1s ease-out forwards',
                        pointerEvents: 'none',
                        zIndex: 10
                    }}>
                        🧱
                    </div>
                )}
            </div>

            {/* Action Card */}
            <div className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>SONRAKİ ÖDEME</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>1 Kasım 2024</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>TUTAR</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>₺ 12,500</div>
                    </div>
                </div>

                <button
                    onClick={handlePayRent}
                    style={{
                        width: '100%',
                        padding: '16px',
                        background: isAnimating ? 'rgba(255, 215, 0, 0.3)' : 'linear-gradient(90deg, #FFD700, #FFA500)',
                        border: 'none',
                        borderRadius: '12px',
                        color: isAnimating ? 'white' : 'black',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: isAnimating ? 'default' : 'pointer',
                        transform: isAnimating ? 'scale(0.98)' : 'scale(1)',
                        transition: 'all 0.2s',
                        boxShadow: isAnimating ? 'none' : '0 4px 15px rgba(255, 215, 0, 0.3)'
                    }}
                >
                    {isAnimating ? 'ÖDENİYOR...' : 'KİRA ÖDE & TUĞLA KAZAN'}
                </button>
            </div>

            <style>{`
                @keyframes flyUp {
                    0% { opacity: 1; transform: translate(-50%, 20px) scale(0.5); }
                    50% { transform: translate(-50%, -100px) scale(1.2); }
                    100% { opacity: 0; transform: translate(-50%, -150px) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Housing;
