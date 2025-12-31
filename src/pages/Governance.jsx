import React, { useState } from 'react';
import VotingPower from '../components/UI/VotingPower';
import { useToast } from '../components/UI/ToastManager';

const Governance = () => {
    const { addToast } = useToast();
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

    return (
        <div style={{ padding: '0 20px', maxWidth: '100%', overflowX: 'hidden' }}>
            <h1 style={{ fontSize: '28px', marginBottom: '8px', fontWeight: '300' }}>BeOne <span style={{ fontWeight: '700', color: '#FFD700' }}>Meclis</span></h1>
            <p style={{ margin: '0 0 24px 0', color: 'rgba(255,255,255,0.6)' }}>Mahalle yönetimine doğrudan katıl.</p>

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
                        <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '4px', opacity: 0.5 }}>Topam Oy: {votes.for + votes.against}</div>
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
        </div>
    );
};

export default Governance;
