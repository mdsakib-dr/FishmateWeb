import { ArrowLeft, Wifi, Loader2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface ConnectDeviceScreenProps {
  onNavigate: (screen: string) => void;
}

export function ConnectDeviceScreen({ onNavigate }: ConnectDeviceScreenProps) {
  const [status, setStatus] = useState<'idle' | 'searching' | 'connected'>('idle');
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const availableDevices = [
    { id: 'FM-2024-005', name: 'Fishmate Sensor Pro', signal: 'Strong', distance: '2m' },
    { id: 'FM-2024-006', name: 'Fishmate Sensor Pro', signal: 'Medium', distance: '8m' },
    { id: 'FM-2024-007', name: 'Fishmate Sensor Basic', signal: 'Strong', distance: '3m' },
  ];

  const handleConnect = (deviceId: string) => {
    setSelectedDevice(deviceId);
    setStatus('searching');
    setTimeout(() => {
      setStatus('connected');
      setTimeout(() => {
        onNavigate('devices');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#d4e3ea] to-[#f5f8fa] overflow-y-auto relative pb-6">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => onNavigate('devices')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
            <ArrowLeft className="text-[#2c3e50]" size={20} />
          </button>
          <h1 className="text-[#1e5f74] text-xl">Connect New Device</h1>
        </div>
      </div>

      <div className="p-6 pt-8 space-y-6">
        {/* Connection Illustration */}
        {status === 'searching' && (
          <div className="w-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4 border border-[#e8eef2]">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-full flex items-center justify-center">
              <Loader2 className="text-white animate-spin" size={40} />
            </div>
            <p className="text-[#1e5f74] text-sm text-center">Connecting to device...</p>
            <p className="text-xs text-[#6b7c8c]">{selectedDevice}</p>
          </div>
        )}

        {status === 'connected' && (
          <div className="w-full bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4 border border-[#e8eef2]">
            <div className="w-24 h-24 bg-[#2e7d32] rounded-full flex items-center justify-center">
              <Check className="text-white" size={40} />
            </div>
            <p className="text-[#2e7d32] text-sm text-center">Connected successfully!</p>
          </div>
        )}

        {/* Available Devices */}
        {status === 'idle' && (
          <>
            <div>
              <h2 className="text-[#333333] text-base mb-3">Available Devices</h2>
              <div className="space-y-3">
                {availableDevices.map((device) => (
                  <Card
                    key={device.id}
                    className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-[#e8eef2]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-lg flex items-center justify-center">
                          <Wifi className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-[#2c3e50] text-sm">{device.name}</h3>
                          <p className="text-xs text-[#6b7c8c]">ID: {device.id}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-[#6b7c8c]">Signal: {device.signal}</span>
                            <span className="text-[10px] text-[#c5d3dc]">•</span>
                            <span className="text-[10px] text-[#6b7c8c]">{device.distance} away</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleConnect(device.id)}
                        className="h-9 px-4 rounded-lg bg-[#3a8fa3] hover:bg-[#2e7383] text-white text-sm"
                      >
                        Connect
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <Card className="bg-[#d4e3ea] rounded-lg p-4 border border-[#c5d3dc]">
              <h3 className="text-[#1e5f74] text-sm mb-2">Connection Tips</h3>
              <ul className="space-y-1.5 text-xs text-[#6b7c8c]">
                <li>• Ensure the sensor is powered on</li>
                <li>• Keep your phone within 10m of the device</li>
                <li>• Check that the blue LED is blinking</li>
                <li>• Tap "Connect" to pair the device</li>
              </ul>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
