import React from 'react';
import { CyberIcon } from './CyberIcons';

const ResourcesModal = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            background: 'rgba(2, 6, 23, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
        }}>
            <div className="glass-panel" style={{
                width: '90%',
                maxWidth: '600px',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                padding: '0',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '20px',
                    borderBottom: '1px solid var(--color-primary)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(0,0,0,0.5)'
                }}>
                    <h2 style={{ margin: 0, fontSize: '20px', letterSpacing: '2px', color: 'var(--color-primary)' }}>
                        <CyberIcon name="guide" size={24} /> SİSTEM KILAVUZU
                    </h2>
                    <button onClick={onClose} style={{
                        background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer'
                    }}>×</button>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>

                    {/* Intro */}
                    <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                        <h3 style={{ color: 'white', marginBottom: '8px' }}>BeOne City OS v2.0</h3>
                        <p style={{ color: 'var(--color-text-dim)', fontSize: '14px' }}>
                            İzmir'in dijital ikizi ve kentsel yönetim sistemi kullanım kılavuzuna hoş geldiniz.
                        </p>
                    </div>

                    {/* Resources Grid */}
                    <div style={{ display: 'grid', gap: '16px' }}>

                        {/* Video Section */}
                        <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                            <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-secondary)' }}>📺 EĞİTİM VİDEOLARI</h4>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <ResourceLink icon="▶" title="Sistem Tanıtımı (2 dk)" type="Video" />
                                <ResourceLink icon="▶" title="Token Ekonomisi ve Varlık Yönetimi" type="Video" />
                                <ResourceLink icon="▶" title="Meclis Oylama Süreçleri" type="Video" />
                            </div>
                        </div>

                        {/* Docs Section */}
                        <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', background: 'rgba(255,255,255,0.02)' }}>
                            <h4 style={{ margin: '0 0 12px 0', color: 'var(--color-primary)' }}>📄 DOKÜMANLAR (PDF)</h4>
                            <div style={{ display: 'grid', gap: '8px' }}>
                                <ResourceLink icon="📄" title="BeOne İzmir Vizyon Belgesi (Whitepaper)" type="PDF" />
                                <ResourceLink icon="📄" title="Vatandaşlık Puanı Kılavuzu" type="PDF" />
                                <ResourceLink icon="📄" title="Yasal Uyarılar ve KVKK" type="PDF" />
                            </div>
                        </div>

                    </div>

                    {/* Footer Warning */}
                    <div style={{ marginTop: '32px', padding: '16px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', fontSize: '12px', color: '#ef4444' }}>
                        ⚠️ UYARI: Bu sistem henüz Beta aşamasındadır. Yapılan işlemler simülasyon amaçlıdır. Gerçek finansal değeri yoktur.
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResourceLink = ({ icon, title, type }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'all 0.2s'
    }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '18px' }}>{icon}</span>
            <span style={{ fontSize: '14px', color: 'white' }}>{title}</span>
        </div>
        <span style={{ fontSize: '10px', padding: '2px 6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', color: 'var(--color-text-dim)' }}>
            {type}
        </span>
    </div>
);

export default ResourcesModal;
