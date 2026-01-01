import React from 'react';

const SystemModule = ({ title, status = 'ACTIVE', children, accentColor = 'var(--color-primary)' }) => {
    return (
        <div style={{
            background: 'var(--color-bg-card)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '16px', // Slightly less rounded for tech look
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '16px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
        }}>
            {/* Top accented border line */}
            <div style={{
                height: '2px',
                width: '100%',
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                opacity: 0.8
            }}></div>

            {/* Header Bar */}
            <div style={{
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(0,0,0,0.2)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    color: accentColor,
                    fontSize: '12px',
                    textTransform: 'uppercase'
                }}>
                    <div style={{
                        width: '6px',
                        height: '6px',
                        background: accentColor,
                        borderRadius: '50%',
                        boxShadow: `0 0 8px ${accentColor}`
                    }}></div>
                    {title}
                </div>

                {status && (
                    <div style={{
                        fontSize: '9px',
                        color: 'rgba(255,255,255,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '2px 6px',
                        borderRadius: '4px'
                    }}>
                        {status}
                    </div>
                )}
            </div>

            {/* Content Body */}
            <div style={{ padding: '16px' }}>
                {children}
            </div>

            {/* Decorative Corner (Bottom Right) */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '0',
                height: '0',
                borderStyle: 'solid',
                borderWidth: '0 0 16px 16px',
                borderColor: `transparent transparent ${accentColor} transparent`,
                opacity: 0.3
            }}></div>
        </div>
    );
};

export default SystemModule;
