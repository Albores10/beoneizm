import React from 'react';

const MenuOverlay = ({ onClose, onNavigate }) => {
    const menuItems = [
        { id: 'dashboard', label: 'KOMUTA MERKEZİ', icon: '🏠' },
        { id: 'profile', label: 'KİMLİK KARTI', icon: '🆔' },
        { id: 'wallet', label: 'CÜZDAN & VARLIK', icon: '💳' },
        { id: 'map', label: 'CANLI HARİTA', icon: '🗺️' },
        { id: 'housing', label: 'KONUT PROJELERİ', icon: '🏙️' },
        { id: 'governance', label: 'MECLİS & OYLAMA', icon: '⚖️' },
        { id: 'logistics', label: 'LOJİSTİK AĞI', icon: '🚁' },
        { id: 'market', label: 'PAZAR YERİ', icon: '🛍️' },
        { id: 'transparency', label: 'ŞEFFAFLIK RAPORU', icon: '📊' },
    ];

    const handleItemClick = (id) => {
        if (id === 'profile') {
            onNavigate('profile'); // Special case for profile modal
        } else {
            onNavigate(id);
        }
        // onClose(); // REMOVED: onNavigate changes activeTab, which unmounts this component. Calling onClose resets tab to dashboard!
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
                        ':hover': { borderColor: 'var(--color-primary)', background: 'rgba(0, 240, 255, 0.05)' }
                    }}>
                        <div style={{ fontSize: '32px' }}>{item.icon}</div>
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
