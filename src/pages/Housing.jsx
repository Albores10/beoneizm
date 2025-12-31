import React, { useState } from 'react';

const Housing = () => {
    const [animating, setAnimating] = useState(false);
    const [bricks, setBricks] = useState(127);

    const handlePayRent = () => {
        if (animating) return;
        setAnimating(true);

        // Simulate animation duration
        setTimeout(() => {
            setBricks(prev => prev + 5);
            setAnimating(false);
        }, 2000); // 2 seconds animation
    };

    return (
        <div style={{ padding: '0 20px', height: '100%', overflow: 'hidden', position: 'relative' }}>
            {/* Header */}
            <div className="glass-panel" style={{ padding: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: '18px' }}>BeOne Konut</h2>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Barınma Modülü</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-secondary)' }}>{bricks}</div>
                    <div style={{ fontSize: '10px' }}>TUĞLA</div>
                </div>
            </div>

            {/* Story/Visual Area */}
            <div style={{
                height: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px'
            }}>
                {/* House Illustration (CSS Shapes) */}
                <div style={{
                    width: '200px',
                    height: '240px',
                    background: 'linear-gradient(to bottom, #2c3e50, #000000)',
                    position: 'relative',
                    borderRadius: '8px',
                    border: '2px solid rgba(255,255,255,0.1)',
                    zIndex: 1
                }}>
                    {/* Roof */}
                    <div style={{
                        position: 'absolute',
                        top: '-60px',
                        left: '-10px',
                        width: '0',
                        height: '0',
                        borderLeft: '110px solid transparent',
                        borderRight: '110px solid transparent',
                        borderBottom: '60px solid #2c3e50',
                    }}></div>

                    {/* Windows */}
                    <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 100, 0.4)', borderRadius: '4px', boxShadow: '0 0 15px rgba(255,255,100,0.2)' }}></div>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 100, 0.1)', borderRadius: '4px' }}></div>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 100, 0.6)', borderRadius: '4px', boxShadow: '0 0 20px rgba(255,255,100,0.3)' }}></div>
                        <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 100, 0.2)', borderRadius: '4px' }}></div>
                    </div>

                    {/* Bricks Overlay (Progress) */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: `${(bricks / 1000) * 100}%`, // Example progress
                        background: 'linear-gradient(to top, var(--color-secondary), transparent)',
                        opacity: 0.3,
                        transition: 'height 1s ease'
                    }}></div>
                </div>

                {/* Animation Elements */}
                {animating && (
                    <>
                        {/* Money Flying Up */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontSize: '32px',
                                animation: 'flyUp 1s ease forwards'
                            }}
                        >
                            💸
                        </div>
                        {/* Gold Brick Formation */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '32px',
                                opacity: 0,
                                animation: 'formBrick 1s ease 1s forwards'
                            }}
                        >
                            🧱
                        </div>

                        <style>
                            {`
                  @keyframes flyUp {
                    0% { bottom: 20px; opacity: 1; transform: translateX(-50%) scale(1); }
                    80% { bottom: 60%; opacity: 0; transform: translateX(-50%) scale(0.5); }
                    100% { bottom: 70%; opacity: 0; }
                  }
                  @keyframes formBrick {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
                    50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(100px, 50px) scale(0.5); } /* Move to house */
                  }
                `}
                        </style>
                    </>
                )}

                {/* Feedback Message */}
                {animating && (
                    <div style={{
                        position: 'absolute',
                        top: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(0,0,0,0.8)',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        border: '1px solid var(--color-secondary)',
                        color: 'var(--color-secondary)',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        zIndex: 10,
                        animation: 'fadeInOut 2s ease'
                    }}>
                        +5 TUĞLA KAZANILDI!
                    </div>
                )}
            </div>

            {/* Pay Button */}
            <div style={{ textAlign: 'center' }}>
                <button
                    onClick={handlePayRent}
                    disabled={animating}
                    style={{
                        background: 'linear-gradient(90deg, var(--color-primary), #00C6FF)',
                        border: 'none',
                        padding: '16px 40px',
                        borderRadius: '30px',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 25px rgba(0, 122, 255, 0.5)',
                        cursor: animating ? 'default' : 'pointer',
                        transform: animating ? 'scale(0.95)' : 'scale(1)',
                        transition: 'all 0.2s',
                        opacity: animating ? 0.8 : 1
                    }}
                >
                    {animating ? 'İşleniyor...' : 'Kira Öde (₺12.500)'}
                </button>
                <div style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                    Ödemenin %20'si sana iade edilir.
                </div>
            </div>
        </div>
    );
};

export default Housing;
