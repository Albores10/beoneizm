import React from 'react';

const Dashboard = ({ onNavigate, onAssetClick, onProfileClick }) => {
    return (
        <div style={{ padding: '20px', paddingBottom: '100px' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>SİSTEM ÇEVRİMİÇİ</div>
                    <h1 style={{ margin: 0, fontSize: '24px' }}>Hoşgeldin, <span onClick={onProfileClick} style={{ color: '#00F0FF', cursor: 'pointer', textDecoration: 'underline' }}>Şafak</span></h1>
                </div>
                <div onClick={onProfileClick} style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'url(https://placehold.co/100) center/cover',
                    border: '2px solid #00F0FF',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)'
                }}></div>
            </div>

            {/* Live Status Widgets */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
                <LiveWidget icon="❤️" label="SAĞLIK" value="%98" color="#f87171" />
                <LiveWidget icon="⚡" label="ENERJİ" value="%84" color="#FFD700" />
                <LiveWidget icon="🛡️" label="GÜVENLİK" value="A+" color="#4ade80" />
            </div>

            {/* Main Feature Cards */}
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Hızlı Erişim</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <BigCard title="Cüzdan" value="₺ 14,250" icon="💳" color="#007AFF" onClick={() => onNavigate('wallet')} />
                <BigCard title="Yönetim" value="3 Oylama" icon="⚖️" color="#a855f7" onClick={() => onNavigate('governance')} />
                <BigCard title="Harita" value="Keşfet" icon="🗺️" color="#39FF14" onClick={() => onNavigate('map')} />
                <BigCard title="Konut" value="Yatırım" icon="🏠" color="#FACC15" onClick={() => onNavigate('housing')} />
            </div>

            {/* Dynamic City Feed */}
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Şehir Özeti</h2>
            <div className="glass-panel" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '24px' }}>☀️</div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>İzmir - Alsancak</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>32°C • UV İndeksi: Yüksek</div>
                    </div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '16px' }}></div>
                <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    <p>📢 <b>Belediye Duyurusu:</b> Metro hatlarında gece seferleri 02:00'ye kadar uzatıldı.</p>
                    <p style={{ marginTop: '8px' }}>🚀 <b>Proje:</b> "Yeşil Körfez" temizlik dronları göreve başladı.</p>
                </div>
            </div>

        </div>
    );
};

const LiveWidget = ({ icon, label, value, color }) => (
    <div className="glass-panel" style={{ padding: '12px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>{icon}</div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>{label}</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold', color: color }}>{value}</div>
        {/* Pulse Dot */}
        <div style={{
            position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px',
            background: color, borderRadius: '50%',
            boxShadow: `0 0 8px ${color}`,
            animation: 'pulse 2s infinite'
        }}></div>
    </div>
);

const BigCard = ({ title, value, icon, color, onClick }) => (
    <div onClick={onClick} className="glass-panel" style={{
        padding: '20px', cursor: 'pointer', transition: 'transform 0.2s',
        display: 'flex', flexDirection: 'column', gap: '8px'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
            <div style={{ fontSize: '24px', background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
            <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.2)' }}>↗</div>
        </div>
        <div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{title}</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: color }}>{value}</div>
        </div>
    </div>
);

export default Dashboard;
