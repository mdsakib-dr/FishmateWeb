import { Droplets } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface SignUpScreenProps {
  onNavigate: (screen: string) => void;
}

export function SignUpScreen({ onNavigate }: SignUpScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d4e3ea] to-[#f5f8fa] flex flex-col items-center justify-center p-6 overflow-y-auto">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gradient-to-br from-[#1e5f74] to-[#3a8fa3] rounded-xl flex items-center justify-center shadow-lg">
            <Droplets className="text-white" size={32} />
          </div>
          <div className="text-center">
            <h1 className="text-[#1e5f74] text-2xl">Create Account</h1>
            <p className="text-[#6b7c8c] text-sm mt-1">Join Fishmate IoT</p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4 border border-[#d1dce3]">
          <div className="space-y-1.5">
            <Label htmlFor="fullname" className="text-sm text-[#2c3e50]">Full Name</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email-signup" className="text-sm text-[#2c3e50]">Email</Label>
            <Input
              id="email-signup"
              type="email"
              placeholder="your@email.com"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="mobile" className="text-sm text-[#2c3e50]">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-sm text-[#2c3e50]">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="confirm-password" className="text-sm text-[#2c3e50]">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className="text-sm text-[#2c3e50]">Farm Location (Optional)</Label>
            <Input
              id="location"
              type="text"
              placeholder="e.g., Portland, Oregon"
              className="h-11 rounded-lg border-[#d1dce3] focus:border-[#1e5f74] focus:ring-[#1e5f74]"
            />
          </div>

          <Button
            onClick={() => onNavigate('ponds')}
            className="w-full h-11 rounded-lg bg-[#1e5f74] hover:bg-[#164b5c] text-white shadow-md"
          >
            Create Account
          </Button>
        </div>

        <div className="text-center text-sm text-[#6b7c8c] pb-4">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('login')}
            className="text-[#3a8fa3] hover:text-[#1e5f74] transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
