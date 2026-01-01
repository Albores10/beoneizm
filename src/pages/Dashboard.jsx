import React from 'react';
import SystemModule from '../components/UI/SystemModule';

const Dashboard = ({ onNavigate, onAssetClick, onProfileClick }) => {
    return (
        <div style={{ padding: '16px', paddingBottom: '120px' }}>

            {/* HUD Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                marginBottom: '24px',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                paddingBottom: '12px'
            }}>
                <div>
                    <div style={{
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        color: 'var(--color-primary)',
                        letterSpacing: '2px',
                        marginBottom: '4px'
                    }}>
                        :: PILOT OTURUMU AKTİF
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div onClick={onProfileClick} style={{
                            width: '48px', height: '48px',
                            background: 'url(https://placehold.co/100) center/cover',
                            clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                            border: '1px solid var(--color-primary)',
                            cursor: 'pointer',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', background: 'var(--color-success)' }}></div>
                        </div>
                        <div>
                            <h1 style={{ margin: 0, fontSize: '20px', lineHeight: '1', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                ŞAFAK <span style={{ color: 'var(--color-text-dim)' }}>BİROL</span>
                            </h1>
                            <div style={{ fontSize: '12px', color: 'var(--color-secondary)', marginTop: '4px' }}>
                                ★ KIDEMLİ VATANDAŞ
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini Status Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <StatusBadge label="NET" value="ONLINE" color="var(--color-success)" />
                    <StatusBadge label="SYNC" value="%100" color="var(--color-primary)" />
                </div>
            </div>

            {/* Main Modules Grid */}
            <div style={{ display: 'grid', gap: '16px' }}>

                {/* 1. Wallet Module (Wide) */}
                <SystemModule title="CÜZDAN BAKİYESİ" status="SECURE" accentColor="var(--color-secondary)">
                    <div onClick={() => onNavigate('wallet')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div>
                            <div style={{ fontSize: '10px', color: 'var(--color-text-dim)', marginBottom: '4px' }}>TOPLAM VARLIKLAR</div>
                            <div style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'monospace', color: 'var(--color-text-main)', letterSpacing: '-1px' }}>
                                ₺ 14,250<span style={{ fontSize: '20px', color: 'var(--color-text-dim)' }}>.00</span>
                            </div>
                        </div>
                        <div style={{
                            width: '40px', height: '40px',
                            border: '1px solid var(--color-secondary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-secondary)',
                            borderRadius: '8px'
                        }}>
                            ↗
                        </div>
                    </div>
                </SystemModule>

                {/* 2. Quick Actions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <SystemModule title="ŞEHİR YÖNETİMİ" status="DAO" accentColor="var(--color-accent)">
                        <div onClick={() => onNavigate('governance')} style={{ textAlign: 'center', cursor: 'pointer', padding: '10px 0' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚖️</div>
                            <div style={{ fontWeight: 'bold' }}>3 OYLAMA</div>
                            <div style={{ fontSize: '10px', color: 'var(--color-text-dim)' }}>BEKLİYOR</div>
                        </div>
                    </SystemModule>

                    <SystemModule title="OPERASYON" status="LIVE" accentColor="var(--color-primary)">
                        <div onClick={() => onNavigate('map')} style={{ textAlign: 'center', cursor: 'pointer', padding: '10px 0' }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🗺️</div>
                            <div style={{ fontWeight: 'bold' }}>HARİTA</div>
                            <div style={{ fontSize: '10px', color: 'var(--color-text-dim)' }}>KEŞFET</div>
                        </div>
                    </SystemModule>
                </div>

                {/* 3. Housing / Logistics Split */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <QuickBtn label="KONUT" icon="🏠" color="#FACC15" onClick={() => onNavigate('housing')} />
                    <QuickBtn label="LOJİSTİK" icon="🚚" color="#39FF14" onClick={() => onNavigate('logistics')} />
                </div>

                {/* 4. Live City Feed (Text Scroll) */}
                <SystemModule title="SİSTEM GÜNLÜĞÜ" status="FEED" accentColor="var(--color-text-dim)">
                    <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        <div>[16:42] Dron #42 göreve başladı.</div>
                        <div>[15:30] Metro hattı bakım tamamlandı.</div>
                        <div style={{ color: 'var(--color-primary)' }}>[14:15] Yeni oylama başlatıldı: Park Projesi</div>
                    </div>
                </SystemModule>

            </div>
        </div>
    );
};

// Helper Components
const StatusBadge = ({ label, value, color }) => (
    <div style={{
        background: 'rgba(0,0,0,0.3)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '4px 8px',
        borderRadius: '4px',
        textAlign: 'center'
    }}>
        <div style={{ fontSize: '8px', color: 'var(--color-text-dim)' }}>{label}</div>
        <div style={{ fontSize: '10px', color: color, fontWeight: 'bold' }}>{value}</div>
    </div>
);

const QuickBtn = ({ label, icon, color, onClick }) => (
    <div onClick={onClick} style={{
        background: 'var(--color-bg-card)',
        border: `1px solid ${color}`,
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        boxShadow: `0 4px 10px -5px ${color}`
    }}>
        <div style={{ fontSize: '20px' }}>{icon}</div>
        <div style={{ fontWeight: 'bold', fontSize: '12px', color: 'white' }}>{label}</div>
    </div>
);

export default Dashboard;
