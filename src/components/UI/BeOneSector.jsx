import React, { useState } from 'react';
import { CyberIcon } from './CyberIcons';

const BeOneSector = ({ letter, title, subItems = [], color, icon, onNavigate }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{
            background: expanded ? 'rgba(0, 20, 40, 0.9)' : 'rgba(255, 255, 255, 0.03)',
            border: `1px solid ${expanded ? color : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '12px',
            marginBottom: '12px',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: expanded ? `0 0 20px -5px ${color}` : 'none',
            position: 'relative'
        }}>
            {/* Header / Clickable Area */}
            <div
                onClick={() => setExpanded(!expanded)}
                style={{
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: expanded ? `linear-gradient(90deg, ${color}20 0%, transparent 100%)` : 'transparent'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Big Letter */}
                    <div style={{
                        fontSize: '32px',
                        fontWeight: '900',
                        color: color,
                        fontFamily: 'rubik, sans-serif',
                        textShadow: `0 0 10px ${color}`,
                        width: '40px',
                        textAlign: 'center'
                    }}>
                        {letter}
                    </div>

                    {/* Title Info */}
                    <div>
                        <div style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: 'white',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            {title}
                        </div>
                        {!expanded && (
                            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                                {subItems.length} ALT SİSTEM
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Icon / Arrow */}
                <div style={{
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: color
                }}>
                    ▼
                </div>
            </div>

            {/* Expanded Content */}
            <div style={{
                height: expanded ? 'auto' : '0',
                opacity: expanded ? 1 : 0,
                transition: 'all 0.3s ease',
                borderTop: expanded ? `1px solid ${color}40` : 'none'
            }}>
                <div style={{ padding: '16px', display: 'grid', gap: '12px', gridTemplateColumns: '1fr 1fr' }}>
                    {subItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onNavigate && item.link) onNavigate(item.link);
                            }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '12px',
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

            {/* Decorative Corner */}
            {expanded && (
                <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: '10px', height: '10px',
                    borderBottom: `2px solid ${color}`,
                    borderRight: `2px solid ${color}`
                }}></div>
            )}
        </div>
    );
};

export default BeOneSector;
