import { Droplets } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export function LoginScreen({ onNavigate }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d4e3ea] to-[#f5f8fa] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-xl flex items-center justify-center shadow-lg">
            <Droplets className="text-white" size={32} />
          </div>
          <div className="text-center">
            <h1 className="text-[#1e5f74] text-2xl">Fishmate IoT</h1>
            <p className="text-[#6b7c8c] text-sm mt-1">Smart Aquaculture Monitoring</p>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-5 border border-[#d1dce3]">
          <div className="space-y-1.5">
            <Label htmlFor="email-login" className="text-sm text-[#2c3e50]">Email</Label>
            <Input
              id="email-login"
              type="email"
              placeholder="your@email.com"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password-login" className="text-sm text-[#2c3e50]">Password</Label>
            <Input
              id="password-login"
              type="password"
              placeholder="Enter your password"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="text-right">
            <button className="text-[#3a8fa3] hover:text-[#1e5f74] text-sm transition-colors">
              Forgot password?
            </button>
          </div>

          <Button
            onClick={() => onNavigate('ponds')}
            className="w-full h-11 rounded-lg bg-[#1e5f74] hover:bg-[#164b5c] text-white shadow-md"
          >
            Log In
          </Button>
        </div>

        <div className="text-center text-sm text-[#6b7c8c]">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="text-[#3a8fa3] hover:text-[#1e5f74] transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
