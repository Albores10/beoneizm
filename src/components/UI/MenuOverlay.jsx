import { CyberIcon } from './CyberIcons';

const MenuOverlay = ({ onClose, onNavigate }) => {
    const menuItems = [
        { id: 'dashboard', label: 'KOMUTA MERKEZİ', icon: <CyberIcon name="dashboard" size={32} /> },
        { id: 'profile', label: 'KİMLİK KARTI', icon: <CyberIcon name="profile" size={32} /> },
        { id: 'wallet', label: 'CÜZDAN & VARLIK', icon: <CyberIcon name="wallet" size={32} /> },
        { id: 'map', label: 'CANLI HARİTA', icon: <CyberIcon name="map" size={32} /> },
        { id: 'housing', label: 'KONUT PROJELERİ', icon: <CyberIcon name="housing" size={32} /> },
        { id: 'governance', label: 'MECLİS & OYLAMA', icon: <CyberIcon name="governance" size={32} /> },
        { id: 'logistics', label: 'LOJİSTİK AĞI', icon: <CyberIcon name="logistics" size={32} /> },
        { id: 'market', label: 'PAZAR YERİ', icon: <CyberIcon name="market" size={32} /> },
        { id: 'transparency', label: 'ŞEFFAFLIK RAPORU', icon: <CyberIcon name="transparency" size={32} /> },
        { id: 'resources', label: 'REHBER & DÖKÜMAN', icon: <CyberIcon name="guide" size={32} /> }, // New Item
    ];

    const handleItemClick = (id) => {
        if (id === 'profile') {
            onNavigate('profile');
        } else if (id === 'resources') {
            onNavigate('resources'); // New Case
        } else {
            onNavigate(id);
        }
        // onClose removed for normal nav, but for overlay navs (profile/resources) we stay or close?
        // App.jsx controls this. If onNavigate sets activeTab != menu, this unmounts.
        // For 'resources' or 'profile', we might want to CLOSE the menu too. 
        // IF 'profile' or 'resources' are MODALS, we need to close menu to see them?
        // Yes, App.jsx handles this by switching activeTab to 'dashboard' usually for modals.
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(2, 6, 23, 0.98)',
            zIndex: 1100,
            display: 'flex', flexDirection: 'column',
            animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
            {/* Header */}
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-primary)' }}>
                <h2 style={{ margin: 0, color: 'var(--color-primary)', fontFamily: 'monospace', letterSpacing: '2px' }}>SİSTEM MENÜSÜ</h2>
                <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', fontSize: '28px', cursor: 'pointer' }}>×</button>
            </div>

            {/* Grid */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignContent: 'start' }}>
                {menuItems.map(item => (
                    <div key={item.id} onClick={() => handleItemClick(item.id)} style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                            e.currentTarget.style.background = 'rgba(0, 240, 255, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        }}
                    >
                        <div style={{ color: 'var(--color-secondary)' }}>{item.icon}</div>
                        <div style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bold', color: 'white' }}>{item.label}</div>
                    </div>
                ))}
            </div>

            {/* Version Info */}
            <div style={{ padding: '24px', textAlign: 'center', fontSize: '10px', color: 'var(--color-text-dim)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                BEONE CITY OS v12.7 <br /> SYSTEM STATUS: ONLINE
            </div>

            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
};

export default MenuOverlay;
