import React from 'react';

const ModeSelector = ({ mode, setMode }) => {
    return (
        <div style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '20px',
            padding: '4px',
            display: 'flex',
            gap: '4px',
            border: '1px solid rgba(255,255,255,0.1)'
        }}>
            <button
                onClick={() => setMode('anime')}
                style={{
                    background: mode === 'anime' ? 'var(--color-primary)' : 'transparent',
                    color: 'white',
                    border: 'none',
                    padding: '6px 16px',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                }}
            >
                ✨ ANIME
            </button>
            <button
                onClick={() => setMode('classic')}
                style={{
                    background: mode === 'classic' ? '#ffffff' : 'transparent',
                    color: mode === 'classic' ? '#000000' : 'rgba(255,255,255,0.6)',
                    border: 'none',
                    padding: '6px 16px',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                }}
            >
                👓 FOCUS
            </button>
        </div>
    );
};

export default ModeSelector;
