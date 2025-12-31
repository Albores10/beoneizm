import { useState, useEffect } from 'react'
import BottomNav from './components/Layout/BottomNav'
import Dashboard from './pages/Dashboard'
import Map from './pages/Map'
import Housing from './pages/Housing'
import Governance from './pages/Governance'
import Logistics from './pages/Logistics'
import Operation from './pages/Operation'
import Transparency from './pages/Transparency'
import ModeSelector from './components/UI/ModeSelector'

// Simple Router/State for Prototype
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mode, setMode] = useState('anime');

  useEffect(() => {
    document.body.className = mode === 'classic' ? 'mode-classic' : '';
  }, [mode]);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard onNavigate={setActiveTab} />;
      case 'map': return <Map />;
      case 'wallet': return <Housing />;
      case 'governance': return <Governance />;
      case 'market': return <Operation />;
      case 'logistics': return <Logistics />;
      case 'transparency': return <Transparency />;
      default: return <Dashboard />;
    }
  }

  return (
    <>
      <div style={{ flex: 1, position: 'relative' }}>
        <ModeSelector mode={mode} setMode={setMode} />

        {/* Background City Image or Effect - Conditional */}
        {mode === 'anime' && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'radial-gradient(circle at 50% 10%, #1a2a4a 0%, #0a192f 100%)'
          }} />
        )}

        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}

export default App
