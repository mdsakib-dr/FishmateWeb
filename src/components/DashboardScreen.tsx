import { BottomNav } from './BottomNav';
import { User, Phone, Edit, Lock, LogOut, MapPin, Fish, Plus, Wifi, WifiOff } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const ponds = [
    {
      id: 1,
      name: 'Pond 1',
      location: 'North Field',
      species: 'Tilapia',
      isActive: true
    },
    {
      id: 2,
      name: 'Pond 2',
      location: 'South Field',
      species: 'Catfish',
      isActive: false
    }
  ];

  return (
    <div className="h-full bg-[#f5f8fa] pb-14 overflow-y-auto relative">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4">
          <h1 className="text-[#1e5f74] text-xl">Dashboard</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* User Info Section */}
        <Card className="p-4 shadow-md rounded-lg border border-[#e8eef2]">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[#2c3e50] text-base">User Profile</h2>
              <div className="w-10 h-10 bg-[#1e5f74]/10 rounded-full flex items-center justify-center">
                <User className="text-[#1e5f74]" size={20} />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#2c3e50] text-sm">
                <User size={16} className="text-[#6b7c8c]" />
                <span>John Anderson</span>
              </div>
              <div className="flex items-center gap-2 text-[#2c3e50] text-sm">
                <Phone size={16} className="text-[#6b7c8c]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <Separator className="my-3" />

            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2 h-10 rounded-xl text-sm">
                <Edit size={16} className="text-teal-600" />
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 h-10 rounded-xl text-sm">
                <Lock size={16} className="text-teal-600" />
                Change Password
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 h-10 rounded-xl text-sm text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => onNavigate('login')}
              >
                <LogOut size={16} />
                Log Out
              </Button>
            </div>
          </div>
        </Card>

        {/* Pond Details Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-gray-800 text-base">My Ponds</h2>
            <Button className="gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 h-9 text-sm px-3">
              <Plus size={16} />
              Add Pond
            </Button>
          </div>

          <div className="space-y-3">
            {ponds.map((pond) => (
              <Card key={pond.id} className="p-3 shadow-md rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <h3 className="text-gray-800 text-sm">{pond.name}</h3>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                          <MapPin size={14} className="text-gray-400" />
                          <span>{pond.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                          <Fish size={14} className="text-gray-400" />
                          <span>{pond.species}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-0.5 rounded-full text-xs ${
                      pond.isActive 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {pond.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 rounded-lg h-9 text-xs border-[#d1dce3] hover:border-[#1e5f74] hover:bg-[#e8eef2]" onClick={() => onNavigate('home')}>
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-lg h-9 text-xs border-[#d1dce3] hover:border-[#1e5f74] hover:bg-[#e8eef2]">
                      <Edit size={14} className="mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* IoT Device Status */}
        <Card className="p-4 shadow-md rounded-lg border border-[#e8eef2]">
          <div className="space-y-3">
            <h2 className="text-[#2c3e50] text-base">IoT Device Status</h2>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-[#e8f5e9] rounded-lg">
                <div className="flex items-center gap-2">
                  <Wifi className="text-[#2e7d32]" size={18} />
                  <div>
                    <p className="text-[#2c3e50] text-xs">Pond 1 Sensor</p>
                    <p className="text-xs text-[#6b7c8c]">Last sync: 2 min ago</p>
                  </div>
                </div>
                <span className="text-xs text-[#2e7d32] px-2 py-0.5 bg-[#2e7d32]/10 rounded-full">
                  Connected
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#f5f8fa] rounded-lg">
                <div className="flex items-center gap-2">
                  <WifiOff className="text-[#c5d3dc]" size={18} />
                  <div>
                    <p className="text-[#2c3e50] text-xs">Pond 2 Sensor</p>
                    <p className="text-xs text-[#6b7c8c]">Last sync: 2 hours ago</p>
                  </div>
                </div>
                <span className="text-xs text-[#6b7c8c] px-2 py-0.5 bg-[#d1dce3] rounded-full">
                  Offline
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav activeScreen="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
