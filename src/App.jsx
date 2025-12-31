import { useState, useEffect } from 'react'
import BottomNav from './components/Layout/BottomNav'
import Dashboard from './pages/Dashboard'
import Map from './pages/Map'
import Housing from './pages/Housing'
import Governance from './pages/Governance'
import Logistics from './pages/Logistics'
import Operation from './pages/Operation'
import Transparency from './pages/Transparency'
import Wallet from './pages/Wallet'
import ModeSelector from './components/UI/ModeSelector'
import CityOSFrame from './components/Layout/CityOSFrame'
import AssetDetail from './pages/AssetDetail'
import ProfileModal from './components/UI/ProfileModal'

// Simple Router/State for Prototype
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mode, setMode] = useState('anime');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    document.body.className = mode === 'classic' ? 'mode-classic' : '';
  }, [mode]);

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard
          onNavigate={setActiveTab}
          onAssetClick={(asset) => setSelectedAsset(asset)}
          onProfileClick={() => setShowProfile(true)}
        />;
      case 'map': return <Map />;
      case 'wallet': return <Wallet />;
      case 'governance': return <Governance />;
      case 'market': return <Operation />;
      case 'logistics': return <Logistics />;
      case 'transparency': return <Transparency />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  }

  return (
    <>
      <div style={{ flex: 1, position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <CityOSFrame mode={mode}>
          <ModeSelector currentMode={mode} onToggle={toggleMode} />

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

          <div style={{
            paddingTop: '60px',
            paddingBottom: '80px',
            height: '100%',
            overflowY: 'auto',
            scrollbarWidth: 'none' // Hide scrollbar for cleaner look
          }}>
            {renderContent()}
          </div>
        </CityOSFrame>

        {/* Global Overlays */}
        {selectedAsset && (
          <AssetDetail
            assetId={selectedAsset.id}
            onClose={() => setSelectedAsset(null)}
          />
        )}

        {showProfile && (
          <ProfileModal onClose={() => setShowProfile(false)} />
        )}

      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}

export default App
