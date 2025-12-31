import React, { useState } from 'react';

const Governance = () => {
    const [voted, setVoted] = useState(false);

    return (
        <div style={{ padding: '0 20px' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>BeOne Meclis</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Demokrasinin Oyunu</p>
            </div>

            {/* Power Bar */}
            <div className="glass-panel" style={{ padding: '20px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px', fontWeight: 'bold' }}>
                    <span style={{ color: 'var(--color-primary)' }}>VARLIK (35)</span>
                    <span style={{ color: 'var(--color-secondary)' }}>LİYAKAT (42)</span>
                </div>

                {/* Bar Container */}
                <div style={{ height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', display: 'flex', position: 'relative' }}>
                    {/* Blue Part */}
                    <div style={{ width: '45%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }}></div>
                    {/* Gold Part */}
                    <div style={{ width: '55%', background: 'var(--color-secondary)', boxShadow: '0 0 10px var(--color-secondary)' }}></div>

                    {/* Divider/Indicator */}
                    <div style={{
                        position: 'absolute',
                        left: '45%',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'white',
                        transform: 'skewX(-20deg)',
                        boxShadow: '0 0 10px white'
                    }}></div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '14px', fontWeight: 'bold' }}>
                    OY GÜCÜ: <span style={{ fontSize: '18px' }}>77</span>
                </div>
            </div>

            {/* Active Proposal */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', position: 'relative', minHeight: '400px' }}>
                {/* Map Background Placeholder */}
                <div style={{
                    height: '200px',
                    background: 'url("https://placehold.co/600x400/1a1a1a/FFF?text=Map+Location") center/cover',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                        color: 'black',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        boxShadow: '0 4px 10px rgba(255, 215, 0, 0.4)'
                    }}>
                        ✨ 3x YEREL GÜÇ
                    </div>
                </div>

                <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '20px', margin: '0 0 12px 0' }}>Urla Yeşil Enerji Parkı</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.5' }}>
                        Urla İskele bölgesine 500kW kapasiteli yeni güneş enerji panelleri ve yürüyüş yolu yapılması teklifi.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                        <button style={{
                            flex: 1,
                            padding: '16px',
                            background: 'rgba(239, 68, 68, 0.2)',
                            border: '1px solid #ef4444',
                            color: '#ef4444',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            HAYIR
                        </button>
                        <button
                            onClick={() => setVoted(true)}
                            style={{
                                flex: 1,
                                padding: '16px',
                                background: voted ? 'var(--color-secondary)' : 'rgba(74, 222, 128, 0.2)',
                                border: voted ? 'none' : '1px solid #4ade80',
                                color: voted ? 'black' : '#4ade80',
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}>
                            {voted ? 'ONAYLANDI ✓' : 'EVET (Swipe)'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Governance;
