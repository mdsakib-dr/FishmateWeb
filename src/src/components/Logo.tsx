import { Fish, Heart } from 'lucide-react';

export function Logo({ size = "large" }: { size?: "small" | "large" }) {
  const containerSize = size === "large" ? "w-24 h-24" : "w-12 h-12";
  const iconSize = size === "large" ? 48 : 24;
  
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`${containerSize} bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-600 rounded-3xl flex items-center justify-center relative shadow-lg`}>
        <Fish className="text-white z-10" size={iconSize} strokeWidth={2.5} />
        <Heart className="text-white/20 absolute top-1 right-1" size={iconSize * 0.4} />
      </div>
      <span className={`${size === "large" ? "text-3xl" : "text-xl"} text-gray-800 tracking-tight`}>
        Fishmate
      </span>
    </div>
  );
}
