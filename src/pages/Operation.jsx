import React, { useState } from 'react';
import { useToast } from '../components/UI/ToastManager';
import { CyberIcon } from '../components/UI/CyberIcons';
import SystemModule from '../components/UI/SystemModule';

const Operation = () => {
    const { addToast } = useToast();
    const [scanning, setScanning] = useState(false);
    const [activeService, setActiveService] = useState(null);

    const handleScan = () => {
        setScanning(true);
        addToast("QR Tarayıcı Başlatılıyor...", "info");

        // Simulation of scanning process
        setTimeout(() => {
            setScanning(false);
            const services = ['water', 'food', 'clothing'];
            const randomService = services[Math.floor(Math.random() * services.length)];
            setActiveService(randomService);

            if (randomService === 'water') addToast("Bağlanıldı: BeOne Akıllı Çeşme #24", "success");
            if (randomService === 'food') addToast("Bağlanıldı: Menemen Gıda Noktası", "success");
            if (randomService === 'clothing') addToast("Bağlanıldı: Askıda Kıyafet Ünitesi", "success");
        }, 2000);
    };

    const handleDispense = () => {
        addToast("İşlem Başlatıldı... Lütfen Bekleyiniz.", "warning");
        setTimeout(() => {
            addToast("İşlem Tamamlandı. Teşekkürler!", "success");
            setActiveService(null);
        }, 2500);
    };

    return (
        <div style={{ padding: '0 20px', paddingBottom: '120px' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ fontSize: '28px', margin: 0, fontWeight: '300' }}>BeOne <span style={{ fontWeight: '700', color: '#FF0055' }}>Operasyon</span></h1>
                <p style={{ margin: '4px 0 0 0', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                    Akıllı Şehir Hizmet Noktaları Ağı
                </p>
            </div>

            {/* SCANNER HERO SECTION */}
            <div className="glass-panel" style={{
                padding: '40px 20px',
                textAlign: 'center',
                marginBottom: '24px',
                background: 'radial-gradient(circle, rgba(255, 0, 85, 0.1) 0%, rgba(2, 6, 23, 0.8) 70%)',
                border: '1px solid #FF0055',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Simulated Scanner Laser */}
                {scanning && (
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
                        background: '#FF0055', boxShadow: '0 0 15px #FF0055',
                        animation: 'scanDown 1.5s linear infinite'
                    }}></div>
                )}

                <div style={{ marginBottom: '20px' }}>
                    <div style={{
                        width: '80px', height: '80px', margin: '0 auto',
                        border: '2px dashed rgba(255,255,255,0.3)', borderRadius: '12px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <CyberIcon name="qr" size={40} color={scanning ? "#FF0055" : "white"} />
                    </div>
                </div>

                <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Hizmet Noktası Bağlantısı</h2>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px', maxWidth: '240px', margin: '0 auto 24px auto' }}>
                    Gıda, Su veya Giyim otomatlarını kullanmak için üzerindeki karekodu okutun.
                </p>

                <button
                    onClick={handleScan}
                    disabled={scanning || activeService}
                    style={{
                        background: scanning ? 'transparent' : '#FF0055',
                        color: 'white', border: scanning ? '1px solid #FF0055' : 'none',
                        padding: '14px 32px', borderRadius: '12px', fontWeight: 'bold', fontSize: '14px',
                        cursor: scanning ? 'default' : 'pointer', transition: 'all 0.2s',
                        boxShadow: scanning ? 'none' : '0 0 20px rgba(255, 0, 85, 0.4)'
                    }}
                >
                    {scanning ? 'TARANIYOR...' : 'KAMERAYI AÇ'}
                </button>
            </div>

            {/* ACTIVE SERVICE PANEL (Shows after scan) */}
            {activeService && (
                <div style={{ animation: 'slideUp 0.3s ease', marginBottom: '24px' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                        border: '1px solid #4ade80', borderRadius: '16px', padding: '20px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ fontSize: '24px' }}>
                                    {activeService === 'water' && '💧'}
                                    {activeService === 'food' && '🍎'}
                                    {activeService === 'clothing' && '👕'}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                        {activeService === 'water' && 'Akıllı Çeşme'}
                                        {activeService === 'food' && 'Gıda Ünitesi'}
                                        {activeService === 'clothing' && 'Giyim Bankası'}
                                    </div>
                                    <div style={{ fontSize: '10px', color: '#4ade80' }}>● CİHAZ AKTİF</div>
                                </div>
                            </div>
                            <div style={{
                                background: '#4ade80', color: 'black', fontSize: '10px', fontWeight: 'bold',
                                padding: '4px 8px', borderRadius: '4px'
                            }}>
                                BAĞLANDI
                            </div>
                        </div>

                        {/* Action Area */}
                        <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                            {activeService === 'water' && (
                                <>
                                    <div style={{ fontSize: '12px', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>SU KALİTESİ: <span style={{ color: 'white' }}>PH 7.4</span></div>
                                    <div style={{ fontSize: '12px', marginBottom: '0', color: 'rgba(255,255,255,0.7)' }}>FİLTRE DURUMU: <span style={{ color: '#4ade80' }}>%98</span></div>
                                </>
                            )}
                            {activeService === 'food' && (
                                <>
                                    <div style={{ fontSize: '12px', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>STOK: <span style={{ color: 'white' }}>YETERLİ</span></div>
                                    <div style={{ fontSize: '12px', marginBottom: '0', color: 'rgba(255,255,255,0.7)' }}>TAZELİK: <span style={{ color: '#4ade80' }}>%100</span></div>
                                </>
                            )}
                            {activeService === 'clothing' && (
                                <>
                                    <div style={{ fontSize: '12px', marginBottom: '8px', color: 'rgba(255,255,255,0.7)' }}>BEDEN SEÇENEKLERİ: <span style={{ color: 'white' }}>S - M - L</span></div>
                                    <div style={{ fontSize: '12px', marginBottom: '0', color: 'rgba(255,255,255,0.7)' }}>DURUM: <span style={{ color: '#4ade80' }}>TEMİZLENDİ</span></div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={handleDispense}
                            style={{
                                width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
                                background: 'white', color: 'black', fontWeight: 'bold', cursor: 'pointer'
                            }}
                        >
                            {activeService === 'water' ? 'SU DOLDUR (5L)' : (activeService === 'food' ? 'PAKETİ AL' : 'GİYSİ SEÇİMİ')}
                        </button>
                    </div>
                </div>
            )}

            {/* Service Status List */}
            <h3 style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginLeft: '4px', marginBottom: '12px' }}>YAKINDAKİ NOKTALAR</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
                <ServiceCard
                    icon="💧"
                    title="Park İçi Çeşme"
                    status="Aktif"
                    distance="45m"
                    color="#00F0FF"
                />
                <ServiceCard
                    icon="🍎"
                    title="Belediye Gıda Bankası"
                    status="Orta Doluluk"
                    distance="120m"
                    color="#FACC15"
                />
                <ServiceCard
                    icon="👕"
                    title="Kıyafet Kumbarası"
                    status="Dolmak Üzere"
                    distance="350m"
                    color="#a855f7"
                />
            </div>

            <style>{`
                @keyframes scanDown {
                    0% { top: 0; opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

const ServiceCard = ({ icon, title, status, distance, color }) => (
    <div className="glass-panel" style={{
        padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderLeft: `3px solid ${color}`
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '20px' }}>{icon}</div>
            <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{status}</div>
            </div>
        </div>
        <div style={{ fontSize: '12px', fontWeight: 'bold', color: color }}>{distance}</div>
    </div>
);

export default Operation;
