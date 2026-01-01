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
                onClick={() => onTabChange('quick_action')}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-primary), #00C6FF)',
                    marginTop: '-30px',
                    boxShadow: '0 4px 15px rgba(0, 122, 255, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    zIndex: 1002
                }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
            <NavItem
                label="Meclis"
                active={activeTab === 'governance'}
                onClick={() => onTabChange('governance')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                }
            />
            <NavItem
                label="Pazar Yeri"
                active={activeTab === 'market'}
                onClick={() => onTabChange('market')}
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                }
            />
        </div>
    );
};

export default BottomNav;
