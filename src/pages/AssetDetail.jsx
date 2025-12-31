import React from 'react';

const AssetDetail = ({ assetId, onClose }) => {
    // Mock Data based on ID (In real app, fetch from API)
    const assetData = {
        title: "BeOne Lojmanları A Blok",
        location: "Bornova Kampüs, İzmir",
        type: "Konut",
        value: "₺ 4,250,000",
        share: "%0.005",
        dailyYield: "+12.50 TL",
        occupancy: "%98",
        image: "https://placehold.co/800x400/2c3e50/FFF?text=BeOne+Lojmanlari"
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#0a192f',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideInRight 0.3s ease'
        }}>
            {/* Header Image Area */}
            <div style={{ position: 'relative', height: '250px' }}>
                <img src={assetData.image} alt={assetData.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                {/* Back Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '20px',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    ←
                </button>

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    background: 'linear-gradient(to top, #0a192f, transparent)',
                    padding: '20px',
                    paddingTop: '60px'
                }}>
                    <h1 style={{ margin: 0, fontSize: '24px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{assetData.title}</h1>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>📍 {assetData.location}</p>
                </div>
            </div>

            {/* Content Scroll */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>

                {/* Key Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>TOPLAM DEĞER</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00F0FF' }}>{assetData.value}</div>
                    </div>
                    <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>HİSSEN</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#FFD700' }}>{assetData.share}</div>
                    </div>
                    <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>GÜNLÜK GETİRİ</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#4ade80' }}>{assetData.dailyYield}</div>
                    </div>
                    <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>DOLULUK</div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{assetData.occupancy}</div>
                    </div>
                </div>

                {/* Narrative / Context */}
                <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '16px', borderLeft: '3px solid #007AFF', paddingLeft: '10px', marginBottom: '12px' }}>Varlık Özeti</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.8)' }}>
                        Bornova kampüs bölgesinde yer alan, öğrencilere yönelik modern yaşam alanı. Yüksek doluluk oranı ve enerji verimliliği sertifikası ile sürdürülebilir bir yatırımdır.
                    </p>
                </div>

                {/* Documents List (Deepening) */}
                <div>
                    <h3 style={{ fontSize: '16px', borderLeft: '3px solid #FFD700', paddingLeft: '10px', marginBottom: '12px' }}>Belgeler & Kanıtlar</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {['Tapu Kaydı (Blockchain)', 'Değerleme Raporu 2024', 'Enerji Kimlik Belgesi'].map((doc, i) => (
                            <div key={i} className="glass-panel" style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span>📄</span>
                                    <span style={{ fontSize: '14px' }}>{doc}</span>
                                </div>
                                <span>→</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ height: '80px' }}></div> {/* Spacer */}
            </div>

            {/* Action Bar */}
            <div className="glass-panel" style={{ paddingTop: '20px', padding: '20px', borderRadius: '24px 24px 0 0', borderBottom: 'none' }}>
                <button style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(90deg, #007AFF, #00C6FF)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    boxShadow: '0 0 20px rgba(0, 122, 255, 0.4)'
                }}>
                    DAHA FAZLA HİSSE AL
                </button>
            </div>

            <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default AssetDetail;
