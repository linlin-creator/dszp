
import React, { useState, useRef } from 'react';

const OpeningSection: React.FC = () => {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    setStarted(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        {/* Supporting custom MP4 insertion via placeholder */}
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${started ? 'opacity-80' : 'opacity-20'}`}
          muted 
          loop 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-red-and-orange-particles-938-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-transparent to-red-900/60" />
      </div>

      {!started ? (
        <div className="relative z-10 animate-in fade-in zoom-in duration-1000">
           <span className="text-yellow-400 text-sm font-black tracking-[0.6em] uppercase mb-12 block">Ready for Launch</span>
           <h2 className="text-7xl md:text-[12vw] font-black tracking-tighter gradient-text-gold mb-16 drop-shadow-2xl">开场启动</h2>
           <button 
             onClick={handleStart}
             className="group relative px-20 py-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-black text-2xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_0_50px_rgba(255,215,0,0.3)] border-2 border-yellow-400/30"
           >
             <span className="relative z-10 tracking-[0.3em]">点火仪式</span>
             <div className="absolute inset-0 bg-yellow-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
           </button>
        </div>
      ) : (
        <div className="relative z-10 px-6 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter gradient-text-gold mb-6 italic">数智马年 · 震撼启程</h2>
          <div className="w-48 h-[2px] bg-yellow-400 mx-auto opacity-50" />
        </div>
      )}
    </div>
  );
};

export default OpeningSection;
