import React, { useState } from 'react';
import SystemModule from '../components/UI/SystemModule';
import { useToast } from '../components/UI/ToastManager';

const projects = [
    { id: 1, title: 'Bornova Akıllı Konutları', location: 'Bornova, İzmir', roi: '%12', progress: 45, minInvest: '1,000 ₺' },
    { id: 2, title: 'Mavişehir Deniz Kule', location: 'Karşıyaka, İzmir', roi: '%18', progress: 80, minInvest: '5,000 ₺' },
    { id: 3, title: 'Urla Eko-Köy Projesi', location: 'Urla, İzmir', roi: '%15', progress: 10, minInvest: '2,500 ₺' },
];

const Housing = () => {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('market'); // market | build
    const [bricks, setBricks] = useState(12);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePayRent = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setBricks(b => b + 1);
            setIsAnimating(false);
            addToast("Kira Ödendi! (+50 XP)", "success");
        }, 1500);
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '120px' }}>

            {/* Tab Switcher */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <TabButton label="PROJELER (MARKET)" active={activeTab === 'market'} onClick={() => setActiveTab('market')} />
                <TabButton label="İNŞAATIM" active={activeTab === 'build'} onClick={() => setActiveTab('build')} />
            </div>

            {/* MARKET VIEW */}
            {activeTab === 'market' && (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {projects.map(p => (
                        <SystemModule key={p.id} title={p.title} status="OPEN" accentColor="var(--color-secondary)">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                                <div>
                                    <div style={{ fontSize: '12px', color: 'var(--color-text-dim)' }}>{p.location}</div>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-main)' }}>{p.roi} <span style={{ fontSize: '12px' }}>Yıllık Getiri</span></div>
                                </div>
                                <div style={{ padding: '4px 8px', border: '1px solid var(--color-primary)', borderRadius: '4px', fontSize: '10px', color: 'var(--color-primary)' }}>
                                    EN AZ {p.minInvest}
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '4px', color: 'var(--color-text-dim)' }}>
                                    <span>TAMAMLANMA</span>
                                    <span>%{p.progress}</span>
                                </div>
                                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: `${p.progress}%`, height: '100%', background: 'var(--color-secondary)' }}></div>
                                </div>
                            </div>

                            <button style={{ width: '100%', padding: '12px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                                DETAYLARI İNCELE ↗
                            </button>
                        </SystemModule>
                    ))}
                </div>
            )}

            {/* BUILD VIEW (Gamification) */}
            {activeTab === 'build' && (
                <>
                    <SystemModule title="SANA ÖZEL KONUT" status="LEVEL 1" accentColor="#4ade80">
                        <div style={{ textAlign: 'center', padding: '20px 0' }}>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-dim)', marginBottom: '12px' }}>MÜLKİYET DURUMU</div>
                            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} style={{
                                        width: '24px', height: '12px',
                                        background: i < bricks ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(0,0,0,0.5)',
                                        transition: 'all 0.3s'
                                    }}></div>
                                ))}
                            </div>
                            <button onClick={handlePayRent} disabled={isAnimating} style={{
                                padding: '16px 32px',
                                background: isAnimating ? 'var(--color-text-dim)' : 'var(--color-success)',
                                color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer'
                            }}>
                                {isAnimating ? 'İŞLENİYOR...' : 'TUĞLA EKLE (+1200 ₺)'}
                            </button>
                        </div>
                    </SystemModule>
                </>
            )}

        </div>
    );
};

const TabButton = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
        flex: 1, padding: '12px', background: active ? 'var(--color-primary)' : 'transparent',
        border: active ? 'none' : '1px solid var(--color-text-dim)',
        color: active ? 'black' : 'var(--color-text-dim)',
        fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s'
    }}>
        {label}
    </button>
);

export default Housing;
