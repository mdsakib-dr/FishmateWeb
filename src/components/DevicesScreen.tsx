import { Plus, Wifi, WifiOff, Battery, BatteryLow, Settings, Menu } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { ResponsiveSidebar } from './ResponsiveSidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';

interface DevicesScreenProps {
  onNavigate: (screen: string) => void;
}

export function DevicesScreen({ onNavigate }: DevicesScreenProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const devices = [
    {
      id: 'FM-2024-001',
      name: 'Pond 1 Sensor',
      location: 'Main Pond',
      status: 'online',
      battery: 85,
      lastSync: '2 min ago',
      firmwareVersion: 'v2.1.3'
    },
    {
      id: 'FM-2024-002',
      name: 'Pond 2 Sensor',
      location: 'East Pond',
      status: 'online',
      battery: 92,
      lastSync: '5 min ago',
      firmwareVersion: 'v2.1.3'
    },
    {
      id: 'FM-2024-003',
      name: 'Pond 3 Sensor',
      location: 'West Pond',
      status: 'offline',
      battery: 15,
      lastSync: '2 hours ago',
      firmwareVersion: 'v2.0.8'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fa] relative">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar
        activeScreen="devices"
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Bottom Nav */}
      <BottomNav activeScreen="devices" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pb-16 md:pb-0">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white shadow-sm sticky top-0 z-20 border-b border-[#e8eef2]">
            <div className="p-4 md:p-6 max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors"
                  >
                    <Menu className="text-[#1e5f74]" size={24} />
                  </button>
                  <h1 className="text-[#1e5f74] text-xl md:text-2xl lg:text-3xl">IoT Devices</h1>
                </div>
                <Button
                  onClick={() => onNavigate('connect')}
                  className="h-9 px-3 rounded-lg bg-[#3a8fa3] hover:bg-[#2e7383] text-white shadow-md text-sm"
                >
                  <Plus size={16} className="mr-1" />
                  Add Device
                </Button>
              </div>
              <p className="text-xs md:text-sm text-[#6b7c8c]">{devices.filter(d => d.status === 'online').length} of {devices.length} devices online</p>
            </div>
          </div>

          {/* Devices List */}
          <div className="p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4 max-w-7xl mx-auto">
            {devices.map((device) => (
              <Card
                key={device.id}
                className="bg-white rounded-lg shadow-md p-4 md:p-5 hover:shadow-lg transition-shadow border border-[#e8eef2]"
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-[#2c3e50] text-sm md:text-base">{device.name}</h3>
                        {device.status === 'online' ? (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-[#2e7d32]/20 rounded">
                            <Wifi size={10} className="text-[#2e7d32]" />
                            <span className="text-[9px] md:text-xs text-[#2e7d32]">Online</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded">
                            <WifiOff size={10} className="text-[#c5d3dc]" />
                            <span className="text-[9px] md:text-xs text-[#6b7c8c]">Offline</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-[#6b7c8c]">{device.location}</p>
                      <p className="text-xs text-[#c5d3dc]">ID: {device.id}</p>
                    </div>
                    <button className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
                      <Settings size={16} className="text-[#6b7c8c]" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#e8eef2]">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1">
                        {device.battery > 20 ? (
                          <Battery size={12} className="text-[#2e7d32]" />
                        ) : (
                          <BatteryLow size={12} className="text-[#f57c00]" />
                        )}
                        <span className="text-[9px] md:text-xs text-[#6b7c8c]">Battery</span>
                      </div>
                      <p className="text-xs md:text-sm text-[#2c3e50]">{device.battery}%</p>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-[9px] md:text-xs text-[#6b7c8c]">Last Sync</p>
                      <p className="text-xs md:text-sm text-[#2c3e50]">{device.lastSync}</p>
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-[9px] md:text-xs text-[#6b7c8c]">Firmware</p>
                      <p className="text-xs md:text-sm text-[#2c3e50]">{device.firmwareVersion}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  {device.status === 'offline' && (
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        className="w-full h-8 rounded-lg border-[#f57c00] text-[#f57c00] hover:bg-[#f57c00]/10 text-xs md:text-sm"
                      >
                        Reconnect Device
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
