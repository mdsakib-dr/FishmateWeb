import { Home, Wifi, Activity, Settings, X } from 'lucide-react';
import { useEffect } from 'react';

interface ResponsiveSidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ResponsiveSidebar({ activeScreen, onNavigate, isOpen, onClose }: ResponsiveSidebarProps) {
  const navItems = [
    { id: 'ponds', label: 'Home', icon: Home },
    { id: 'devices', label: 'Devices', icon: Wifi },
    { id: 'live', label: 'Live', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (screen: string) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <>
      {/* Overlay - Mobile & Tablet */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 bottom-0 w-72 bg-white shadow-2xl z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#d1dce3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🐟</span>
            </div>
            <div>
              <h1 className="text-[#1e5f74] tracking-tight">Fishmate</h1>
              <p className="text-xs text-[#6b7c8c]">Aquaculture Monitor</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f5f8fa] rounded-lg transition-colors"
          >
            <X className="text-[#2c3e50]" size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#1e5f74] text-white shadow-md'
                      : 'text-[#6b7c8c] hover:bg-[#f5f8fa]'
                  }`}
                >
                  <Icon size={20} strokeWidth={2} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#d1dce3]">
          <p className="text-xs text-[#6b7c8c] text-center">
            Fishmate IoT v1.0.0
          </p>
          <p className="text-xs text-[#6b7c8c] text-center mt-1">
            Smart Aquaculture Monitoring
          </p>
        </div>
      </div>
    </>
  );
}
