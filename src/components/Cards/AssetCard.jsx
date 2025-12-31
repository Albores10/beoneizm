import React from 'react';

const AssetCard = ({ title, value, subtext, icon, type, onClick }) => {
    const isGold = type === 'gold';

    return (
        <div
            onClick={onClick}
            className={`glass-panel`}
            style={{
                padding: '20px',
                minWidth: '280px',
                flex: '0 0 auto',
                marginRight: '16px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                background: isGold
                    ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)'
                    : undefined,
                border: isGold ? '1px solid rgba(255, 215, 0, 0.3)' : undefined
            }}
        >
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: isGold ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 122, 255, 0.2)',
                filter: 'blur(40px)',
                borderRadius: '50%'
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '8px',
                    borderRadius: '12px'
                }}>
                    {icon}
                </div>
                {type === 'gold' && (
                    <div style={{
                        background: 'var(--color-secondary)',
                        color: '#000',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        padding: '4px 8px',
                        borderRadius: '20px'
                    }}>
                        YATIRIM
                    </div>
                )}
            </div>

            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>{title}</h3>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', className: isGold ? 'text-gradient-gold' : '' }}>
                {value}
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                {subtext}
            </div>
        </div>
    );
};

export default AssetCard;
