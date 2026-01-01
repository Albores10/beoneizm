import React, { useState, useEffect } from 'react';
import SystemModule from '../components/UI/SystemModule';
import { useToast } from '../components/UI/ToastManager';

const txHistory = [
    { id: 1, title: 'Kira Ödemesi', desc: 'BeOne Konut #145', amount: '-4,250 ₺', type: 'out', date: 'Bugün, 09:42' },
    { id: 2, title: 'Meclis Katılımı', desc: 'Oylama Ödülü', amount: '+250 IZM', type: 'in', date: 'Dün, 14:15' },
    { id: 3, title: 'Ulaşım', desc: 'İzmir Metro', amount: '-15.50 ₺', type: 'out', date: 'Dün, 08:30' },
];

const Wallet = () => {
    const { addToast } = useToast();
    const [balance, setBalance] = useState(14250.50);
    const [showSendModal, setShowSendModal] = useState(false);

    // Mock Send Logic
    const handleSend = (e) => {
        e.preventDefault();
        const amount = parseFloat(e.target.amount.value);
        if (amount > balance) {
            addToast('Yetersiz bakiye!', 'error');
            return;
        }
        setBalance(prev => prev - amount);
        setShowSendModal(false);
        addToast(`Başarıyla gönderildi: ₺${amount}`, 'success');
    };

    return (
        <div style={{ padding: '20px', paddingBottom: '120px' }}>

            {/* Header / Card */}
            <div className="glass-panel" style={{
                padding: '24px',
                background: 'linear-gradient(135deg, rgba(2,6,23,0.9), rgba(15,23,42,0.9))',
                border: '1px solid var(--color-primary)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)',
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px', background: 'var(--color-primary)', opacity: '0.1', borderRadius: '50%', filter: 'blur(40px)' }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
                    <div>
                        <div style={{ fontSize: '12px', color: 'var(--color-primary)', fontFamily: 'monospace', letterSpacing: '2px' }}>IZM CÜZDAN</div>
                        <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginTop: '8px' }}>
                            ₺ {balance.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                        </div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>≈ 412.50 USD</div>
                    </div>
                    <div style={{ padding: '8px 12px', background: 'rgba(74, 222, 128, 0.2)', color: '#4ade80', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold' }}>
                        +5.4%
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => setShowSendModal(true)} style={{ flex: 1, padding: '12px', background: 'var(--color-primary)', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', color: '#000' }}>
                        GÖNDER ↗
                    </button>
                    <button style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', color: 'white' }}>
                        İLAŞ AL +
                    </button>
                </div>
            </div>

            {/* Simulated Graph Concept */}
            <SystemModule title="VARLIK ANALİZİ" status="UPDATE" accentColor="var(--color-secondary)">
                <div style={{ height: '150px', display: 'flex', alignItems: 'end', gap: '4px', paddingBottom: '10px' }}>
                    {/* SVG Graph Placeholder */}
                    <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0.5 }} />
                                <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 0 }} />
                            </linearGradient>
                        </defs>
                        <path d="M0,80 Q20,60 40,70 T80,50 T120,40 T160,60 T200,20 T240,30 T280,10 V100 H0 Z" fill="url(#grad1)" />
                        <path d="M0,80 Q20,60 40,70 T80,50 T120,40 T160,60 T200,20 T240,30 T280,10" fill="none" stroke="var(--color-secondary)" strokeWidth="2" />

                        {/* Data Points */}
                        <circle cx="200" cy="20" r="3" fill="white" />
                        <circle cx="280" cy="10" r="3" fill="white" />
                    </svg>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--color-text-dim)', fontFamily: 'monospace' }}>
                    <span>09:00</span>
                    <span>12:00</span>
                    <span>15:00</span>
                    <span>ŞİMDİ</span>
                </div>
            </SystemModule>

            {/* Transactions */}
            <h3 style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', marginLeft: '4px' }}>SON İŞLEMLER</h3>
            {txHistory.map(tx => (
                <TxItem key={tx.id} tx={tx} />
            ))}

            {/* Send Modal */}
            {showSendModal && (
                <div style={{
                    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
                    zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
                }}>
                    <div className="glass-panel" style={{ width: '100%', maxWidth: '350px', padding: '24px', border: '1px solid var(--color-primary)' }}>
                        <h2 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--color-primary)' }}>PARA GÖNDER</h2>
                        <form onSubmit={handleSend}>
                            <input type="text" placeholder="IBAN / Cüzdan Adresi" style={{
                                width: '100%', padding: '12px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px'
                            }} />
                            <input name="amount" type="number" placeholder="Tutar (₺)" style={{
                                width: '100%', padding: '12px', marginBottom: '20px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px'
                            }} />
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" onClick={() => setShowSendModal(false)} style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '8px', cursor: 'pointer' }}>İPTAL</button>
                                <button type="submit" style={{ flex: 1, padding: '12px', background: 'var(--color-primary)', border: 'none', color: 'black', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>GÖNDER</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

const TxItem = ({ tx }) => (
    <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px', background: 'var(--color-bg-card)', borderRadius: '12px',
        marginBottom: '12px', borderLeft: `3px solid ${tx.type === 'in' ? 'var(--color-success)' : 'var(--color-text-dim)'}`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: tx.type === 'in' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px'
            }}>
                {tx.type === 'in' ? '↓' : '↑'}
            </div>
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{tx.title}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{tx.desc}</div>
            </div>
        </div>
        <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 'bold', color: tx.type === 'in' ? 'var(--color-success)' : 'white' }}>{tx.amount}</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>{tx.date}</div>
        </div>
    </div>
);

export default Wallet;
