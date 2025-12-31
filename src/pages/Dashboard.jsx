import React from 'react';
import AssetCard from '../components/Cards/AssetCard';

const Dashboard = ({ onNavigate, onAssetClick }) => {
    return (
        <div style={{ padding: '0 20px', maxWidth: '100%', overflowX: 'hidden' }}>
            {/* Top Bar: Identity - Integrated nicely below HUD */}
            <div className="glass-panel" style={{
                padding: '16px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Avatar Placeholder */}
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF9966, #FF5E62)',
                        border: '2px solid white',
                        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                    }}></div>
                    <div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Mahalle Hamisi</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }}></span>
                            BeOne ID: #8821
                        </div>
                    </div>
                </div>
                <div style={{
                    background: 'rgba(0, 122, 255, 0.2)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(0, 122, 255, 0.3)',
                    textAlign: 'right'
                }}>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>ŞEHİR HİSSESİ (IZM)</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-primary)' }}>%0.005</div>
                </div>
            </div>

            {/* Greeting */}
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '28px', margin: '0 0 8px 0', fontWeight: '300' }}>
                    Merhaba, <span style={{ fontWeight: '700' }}>Şafak</span>
                </h1>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)' }}>
                    Bugün İzmir'de güneşli bir gün. Enerji üretimi %12 arttı.
                </p>
            </div>

            {/* Asset Cards Scroller */}
            <div style={{ marginBottom: '32px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '16px'
                }}>
                    <h2 style={{ fontSize: '18px', margin: 0 }}>Varlıklarım</h2>
                    <span style={{ fontSize: '12px', color: 'var(--color-primary)' }}>Tümünü Gör</span>
                </div>

                <div style={{
                    display: 'flex',
                    overflowX: 'auto',
                    paddingBottom: '20px',
                    marginLeft: '-20px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    scrollbarWidth: 'none' /* Firefox */,
                    '-ms-overflow-style': 'none'  /* IE 10+ */
                }}>
                    <AssetCard
                        type="gold"
                        title="Kira Kumbarası"
                        value="127 Tuğla"
                        subtext="Evin %0.2'sine sahipsin"
                        icon={<span style={{ fontSize: '24px' }}>🏠</span>}
                        onClick={() => onAssetClick && onAssetClick({ id: 1, title: 'Kira Kumbarası' })}
                    />
                    <AssetCard
                        title="Güneş Paneli"
                        value="5 Panel"
                        subtext="Anlık Üretim: 2.4 kWh"
                        icon={<span style={{ fontSize: '24px' }}>☀️</span>}
                        onClick={() => { }}
                    />
                    <AssetCard
                        title="Su Tasarrufu"
                        value="350 L"
                        subtext="Konut Fonuna +35 TL"
                        icon={<span style={{ fontSize: '24px' }}>💧</span>}
                        onClick={() => { }}
                    />
                </div>
            </div>

            {/* Quick Actions / Stats */}
            <div className="glass-panel" style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '18px', margin: '0 0 16px 0' }}>Sistem Durumu</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>14.2</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>IZM Token</div>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-success)' }}>+24%</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Haftalık Gelir</div>
                    </div>
                </div>
            </div>

            {/* Shortcuts */}
            <div style={{ padding: '0 20px 20px 20px', display: 'flex', gap: '10px' }}>
                <button
                    onClick={() => onNavigate('logistics')}
                    style={{ flex: 1, padding: '12px', background: 'rgba(5, 10, 24, 0.8)', border: '1px solid #00F0FF', color: '#00F0FF', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    ✈️ Sky Control
                </button>
                <button
                    onClick={() => onNavigate('transparency')}
                    style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    🔍 Şeffaflık
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
