import React, { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Merhaba Şafak! Ben BeOne AI. İzmir City OS asistanınım. Bugün sana nasıl yardımcı olabilirim?", sender: 'bot' }
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
            let botText = "Bunu not aldım. İlgili birimlere iletiyorum.";
            if (inputValue.toLowerCase().includes("hava")) botText = "İzmir'de şu an hava 24°C ve güneşli. Güneş panellerin verimli çalışıyor!";
            if (inputValue.toLowerCase().includes("su")) botText = "Baraj doluluk oranlarımız %45 seviyesinde. Tasarruf modun aktif.";
            if (inputValue.toLowerCase().includes("oy")) botText = "Mecliste bekleyen 3 yeni oylama var. 'Park Projesi' için son gün yarın.";

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Action Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '90px', // Above bottom nav
                        right: '20px',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00F0FF, #007AFF)',
                        border: 'none',
                        boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                        color: 'white',
                        fontSize: '24px',
                        cursor: 'pointer',
                        zIndex: 1000,
                        animation: 'pulse 2s infinite'
                    }}
                >
                    🤖
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    right: '20px',
                    width: '320px',
                    height: '450px',
                    background: 'rgba(10, 25, 47, 0.95)',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '16px',
                        background: 'linear-gradient(90deg, #007AFF, #00C6FF)',
                        color: 'white',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '20px' }}>🤖</span>
                            <span>BeOne AI</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {messages.map(msg => (
                            <div key={msg.id} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                background: msg.sender === 'user' ? '#007AFF' : 'rgba(255,255,255,0.1)',
                                color: 'white',
                                fontSize: '14px',
                                borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                                borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '12px'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '8px' }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Bir şeyler yaz..."
                            style={{
                                flex: 1,
                                padding: '10px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: 'rgba(0,0,0,0.3)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: '#007AFF',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.7); }
                    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 240, 255, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); }
                }
                @keyframes popIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </>
    );
};

export default AIAssistant;
