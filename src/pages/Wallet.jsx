import React, { useState, useEffect } from 'react';
import { useToast } from '../components/UI/ToastManager';

const TxItem = ({ title, amount, date, icon, isIncome }) => (
    <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ fontSize: '20px' }}>{icon}</div>
        <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{date}</div>
        </div>
        <div style={{ fontWeight: 'bold', color: isIncome ? '#4ade80' : 'white' }}>{amount}</div>
    </div>
);

const Wallet = () => {
    const { addToast } = useToast();
    const [balance, setBalance] = useState(14500);
    const [showSendModal, setShowSendModal] = useState(false);
    const [sendAmount, setSendAmount] = useState('');

    useEffect(() => {
        console.log("Wallet Component Mounted");
    }, []);

    const handleSend = () => {
        const val = parseInt(sendAmount);
        if (!val || val <= 0) {
            addToast("Geçersiz miktar", "error");
            return;
        }
        if (val > balance) {
            addToast("Yetersiz Bakiye", "error");
            return;
        }

        setBalance(prev => prev - val);
        setShowSendModal(false);
        setSendAmount('');
        addToast(`${val} IZM Gönderildi!`, "success");
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Cüzdan</h1>

            {/* Card Visual */}
            <div style={{
                background: 'linear-gradient(135deg, #007AFF, #00C6FF)',
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '24px',
                boxShadow: '0 10px 30px rgba(0, 122, 255, 0.4)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>TOPLAM VARLIK</div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>₺ {balance.toLocaleString()}</div>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <button
                            onClick={() => setShowSendModal(true)}
                            style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            ↑ Gönder
                        </button>
                        <button onClick={() => addToast("Yükleme özelliği yakında!", "info")} style={{ flex: 1, padding: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                            ↓ Yükle
                        </button>
                    </div>
                </div>
                {/* Decoration */}
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
            </div>

            {/* Simple Coin Stats */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <div className="glass-panel" style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: 'bold' }}>I</div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>IZM Coin</div>
                        <div style={{ fontSize: '12px', color: '#4ade80' }}>$1.24 (+5%)</div>
                    </div>
                </div>
                {/* More tokens... */}
            </div>

            {/* Transaction History */}
            <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Son İşlemler</h3>
            <div className="glass-panel" style={{ padding: '0' }}>
                <TxItem title="Market Alışverişi" amount="- 345 ₺" date="Bugün" icon="🛒" />
                <TxItem title="Kira Geliri (Ege Apt)" amount="+ 12,500 ₺" date="Dün" icon="🏠" isIncome />
                <TxItem title="BeOne Meclis Ödülü" amount="+ 50 IZM" date="2 gün önce" icon="🎁" isIncome />
                <TxItem title="Ulaşım (Metro)" amount="- 15 ₺" date="2 gün önce" icon="🚇" />
            </div>

            {/* Send Modal Overlay */}
            {showSendModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.8)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div className="glass-panel" style={{ width: '100%', maxWidth: '320px', padding: '24px', background: '#0a192f' }}>
                        <h2 style={{ marginTop: 0 }}>Para Gönder</h2>
                        <input
                            type="number"
                            placeholder="Miktar (IZM)"
                            value={sendAmount}
                            onChange={(e) => setSendAmount(e.target.value)}
                            style={{ width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'white' }}
                        />
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setShowSendModal(false)} style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid #666', color: '#ccc', borderRadius: '8px', cursor: 'pointer' }}>İptal</button>
                            <button onClick={handleSend} style={{ flex: 1, padding: '12px', background: '#007AFF', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Gönder</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wallet;
