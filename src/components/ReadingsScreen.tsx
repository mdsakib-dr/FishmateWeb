import { ArrowLeft, Thermometer, Droplets, Activity, Beaker, Eye, FlaskConical, ThumbsUp, ThumbsDown, Menu } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { ResponsiveSidebar } from './ResponsiveSidebar';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

interface ReadingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ReadingsScreen({ onNavigate }: ReadingsScreenProps) {
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const readings = [
    {
      name: 'Temperature',
      value: '28.5',
      unit: '°C',
      icon: Thermometer,
      color: '#d84315',
      status: 'optimal',
      trend: 'stable'
    },
    {
      name: 'pH Level',
      value: '7.2',
      unit: '',
      icon: Droplets,
      color: '#1e5f74',
      status: 'optimal',
      trend: 'up'
    },
    {
      name: 'Dissolved Oxygen',
      value: '7.8',
      unit: 'mg/L',
      icon: Activity,
      color: '#5b9aa9',
      status: 'optimal',
      trend: 'stable'
    },
    {
      name: 'TDS',
      value: '450',
      unit: 'ppm',
      icon: Droplets,
      color: '#3a8fa3',
      status: 'optimal',
      trend: 'stable'
    },
    {
      name: 'Turbidity',
      value: '12.5',
      unit: 'NTU',
      icon: Eye,
      color: '#6b7c8c',
      status: 'optimal',
      trend: 'stable'
    }
  ];

  const chartData = [
    { time: '00:00', value: 7.0 },
    { time: '04:00', value: 7.2 },
    { time: '08:00', value: 7.5 },
    { time: '12:00', value: 7.8 },
    { time: '16:00', value: 7.6 },
    { time: '20:00', value: 7.4 },
  ];

  return (
    <div className="min-h-screen bg-[#f5f8fa] relative">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar
        activeScreen="ponds"
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Bottom Nav */}
      <BottomNav activeScreen="ponds" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pb-16 md:pb-0">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white shadow-sm sticky top-0 z-20 border-b border-[#e8eef2]">
            <div className="p-4 md:p-6 flex items-center gap-3 max-w-7xl mx-auto">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors"
              >
                <Menu className="text-[#1e5f74]" size={24} />
              </button>
              <button onClick={() => onNavigate('ponds')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
                <ArrowLeft className="text-[#2c3e50]" size={20} />
              </button>
              <div>
                <h1 className="text-[#1e5f74] text-xl md:text-2xl lg:text-3xl">Pond 1 – Readings</h1>
                <p className="text-xs md:text-sm text-[#6b7c8c]">Last updated: 2 min ago</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-7xl mx-auto">
            {/* Mini Trend Chart */}
            <Card className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-[#e8eef2]">
              <h3 className="text-[#2c3e50] text-sm md:text-base lg:text-lg mb-3 md:mb-4">Dissolved Oxygen - 24h Trend</h3>
              <div className="h-32 md:h-48 lg:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '10px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '10px' }} domain={[6, 9]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '8px',
                    fontSize: '11px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1e5f74"
                  strokeWidth={2}
                  dot={{ fill: '#1e5f74', r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
              <button
                onClick={() => onNavigate('live')}
                className="mt-3 w-full text-xs md:text-sm text-[#3a8fa3] hover:text-[#1e5f74] transition-colors"
              >
                View Live Readings →
              </button>
            </Card>

            {/* Readings Grid */}
            <div>
              <h2 className="text-[#2c3e50] text-base md:text-lg lg:text-xl mb-3 md:mb-4">Latest Readings</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
                {readings.map((reading) => {
                  const Icon = reading.icon;
                  return (
                    <Card
                      key={reading.name}
                      className="bg-white rounded-lg shadow-md p-3 md:p-4 hover:shadow-lg transition-shadow border border-[#e8eef2]"
                    >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${reading.color}20` }}>
                        <Icon size={16} style={{ color: reading.color }} />
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full" />
                        <span className="text-[10px] text-[#6b7c8c]">{reading.trend}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7c8c]">{reading.name}</p>
                      <p className="text-sm text-[#2c3e50] mt-0.5">
                        {reading.value} <span className="text-xs text-[#6b7c8c]">{reading.unit}</span>
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Recommendation */}
        <Card className="bg-gradient-to-r from-[#1e5f74] to-[#3a8fa3] rounded-lg shadow-md p-4 text-white border border-[#1e5f74]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Activity size={18} />
              </div>
              <p className="text-xs opacity-90">AI Recommendation</p>
            </div>
            <p className="text-sm leading-relaxed">All water parameters are within optimal ranges. Continue regular monitoring and maintain current feeding schedule.</p>
            
            {/* Feedback */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs opacity-75">Was this helpful?</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setFeedback(feedback === 'like' ? null : 'like')}
                  className={`p-1.5 rounded-lg transition-all ${
                    feedback === 'like' 
                      ? 'bg-white/30' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <ThumbsUp size={14} className={feedback === 'like' ? 'fill-white' : ''} />
                </button>
                <button
                  onClick={() => setFeedback(feedback === 'dislike' ? null : 'dislike')}
                  className={`p-1.5 rounded-lg transition-all ${
                    feedback === 'dislike' 
                      ? 'bg-white/30' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <ThumbsDown size={14} className={feedback === 'dislike' ? 'fill-white' : ''} />
                </button>
              </div>
            </div>
          </div>
        </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
