import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = ({ isOpen: externalIsOpen, onClose }) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    // Sync external state if provided
    useEffect(() => {
        if (externalIsOpen !== undefined) {
            setInternalIsOpen(externalIsOpen);
        }
    }, [externalIsOpen]);

    // Listen for custom event from CityOSFrame header
    useEffect(() => {
        const handleToggle = () => setInternalIsOpen(prev => !prev);
        window.addEventListener('toggle-ai-assistant', handleToggle);
        return () => window.removeEventListener('toggle-ai-assistant', handleToggle);
    }, []);

    const handleClose = () => {
        setInternalIsOpen(false);
        if (onClose) onClose();
    };

    const isOpen = internalIsOpen;
    const [messages, setMessages] = useState([
        { id: 1, text: "SİSTEM HAZIR. PİLOT, NASIL YARDIMCI OLABİLİRİM?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // User Message
        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Simulated AI Response
        setTimeout(() => {
            let botText = "KOMUT ALGILANDI. İŞLENİYOR...";
            if (inputValue.toLowerCase().includes("hava")) botText = "SENSOR RAPORU: İZMİR LOKASYONU 24°C. GÖRÜŞ AÇIK.";
            if (inputValue.toLowerCase().includes("su")) botText = "BARAJ SEVİYESİ KRİTİK (%45). SU TASARRUFU MODU AKTİF.";
            if (inputValue.toLowerCase().includes("oy")) botText = "MECLİS GÜNDEMİ: 3 BEKLEYEN OYLAMA MEVCUT.";

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            {/* FLOATING BUTTON REMOVED - Controlled by Header */}

            {/* Cyber Chat Interface */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px', // Positioned relative to Top Header now
                    right: '20px',
                    width: '320px',
                    height: '400px',
                    background: 'rgba(2, 6, 23, 0.95)', // Deep Navy
                    borderRadius: '16px',
                    border: '1px solid var(--color-primary)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                    zIndex: 2000,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                    {/* Tech Header */}
                    <div style={{
                        padding: '12px',
                        background: 'rgba(0, 240, 255, 0.1)',
                        borderBottom: '1px solid var(--color-primary)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-primary)' }}></div>
                            <span style={{ fontFamily: 'monospace', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--color-primary)', fontSize: '12px' }}>AI_LINK_V2.0</span>
                        </div>
                        <button onClick={handleClose} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '20px', cursor: 'pointer' }}>×</button>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {messages.map(msg => (
                            <div key={msg.id} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '85%',
                            }}>
                                <div style={{ fontSize: '10px', color: 'var(--color-text-dim)', marginBottom: '4px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                                    {msg.sender === 'user' ? 'PİLOT' : 'SİSTEM'}
                                </div>
                                <div style={{
                                    padding: '12px',
                                    borderRadius: '8px',
                                    background: msg.sender === 'user' ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                                    color: msg.sender === 'user' ? 'black' : 'var(--color-primary)',
                                    border: msg.sender === 'user' ? 'none' : '1px solid rgba(0, 240, 255, 0.2)',
                                    fontFamily: 'monospace',
                                    fontSize: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    {msg.sender === 'bot' && <span style={{ marginRight: '8px' }}>▶</span>}
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <span style={{ color: 'var(--color-primary)', paddingTop: '10px' }}>{'>'}</span>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Komut giriniz..."
                                style={{
                                    flex: 1, background: 'transparent', border: 'none', color: 'white',
                                    fontFamily: 'monospace', outline: 'none', fontSize: '14px'
                                }}
                            />
                            <button onClick={handleSend} style={{ background: 'var(--color-primary)', border: 'none', borderRadius: '4px', padding: '0 12px', fontWeight: 'bold', cursor: 'pointer' }}>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes orbFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </>
    );
};

export default AIAssistant;
