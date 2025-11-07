import { useState } from "react";
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

  // Responsive web app - full screen
  return (
    <div className="min-h-screen w-full bg-white">
      {renderScreen()}
    </div>
  );
}
