import { useState, useEffect } from "react";
import { SignUpScreen } from "./components/SignUpScreen";
import { LoginScreen } from "./components/LoginScreen";
import { PondsScreen } from "./components/PondsScreen";
import { DevicesScreen } from "./components/DevicesScreen";
import { ConnectDeviceScreen } from "./components/ConnectDeviceScreen";
import { ReadingsScreen } from "./components/ReadingsScreen";
import { LiveReadingsScreen } from "./components/LiveReadingsScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { ProfileScreen } from "./components/ProfileScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("login");
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    // Detect if running in Capacitor (native mobile app)
    const checkNativeEnvironment = () => {
      // Check for Capacitor - most reliable method
      const isCapacitor = !!(window as any).Capacitor;
      
      // Only use native mode if actually in Capacitor
      // This ensures the iPhone frame shows in web preview
      setIsNative(isCapacitor);
    };

    checkNativeEnvironment();
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "signup":
        return <SignUpScreen onNavigate={setCurrentScreen} />;
      case "login":
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case "ponds":
        return <PondsScreen onNavigate={setCurrentScreen} />;
      case "devices":
        return <DevicesScreen onNavigate={setCurrentScreen} />;
      case "connect":
        return <ConnectDeviceScreen onNavigate={setCurrentScreen} />;
      case "readings":
        return <ReadingsScreen onNavigate={setCurrentScreen} />;
      case "live":
        return <LiveReadingsScreen onNavigate={setCurrentScreen} />;
      case "settings":
        return <SettingsScreen onNavigate={setCurrentScreen} />;
      case "profile":
        return <ProfileScreen onNavigate={setCurrentScreen} />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  // Native app mode (Capacitor/Mobile) - Full screen without frame
  if (isNative) {
    return (
      <div className="h-screen w-screen bg-white overflow-hidden">
        {renderScreen()}
      </div>
    );
  }

  // Web preview mode - Show iPhone frame for development
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* iPhone 14 Frame */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[60px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-transparent z-50 flex items-center justify-between px-8 pt-2">
          <span className="text-white text-sm">9:41</span>
          <div className="w-24 h-7 bg-black rounded-b-3xl"></div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            <div className="w-6 h-3 border-2 border-white rounded-sm relative">
              <div className="absolute right-[-2px] top-[2px] w-[2px] h-[6px] bg-white rounded-r"></div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="w-full h-full bg-white overflow-hidden relative">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
