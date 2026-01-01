import React, { useState } from 'react';
import VotingPower from '../components/UI/VotingPower';
import { useToast } from '../components/UI/ToastManager';
import { CyberIcon } from '../components/UI/CyberIcons';

const Governance = () => {
    const { addToast } = useToast();
    const [activeTab, setActiveTab] = useState('voting'); // 'voting' or 'imece'
    const [votes, setVotes] = useState({ for: 1240, against: 310 });
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = (type) => {
        if (hasVoted) {
            addToast("Zaten oy kullandınız.", "error");
            return;
        }

        if (type === 'for') {
            setVotes(prev => ({ ...prev, for: prev.for + 1 }));
            addToast("Oyunuz Kaydedildi: KABUL (+5 XP)", "success");
        } else {
            setVotes(prev => ({ ...prev, against: prev.against + 1 }));
            addToast("Oyunuz Kaydedildi: RET", "info");
        }
        setHasVoted(true);
    };

    const handleInvest = (amount) => {
        addToast(`İmece Yatırımı Başarılı: ${amount} IZM`, "success");
        addToast("Hissedar Sertifikası Cüzdana Eklendi", "info");
    };

    return (
        <div style={{ padding: '0 20px', maxWidth: '100%', overflowX: 'hidden', paddingBottom: '120px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '28px', margin: 0, fontWeight: '300' }}>BeOne <span style={{ fontWeight: '700', color: '#FFD700' }}>Meclis</span></h1>
                <div style={{ fontSize: '10px', background: 'rgba(255,215,0,0.1)', color: '#FFD700', padding: '4px 8px', borderRadius: '4px', border: '1px solid #FFD700' }}>
                    YETKİ: YÜKSEK
                </div>
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px', marginBottom: '24px' }}>
                <button
                    onClick={() => setActiveTab('voting')}
                    style={{
                        flex: 1, padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                        background: activeTab === 'voting' ? 'rgba(255,255,255,0.1)' : 'transparent',
                        color: activeTab === 'voting' ? 'white' : 'rgba(255,255,255,0.5)',
                        fontWeight: 'bold', transition: 'all 0.2s'
                    }}
                >
                    OYLAMA
                </button>
                <button
                    onClick={() => setActiveTab('imece')}
                    style={{
                        flex: 1, padding: '10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                        background: activeTab === 'imece' ? 'rgba(255,215,0,0.2)' : 'transparent',
                        color: activeTab === 'imece' ? '#FFD700' : 'rgba(255,255,255,0.5)',
                        fontWeight: 'bold', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
                    }}
                >
                    <span>🤝 İMECE</span>
                </button>
            </div>

            {activeTab === 'voting' ? (
                /* --- VOTING SECTION --- */
                <>
                    {/* Voting Power */}
                    <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>OY GÜCÜN</div>
                            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>142</div>
                            <div style={{ fontSize: '12px', color: '#4ade80' }}>+12 (Bu Ay)</div>
                        </div>
                        <VotingPower percentage={75} />
                    </div>

                    {/* Active Proposal */}
                    <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Gündemdeki Oylama</h2>
                    <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', marginBottom: '24px' }}>
                        <div style={{ height: '140px', background: 'url(https://placehold.co/600x300/1e293b/FFFFFF?text=Park+Projesi) no-repeat center center / cover', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#007AFF', color: 'white', fontSize: '10px', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                                YEREL OYLAMA
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Bornova 2. Etap Park Alanı</h3>
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.5', marginBottom: '20px' }}>
                                Mevcut atıl alanın güneş enerjili aydınlatmaya sahip akıllı parka dönüştürülmesi projesi.
                            </p>

                            {/* Progress Bar */}
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                                    <span style={{ color: '#4ade80' }}>%80 Kabul</span>
                                    <span style={{ color: '#f87171' }}>%20 Ret</span>
                                </div>
                                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', display: 'flex' }}>
                                    <div style={{ width: '80%', background: '#4ade80' }}></div>
                                    <div style={{ width: '20%', background: '#f87171' }}></div>
                                </div>
                                <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '4px', opacity: 0.5 }}>Toplam Oy: {votes.for + votes.against}</div>
                            </div>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => handleVote('for')} style={{
                                    flex: 1, padding: '12px', border: 'none', borderRadius: '12px',
                                    background: hasVoted ? 'rgba(74, 222, 128, 0.2)' : '#4ade80', color: hasVoted ? '#4ade80' : '#0f172a', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s'
                                }}>
                                    KABUL ✓
                                </button>
                                <button onClick={() => handleVote('against')} style={{
                                    flex: 1, padding: '12px', border: '1px solid #f87171', borderRadius: '12px',
                                    background: 'transparent', color: '#f87171', fontWeight: 'bold', cursor: 'pointer'
                                }}>
                                    RET ✗
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                /* --- IMECE SECTION --- */
                <div className="animate-fade-in">
                    <div style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0,0,0,0) 100%)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255, 215, 0, 0.3)', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '20px', color: '#FFD700', marginBottom: '8px' }}>İmece Yatırım Platformu</h2>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4' }}>
                            Şehrinin geleceğine yatırım yap, projelerden kar payı al. Birlikte üretelim, birlikte kazanalım.
                        </p>
                    </div>

                    <h3 style={{ fontSize: '16px', marginBottom: '16px', borderLeft: '3px solid #FFD700', paddingLeft: '10px' }}>Açık Yatırım Fırsatları</h3>

                    <ImeceProjectCard
                        title="İzmir Solar Tarlası 2"
                        location="Urla, İzmir"
                        target="15.000.000 ₺"
                        raised="8.450.000 ₺"
                        progress={56}
                        minInvest="1.000"
                        roi="%18 Yıllık"
                        tags={['Enerji', 'Yeşil']}
                        onInvest={() => handleInvest(1000)}
                    />

                    <ImeceProjectCard
                        title="Dikey Tarım Tesisi"
                        location="Bayraklı, İzmir"
                        target="5.000.000 ₺"
                        raised="1.200.000 ₺"
                        progress={24}
                        minInvest="500"
                        roi="%22 Yıllık"
                        tags={['Gıda', 'Teknoloji']}
                        onInvest={() => handleInvest(500)}
                    />
                </div>
            )}
        </div>
    );
};

const ImeceProjectCard = ({ title, location, target, raised, progress, minInvest, roi, tags, onInvest }) => (
    <div className="glass-panel" style={{ padding: '20px', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: 'white' }}>{title}</h3>
            <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{location}</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {tags.map((tag, i) => (
                <span key={i} style={{ fontSize: '10px', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>#{tag}</span>
            ))}
        </div>

        <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>
                <span>Toplanan: <span style={{ color: 'white' }}>{raised}</span></span>
                <span>Hedef: {target}</span>
            </div>
            <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: '#FFD700', boxShadow: '0 0 10px rgba(255,215,0,0.5)' }}></div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '10px', color: '#FFD700', marginTop: '2px' }}>%{progress} Tamamlandı</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
            <div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>TAHMİNİ GETİRİ</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4ade80' }}>{roi}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>MİN. YATIRIM</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'white' }}>{minInvest} IZM</div>
            </div>
        </div>

        <button
            onClick={onInvest}
            style={{
                width: '100%', padding: '14px', background: '#FFD700', color: 'black',
                border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}
        >
            HİSSEDAR OL ➔
        </button>
    </div>
);

export default Governance;
