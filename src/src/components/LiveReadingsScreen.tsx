import { ArrowLeft, Activity, Wifi } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

interface LiveReadingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function LiveReadingsScreen({ onNavigate }: LiveReadingsScreenProps) {
  const [liveData, setLiveData] = useState([
    { time: '00', temp: 28.3, ph: 7.1, do: 7.5, tds: 445, turbidity: 12.2 },
    { time: '01', temp: 28.4, ph: 7.2, do: 7.6, tds: 448, turbidity: 12.5 },
    { time: '02', temp: 28.5, ph: 7.2, do: 7.7, tds: 450, turbidity: 12.4 },
    { time: '03', temp: 28.6, ph: 7.1, do: 7.8, tds: 452, turbidity: 12.3 },
  ]);

  const [currentValues, setCurrentValues] = useState({
    temp: 28.5,
    ph: 7.2,
    do: 7.8,
    tds: 450,
    turbidity: 12.5
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => {
        const newData = [...prev];
        if (newData.length > 20) newData.shift();
        
        const lastEntry = newData[newData.length - 1];
        const newEntry = {
          time: String(Number(lastEntry.time) + 1).padStart(2, '0'),
          temp: Number((lastEntry.temp + (Math.random() - 0.5) * 0.2).toFixed(1)),
          ph: Number((lastEntry.ph + (Math.random() - 0.5) * 0.1).toFixed(1)),
          do: Number((lastEntry.do + (Math.random() - 0.5) * 0.2).toFixed(1)),
          tds: Number((lastEntry.tds + (Math.random() - 0.5) * 5).toFixed(0)),
          turbidity: Number((lastEntry.turbidity + (Math.random() - 0.5) * 0.3).toFixed(1))
        };
        
        setCurrentValues({
          temp: newEntry.temp,
          ph: newEntry.ph,
          do: newEntry.do,
          tds: newEntry.tds,
          turbidity: newEntry.turbidity
        });
        
        return [...newData, newEntry];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-[#f5f8fa] relative flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <button onClick={() => onNavigate('readings')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
              <ArrowLeft className="text-[#2c3e50]" size={20} />
            </button>
            <div className="flex-1">
              <h1 className="text-[#1e5f74] text-xl">Pond 1 – Live</h1>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#2e7d32]/20 rounded">
              <div className="w-2 h-2 bg-[#2e7d32] rounded-full animate-pulse" />
              <span className="text-xs text-[#2e7d32]">Live</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#6b7c8c]">
            <Wifi size={12} />
            <span>Connected • Auto-updating every 3s</span>
          </div>
        </div>
      </div>

      <div className="p-4 pb-20 space-y-4">
        {/* Live Value Cards */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="bg-gradient-to-br from-[#d84315] to-[#bf360c] rounded-lg shadow-md p-2.5 text-white border-0">
            <div className="space-y-0.5">
              <p className="text-[9px] opacity-90">Temperature</p>
              <p className="text-base">{currentValues.temp}°C</p>
              <div className="flex items-center gap-1">
                <Activity size={8} />
                <span className="text-[8px] opacity-75">Live</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#1e5f74] to-[#164b5c] rounded-lg shadow-md p-2.5 text-white border-0">
            <div className="space-y-0.5">
              <p className="text-[9px] opacity-90">pH Level</p>
              <p className="text-base">{currentValues.ph}</p>
              <div className="flex items-center gap-1">
                <Activity size={8} />
                <span className="text-[8px] opacity-75">Live</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#5b9aa9] to-[#4a7f8d] rounded-lg shadow-md p-2.5 text-white border-0">
            <div className="space-y-0.5">
              <p className="text-[9px] opacity-90">DO</p>
              <p className="text-base">{currentValues.do}</p>
              <div className="flex items-center gap-1">
                <Activity size={8} />
                <span className="text-[8px] opacity-75">mg/L</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#3a8fa3] to-[#2e7383] rounded-lg shadow-md p-2.5 text-white border-0">
            <div className="space-y-0.5">
              <p className="text-[9px] opacity-90">TDS</p>
              <p className="text-base">{currentValues.tds}</p>
              <div className="flex items-center gap-1">
                <Activity size={8} />
                <span className="text-[8px] opacity-75">ppm</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-[#6b7c8c] to-[#546470] rounded-lg shadow-md p-2.5 text-white border-0">
            <div className="space-y-0.5">
              <p className="text-[9px] opacity-90">Turbidity</p>
              <p className="text-base">{currentValues.turbidity}</p>
              <div className="flex items-center gap-1">
                <Activity size={8} />
                <span className="text-[8px] opacity-75">NTU</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Live Chart - Temperature */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">Temperature (Real-time)</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '9px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '9px' }} domain={[27, 30]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '6px',
                    fontSize: '10px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#d84315"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Live Chart - pH */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">pH Level (Real-time)</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '9px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '9px' }} domain={[6.5, 7.5]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '6px',
                    fontSize: '10px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="ph"
                  stroke="#1e5f74"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Live Chart - Dissolved Oxygen */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">Dissolved Oxygen (Real-time)</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '9px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '9px' }} domain={[7, 8.5]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '6px',
                    fontSize: '10px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="do"
                  stroke="#5b9aa9"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Live Chart - TDS */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">TDS (Real-time)</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '9px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '9px' }} domain={[440, 460]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '6px',
                    fontSize: '10px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="tds"
                  stroke="#3a8fa3"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Live Chart - Turbidity */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <h3 className="text-[#2c3e50] text-sm mb-3">Turbidity (Real-time)</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1dce3" />
                <XAxis dataKey="time" stroke="#6b7c8c" style={{ fontSize: '9px' }} />
                <YAxis stroke="#6b7c8c" style={{ fontSize: '9px' }} domain={[11, 14]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1dce3',
                    borderRadius: '6px',
                    fontSize: '10px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="turbidity"
                  stroke="#6b7c8c"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Add padding at bottom for nav bar */}
        <div className="h-4" />
      </div>
      </div>

      <BottomNav activeScreen="live" onNavigate={onNavigate} />
    </div>
  );
}
