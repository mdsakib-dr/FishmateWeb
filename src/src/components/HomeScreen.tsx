import { BottomNav } from './BottomNav';
import { ThumbsUp, ThumbsDown, Droplets, Activity, Thermometer, Waves, Eye, Beaker } from 'lucide-react';
import { Card } from './ui/card';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const pondStatus = 'healthy'; // 'healthy' | 'warning' | 'critical'
  
  const statusConfig = {
    healthy: {
      bg: 'bg-[#e8f5e9]',
      border: 'border-[#2e7d32]',
      text: 'text-[#2e7d32]',
      label: 'Excellent Condition'
    },
    warning: {
      bg: 'bg-[#fff3e0]',
      border: 'border-[#f57c00]',
      text: 'text-[#f57c00]',
      label: 'Needs Attention'
    },
    critical: {
      bg: 'bg-[#ffebee]',
      border: 'border-[#c62828]',
      text: 'text-[#c62828]',
      label: 'Critical Alert'
    }
  };

  const parameters = [
    {
      name: 'Dissolved Oxygen',
      value: '7.2',
      unit: 'mg/L',
      status: 'healthy',
      icon: Droplets,
      lastUpdated: '2 min ago'
    },
    {
      name: 'pH Level',
      value: '7.8',
      unit: '',
      status: 'healthy',
      icon: Activity,
      lastUpdated: '2 min ago'
    },
    {
      name: 'Temperature',
      value: '28.5',
      unit: '°C',
      status: 'healthy',
      icon: Thermometer,
      lastUpdated: '2 min ago'
    },
    {
      name: 'Ammonia',
      value: '0.15',
      unit: 'mg/L',
      status: 'healthy',
      icon: Waves,
      lastUpdated: '2 min ago'
    },
    {
      name: 'Turbidity',
      value: '12.5',
      unit: 'NTU',
      status: 'healthy',
      icon: Eye,
      lastUpdated: '3 min ago'
    },
    {
      name: 'Nitrate',
      value: '8.2',
      unit: 'mg/L',
      status: 'healthy',
      icon: Beaker,
      lastUpdated: '3 min ago'
    }
  ];

  const statusDot = {
    healthy: 'bg-[#2e7d32]',
    warning: 'bg-[#f57c00]',
    critical: 'bg-[#c62828]'
  };

  return (
    <div className="h-full bg-[#f5f8fa] pb-14 overflow-y-auto relative">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4">
          <h1 className="text-[#1e5f74] text-xl">Fishmate – Pond 1</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Status Banner */}
        <div className={`${statusConfig[pondStatus].bg} ${statusConfig[pondStatus].border} border-l-4 rounded-lg p-3 shadow-sm`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#6b7c8c]">Current Status</p>
              <p className={`${statusConfig[pondStatus].text} text-sm`}>
                {statusConfig[pondStatus].label}
              </p>
            </div>
            <div className={`w-10 h-10 ${statusConfig[pondStatus].bg} rounded-full flex items-center justify-center ${statusConfig[pondStatus].border} border-2`}>
              <div className={`w-5 h-5 ${statusDot[pondStatus]} rounded-full animate-pulse`}></div>
            </div>
          </div>
        </div>

        {/* Recommendation Box */}
        <Card className="p-3 shadow-md rounded-lg border border-[#d1dce3]">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-[#1e5f74] text-sm">Action Needed</h3>
              <span className="text-xs text-[#6b7c8c]">5 min ago</span>
            </div>
            <p className="text-[#2c3e50] text-xs leading-relaxed">
              Your pond conditions are optimal. Continue monitoring oxygen levels during early morning hours. Consider slight feed adjustment based on current temperature.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-[#6b7c8c]">Was this helpful?</span>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-[#e8eef2] rounded-lg transition-colors">
                  <ThumbsUp size={16} className="text-[#1e5f74]" />
                </button>
                <button className="p-1.5 hover:bg-[#e8eef2] rounded-lg transition-colors">
                  <ThumbsDown size={16} className="text-[#6b7c8c]" />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Real-time Data Grid */}
        <div>
          <h2 className="text-[#2c3e50] text-base mb-3">Real-Time Data</h2>
          <div className="grid grid-cols-2 gap-3">
            {parameters.map((param) => {
              const Icon = param.icon;
              return (
                <Card key={param.name} className="p-3 shadow-md rounded-lg hover:shadow-lg transition-shadow border border-[#e8eef2]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Icon className="text-[#1e5f74]" size={20} />
                      <div className={`w-2 h-2 ${statusDot[param.status as keyof typeof statusDot]} rounded-full`}></div>
                    </div>
                    <div>
                      <p className="text-[#6b7c8c] text-xs">{param.name}</p>
                      <p className="text-[#2c3e50] text-sm mt-0.5">
                        {param.value} <span className="text-xs text-[#6b7c8c]">{param.unit}</span>
                      </p>
                    </div>
                    <p className="text-xs text-[#c5d3dc]">{param.lastUpdated}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNav activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
}
