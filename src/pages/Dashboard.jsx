import React from 'react';
import SystemModule from '../components/UI/SystemModule';
import { CyberIcon } from '../components/UI/CyberIcons';

const Dashboard = ({ onNavigate, onAssetClick, onProfileClick }) => {
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
                            background: 'url(https://placehold.co/100) center/cover',
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

            {/* MAIN GRID */}
            <div style={{ display: 'grid', gap: '20px' }}>

                {/* 1. WALLET WEALTH VISUALIZER */}
                <SystemModule title="VARLIK YÖNETİMİ" status="SECURE" accentColor="var(--color-secondary)">
                    <div onClick={() => onNavigate('wallet')} style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                        {/* Simulated Graph Background */}
                        <svg width="100%" height="80" style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0.2 }}>
                            <path d="M0,80 Q20,60 40,70 T80,50 T120,60 T160,30 T200,50 T240,20 T280,40 V80 H0 Z" fill="var(--color-secondary)" />
                        </svg>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div>
                                <div style={{ fontSize: '11px', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>TOPLAM BAKİYE</div>
                                <div style={{ fontSize: '42px', fontWeight: 'bold', fontFamily: 'monospace', color: 'white', letterSpacing: '-2px', textShadow: '0 0 20px rgba(255, 215, 0, 0.3)' }}>
                                    ₺ 14,250<span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)' }}>.00</span>
                                </div>
                            </div>
                            <CyberIcon name="wallet" size={40} color="var(--color-secondary)" />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px', position: 'relative', zIndex: 1 }}>
                            <MiniStat label="IZM COIN" value="1,240" percent="+4.2%" color="#00F0FF" />
                            <MiniStat label="GOLD" value="3.5g" percent="+1.1%" color="#FFD700" />
                        </div>
                    </div>
                </SystemModule>

                {/* 2. CORE SYSTEMS (Housing & Logistics) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <TechCard
                        title="KONUT AĞI"
                        value="85%"
                        sub="DOLULUK"
                        icon="housing"
                        color="#FACC15"
                        onClick={() => onNavigate('housing')}
                    />
                    <TechCard
                        title="LOJİSTİK"
                        value="12"
                        sub="AKTİF DRONE"
                        icon="logistics"
                        color="#39FF14"
                        onClick={() => onNavigate('logistics')}
                    />
                </div>

                {/* 3. CITY MANAGEMENT (Governance & Operation) */}
                <SystemModule title="ŞEHİR KONTROL" status="LIVE" accentColor="var(--color-accent)">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div onClick={() => onNavigate('governance')} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '16px', borderRadius: '8px', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
                        }}>
                            <CyberIcon name="governance" size={32} />
                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>MECLİS</div>
                            <div style={{ fontSize: '10px', color: '#a855f7' }}>● 3 OYLAMA AKTİF</div>
                        </div>
                        <div onClick={() => onNavigate('map')} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '16px', borderRadius: '8px', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'
                        }}>
                            <CyberIcon name="map" size={32} />
                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>HARİTA</div>
                            <div style={{ fontSize: '10px', color: '#00F0FF' }}>● 2 ETKİNLİK</div>
                        </div>
                    </div>
                </SystemModule>

                {/* 4. TERMINAL FEED */}
                <div style={{
                    background: 'black',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    padding: '12px',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: '#00ff00',
                    height: '100px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'rgba(0,255,0,0.3)', boxShadow: '0 0 10px #00ff00' }}></div>
                    <div style={{ opacity: 0.7 }}>
                        <div>user@cityos:~$ systemctl status grid</div>
                        <div>● Grid Energy: OPTIMAL (98%)</div>
                        <div>user@cityos:~$ active_alert --check</div>
                        <div style={{ color: 'white' }}>Scanning sectors... Done.</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ color: '#00F0FF' }}>➜</span> No critical anomalies found.
                            <span style={{ animation: 'blink 1s infinite' }}>_</span>
                        </div>
                    </div>
                </div>

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
