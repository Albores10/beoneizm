import React, { useState } from 'react';
import { CyberIcon } from '../components/UI/CyberIcons';

const Logistics = () => {
    // Mock Active Orders
    const [orders] = useState([
        { id: 'ORD-9921', service: 'BeOne Su', item: '19L Damacana (x2)', status: 'Yolda', eta: '4 dk', courier: 'Ali V.', icon: '💧', color: '#00F0FF' },
        { id: 'ORD-9922', service: 'BeOne Gıda', item: 'Taze Ege Sepeti', status: 'Hazırlanıyor', eta: '15 dk', courier: '-', icon: '🍎', color: '#FACC15' },
        { id: 'ORD-9920', service: 'BeOne Giyim', item: 'İzmir Pamuk T-Shirt', status: 'Teslim Edildi', eta: '-', courier: 'Sistem', icon: '👕', color: '#a855f7' }
    ]);

    const [activeTab, setActiveTab] = useState('active'); // active | history

    return (
        <div style={{ padding: '20px', paddingBottom: '120px' }}>
            {/* Header */}
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '24px', margin: 0, fontFamily: '"Rajdhani", sans-serif', textTransform: 'uppercase' }}>
                        NAKLİYAT <span style={{ color: 'var(--color-primary)' }}>AĞI</span>
                    </h1>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>
                        OPERASYONEL LOJİSTİK TAKİBİ
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ padding: '8px 12px', background: 'rgba(57, 255, 20, 0.1)', border: '1px solid #39FF14', borderRadius: '4px', fontSize: '10px', color: '#39FF14', fontWeight: 'bold' }}>
                        ● 12 KURYE AKTİF
                    </div>
                </div>
            </div>

            {/* LIVE MAP CONTAINER (Simulated High-Fi) */}
            <div style={{
                height: '300px',
                width: '100%',
                background: 'url(https://placehold.co/800x400/020617/1e293b?text=High-Fi+Izmir+Map+Dark+Mode)',
                backgroundSize: 'cover',
                borderRadius: '16px',
                border: '1px solid var(--color-primary)',
                position: 'relative',
                marginBottom: '24px',
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
            }}>
                {/* Map UI Overlays */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.8)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '10px', color: 'var(--color-text-dim)' }}>MY LOCATION</div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>Konak, Kültür Mah.</div>
                </div>

                {/* Simulated Courier (Animated) */}
                <div style={{
                    position: 'absolute', top: '50%', left: '40%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                    <div style={{ width: '40px', height: '40px', background: 'rgba(0, 240, 255, 0.2)', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px var(--color-primary)', animation: 'pulse 2s infinite' }}>
                        🛵
                    </div>
                    <div style={{ marginTop: '4px', background: 'black', padding: '2px 6px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold', border: '1px solid var(--color-primary)' }}>
                        BeOne Su (4 dk)
                    </div>
                </div>

                {/* Simulated Courier 2 */}
                <div style={{
                    position: 'absolute', top: '30%', left: '70%',
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.7
                }}>
                    <div style={{ width: '32px', height: '32px', background: 'rgba(250, 204, 21, 0.2)', borderRadius: '50%', border: '1px solid #FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        🚚
                    </div>
                </div>
            </div>

            {/* ORDERS LIST */}
            <div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <TabButton label="AKTİF SİPARİŞLER" isActive={activeTab === 'active'} onClick={() => setActiveTab('active')} />
                    <TabButton label="GEÇMİŞ" isActive={activeTab === 'history'} onClick={() => setActiveTab('history')} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {orders.map(order => (
                        <div key={order.id} style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderLeft: `3px solid ${order.color}`,
                            borderRadius: '8px',
                            padding: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'background 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    background: `${order.color}20`,
                                    borderRadius: '8px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '20px', color: order.color
                                }}>
                                    {order.icon}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'white' }}>{order.service}</div>
                                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{order.item}</div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '11px', fontWeight: 'bold', color: order.color }}>{order.status}</div>
                                <div style={{ fontSize: '10px', color: 'var(--color-text-dim)' }}>
                                    {order.eta !== '-' ? `Varış: ${order.eta}` : order.id}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(0, 240, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); }
                }
            `}</style>
        </div>
    );
};

const TabButton = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        style={{
            background: 'none',
            border: 'none',
            borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
            color: isActive ? 'white' : 'var(--color-text-dim)',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
        }}
    >
        {label}
    </button>
);

export default Logistics;
