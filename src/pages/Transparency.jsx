import React from 'react';

const Transparency = () => {
    const transactions = [
        { id: '0x82...1A', desc: 'Urla Güneş Tarlası Panel Alımı', amount: '500.000 TL', verified: true },
        { id: '0x34...B2', desc: 'BeOneSu Otomat Bakımı #12', amount: '2.500 TL', verified: true },
        { id: '0x91...C4', desc: 'Konut Fonu Kâr Payı Dağıtımı', amount: '125.000 TL', verified: true },
        { id: '0x11...F9', desc: 'Buca Pazar Yeri Lojistik', amount: '12.400 TL', verified: true },
    ];

    return (
        <div style={{ padding: '20px 20px 100px 20px' }}>
            <h2 style={{ marginBottom: '20px' }}>Şeffaflık Defteri</h2>

            {/* Glass Ledger Container */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 0 30px rgba(0, 122, 255, 0.1)',
                minHeight: '400px',
                fontFamily: 'monospace'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '12px'
                }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>TOPLAM İŞLEM HACMİ</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-secondary)' }}>₺ 42,592,100</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {transactions.map((tx, i) => (
                        <div key={i} style={{
                            padding: '12px',
                            background: 'rgba(0, 122, 255, 0.05)',
                            borderLeft: '2px solid var(--color-primary)',
                            fontSize: '13px',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        // hover effect via css in real app
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <span style={{ color: 'var(--color-primary)' }}>{tx.id}</span>
                                <span style={{ fontWeight: 'bold' }}>{tx.amount}</span>
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>{tx.desc}</div>
                            <div style={{
                                fontSize: '10px',
                                color: '#4ade80',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                {tx.verified && '✓ BLOKZİNCİR ÜZERİNDE DOĞRULANDI'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Matrix Code Effect Decoration */}
                <div style={{
                    position: 'absolute',
                    top: 0, right: 10, bottom: 0,
                    width: '20px',
                    opacity: 0.2,
                    overflow: 'hidden',
                    fontSize: '10px',
                    lineHeight: '10px',
                    color: '#4ade80',
                    writingMode: 'vertical-rl',
                    textAlign: 'center'
                }}>
                    10101010010101110101001
                </div>
            </div>
        </div>
    );
};

export default Transparency;
