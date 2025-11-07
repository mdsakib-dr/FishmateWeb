import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Edit2, Camera, Menu } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { BottomNav } from './BottomNav';
import { ResponsiveSidebar } from './ResponsiveSidebar';
import { useState } from 'react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#f5f8fa] relative">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar
        activeScreen="settings"
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Bottom Nav */}
      <BottomNav activeScreen="settings" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col pb-16 md:pb-0">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-20 border-b border-[#e8eef2]">
          <div className="p-4 md:p-6 flex items-center gap-3 max-w-7xl mx-auto">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors"
            >
              <Menu className="text-[#1e5f74]" size={24} />
            </button>
            <button onClick={() => onNavigate('settings')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
              <ArrowLeft className="text-[#2c3e50]" size={20} />
            </button>
            <h1 className="text-[#1e5f74] text-xl md:text-2xl lg:text-3xl">My Profile</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 max-w-4xl mx-auto w-full">
        {/* Profile Picture Section */}
        <Card className="bg-white rounded-lg shadow-md p-6 border border-[#e8eef2]">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-full flex items-center justify-center">
                <User className="text-white" size={40} />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#3a8fa3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2e7383] transition-colors">
                <Camera className="text-white" size={14} />
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-[#2c3e50] text-lg">John Anderson</h2>
              <p className="text-sm text-[#6b7c8c]">Aquaculture Farmer</p>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-[#2c3e50] text-sm">Personal Information</h3>
            <Button variant="ghost" className="h-8 px-2 text-[#3a8fa3] hover:text-[#1e5f74] hover:bg-[#e8eef2]">
              <Edit2 size={14} className="mr-1" />
              Edit
            </Button>
          </div>
          <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2] space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name" className="text-xs text-[#6b7c8c]">Full Name</Label>
              <div className="flex items-center gap-2 p-3 bg-[#f5f8fa] rounded-lg">
                <User size={16} className="text-[#6b7c8c]" />
                <Input
                  id="full-name"
                  value="John Anderson"
                  readOnly
                  className="border-0 bg-transparent p-0 h-auto text-sm text-[#2c3e50]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs text-[#6b7c8c]">Email Address</Label>
              <div className="flex items-center gap-2 p-3 bg-[#f5f8fa] rounded-lg">
                <Mail size={16} className="text-[#6b7c8c]" />
                <Input
                  id="email"
                  value="john@fishmate.com"
                  readOnly
                  className="border-0 bg-transparent p-0 h-auto text-sm text-[#2c3e50]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs text-[#6b7c8c]">Phone Number</Label>
              <div className="flex items-center gap-2 p-3 bg-[#f5f8fa] rounded-lg">
                <Phone size={16} className="text-[#6b7c8c]" />
                <Input
                  id="phone"
                  value="+1 (555) 123-4567"
                  readOnly
                  className="border-0 bg-transparent p-0 h-auto text-sm text-[#2c3e50]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-xs text-[#6b7c8c]">Location</Label>
              <div className="flex items-center gap-2 p-3 bg-[#f5f8fa] rounded-lg">
                <MapPin size={16} className="text-[#6b7c8c]" />
                <Input
                  id="location"
                  value="Portland, Oregon, USA"
                  readOnly
                  className="border-0 bg-transparent p-0 h-auto text-sm text-[#2c3e50]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="member-since" className="text-xs text-[#6b7c8c]">Member Since</Label>
              <div className="flex items-center gap-2 p-3 bg-[#f5f8fa] rounded-lg">
                <Calendar size={16} className="text-[#6b7c8c]" />
                <Input
                  id="member-since"
                  value="January 2024"
                  readOnly
                  className="border-0 bg-transparent p-0 h-auto text-sm text-[#2c3e50]"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Farm Statistics */}
        <div>
          <h3 className="text-[#2c3e50] text-sm mb-3 px-1">Farm Statistics</h3>
          <div className="grid grid-cols-3 gap-3">
            <Card className="bg-white rounded-lg shadow-md p-3 border border-[#e8eef2] text-center">
              <p className="text-2xl text-[#1e5f74]">4</p>
              <p className="text-xs text-[#6b7c8c] mt-1">Active Ponds</p>
            </Card>
            <Card className="bg-white rounded-lg shadow-md p-3 border border-[#e8eef2] text-center">
              <p className="text-2xl text-[#3a8fa3]">3</p>
              <p className="text-xs text-[#6b7c8c] mt-1">IoT Devices</p>
            </Card>
            <Card className="bg-white rounded-lg shadow-md p-3 border border-[#e8eef2] text-center">
              <p className="text-2xl text-[#5b9aa9]">98%</p>
              <p className="text-xs text-[#6b7c8c] mt-1">Uptime</p>
            </Card>
          </div>
        </div>

        {/* Save Button */}
        <Button className="w-full h-11 rounded-lg bg-[#1e5f74] hover:bg-[#164b5c] text-white shadow-md">
          Save Changes
        </Button>
        </div>
      </div>
    </div>
  );
}
