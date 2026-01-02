import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';

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

    // Vercel AI SDK Check
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
        initialMessages: [
            { id: 'welcome', role: 'system', content: 'SİSTEM HAZIR. PİLOT, NASIL YARDIMCI OLABİLİRİM?' }
        ],
        onError: (err) => {
            console.error("AI Chat Error:", err);
            // Fallback for demo if API fails
        }
    });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    return (
        <>
            {/* FLOATING BUTTON REMOVED - Controlled by Header */}

            {/* Cyber Chat Interface */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    right: '20px',
                    width: '320px',
                    height: '400px',
                    background: 'rgba(2, 6, 23, 0.95)',
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
                        {messages.map(m => (
                            <div key={m.id} style={{
                                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '85%',
                            }}>
                                <div style={{ fontSize: '10px', color: 'var(--color-text-dim)', marginBottom: '4px', textAlign: m.role === 'user' ? 'right' : 'left' }}>
                                    {m.role === 'user' ? 'PİLOT' : 'SİSTEM'}
                                </div>
                                <div style={{
                                    padding: '12px',
                                    borderRadius: '8px',
                                    background: m.role === 'user' ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                                    color: m.role === 'user' ? 'black' : 'var(--color-primary)',
                                    border: m.role === 'user' ? 'none' : '1px solid rgba(0, 240, 255, 0.2)',
                                    fontFamily: 'monospace',
                                    fontSize: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    {m.role !== 'user' && <span style={{ marginRight: '8px' }}>▶</span>}
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', color: 'var(--color-primary)', fontSize: '10px', animation: 'blink 1s infinite' }}>
                                VERİ İŞLENİYOR...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', gap: '8px', background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <span style={{ color: 'var(--color-primary)', paddingTop: '10px' }}>{'>'}</span>
                            <input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Komut giriniz..."
                                style={{
                                    flex: 1, background: 'transparent', border: 'none', color: 'white',
                                    fontFamily: 'monospace', outline: 'none', fontSize: '14px'
                                }}
                            />
                            <button type="submit" disabled={isLoading} style={{ background: 'var(--color-primary)', border: 'none', borderRadius: '4px', padding: '0 12px', fontWeight: 'bold', cursor: 'pointer', opacity: isLoading ? 0.5 : 1 }}>
                                SEND
                            </button>
                        </div>
                    </form>
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
