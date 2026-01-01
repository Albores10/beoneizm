import { useState, useEffect, Suspense, lazy } from 'react'
import BottomNav from './components/Layout/BottomNav'

// Lazy Load Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Map = lazy(() => import('./pages/Map'));
const Housing = lazy(() => import('./pages/Housing'));
const Governance = lazy(() => import('./pages/Governance'));
const Logistics = lazy(() => import('./pages/Logistics'));
const Operation = lazy(() => import('./pages/Operation'));
const Transparency = lazy(() => import('./pages/Transparency'));
const Wallet = lazy(() => import('./pages/Wallet'));

import ModeSelector from './components/UI/ModeSelector'
import CityOSFrame from './components/Layout/CityOSFrame'
import AssetDetail from './pages/AssetDetail'
import ProfileModal from './components/UI/ProfileModal'
import { ToastProvider } from './components/UI/ToastManager'
import AIAssistant from './components/UI/AIAssistant'
import { EmergencyProvider, useEmergency } from './context/EmergencyContext'
import LoginScreen from './pages/LoginScreen'
import TutorialOverlay from './components/UI/TutorialOverlay'
import MenuOverlay from './components/UI/MenuOverlay'

import ErrorBoundary from './components/UI/ErrorBoundary'

const AppContent = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mode, setMode] = useState('anime');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  // Hook for Emergency Context
  const { isEmergency } = useEmergency();

  const handleLogin = () => {
    setUserAuthenticated(true);
    const tutorialComplete = localStorage.getItem('tutorial_completed');
    if (!tutorialComplete) {
      setTimeout(() => setShowTutorial(true), 1000);
    }
  };

  useEffect(() => {
    document.body.className = '';
    if (isEmergency) {
      document.body.classList.add('mode-emergency');
    } else if (mode === 'classic') {
      document.body.classList.add('mode-classic');
    }
  }, [mode, isEmergency]);

  const toggleMode = (newMode) => setMode(newMode);

  // Content Renderer with Suspense
  const renderContent = () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={
          <div style={{
            height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#00F0FF', fontFamily: 'monospace', letterSpacing: '2px'
          }}>
            YÜKLENİYOR...
          </div>
        }>
          {activeTab === 'dashboard' && <Dashboard onNavigate={setActiveTab} onAssetClick={setSelectedAsset} onProfileClick={() => setShowProfile(true)} />}
          {activeTab === 'map' && <Map />}
          {activeTab === 'housing' && <Housing />}
          {activeTab === 'wallet' && <Wallet />}
          {activeTab === 'governance' && <Governance />}
          {activeTab === 'market' && <Operation />}
          {activeTab === 'logistics' && <Logistics />}
          {activeTab === 'transparency' && <Transparency />}
        </Suspense>
      </ErrorBoundary>
    );
  };

  if (!userAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <>
      <div style={{ flex: 1, position: 'relative', height: '100vh', overflow: 'hidden' }}>

        {showTutorial && <TutorialOverlay onComplete={(dontShow) => {
          if (dontShow) localStorage.setItem('tutorial_completed', 'true');
          setShowTutorial(false);
        }} />}

        <CityOSFrame mode={mode}>
          <ModeSelector currentMode={mode} onToggle={toggleMode} />

          {mode === 'anime' && !isEmergency && (
            <div style={{
              position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1,
              background: 'radial-gradient(circle at 50% 10%, #1a2a4a 0%, #0a192f 100%)'
            }} />
          )}

          {/* Content is now scrolled by CityOSFrame */}
          {renderContent()}
        </CityOSFrame>

        {selectedAsset && <AssetDetail assetId={selectedAsset.id} onClose={() => setSelectedAsset(null)} />}
        {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}

        <AIAssistant isOpen={activeTab === 'quick_action'} onClose={() => setActiveTab('dashboard')} />

        {activeTab === 'menu' && (
          <MenuOverlay
            onClose={() => setActiveTab('dashboard')}
            onNavigate={(page) => {
              if (page === 'profile') {
                setShowProfile(true);
                setActiveTab('dashboard'); // Return to background view
              } else {
                setActiveTab(page);
              }
            }}
          />
        )}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
};

function App() {
  return (
    <EmergencyProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </EmergencyProvider>
  )
}

export default App;
