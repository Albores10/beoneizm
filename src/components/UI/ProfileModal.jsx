import React, { useRef } from 'react';
import { useUser } from '../../context/UserContext';
import { useToast } from './ToastManager';
import { CyberIcon } from './CyberIcons';

const ProfileModal = ({ onClose, currentMode, onToggleMode }) => {
    const { user, updateAvatar } = useUser();
    const { addToast } = useToast();
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateAvatar(reader.result);
                addToast("Profil fotoğrafı güncellendi!", "success");
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.8)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(5px)', animation: 'fadeIn 0.3s ease'
        }}>
            {/* Holographic Card Container */}
            <div style={{
                width: '90%', maxWidth: '360px',
                background: 'rgba(2, 6, 23, 0.95)',
                border: '1px solid var(--color-primary)',
                borderRadius: '20px',
                padding: '24px',
                position: 'relative',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
                overflow: 'hidden'
            }} className="glass-panel">

                {/* Close Button */}
                <button onClick={onClose} style={{
                    position: 'absolute', top: '15px', right: '15px',
                    background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '24px', cursor: 'pointer', zIndex: 10
                }}>×</button>

                {/* Holographic Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', borderBottom: '1px solid rgba(0, 240, 255, 0.3)', paddingBottom: '16px' }}>

                    {/* AVATAR UPLOAD SECTION */}
                    <div
                        onClick={() => fileInputRef.current.click()}
                        style={{
                            width: '80px', height: '80px',
                            borderRadius: '12px',
                            border: '2px solid var(--color-primary)',
                            background: `url(${user.avatar}) center/cover`,
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 0 15px rgba(0,240,255,0.3)'
                        }}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(0,0,0,0.6)', color: '#00F0FF',
                            fontSize: '10px', fontWeight: 'bold',
                            opacity: 0, transition: 'opacity 0.2s',
                            ':hover': { opacity: 1 }
                        }} className="avatar-hover-overlay">
                            DEĞİŞTİR
                        </div>
                        <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', background: 'var(--color-primary)', color: 'black', fontSize: '10px', fontWeight: 'bold', padding: '2px 4px' }}>LVL {user.level}</div>
                    </div>

                    <div>
                        <div style={{ fontSize: '10px', color: 'var(--color-primary)', letterSpacing: '1px' }}>BEONE CITIZEN ID</div>
                        <h2 style={{ margin: '4px 0', fontSize: '24px', color: 'white', textShadow: '0 0 10px rgba(0, 240, 255, 0.5)' }}>{user.name}</h2>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>ID: {user.citizenId}</div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    <StatBox label="İZMİR DENEYİM" value={user.stats.xp} color="#FFD700" />
                    <StatBox label="IZM TOKEN" value={user.stats.tokens} color="#00F0FF" />
                    <StatBox label="ÇEVRECİLİK" value={user.stats.eco} color="#4ade80" />
                    <StatBox label="PROAKTİFLİK" value={user.stats.proactive} color="#a855f7" />
                </div>

                {/* Bio Data */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>Ünvan</span>
                        <span style={{ fontWeight: 'bold', color: '#FFD700' }}>{user.title}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>Yetki Seviyesi</span>
                        <span style={{ fontWeight: 'bold', color: 'white' }}>Yüksek (Level {user.level})</span>
                    </div>
                </div>

                {/* System Settings: Visual Mode */}
                <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px' }}>GÖRSEL MOD</div>
                    <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '4px' }}>
                        <button onClick={() => onToggleMode('anime')} style={{
                            flex: 1, padding: '8px', border: 'none', borderRadius: '6px', cursor: 'pointer',
                            background: currentMode === 'anime' ? 'var(--color-primary)' : 'transparent',
                            color: currentMode === 'anime' ? 'black' : 'rgba(255,255,255,0.6)', fontWeight: 'bold', fontSize: '12px', transition: 'all 0.2s'
                        }}>
                            ✨ ANIME
                        </button>
                        <button onClick={() => onToggleMode('classic')} style={{
                            flex: 1, padding: '8px', border: 'none', borderRadius: '6px', cursor: 'pointer',
                            background: currentMode === 'classic' ? 'white' : 'transparent',
                            color: currentMode === 'classic' ? 'black' : 'rgba(255,255,255,0.6)', fontWeight: 'bold', fontSize: '12px', transition: 'all 0.2s'
                        }}>
                            👓 FOCUS
                        </button>
                    </div>
                </div>

                {/* Scan Line Effect */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                    background: 'var(--color-primary)', boxShadow: '0 0 15px var(--color-primary)',
                    animation: 'scanCard 3s linear infinite', pointerEvents: 'none'
                }}></div>

                <style>{`
                    @keyframes scanCard {
                        0% { top: 0; opacity: 0; }
                        50% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .avatar-hover-overlay:hover {
                        opacity: 1 !important;
                    }
                `}</style>
            </div>
        </div>
    );
};

const StatBox = ({ label, value, color }) => (
    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px', borderLeft: `2px solid ${color}` }}>
        <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '2px' }}>{label}</div>
        <div style={{ fontWeight: 'bold', color: color, fontSize: '13px' }}>{value}</div>
    </div>
);

export default ProfileModal;
