import { Search, Settings, Droplets, Thermometer, Activity, Wifi, WifiOff, MessageCircle, Send, X } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useState } from 'react';
import { Button } from './ui/button';

interface PondsScreenProps {
  onNavigate: (screen: string) => void;
}

export function PondsScreen({ onNavigate }: PondsScreenProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your Fishmate AI assistant. How can I help you with your aquaculture operations today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const ponds = [
    {
      id: 1,
      name: 'Pond 1',
      temp: '28.5°C',
      ph: '7.2',
      dissolvedOxygen: '7.8 mg/L',
      tds: '450 ppm',
      condition: 'Healthy',
      status: 'optimal',
      connected: true
    },
    {
      id: 2,
      name: 'Pond 2',
      temp: '27.3°C',
      ph: '7.5',
      dissolvedOxygen: '8.1 mg/L',
      tds: '425 ppm',
      condition: 'Healthy',
      status: 'optimal',
      connected: true
    },
    {
      id: 3,
      name: 'Pond 3',
      temp: '29.1°C',
      ph: '6.8',
      dissolvedOxygen: '6.5 mg/L',
      tds: '580 ppm',
      condition: 'At Risk',
      status: 'warning',
      connected: false
    },
    {
      id: 4,
      name: 'Pond 4',
      temp: '31.2°C',
      ph: '6.2',
      dissolvedOxygen: '5.5 mg/L',
      tds: '720 ppm',
      condition: 'Critical',
      status: 'critical',
      connected: true
    }
  ];

  const statusColors = {
    optimal: 'bg-[#2e7d32]',
    warning: 'bg-[#f57c00]',
    critical: 'bg-[#c62828]'
  };

  const conditionColors = {
    'Healthy': 'bg-[#2e7d32] text-white',
    'At Risk': 'bg-[#f57c00] text-white',
    'Critical': 'bg-[#c62828] text-white'
  };

  return (
    <div className="h-full bg-[#f5f8fa] relative flex flex-col">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-lg flex items-center justify-center">
                <Droplets className="text-white" size={18} />
              </div>
              <h1 className="text-[#1e5f74] text-xl">Fishmate</h1>
            </div>
            <button onClick={() => onNavigate('settings')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
              <Settings className="text-[#2c3e50]" size={20} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7c8c]" size={18} />
            <Input
              placeholder="Search ponds..."
              className="pl-10 h-10 rounded-lg border-[#d1dce3] bg-white"
            />
          </div>
        </div>
      </div>

      {/* Ponds Grid */}
      <div className="p-4 pb-20">
        <h2 className="text-[#2c3e50] text-base mb-3">My Ponds</h2>
        <div className="grid grid-cols-2 gap-3">
          {ponds.map((pond) => (
            <Card
              key={pond.id}
              onClick={() => onNavigate('readings')}
              className="bg-white rounded-lg shadow-md p-3 cursor-pointer hover:shadow-lg transition-shadow relative overflow-hidden border border-[#e8eef2]"
            >
              {/* Status Indicator */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${statusColors[pond.status as keyof typeof statusColors]}`} />
              
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#2c3e50] text-sm">{pond.name}</h3>
                  {pond.connected ? (
                    <Wifi className="text-[#5b9aa9]" size={14} />
                  ) : (
                    <WifiOff className="text-[#c5d3dc]" size={14} />
                  )}
                </div>

                {/* Condition Badge */}
                <div className="flex items-center">
                  <span className={`text-[10px] px-2 py-0.5 rounded ${conditionColors[pond.condition as keyof typeof conditionColors]}`}>
                    {pond.condition}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Thermometer className="text-[#d84315]" size={14} />
                    <span className="text-xs text-[#6b7c8c]">Temp:</span>
                    <span className="text-xs text-[#2c3e50]">{pond.temp}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1e5f74] flex items-center justify-center">
                      <span className="text-white text-[8px]">pH</span>
                    </div>
                    <span className="text-xs text-[#6b7c8c]">pH:</span>
                    <span className="text-xs text-[#2c3e50]">{pond.ph}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Activity className="text-[#5b9aa9]" size={14} />
                    <span className="text-xs text-[#6b7c8c]">DO:</span>
                    <span className="text-xs text-[#2c3e50]">{pond.dissolvedOxygen}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Droplets className="text-[#3a8fa3]" size={14} />
                    <span className="text-xs text-[#6b7c8c]">TDS:</span>
                    <span className="text-xs text-[#2c3e50]">{pond.tds}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Feedback Button */}
      {!showFeedback && (
        <button
          onClick={() => setShowFeedback(true)}
          className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-40"
        >
          <MessageCircle className="text-white" size={24} />
        </button>
      )}

      {/* AI Feedback Panel */}
      {showFeedback && (
        <div className="absolute bottom-14 left-0 right-0 top-0 bg-white z-40 flex flex-col">
          {/* Feedback Header */}
          <div className="bg-gradient-to-r from-[#1e5f74] to-[#3a8fa3] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="text-white" size={18} />
              </div>
              <div>
                <h3 className="text-white text-sm">AI Assistant</h3>
                <p className="text-white/80 text-xs">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setShowFeedback(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="text-white" size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f5f8fa]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-[#1e5f74] text-white'
                      : 'bg-white border border-[#e8eef2] text-[#2c3e50]'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#e8eef2]">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about your ponds..."
                className="flex-1 h-10 rounded-lg border-[#d1dce3]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputMessage.trim()) {
                    const userMessage = inputMessage.trim();
                    setMessages([...messages, { role: 'user', content: userMessage }]);
                    setInputMessage('');
                    
                    // Simulate AI response
                    setTimeout(() => {
                      let aiResponse = '';
                      if (userMessage.toLowerCase().includes('pond 4') || userMessage.toLowerCase().includes('critical')) {
                        aiResponse = 'Pond 4 is showing critical conditions. The temperature is too high (31.2°C) and dissolved oxygen is low (5.5 mg/L). I recommend:\n\n1. Increase aeration immediately\n2. Add shade covers to reduce temperature\n3. Reduce feeding temporarily\n4. Monitor every 2 hours';
                      } else if (userMessage.toLowerCase().includes('temperature')) {
                        aiResponse = 'The optimal temperature for most aquaculture species is 26-29°C. Pond 4 is exceeding this range. Consider increasing water circulation or adding shade structures.';
                      } else if (userMessage.toLowerCase().includes('recommend') || userMessage.toLowerCase().includes('suggest')) {
                        aiResponse = 'Based on current data:\n\n✓ Ponds 1 & 2 are performing well\n⚠️ Pond 3 needs attention - reconnect the sensor\n❌ Pond 4 requires immediate action\n\nWould you like specific recommendations for any pond?';
                      } else {
                        aiResponse = 'I can help you with pond conditions, water quality analysis, and recommendations. What would you like to know?';
                      }
                      
                      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
                    }, 1000);
                  }
                }}
              />
              <Button
                onClick={() => {
                  if (inputMessage.trim()) {
                    const userMessage = inputMessage.trim();
                    setMessages([...messages, { role: 'user', content: userMessage }]);
                    setInputMessage('');
                    
                    // Simulate AI response
                    setTimeout(() => {
                      let aiResponse = '';
                      if (userMessage.toLowerCase().includes('pond 4') || userMessage.toLowerCase().includes('critical')) {
                        aiResponse = 'Pond 4 is showing critical conditions. The temperature is too high (31.2°C) and dissolved oxygen is low (5.5 mg/L). I recommend:\n\n1. Increase aeration immediately\n2. Add shade covers to reduce temperature\n3. Reduce feeding temporarily\n4. Monitor every 2 hours';
                      } else if (userMessage.toLowerCase().includes('temperature')) {
                        aiResponse = 'The optimal temperature for most aquaculture species is 26-29°C. Pond 4 is exceeding this range. Consider increasing water circulation or adding shade structures.';
                      } else if (userMessage.toLowerCase().includes('recommend') || userMessage.toLowerCase().includes('suggest')) {
                        aiResponse = 'Based on current data:\n\n✓ Ponds 1 & 2 are performing well\n⚠️ Pond 3 needs attention - reconnect the sensor\n❌ Pond 4 requires immediate action\n\nWould you like specific recommendations for any pond?';
                      } else {
                        aiResponse = 'I can help you with pond conditions, water quality analysis, and recommendations. What would you like to know?';
                      }
                      
                      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
                    }, 1000);
                  }
                }}
                className="h-10 w-10 p-0 rounded-lg bg-[#1e5f74] hover:bg-[#164b5c] text-white"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
      </div>

      <BottomNav activeScreen="ponds" onNavigate={onNavigate} />
    </div>
  );
}
