import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    color: '#ef4444',
                    background: 'rgba(20,0,0,0.9)',
                    height: '100%',
                    overflow: 'auto',
                    fontFamily: 'monospace'
                }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>⚠️ SİSTEM HATASI (CRITICAL_FAILURE)</h2>
                    <p style={{ color: 'white', marginBottom: '20px' }}>
                        Bir hata oluştu ve bileşen yüklenemedi. Lütfen sayfayı yenileyin.
                    </p>
                    <details open style={{ whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '8px' }}>
                        <summary style={{ marginBottom: '10px', cursor: 'pointer' }}>Hata Ayrıntıları (Tıkla)</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        SİSTEMİ YENİDEN BAŞLAT
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
