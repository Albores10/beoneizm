import React, { useState } from 'react';
import { useToast } from '../components/UI/ToastManager';

const Operation = () => {
    const { addToast } = useToast();
    const [scanned, setScanned] = useState(false);

    const handleBuy = (item) => {
        addToast(`${item} Satın Alındı!`, "success");
        addToast("-75 IZM Coin", "error"); // Red toast for spending
    };

    const handleScan = () => {
        addToast("QR Tarayıcı Başlatılıyor...", "info");
        setTimeout(() => {
            setScanned(true);
            addToast("Ürün Bulundu: Organik İzmir Domatesi", "success");
        }, 1500);
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '100px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>BeOne <span style={{ color: '#4ade80' }}>Pazar</span></h1>

            {/* QR Scanner Mock */}
            <div className="glass-panel" style={{ padding: '30px', textAlign: 'center', marginBottom: '24px', border: '1px dashed rgba(255,255,255,0.3)' }}>
                {scanned ? (
                    <div style={{ animation: 'popIn 0.3s ease' }}>
                        <div style={{ fontSize: '40px', marginBottom: '10px' }}>🍅</div>
                        <h3>Organik Domates</h3>
                        <p style={{ color: '#4ade80', fontWeight: 'bold' }}>₺ 35.00 / kg</p>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Üretici: Menemen Koop.</div>
                    </div>
                ) : (
                    <>
                        <div style={{ fontSize: '40px', marginBottom: '10px', opacity: 0.5 }}>📷</div>
                        <p style={{ marginBottom: '16px' }}>Fiyat şeffaflığı için ürün barkodu okutun.</p>
                        <button
                            onClick={handleScan}
                            style={{ padding: '8px 24px', background: 'white', color: 'black', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            TARAYICIYI AÇ
                        </button>
                    </>
                )}
            </div>

            {/* Marketplace Grid */}
            <h2 style={{ fontSize: '18px', marginBottom: '12px' }}>Yerel Ürünler (Kooperatif)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <ProductCard
                    emoji="🫒"
                    title="Sızma Zeytinyağı"
                    price="250 ₺"
                    origin="Tire"
                    onBuy={() => handleBuy("Zeytinyağı")}
                />
                <ProductCard
                    emoji="🥛"
                    title="Günlük Süt"
                    price="45 ₺"
                    origin="Ödemiş"
                    onBuy={() => handleBuy("Süt")}
                />
                <ProductCard
                    emoji="🥖"
                    title="Köy Ekmeği"
                    price="20 ₺"
                    origin="Seferihisar"
                    onBuy={() => handleBuy("Ekmek")}
                />
                <ProductCard
                    emoji="🍯"
                    title="Çam Balı"
                    price="300 ₺"
                    origin="Bergama"
                    onBuy={() => handleBuy("Bal")}
                />
            </div>
            <style>{`
                @keyframes popIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

const ProductCard = ({ emoji, title, price, origin, onBuy }) => (
    <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '32px' }}>{emoji}</div>
        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>📍 {origin}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
            <div style={{ color: '#4ade80', fontWeight: 'bold' }}>{price}</div>
            <button
                onClick={onBuy}
                style={{
                    padding: '6px 12px',
                    background: 'rgba(74, 222, 128, 0.2)',
                    color: '#4ade80',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold'
                }}
            >
                AL
            </button>
        </div>
    </div>
);

export default Operation;
