import React, { useState } from 'react';
import { useToast } from '../components/UI/ToastManager';

const AssetDetail = ({ assetId, onClose }) => {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('genel');

    const assetData = {
        title: "Kira Kumbarası (A Blok)",
        location: "Mavişehir, İzmir",
        value: "₺ 12,500,000",
        sharePrice: "₺ 100",
        ytd: "+24%",
        occupancy: "%98",
        nextPayout: "1 Kasım 2025"
    };

    const handleBuyShare = () => {
        addToast("Hise Alım Emri İletildi", "success");
        addToast("- 100 IZM Cüzdandan düşüldü", "info");
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(5, 10, 24, 0.95)',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.3s ease'
        }}>
            {/* Header / Immersive Image */}
            <div style={{
                height: '250px',
                background: 'url(https://placehold.co/800x400/1a2a4a/FFF?text=Luxury+Housing) center/cover',
                position: 'relative'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute', top: '20px', left: '20px',
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white',
                        fontSize: '24px', cursor: 'pointer', backdropFilter: 'blur(5px)'
                    }}
                >
                    ←
                </button>
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%',
                    background: 'linear-gradient(to top, rgba(5,10,24,1), transparent)',
                    padding: '20px'
                }}>
                    <div style={{ color: '#00F0FF', fontSize: '12px', fontWeight: 'bold' }}>KONUT FONU #8821</div>
                    <h1 style={{ margin: 0, fontSize: '28px' }}>{assetData.title}</h1>
                    <div style={{ fontSize: '14px', opacity: 0.8 }}>📍 {assetData.location}</div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', padding: '0 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {['Genel', 'Finans', 'Belgeler'].map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        style={{
                            padding: '16px 20px',
                            color: activeTab === tab.toLowerCase() ? '#00F0FF' : 'rgba(255,255,255,0.5)',
                            borderBottom: activeTab === tab.toLowerCase() ? '2px solid #00F0FF' : 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontSize: '12px'
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>

                {activeTab === 'genel' && (
                    <div style={{ animation: 'fadeIn 0.3s' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                            <DetailBox label="TOPLAM DEĞER" value={assetData.value} color="#4ade80" />
                            <DetailBox label="YILLIK GETİRİ" value={assetData.ytd} color="#FFD700" />
                            <DetailBox label="DOLULUK" value={assetData.occupancy} />
                            <DetailBox label="SONRAKİ ÖDEME" value={assetData.nextPayout} />
                        </div>

                        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px' }}>
                            <h3 style={{ marginTop: 0 }}>Varlık Özeti</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '14px' }}>
                                A Blok, İzmir'in en prestijli "Yeşil Bina" sertifikalı konut projesidir. 120 daireden oluşan bu blok, kendi enerjisini üretir ve yağmur suyu hasadı yapar. Ortak alan gelirleri hisse sahiplerine dağıtılır.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'finans' && (
                    <div style={{ animation: 'fadeIn 0.3s' }}>
                        {/* CSS Graph Simulation */}
                        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                            {[40, 55, 45, 60, 75, 65, 80, 70, 85, 95].map((h, i) => (
                                <div key={i} style={{
                                    flex: 1,
                                    background: 'linear-gradient(to top, rgba(0,240,255,0.2), #00F0FF)',
                                    height: `${h}%`,
                                    borderRadius: '4px 4px 0 0',
                                    position: 'relative',
                                    transition: 'height 0.5s ease',
                                    animation: `growUp 0.5s ease ${i * 0.1}s forwards`,
                                    transformOrigin: 'bottom',
                                    transform: 'scaleY(0)'
                                }}></div>
                            ))}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', textAlign: 'center', marginBottom: '20px' }}>
                            SON 12 AYLIK KİRA GELİR ENDEKSİ
                        </div>

                        <h3 style={{ fontSize: '16px' }}>Hisse Alım/Satım</h3>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '16px',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>GÜNCEL HİSSE FİYATI</div>
                                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{assetData.sharePrice}</div>
                            </div>
                            <button
                                onClick={handleBuyShare}
                                style={{
                                    background: '#00F0FF', color: 'black',
                                    border: 'none', padding: '10px 20px',
                                    borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'
                                }}
                            >
                                SATIN AL
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === 'belgeler' && (
                    <div style={{ animation: 'fadeIn 0.3s', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <DocItem title="Tapu Kaydı (Blok A)" type="PDF" size="1.2 MB" />
                        <DocItem title="Yeşil Bina Sertifikası" type="IMG" size="4.5 MB" />
                        <DocItem title="Yönetim Planı v2.1" type="DOC" size="800 KB" />
                        <DocItem title="2024 Denetim Raporu" type="PDF" size="2.1 MB" />
                    </div>
                )}

            </div>

            <style>{`
                @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes growUp { from { transform: scaleY(0); } to { transform: scaleY(1); } }
            `}</style>
        </div>
    );
};

const DetailBox = ({ label, value, color = 'white' }) => (
    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px' }}>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: color }}>{value}</div>
    </div>
);

const DocItem = ({ title, type, size }) => (
    <div style={{
        padding: '16px', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px',
        cursor: 'pointer', background: 'rgba(0,0,0,0.2)'
    }}>
        <div style={{
            width: '40px', height: '40px', background: '#222',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '8px', fontWeight: 'bold', color: '#888'
        }}>
            {type}
        </div>
        <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{size}</div>
        </div>
        <div style={{ color: '#00F0FF' }}>⬇</div>
    </div>
);

export default AssetDetail;
