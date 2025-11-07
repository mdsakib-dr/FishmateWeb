import { BottomNav } from './BottomNav';
import { Calendar, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface HistoryScreenProps {
  onNavigate: (screen: string) => void;
}

export function HistoryScreen({ onNavigate }: HistoryScreenProps) {
  const data = [
    { time: '00:00', value: 6.8, status: 'warning' },
    { time: '04:00', value: 7.2, status: 'healthy' },
    { time: '08:00', value: 7.5, status: 'healthy' },
    { time: '12:00', value: 7.8, status: 'healthy' },
    { time: '16:00', value: 7.4, status: 'healthy' },
    { time: '20:00', value: 7.1, status: 'healthy' },
    { time: '23:59', value: 7.2, status: 'healthy' },
  ];

  const historyData = [
    { date: 'Oct 24, 2025', time: '14:30', parameter: 'DO', value: '7.2 mg/L', status: 'healthy' },
    { date: 'Oct 24, 2025', time: '14:00', parameter: 'pH', value: '7.8', status: 'healthy' },
    { date: 'Oct 24, 2025', time: '13:30', parameter: 'Temperature', value: '28.5°C', status: 'healthy' },
    { date: 'Oct 24, 2025', time: '13:00', parameter: 'Ammonia', value: '0.15 mg/L', status: 'healthy' },
    { date: 'Oct 24, 2025', time: '12:30', parameter: 'DO', value: '7.0 mg/L', status: 'healthy' },
    { date: 'Oct 24, 2025', time: '12:00', parameter: 'pH', value: '7.9', status: 'healthy' },
  ];

  const statusDot = {
    healthy: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  };

  return (
    <div className="h-full bg-[#f5f8fa] pb-14 overflow-y-auto relative">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4">
          <h1 className="text-[#1e5f74] text-xl">Historical Data</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Filters */}
        <Card className="p-3 shadow-md rounded-lg border border-[#e8eef2]">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-[#1e5f74]" />
            <h3 className="text-[#2c3e50] text-sm">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs text-[#6b7c8c]">Pond</label>
              <Select defaultValue="pond1">
                <SelectTrigger className="h-10 rounded-lg text-sm border-[#d1dce3]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pond1">Pond 1</SelectItem>
                  <SelectItem value="pond2">Pond 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#6b7c8c]">Parameter</label>
              <Select defaultValue="do">
                <SelectTrigger className="h-10 rounded-lg text-sm border-[#d1dce3]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="do">Dissolved Oxygen</SelectItem>
                  <SelectItem value="ph">pH Level</SelectItem>
                  <SelectItem value="temp">Temperature</SelectItem>
                  <SelectItem value="tds">TDS</SelectItem>
                  <SelectItem value="turbidity">Turbidity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#6b7c8c]">Date Range</label>
              <button className="w-full h-10 px-3 border border-[#d1dce3] rounded-lg flex items-center justify-between hover:border-[#1e5f74] transition-colors text-sm">
                <span className="text-[#2c3e50]">Last 24 Hours</span>
                <Calendar size={16} className="text-[#6b7c8c]" />
              </button>
            </div>
          </div>
        </Card>

        {/* Chart */}
        <Card className="p-3 shadow-md rounded-lg border border-[#e8eef2]">
          <div className="space-y-3">
            <div>
              <h3 className="text-[#2c3e50] text-sm">Dissolved Oxygen Trend</h3>
              <p className="text-xs text-[#6b7c8c]">Last 24 Hours</p>
            </div>

            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#6b7c8c"
                    style={{ fontSize: '10px' }}
                  />
                  <YAxis 
                    stroke="#6b7c8c"
                    style={{ fontSize: '10px' }}
                    domain={[5, 9]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #d1dce3',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
                  {/* Health zones */}
                  <ReferenceLine y={7} stroke="#2e7d32" strokeDasharray="3 3" label={{ value: 'Optimal', position: 'right', fill: '#2e7d32', fontSize: 9 }} />
                  <ReferenceLine y={6} stroke="#f57c00" strokeDasharray="3 3" label={{ value: 'Warning', position: 'right', fill: '#f57c00', fontSize: 9 }} />
                  <ReferenceLine y={5} stroke="#c62828" strokeDasharray="3 3" label={{ value: 'Critical', position: 'right', fill: '#c62828', fontSize: 9 }} />
                  
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1e5f74" 
                    strokeWidth={2}
                    dot={{ fill: '#1e5f74', r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6b7c8c] justify-center flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#2e7d32] rounded-full"></div>
                <span className="text-xs">Healthy</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#f57c00] rounded-full"></div>
                <span className="text-xs">Warning</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#c62828] rounded-full"></div>
                <span className="text-xs">Critical</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Data Table */}
        <Card className="p-3 shadow-md rounded-lg border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">Recent Readings</h3>
          <div className="space-y-2">
            {historyData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-[#f5f8fa] rounded-lg hover:bg-[#e8eef2] transition-colors">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${statusDot[item.status as keyof typeof statusDot]} rounded-full`}></div>
                  <div>
                    <p className="text-[#2c3e50] text-xs">{item.parameter}</p>
                    <p className="text-xs text-[#6b7c8c]">{item.date} at {item.time}</p>
                  </div>
                </div>
                <span className="text-[#2c3e50] text-xs">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <BottomNav activeScreen="history" onNavigate={onNavigate} />
    </div>
  );
}
