import React, { useState } from 'react';

const Wallet = () => {
    const [balance, setBalance] = useState(14250.50);

    const transactions = [
        { id: 1, type: 'in', title: 'Kira Geliri (A Blok)', amount: '+ 1,250.00', date: 'Bugün, 09:41' },
        { id: 2, type: 'out', title: 'Su Faturası Ödeme', amount: '- 45.00', date: 'Dün, 14:20' },
        { id: 3, type: 'in', title: 'Geri Dönüşüm Ödülü', amount: '+ 12.50', date: '29 Ara, 18:30' },
        { id: 4, type: 'in', title: 'Staking Getirisi', amount: '+ 0.45', date: '28 Ara, 00:00' },
    ];

    return (
        <div style={{ padding: '0 20px 20px 20px' }}>
            {/* Header */}
            <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>TOPLAM VARLIK DEĞERİ</div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', textShadow: '0 0 20px rgba(0, 122, 255, 0.5)' }}>
                    ₺ {balance.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                </div>
                <div style={{ color: '#4ade80', fontSize: '14px', marginTop: '4px' }}>+ %4.2 (Son 24s)</div>

                {/* Decorative Chart Line */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 122, 255, 0.2) 50%, transparent 100%)',
                    clipPath: 'polygon(0% 100%, 0% 60%, 20% 70%, 40% 40%, 60% 60%, 80% 20%, 100% 50%, 100% 100%)'
                }}></div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <button style={{
                    flex: 1, padding: '16px', borderRadius: '16px', border: 'none',
                    background: 'linear-gradient(135deg, #007AFF 0%, #00C6FF 100%)',
                    color: 'white', fontWeight: 'bold', fontSize: '16px',
                    boxShadow: '0 4px 15px rgba(0, 122, 255, 0.3)', cursor: 'pointer'
                }}>
                    GÖNDER
                </button>
                <button style={{
                    flex: 1, padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer'
                }}>
                    AL
                </button>
            </div>

            {/* Transactions */}
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Son İşlemler</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {transactions.map(tx => (
                    <div key={tx.id} className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '12px',
                                background: tx.type === 'in' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)',
                                color: tx.type === 'in' ? '#4ade80' : '#f87171',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'
                            }}>
                                {tx.type === 'in' ? '↓' : '↑'}
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{tx.title}</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{tx.date}</div>
                            </div>
                        </div>
                        <div style={{ fontWeight: 'bold', color: tx.type === 'in' ? '#4ade80' : 'white' }}>
                            {tx.amount}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wallet;
