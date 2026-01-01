import { useState, useEffect, Suspense, lazy } from 'react'
import BottomNav from './components/Layout/BottomNav'
// Lazy Load Pages for Performance (SWOT Recommendation)
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
import TutorialOverlay from './components/UI/TutorialOverlay' // New

// Route Wrapper to handle Body Classes correctly (Inner Component)
const AppContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false); // Tutorial State

  const [activeTab, setActiveTab] = useState('dashboard');
  const [mode, setMode] = useState('anime');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTimeout(() => setShowTutorial(true), 500); // Trigger tutorial after login
  };

  const { isEmergency } = useEmergency(); // Access Context

  // Effect to handle Body Classes
  useEffect(() => {
    // Reset classes
    document.body.className = '';

    // Apply Emergency or Mode classes
    if (isEmergency) {
      document.body.classList.add('mode-emergency');
    } else if (mode === 'classic') {
      document.body.classList.add('mode-classic');
    }
  }, [mode, isEmergency]);

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
      case 'transparency':
        if (!isLoggedIn) {
          return <LoginScreen onLogin={handleLogin} />;
        }
        return <Transparency />;
      default: return <Dashboard onNavigate={setActiveTab} />;
    }
  }

  return (
    <div style={{ flex: 1, position: 'relative', height: '100vh', overflow: 'hidden' }}>

      {/* Tutorial Overlay */}
      {showTutorial && <TutorialOverlay onComplete={() => setShowTutorial(false)} />}
      <CityOSFrame mode={mode}>
        <ModeSelector currentMode={mode} onToggle={toggleMode} />

        {/* Background City Image or Effect - Conditional */}
        {mode === 'anime' && !isEmergency && (
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

      {/* Intelegent Agent */}
      <AIAssistant />
    </div>
  );
};

// Main App Wrapper
function App() {
  return (
    <EmergencyProvider>
      <ToastProvider>
        <AppContent />
        <BottomNavWrapper /> {/* Needs access to state? No, bottom nav state is inside content. Wait. */}
        {/* Issue: BottomNav is outside Routes in previous version. Need to fix state lifting. */}
      </ToastProvider>
    </EmergencyProvider>
  )
}

// Helper to bridge state in this architecture refactor
// Actually, let's keep it simple. BottomNav needs activeTab.
// So AppContent needs to render BottomNav.

const AppWithNav = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mode, setMode] = useState('anime');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const { isEmergency } = useEmergency();

  useEffect(() => {
    document.body.className = '';
    if (isEmergency) {
      document.body.classList.add('mode-emergency');
    } else if (mode === 'classic') {
      document.body.classList.add('mode-classic');
    }
  }, [mode, isEmergency]);

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

          {mode === 'anime' && !isEmergency && (
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
            scrollbarWidth: 'none'
          }}>
            {renderContent()}
          </div>
        </CityOSFrame>

        {selectedAsset && (
          <AssetDetail
            assetId={selectedAsset.id}
            onClose={() => setSelectedAsset(null)}
          />
        )}

        {showProfile && (
          <ProfileModal onClose={() => setShowProfile(false)} />
        )}

        <AIAssistant />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}

function MainApp() {
  return (
    <EmergencyProvider>
      <ToastProvider>
        <AppWithNav />
      </ToastProvider>
    </EmergencyProvider>
  );
}

export default MainApp;
