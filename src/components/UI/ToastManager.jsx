import React, { createContext, useContext, useState, useEffect } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);

        // Auto remove after 3s
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div style={{
                position: 'fixed',
                top: '80px', // Below HUD
                right: '20px',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                pointerEvents: 'none'
            }}>
                {toasts.map(toast => (
                    <div key={toast.id} style={{
                        background: toast.type === 'success' ? 'rgba(74, 222, 128, 0.9)' :
                            toast.type === 'error' ? 'rgba(248, 113, 113, 0.9)' :
                                'rgba(0, 122, 255, 0.9)',
                        color: 'white',
                        padding: '12px 20px',
                        borderRadius: '12px',
                        backdropFilter: 'blur(5px)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        minWidth: '200px',
                        animation: 'slideIn 0.3s ease',
                        pointerEvents: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span>{toast.type === 'success' ? '✅' : toast.type === 'error' ? '⚠️' : 'ℹ️'}</span>
                        <span style={{ fontWeight: '500', fontSize: '14px' }}>{toast.message}</span>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `}</style>
        </ToastContext.Provider>
    );
};
