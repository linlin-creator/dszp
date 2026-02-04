
import React from 'react';

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle: React.FC<MusicToggleProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 p-3.5 apple-blur rounded-full border border-red-500/20 hover:bg-red-600/10 transition-all group shadow-2xl"
    >
      <div className="flex items-end gap-[2px] h-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-[2px] bg-red-500 transition-all duration-300 ${
              isPlaying 
                ? 'animate-bounce h-full' 
                : 'h-[30%]'
            }`}
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${0.6 + i * 0.1}s`
            }}
          />
        ))}
      </div>
      <span className="text-xs font-bold text-white/80 hidden md:inline pr-1 tracking-widest uppercase">
        {isPlaying ? 'Audio ON' : 'Audio OFF'}
      </span>
    </button>
  );
};

export default MusicToggle;
