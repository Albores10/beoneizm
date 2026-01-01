import React from 'react';

const NavItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            background: 'transparent',
            border: 'none',
            color: active ? 'var(--color-secondary)' : 'var(--color-text-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            opacity: active ? 1 : 0.6,
            transition: 'all 0.3s ease'
        }}
    >
        {icon}
        <span style={{ fontSize: '10px', fontWeight: 600 }}>{label}</span>
    </button>
);

const BottomNav = ({ activeTab, onTabChange }) => {
    return (
        <div className="glass-panel" style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            height: '70px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
            padding: '0 10px'
        }}>
            <NavItem
                label="Şehir"
                active={activeTab === 'map'}
                onClick={() => onTabChange('map')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                }
            />
            <NavItem
                label="Cüzdan"
                active={activeTab === 'wallet'}
                onClick={() => onTabChange('wallet')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                }
            />
            <div
                onClick={() => onTabChange('dashboard')} // Changed from quick_action to dashboard
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-dark)', // Dark background for contrast
                    marginTop: '-30px',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)', // Cyan Glow
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--color-primary)', // Cyber border
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    zIndex: 1002,
                    position: 'relative'
                }}>
                {/* Hexagon Shape inside for Command Center feel */}
                <div style={{
                    width: '32px', height: '32px',
                    background: 'var(--color-primary)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{ width: '12px', height: '12px', background: 'black', borderRadius: '50%' }}></div>
                </div>
            </div>
            <NavItem
                label="Market"
                active={activeTab === 'market'}
                onClick={() => onTabChange('market')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                }
            />
            <NavItem
                label="Menü"
                active={activeTab === 'menu'}
                onClick={() => onTabChange('menu')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                }
            />
        </div>
    );
};

export default BottomNav;
