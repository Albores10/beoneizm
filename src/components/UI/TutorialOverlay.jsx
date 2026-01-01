import React, { useState } from 'react';

const TutorialOverlay = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "City OS'e Hoşgeldin",
            text: "Burası İzmir'in dijital ikizi. Şehri yönetmek, hisse almak ve katılmak için tasarlanmış yeni nesil arayüz.",
            highlight: null
        },
        {
            title: "Canlı Veriler",
            text: "Şehrin sağlık, enerji ve güvenlik durumunu buradan anlık takip edebilirsin. Göstergeler sürekli güncellenir.",
            // Corrected: Point to Top Right Status Grid in Dashboard
            highlight: { top: '80px', right: '20px', width: '140px', height: '60px' }
        },
        {
            title: "Dijital Kimlik",
            text: "Profiline buradan ulaşabilirsin. Seviye atla, rozet kazan ve şehrin yönetiminde söz sahibi ol.",
            // Corrected: Point to Profile Avatar in Dashboard Header (approx)
            highlight: { top: '80px', left: '20px', width: '60px', height: '60px', borderRadius: '50%' }
        },
        {
            title: "Varlık Yönetimi",
            text: "Konut fonlarından, güneş tarlalarına kadar 'Tuğla' alarak şehre yatırım yapabilirsin.",
            // Corrected: Point to Wallet Module (approx 200px down)
            highlight: { top: '160px', left: '16px', right: '16px', width: 'auto', height: '100px' }
        },
        {
            title: "Acil Durum (SOS)",
            text: "Herhangi bir afet durumunda arayüz 'Kırmızı Alarm' moduna geçer. Güvenli bölgeleri haritada bulabilirsin.",
            // Corrected: Point to Top Right SOS button in CityOSFrame
            highlight: { top: '10px', right: '10px', width: '200px', height: '50px' }
        }
    ];

    const currentStep = steps[step];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(s => s + 1);
        } else {
            onComplete();
        }
    };

    const handleSkip = () => {
        // Automatically check "Don't show again" if skipped? 
        // Or just close. Let's assume skip implies "I know this", so we save it.
        const dontShow = document.getElementById('dontShow')?.checked;
        onComplete(true); // Force true for skip? No, let's respect the checkbox OR force it. 
        // User asked for "Skip", usually means "Close now". 
        // Using "true" ensures it doesn't annoy them again if they skipped it.
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9000,
            pointerEvents: 'auto'
        }}>
            {/* Skip Button */}
            <button
                onClick={() => onComplete(true)}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    zIndex: 9002,
                    fontSize: '12px',
                    fontWeight: 'bold',
                    pointerEvents: 'auto'
                }}>
                EĞİTİMİ ATLA ⏭
            </button>

            {/* Dark Mask with Cutout simulation aka 'Spotlight' */}
            <div style={{
                position: 'absolute', width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)',
                clipPath: currentStep.highlight
                    ? `polygon(
                        0% 0%, 
                        0% 100%, 
                        ${currentStep.highlight.left || '0px'} 100%, 
                        ${currentStep.highlight.left || '0px'} ${currentStep.highlight.top}, 
                        calc(${currentStep.highlight.left || '0px'} + ${currentStep.highlight.width}) ${currentStep.highlight.top}, 
                        calc(${currentStep.highlight.left || '0px'} + ${currentStep.highlight.width}) calc(${currentStep.highlight.top} + ${currentStep.highlight.height}), 
                        ${currentStep.highlight.left || '0px'} calc(${currentStep.highlight.top} + ${currentStep.highlight.height}), 
                        ${currentStep.highlight.left || '0px'} 100%, 
                        100% 100%, 
                        100% 0%
                      )`
                    : 'none'
            }}></div>

            {/* If simple cutout isn't enough, we use a simple overlaid box for highlight border */}
            {currentStep.highlight && (
                <div style={{
                    position: 'absolute',
                    top: currentStep.highlight.top || 'auto',
                    left: currentStep.highlight.left || 'auto',
                    bottom: currentStep.highlight.bottom || 'auto',
                    right: currentStep.highlight.right || 'auto',
                    width: currentStep.highlight.width,
                    height: currentStep.highlight.height,
                    borderRadius: currentStep.highlight.borderRadius || '8px',
                    border: '2px solid #00F0FF',
                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                    animation: 'pulseBorder 2s infinite'
                }}></div>
            )}

            {/* Card */}
            <div className="glass-panel" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                padding: '24px',
                background: 'rgba(10, 20, 40, 0.95)',
                border: '1px solid #00F0FF',
                borderRadius: '16px',
                textAlign: 'center'
            }}>
                <div style={{ fontSize: '10px', color: '#00F0FF', letterSpacing: '2px', marginBottom: '8px' }}>
                    SİSTEM REHBERİ {step + 1}/{steps.length}
                </div>
                <h2 style={{ fontSize: '20px', margin: '0 0 12px 0' }}>{currentStep.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                    {currentStep.text}
                </p>
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <input type="checkbox" id="dontShow" style={{ accentColor: '#00F0FF' }} />
                    <label htmlFor="dontShow" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>Bir daha gösterme</label>
                </div>
                <button
                    onClick={() => {
                        const dontShow = document.getElementById('dontShow')?.checked;
                        if (step === steps.length - 1) {
                            onComplete(dontShow);
                        } else {
                            handleNext();
                        }
                    }}
                    style={{
                        background: '#00F0FF',
                        color: 'black',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    {step === steps.length - 1 ? 'BAŞLA' : 'DEVAM ET'}
                </button>
            </div>
            <style>{`
                @keyframes pulseBorder {
                    0% { opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default TutorialOverlay;
