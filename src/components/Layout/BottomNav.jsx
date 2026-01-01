// BottomNav.jsx - High Fidelity Refactor
import React from 'react';
import { CyberIcon } from '../UI/CyberIcons';

const NavItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            background: active ? 'linear-gradient(180deg, rgba(0, 240, 255, 0.1) 0%, rgba(0,0,0,0) 100%)' : 'transparent',
            border: active ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid transparent',
            color: active ? '#00F0FF' : 'rgba(255,255,255,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            minWidth: '60px',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {/* Glow effect for active state */}
        {active && (
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at center, rgba(0,240,255,0.2) 0%, transparent 70%)',
                zIndex: 0
            }}></div>
        )}

        <div style={{ position: 'relative', zIndex: 1 }}>{icon}</div>
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px', position: 'relative', zIndex: 1 }}>{label}</span>

        {/* Active Indicator Dot */}
        {active && <div style={{ position: 'absolute', bottom: '4px', width: '4px', height: '4px', background: '#00F0FF', borderRadius: '50%', boxShadow: '0 0 5px #00F0FF' }}></div>}
    </button>
);

const BottomNav = ({ activeTab, onTabChange }) => {
    return (
        <div className="glass-panel" style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            height: '80px', // Slightly taller for better touch targets
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            padding: '0 16px',
            borderRadius: '24px', // More modern rounding
            background: 'rgba(10, 25, 47, 0.85)', // Darker Navy
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
            <NavItem
                label="Şehir"
                active={activeTab === 'map'}
                onClick={() => onTabChange('map')}
                icon={<CyberIcon name="map" size={20} />}
            />
            <NavItem
                label="Cüzdan"
                active={activeTab === 'wallet'}
                onClick={() => onTabChange('wallet')}
                icon={<CyberIcon name="wallet" size={20} />}
            />

            {/* CENTRAL COMMAND BUTTON */}
            <div
                onClick={() => onTabChange('dashboard')}
                style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '20px', // Squircle
                    background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
                    marginTop: '-40px',
                    boxShadow: activeTab === 'dashboard'
                        ? '0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 10px rgba(0, 240, 255, 0.3)'
                        : '0 0 15px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--color-primary)', // Cyber border
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1002,
                    position: 'relative',
                    transform: activeTab === 'dashboard' ? 'scale(1.1) translateY(-5px)' : 'scale(1)'
                }}>
                {/* Inner Hexagon */}
                <div style={{
                    width: '40px', height: '40px',
                    background: 'var(--color-primary)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    animation: activeTab === 'dashboard' ? 'pulse 2s infinite' : 'none'
                }}>
                    <div style={{ width: '14px', height: '14px', background: '#0a192f', borderRadius: '50%' }}></div>
                </div>
            </div>

            <NavItem
                label="Market"
                active={activeTab === 'market'}
                onClick={() => onTabChange('market')}
                icon={<CyberIcon name="market" size={20} />}
            />
            <NavItem
                label="Menü"
                active={activeTab === 'menu'}
                onClick={() => onTabChange('menu')}
                icon={<CyberIcon name="guide" size={20} />}
            />
        </div>
    );
};

export default BottomNav;
