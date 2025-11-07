import { Home, Wifi, Activity, Settings } from 'lucide-react';

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'ponds', label: 'Home', icon: Home },
    { id: 'devices', label: 'Devices', icon: Wifi },
    { id: 'live', label: 'Live', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#d1dce3] shadow-lg z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                isActive ? 'text-[#1e5f74]' : 'text-[#6b7c8c]'
              }`}
            >
              <Icon size={20} strokeWidth={2} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
