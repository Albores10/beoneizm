import React, { useState } from 'react';
import { CyberIcon } from './CyberIcons';

const BeOneSector = ({ letter, title, subItems, items, color, icon, onNavigate }) => {
    const [isActive, setIsActive] = useState(false);

    // Unified list handling: Fix empty array truthy bug
    // If subItems exists and has length, use it. Otherwise try items. Finally default to [].
    const displayItems = (subItems && subItems.length > 0) ? subItems : (items || []);
    const hasItems = displayItems.length > 0;

    return (
        <div className="glass-panel" style={{
            padding: 0,
            marginBottom: '10px',
            borderLeft: `4px solid ${color}`,
            background: isActive ? 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)' : 'rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease'
        }}>
            {/* Sector Header */}
            <div
                onClick={() => setIsActive(!isActive)}
                style={{
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '32px', height: '32px',
                        borderRadius: '8px',
                        background: `${color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: color,
                        fontSize: '18px', fontWeight: 'bold', fontFamily: 'monospace'
                    }}>
                        {icon ? <CyberIcon name={icon} size={18} color={color} /> : letter}
                    </div>
                    <div>
                        <div style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px' }}>{title}</div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                            {hasItems ? `${displayItems.length} ALT SİSTEM` : 'Sistem verileri yükleniyor...'}
                        </div>
                    </div>
                </div>
                <div style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    ▼
                </div>
            </div>

            {/* Expanded Content */}
            {isActive && (
                <div style={{ padding: '0 16px 16px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', animation: 'slideDown 0.3s' }}>
                    {displayItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                if (item.action) item.action();
                                else if (item.link) onNavigate(item.link);
                            }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'pointer',
                                textAlign: 'center',
                                transition: 'background 0.2s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        >
                            <div style={{ fontSize: '20px' }}>{item.emoji || '🔹'}</div>
                            {/* Or use CyberIcon if passed */}
                            <div style={{ fontSize: '11px', color: 'white', fontWeight: 'bold' }}>{item.label}</div>
                            {item.status && (
                                <div style={{ fontSize: '9px', color: color }}>{item.status}</div>
                            )}
                        </div>
                    ))}

                    {/* Description Text if present */}
                    {subItems.length === 0 && (
                        <div style={{ gridColumn: 'span 2', fontSize: '12px', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '10px' }}>
                            Sistem verileri yükleniyor...
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative Corner */ }
    {
        expanded && (
            <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '10px', height: '10px',
                borderBottom: `2px solid ${color}`,
                borderRight: `2px solid ${color}`
            }}></div>
        )
    }
        </div >
    );
};

export default BeOneSector;
