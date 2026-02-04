
import React from 'react';

const WarmUpSection: React.FC = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="flex items-center justify-center h-full gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 md:w-4 bg-gradient-to-t from-red-600 to-yellow-400 rounded-full animate-flow"
              style={{ 
                height: `${20 + Math.random() * 60}%`, 
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }} 
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center px-6">
        <span className="text-yellow-400 text-sm font-black tracking-[0.5em] uppercase mb-4 block drop-shadow-lg">Atmosphere</span>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter gradient-text-gold mb-8 drop-shadow-2xl">暖场入场</h2>
        <p className="text-xl md:text-3xl font-light text-white/60 tracking-widest max-w-3xl mx-auto leading-relaxed">
          宾客入席 · 乐动智朴
        </p>
      </div>
    </div>
  );
};

export default WarmUpSection;
