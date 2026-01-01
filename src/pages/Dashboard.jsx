import React from 'react';
import SystemModule from '../components/UI/SystemModule';
import BeOneSector from '../components/UI/BeOneSector';
import { CyberIcon } from '../components/UI/CyberIcons';
import { useUser } from '../context/UserContext';

const Dashboard = ({ onNavigate, onAssetClick, onProfileClick }) => {
    const { user } = useUser();
    return (
        <div style={{ padding: '20px', paddingBottom: '140px' }}>


            {/* HIGH-FIDELITY HUD HEADER */}
            <div style={{
                marginBottom: '24px',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                paddingBottom: '16px',
                background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0, 240, 255, 0.05) 50%, rgba(0,0,0,0) 100%)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        {/* Profile Avatar with Hex Frame */}
                        <div onClick={onProfileClick} style={{
                            width: '56px', height: '56px',
                            background: `url(${user.avatar}) center/cover`,
                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                            border: '2px solid var(--color-primary)',
                            boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
                            cursor: 'pointer',
                            position: 'relative'
                        }}>
                            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', background: 'var(--color-success)', borderRadius: '50%', border: '2px solid black' }}></div>
                        </div>

                        <div>
                            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '2px' }}>
                                :: PILOT_ID_7421
                            </div>
                            <h1 style={{ margin: 0, fontSize: '24px', lineHeight: '1', textTransform: 'uppercase', fontFamily: '"Rajdhani", sans-serif', fontWeight: 'bold' }}>
                                ŞAFAK BİROL
                            </h1>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                                <StatusTag label="LEVEL 12" color="var(--color-secondary)" />
                                <StatusTag label="CITIZEN" color="var(--color-primary)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BEONE SYSTEM CORE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

                {/* B - BARINMA */}
                <BeOneSector
                    letter="B"
                    title="BARINMA"
                    color="#FACC15"
                    onNavigate={onNavigate}
                    items={[
                        { label: 'Konut Ağı', link: 'housing', emoji: '🏠', status: '%85 Dolu' },
                        { label: 'Yapı Stoğu', link: 'housing', emoji: '🏗️', status: 'Stabil' },
                        { label: 'Akıllı Ev', link: 'housing', emoji: '🔌', status: 'Online' },
                        { label: 'Emlak', link: 'housing', emoji: '🔑', status: 'Pazar' }
                    ]}
                />

                {/* E - ENERJİ */}
                <BeOneSector
                    letter="E"
                    title="ENERJİ"
                    color="#00F0FF"
                    onNavigate={onNavigate}
                    items={[
                        { label: 'Şebeke', link: 'transparency', emoji: '⚡', status: 'Normal' },
                        { label: 'Güneş', link: 'transparency', emoji: '☀️', status: '%112 Verim' },
                        { label: 'Rüzgar', link: 'transparency', emoji: '💨', status: 'Aktif' },
                        { label: 'Tüketim', link: 'transparency', emoji: '📉', status: 'Düşük' }
                    ]}
                />

                {/* O - OPERASYON */}
                <BeOneSector
                    letter="O"
                    title="OPERASYON"
                    color="#FF0055"
                    onNavigate={onNavigate}
                    items={[
                        { label: 'Gıda', link: 'operation', emoji: '🍎', status: 'Yeterli' },
                        { label: 'Su', link: 'operation', emoji: '💧', status: 'Kritik' },
                        { label: 'Giyim', link: 'operation', emoji: '👕', status: 'Stokta' },
                        { label: 'Güvenlik', link: 'map', emoji: '🛡️', status: 'Yüksek' }
                    ]}
                />

                {/* N - NAKLİYAT */}
                <BeOneSector
                    letter="N"
                    title="NAKLİYAT"
                    color="#a855f7"
                    onNavigate={onNavigate}
                    items={[
                        { label: 'Lojistik', link: 'logistics', emoji: '🚚', status: '12 Araç' },
                        { label: 'Rota', link: 'map', emoji: '🗺️', status: 'Op.' },
                        { label: 'Kargo', link: 'logistics', emoji: '📦', status: 'Dağıtımda' },
                        { label: 'Drone', link: 'logistics', emoji: '🚁', status: 'Havada' }
                    ]}
                />

                {/* E - EKOSİSTEM */}
                <BeOneSector
                    title="EKOSİSTEM"
                    icon="hive"
                    color="#a855f7"
                    items={[
                        { label: 'Yönetişim', value: 'AKTİF', icon: 'gavel', action: () => navigate('/governance') },
                        { label: 'Şeffaflık', value: 'AÇIK', icon: 'visible', action: () => navigate('/transparency') },
                        { label: 'Raporlar', value: 'AYLIK', icon: 'graph', action: () => navigate('/transparency') },
                        { label: 'Profil', value: 'KİMLİK', icon: 'user', action: () => onProfileClick() }
                    ]}
                />

            </div>

            <style>{`
                @keyframes blink { 50% { opacity: 0; } }
            `}</style>
        </div>
    );
};

// --- SUB COMPONENTS ---

const StatusTag = ({ label, color }) => (
    <span style={{
        fontSize: '9px', fontWeight: 'bold', color: 'black', background: color,
        padding: '2px 6px', borderRadius: '2px', fontFamily: 'monospace'
    }}>
        {label}
    </span>
);

const MiniStat = ({ label, value, percent, color }) => (
    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '4px', borderLeft: `2px solid ${color}` }}>
        <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '12px', color: 'white' }}>{value}</span>
            <span style={{ fontSize: '9px', color: '#4ade80' }}>{percent}</span>
        </div>
    </div>
);

const TechCard = ({ title, value, sub, icon, color, onClick }) => (
    <div onClick={onClick} style={{
        background: 'var(--color-bg-card)',
        border: `1px solid ${color}`,
        borderRadius: '12px',
        padding: '16px',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: `0 0 10px -5px ${color}`,
        overflow: 'hidden'
    }}>
        <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.1 }}>
            <CyberIcon name={icon} size={80} color={color} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px', color: color, marginBottom: '8px' }}>{title}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>{value}</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{sub}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: color, opacity: 0.5 }}></div>
    </div>
);

export default Dashboard;
