import React, { useState, useEffect } from 'react';
import { useToast } from '../components/UI/ToastManager';
import { CyberIcon } from '../components/UI/CyberIcons';

const Operation = () => {
    const { addToast } = useToast();
    const [selectedAsset, setSelectedAsset] = useState('water');
    const [activeTab, setActiveTab] = useState('market'); // market, limit

    // Mock Market Data
    const [marketData, setMarketData] = useState([
        { id: 'water', name: 'BeOne Su', symbol: 'H2O', price: 4.25, change: 1.2, trend: 'up' },
        { id: 'energy', name: 'Solar Enerji', symbol: 'SUN', price: 1.80, change: -0.5, trend: 'down' },
        { id: 'food', name: 'Org. Gıda', symbol: 'FOOD', price: 45.00, change: 2.4, trend: 'up' },
        { id: 'fiber', name: 'Fiber Ağ', symbol: 'NET', price: 12.50, change: 0.0, trend: 'flat' }
    ]);

    // Simulate Live Price Ticker
    useEffect(() => {
        const interval = setInterval(() => {
            setMarketData(prev => prev.map(item => ({
                ...item,
                price: item.price + (Math.random() - 0.5) * (item.price * 0.01)
            })));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const selectedItem = marketData.find(m => m.id === selectedAsset);

    const handleTrade = (type) => {
        addToast(`Emir Gönderildi: ${type} ${selectedItem.symbol}`, "success");
    };

    return (
        <div style={{ padding: '20px', paddingBottom: '100px', color: 'white' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                    <h1 style={{ fontSize: '24px', margin: 0, letterSpacing: '2px' }}>EMTİA BORSASI</h1>
                    <div style={{ fontSize: '10px', color: '#00F0FF', opacity: 0.8 }}>DİJİTAL VARLIK ALIM/SATIM TERMİNALİ</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>PİYASA DURUMU</div>
                    <div style={{ fontSize: '14px', color: '#4ade80', fontWeight: 'bold' }}>AÇIK ●</div>
                </div>
            </div>

            {/* Live Ticker Tape */}
            <div style={{
                background: 'rgba(0, 240, 255, 0.05)',
                borderTop: '1px solid rgba(0, 240, 255, 0.2)',
                borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
                padding: '8px 0',
                marginBottom: '20px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative'
            }}>
                <div style={{ display: 'inline-block', animation: 'ticker 20s linear infinite' }}>
                    {marketData.map(item => (
                        <span key={item.id} style={{ marginRight: '30px', fontSize: '12px', fontFamily: 'monospace' }}>
                            <span style={{ color: '#00F0FF', fontWeight: 'bold' }}>{item.symbol}</span>
                            <span style={{ margin: '0 8px' }}>{item.price.toFixed(2)} ₺</span>
                            <span style={{ color: item.change >= 0 ? '#4ade80' : '#ef4444' }}>
                                {item.change >= 0 ? '▲' : '▼'} %{Math.abs(item.change)}
                            </span>
                        </span>
                    ))}
                    {marketData.map(item => (
                        <span key={`${item.id}-dup`} style={{ marginRight: '30px', fontSize: '12px', fontFamily: 'monospace' }}>
                            <span style={{ color: '#00F0FF', fontWeight: 'bold' }}>{item.symbol}</span>
                            <span style={{ margin: '0 8px' }}>{item.price.toFixed(2)} ₺</span>
                            <span style={{ color: item.change >= 0 ? '#4ade80' : '#ef4444' }}>
                                {item.change >= 0 ? '▲' : '▼'} %{Math.abs(item.change)}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Terminal Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>

                {/* 1. CHART AREA (Mock) */}
                <div className="glass-panel" style={{ padding: '20px', border: '1px solid rgba(0,240,255,0.2)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div>
                            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#00F0FF' }}>{selectedItem.symbol}</span>
                            <span style={{ fontSize: '12px', marginLeft: '10px', color: 'rgba(255,255,255,0.6)' }}>/ TRY</span>
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: selectedItem.change >= 0 ? '#4ade80' : '#ef4444' }}>
                            {selectedItem.price.toFixed(2)} ₺
                        </div>
                    </div>

                    {/* Mock Graph Visual */}
                    <div style={{
                        height: '150px',
                        background: 'linear-gradient(180deg, rgba(0,240,255,0.1) 0%, rgba(0,0,0,0) 100%)',
                        position: 'relative',
                        borderBottom: '1px solid rgba(0,240,255,0.3)',
                        clipPath: 'polygon(0 80%, 10% 75%, 20% 85%, 30% 60%, 40% 65%, 50% 40%, 60% 50%, 70% 30%, 80% 35%, 90% 10%, 100% 20%, 100% 100%, 0% 100%)'
                    }}>
                        {/* Grid lines */}
                        <div style={{ position: 'absolute', top: '25%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ position: 'absolute', top: '75%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    </div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span>
                    </div>
                </div>

                {/* 2. ORDER ENTRY & ASSET LIST */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '16px' }}>

                    {/* Order Entry */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '4px' }}>
                            <button
                                onClick={() => setActiveTab('market')}
                                style={{ flex: 1, padding: '8px', background: activeTab === 'market' ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', color: 'white', fontSize: '12px', cursor: 'pointer', borderRadius: '4px' }}
                            >Piyasa</button>
                            <button
                                onClick={() => setActiveTab('limit')}
                                style={{ flex: 1, padding: '8px', background: activeTab === 'limit' ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', color: 'white', fontSize: '12px', cursor: 'pointer', borderRadius: '4px' }}
                            >Limit</button>
                        </div>

                        <div className="glass-panel" style={{ padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Kullanılabilir</span>
                                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>1,240.50 IZM</span>
                            </div>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Miktar</span>
                                <input type="number" placeholder="0.00" style={{ background: 'transparent', border: 'none', color: 'white', textAlign: 'right', outline: 'none', width: '80px' }} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <button
                                    onClick={() => handleTrade('AL')}
                                    style={{ background: '#4ade80', color: '#00250f', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.1s' }}
                                >
                                    AL
                                </button>
                                <button
                                    onClick={() => handleTrade('SAT')}
                                    style={{ background: '#ef4444', color: '#3f0c0c', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.1s' }}
                                >
                                    SAT
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Market List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {marketData.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedAsset(item.id)}
                                style={{
                                    padding: '12px',
                                    background: selectedAsset === item.id ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255,255,255,0.05)',
                                    border: selectedAsset === item.id ? '1px solid #00F0FF' : '1px solid transparent',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                                    <span style={{ fontWeight: 'bold', color: 'white' }}>{item.symbol}</span>
                                    <span style={{ color: item.change >= 0 ? '#4ade80' : '#ef4444' }}>{item.change}%</span>
                                </div>
                                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{item.price.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Operation;
