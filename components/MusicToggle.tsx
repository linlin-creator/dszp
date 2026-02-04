
import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  label: string;
  accent: string;
  glow: string;
  bar: string;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle, label, accent, glow, bar }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle music"
      className="fixed bottom-8 right-8 z-[60] outline-none focus:outline-none focus-visible:outline-none"
    >
      <div className="relative w-12 h-12 rounded-full border border-white/25 bg-black/50 backdrop-blur-2xl">
        <div className={`absolute inset-[5px] rounded-full border border-white/20 ${isPlaying ? 'animate-spin' : 'opacity-40'}`} />
        <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-[2px] bg-white/80 transition-all duration-300 ${
                isPlaying ? 'lucky-eq' : 'h-[30%] opacity-40'
              }`}
              style={{
                animationDelay: `${i * 0.08}s`,
                animationDuration: `${0.55 + i * 0.08}s`
              }}
            />
          ))}
        </div>
      </div>
    </button>
  );
};

export default MusicToggle;
