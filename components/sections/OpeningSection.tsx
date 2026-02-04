
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
      <div className="absolute inset-0 z-0 bg-[#0f0000]" />
      <div className="absolute inset-0 z-0 opening-aurora opacity-70" />
      <div className="absolute inset-0 z-0 opening-grid opacity-50" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-red-950/70 via-transparent to-red-950/70" />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.35),rgba(255,215,0,0))] blur-2xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,64,64,0.35),rgba(255,64,64,0))] blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-200/30 to-transparent opening-scan" />
      </div>

      <video 
        ref={videoRef}
        className={`absolute inset-0 z-[2] w-full h-full object-cover transition-all duration-1000 ${started ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        muted={false}
        loop 
        playsInline
      >
        <source src="/年会视频.mp4" type="video/mp4" />
      </video>

      {!started ? (
        <div className="relative z-10 max-w-4xl px-6 animate-in fade-in zoom-in duration-1000">
          <div className="opening-caption text-[11px] md:text-sm tracking-[0.6em] uppercase text-amber-200/80 mb-8">
            Gala Opening Sequence
          </div>

          <div className="relative mx-auto mb-10 h-40 w-40 md:h-56 md:w-56">
            <div className="absolute inset-0 rounded-full border border-yellow-300/30 shadow-[0_0_50px_rgba(255,215,0,0.25)] opening-pulse" />
            <div className="absolute inset-[-12px] rounded-full border border-yellow-300/20 opening-ring" />
            <div className="absolute inset-[-26px] rounded-full border border-yellow-300/10 opening-ring-slow" />
            <div className="absolute inset-4 rounded-full border border-yellow-200/30 bg-[radial-gradient(circle,rgba(255,215,0,0.25),rgba(255,215,0,0))] opening-float" />
            <div className="absolute inset-10 rounded-full border border-yellow-200/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 rounded-full bg-yellow-200/90 shadow-[0_0_30px_rgba(255,215,0,0.7)]" />
            </div>
          </div>

          <h2 className="opening-title text-6xl md:text-[10vw] font-black tracking-tight gradient-text-gold mb-6 drop-shadow-2xl">
            开场启动
          </h2>
          <p className="text-lg md:text-2xl text-amber-100/85 mb-10 tracking-[0.2em]">
            智朴科技 · 马年年会
          </p>

          <button 
            onClick={handleStart}
            className="group relative px-16 md:px-20 py-6 md:py-7 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white rounded-full font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_0_60px_rgba(255,215,0,0.35)] border border-yellow-400/40 opening-pulse"
          >
            <span className="relative z-10 tracking-[0.35em]">点火仪式</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 via-yellow-200/30 to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <div className="mt-6 text-xs md:text-sm text-amber-200/70">
            点击启动后进入开场视频
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OpeningSection;
