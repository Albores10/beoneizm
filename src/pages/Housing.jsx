import React, { useState } from 'react';
import SystemModule from '../components/UI/SystemModule';
import { useToast } from '../components/UI/ToastManager';
import { CyberIcon } from '../components/UI/CyberIcons';

const Housing = () => {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('portfolio'); // discovery | portfolio

    // Mock Data for "My Home"
    const [myHome, setMyHome] = useState({
        id: 'PRJ-1024',
        title: 'Bornova Akıllı Konutları - Daire 42',
        value: 4200000,
        rent: 30000,
        equity: 125000, // Current owned value
        progress: 2.9, // Equity percentage
        nextPayment: '15 Gün'
    });

    // Mock Data for Discovery (Crowdfunding)
    const [projects] = useState([
        { id: 1, title: 'Mavişehir Deniz Kule', target: '12.5M ₺', collected: '8.2M ₺', progress: 65, investors: 1420, roi: '%18', image: 'https://placehold.co/600x300/1e293b/00F0FF?text=Mavişehir+Tower' },
        { id: 2, title: 'Urla Bağ Evleri', target: '8.0M ₺', collected: '1.2M ₺', progress: 15, investors: 340, roi: '%15', image: 'https://placehold.co/600x300/1e293b/FACC15?text=Urla+Eco+Village' },
    ]);

    const handlePayRent = () => {
        addToast("Kira Ödemesi İşleniyor...", "info");
        setTimeout(() => {
            setMyHome(prev => ({
                ...prev,
                equity: prev.equity + 3000, // 10% of 30k rent goes to equity
                progress: prev.progress + 0.1
            }));
            addToast("Başarılı: +3000 ₺ Hisse Geri Alındı!", "success");
        }, 1500);
    };

    return (
        <div style={{ padding: '20px', paddingBottom: '120px' }}>
            {/* Header */}
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '24px', margin: 0, fontFamily: '"Rajdhani", sans-serif', textTransform: 'uppercase' }}>
                        BARINMA <span style={{ color: '#FACC15' }}>AĞI</span>
                    </h1>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>
                        RENT-TO-OWN MODELİ
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <TabButton label="KONUTUM" active={activeTab === 'portfolio'} onClick={() => setActiveTab('portfolio')} />
                    <TabButton label="KEŞFET" active={activeTab === 'discovery'} onClick={() => setActiveTab('discovery')} />
                </div>
            </div>

            {/* --- MY PORTFOLIO ("TENANT OWNER") --- */}
            {activeTab === 'portfolio' && (
                <div style={{ display: 'grid', gap: '20px' }}>
                    {/* Main Ownership Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, rgba(0,0,0,0) 100%)',
                        border: '1px solid #FACC15',
                        borderRadius: '16px',
                        padding: '24px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '18px', color: 'white' }}>{myHome.title}</h3>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Piyasa Değeri: {myHome.value.toLocaleString()} ₺</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', color: '#FACC15' }}>HİSSENİZ</div>
                                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FACC15' }}>%{myHome.progress.toFixed(2)}</div>
                                </div>
                            </div>

                            {/* Visual Progress Bar */}
                            <div style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden', marginBottom: '8px' }}>
                                <div style={{ width: `${myHome.progress}%`, height: '100%', background: '#FACC15', boxShadow: '0 0 10px #FACC15' }}></div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                                <span>KİRACI PAYI ({myHome.equity.toLocaleString()} ₺)</span>
                                <span>SİSTEM PAYI</span>
                            </div>

                            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{ flex: 1 }}>
                                    <button
                                        onClick={handlePayRent}
                                        style={{
                                            width: '100%', padding: '16px',
                                            background: '#FACC15', color: 'black',
                                            border: 'none', borderRadius: '8px',
                                            fontWeight: 'bold', fontSize: '16px',
                                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                                        }}
                                    >
                                        <span>KİRA ÖDE</span>
                                        <span style={{ fontSize: '12px', fontWeight: 'normal' }}>({myHome.rent.toLocaleString()} ₺)</span>
                                    </button>
                                </div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', maxWidth: '120px', lineHeight: '1.2' }}>
                                    Bu ödemenin <span style={{ color: '#4ade80', fontWeight: 'bold' }}>%10</span>'u ile otomatik hisse geri alımı yapılır.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <StatCard label="GELECEK ÖDEME" value={myHome.nextPayment} color="white" />
                        <StatCard label="TOPLAM HİSSE" value={`${myHome.equity.toLocaleString()} ₺`} color="#FACC15" />
                    </div>
                </div>
            )}

            {/* --- DISCOVERY (CROWDFUNDING) --- */}
            {activeTab === 'discovery' && (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {projects.map(p => (
                        <div key={p.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                            <div style={{ height: '140px', background: `url(${p.image}) center/cover`, position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', border: '1px solid #FACC15', color: '#FACC15', fontSize: '12px', fontWeight: 'bold' }}>
                                    ROI {p.roi}
                                </div>
                            </div>
                            <div style={{ padding: '16px' }}>
                                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{p.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>
                                    <span>Toplanan: <span style={{ color: 'white' }}>{p.collected}</span></span>
                                    <span>Hedef: {p.target}</span>
                                </div>
                                {/* Progress */}
                                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '16px' }}>
                                    <div style={{ width: `${p.progress}%`, height: '100%', background: '#4ade80' }}></div>
                                </div>

                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button style={{ flex: 1, padding: '10px', background: 'transparent', border: '1px solid #FACC15', color: '#FACC15', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                                        İNCELE
                                    </button>
                                    <button style={{ flex: 1, padding: '10px', background: '#FACC15', border: 'none', color: 'black', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                                        YATIRIM YAP
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const TabButton = ({ label, active, onClick }) => (
    <button onClick={onClick} style={{
        padding: '8px 16px', background: active ? '#FACC15' : 'transparent',
        border: active ? 'none' : '1px solid rgba(255,255,255,0.2)',
        color: active ? 'black' : 'rgba(255,255,255,0.6)',
        fontWeight: 'bold', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.2s', fontSize: '12px'
    }}>
        {label}
    </button>
);

const StatCard = ({ label, value, color }) => (
    <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: color }}>{value}</div>
    </div>
);

export default Housing;
