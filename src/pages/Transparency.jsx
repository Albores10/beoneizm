import React, { useState, useEffect } from 'react';

const Transparency = () => {
    const [txs, setTxs] = useState([
        { id: 1, hash: '0x3a...1f9a', amount: '12,500 ₺', type: 'Kira Geliri', time: '10:42' },
        { id: 2, hash: '0x8b...2c4d', amount: '450 ₺', type: 'Su Faturası', time: '09:15' },
        { id: 3, hash: '0x1c...9e3f', amount: '2,500 IZM', type: 'Meclis Ödülü', time: 'Dün' },
    ]);

    // Live Data Stream Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            const newTx = {
                id: Date.now(),
                hash: '0x' + Math.random().toString(16).substr(2, 8),
                amount: Math.floor(Math.random() * 1000) + ' ₺',
                type: Math.random() > 0.5 ? 'Vergi Ödemesi' : 'Park Geliri',
                time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
            };
            setTxs(prev => [newTx, ...prev].slice(0, 8)); // Keep last 8
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ padding: '0 20px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Şeffaflık <span style={{ color: '#a855f7' }}>Ağı</span></h1>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>TOPLAM HACİM</div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#a855f7' }}>₺ 42.5M</div>
                </div>
                <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>BLOK YÜKSEKLİĞİ</div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'monospace' }}>#8,192,442</div>
                </div>
            </div>

            {/* Matrix Rain / Live Feed */}
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{
                    background: 'rgba(168, 85, 247, 0.1)',
                    padding: '12px',
                    borderBottom: '1px solid rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span style={{ fontWeight: 'bold', color: '#a855f7' }}>CANLI BLOK ZİNCİRİ AKIŞI</span>
                    <span style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '50%', boxShadow: '0 0 10px #a855f7', animation: 'blink 1s infinite' }}></span>
                </div>

                <div style={{ padding: '0 16px' }}>
                    {txs.map((tx, index) => (
                        <div key={tx.id} style={{
                            padding: '16px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            animation: index === 0 ? 'slideInNew 0.5s ease' : 'none',
                            opacity: 1 - (index * 0.1) // Fade out older items
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ fontFamily: 'monospace', color: '#a855f7', fontSize: '12px' }}>{tx.hash}</div>
                                <div style={{ fontSize: '14px' }}>{tx.type}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 'bold' }}>{tx.amount}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{tx.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                @keyframes slideInNew {
                    from { transform: translateX(-20px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Transparency;
