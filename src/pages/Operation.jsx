import React, { useState } from 'react';

const Operation = () => {
    const [scanning, setScanning] = useState(true);

    return (
        <div style={{ padding: '20px 20px 100px 20px', height: '100%' }}>
            <h2 style={{ marginBottom: '20px' }}>Operasyon: Su & Gıda</h2>

            {/* QR Scanner Mock */}
            <div className="glass-panel" style={{
                height: '300px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                background: '#000'
            }}>
                {scanning ? (
                    <>
                        <div style={{
                            width: '200px',
                            height: '200px',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '20px',
                            position: 'relative'
                        }}>
                            {/* Scan Line */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'var(--color-primary)',
                                boxShadow: '0 0 10px var(--color-primary)',
                                animation: 'scan 2s linear infinite'
                            }}></div>
                        </div>
                        <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
                            BeOneSu otomatına barkodu okutun
                        </p>
                        <style>{`
                 @keyframes scan {
                   0% { top: 0; opacity: 1; }
                   50% { top: 100%; opacity: 1; }
                   51% { top: 0; opacity: 0; }
                   100% { top: 0; opacity: 0; }
                 }
               `}</style>

                        {/* Simulating "Scan Found" for demo */}
                        <button
                            onClick={() => setScanning(false)}
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                background: 'rgba(255,255,255,0.2)',
                                border: '1px solid white',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                cursor: 'pointer'
                            }}
                        >
                            (Simüle Et: Barkod Bulundu)
                        </button>
                    </>
                ) : (
                    <div style={{ width: '100%', height: '100%', background: 'url("https://placehold.co/400x300/222/FFF?text=Product+Photo") center/cover', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.8)', padding: '16px'
                        }}>
                            <h3 style={{ margin: 0 }}>Taze Domates (1kg)</h3>
                            <div style={{ color: '#4ade80' }}>Menemen Ovası</div>
                        </div>
                    </div>
                )}
            </div>

            {/* Price Breakdown */}
            {!scanning && (
                <div className="glass-panel" style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', marginTop: 0 }}>Fiyat Şeffaflığı</h3>

                    {/* Bar */}
                    <div style={{ display: 'flex', height: '24px', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                        <div style={{ width: '80%', background: '#4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'black', fontWeight: 'bold' }}>
                            TARLA (5.0₺)
                        </div>
                        <div style={{ width: '20%', background: '#FACC15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'black', fontWeight: 'bold' }}>
                            LOJ (1.0₺)
                        </div>
                        {/* No Red Part (Middleman) */}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '12px', textDecoration: 'line-through', color: 'rgba(255,255,255,0.5)' }}>Market: 12.00 ₺</div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)' }}>6.00 ₺</div>
                        </div>
                        <button style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>
                            HEMEN AL
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Operation;
