import { ArrowLeft, Bell, Moon, Wifi, User, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  return (
    <div className="h-full bg-[#f5f8fa] overflow-y-auto relative pb-14">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 pt-11 border-b border-[#e8eef2]">
        <div className="p-4 flex items-center gap-3">
          <button onClick={() => onNavigate('ponds')} className="p-2 hover:bg-[#e8eef2] rounded-lg transition-colors">
            <ArrowLeft className="text-[#2c3e50]" size={20} />
          </button>
          <h1 className="text-[#1e5f74] text-xl">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-6">
        {/* Profile Section */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <button 
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-3 mb-3 w-full hover:bg-[#e8eef2]/50 transition-colors rounded-lg p-2 -m-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-[#2c3e50] text-sm">John Anderson</h3>
              <p className="text-xs text-[#6b7c8c]">john@fishmate.com</p>
            </div>
            <ChevronRight size={16} className="text-[#6b7c8c]" />
          </button>
        </Card>

        {/* Preferences */}
        <div>
          <h2 className="text-[#2c3e50] text-sm mb-2 px-1">Preferences</h2>
          <Card className="bg-white rounded-lg shadow-md overflow-hidden border border-[#e8eef2]">
            <div className="divide-y divide-[#e8eef2]">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#f57c00]/10 rounded-lg flex items-center justify-center">
                    <Bell size={16} className="text-[#f57c00]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c3e50]">Notifications</p>
                    <p className="text-xs text-[#6b7c8c]">Get alerts for critical readings</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#1e5f74]" />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2c3e50]/10 rounded-lg flex items-center justify-center">
                    <Moon size={16} className="text-[#2c3e50]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c3e50]">Dark Mode</p>
                    <p className="text-xs text-[#6b7c8c]">Switch to dark theme</p>
                  </div>
                </div>
                <Switch className="data-[state=checked]:bg-[#1e5f74]" />
              </div>

              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#5b9aa9]/10 rounded-lg flex items-center justify-center">
                    <Wifi size={16} className="text-[#5b9aa9]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#2c3e50]">Auto Device Sync</p>
                    <p className="text-xs text-[#6b7c8c]">Sync data automatically</p>
                  </div>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#1e5f74]" />
              </div>
            </div>
          </Card>
        </div>

        {/* Account Actions */}
        <div>
          <h2 className="text-[#2c3e50] text-sm mb-2 px-1">Account</h2>
          <Card className="bg-white rounded-lg shadow-md overflow-hidden border border-[#e8eef2]">
            <div className="divide-y divide-[#e8eef2]">
              <button className="w-full p-4 flex items-center justify-between hover:bg-[#e8eef2]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1e5f74]/10 rounded-lg flex items-center justify-center">
                    <Lock size={16} className="text-[#1e5f74]" />
                  </div>
                  <p className="text-sm text-[#2c3e50]">Change Password</p>
                </div>
                <ChevronRight size={16} className="text-[#6b7c8c]" />
              </button>

              <button className="w-full p-4 flex items-center justify-between hover:bg-[#e8eef2]/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1e5f74]/10 rounded-lg flex items-center justify-center">
                    <HelpCircle size={16} className="text-[#1e5f74]" />
                  </div>
                  <p className="text-sm text-[#2c3e50]">Help & Support</p>
                </div>
                <ChevronRight size={16} className="text-[#6b7c8c]" />
              </button>
            </div>
          </Card>
        </div>

        {/* App Info */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-[#e8eef2]">
          <div className="space-y-2 text-center">
            <p className="text-xs text-[#6b7c8c]">Fishmate IoT v2.1.0</p>
            <p className="text-xs text-[#c5d3dc]">© 2025 Fishmate Technologies</p>
          </div>
        </Card>

        {/* Logout Button */}
        <button
          onClick={() => onNavigate('login')}
          className="w-full p-4 bg-white rounded-lg shadow-md flex items-center justify-center gap-2 text-[#c62828] hover:bg-[#c62828]/10 transition-colors border border-[#e8eef2]"
        >
          <LogOut size={18} />
          <span className="text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
}
