
import React, { useState, useRef } from 'react';
import { PERFORMANCES } from '../../constants';
import { Performance } from '../../types';

const PerformanceGrid: React.FC = () => {
  const [selectedPerformance, setSelectedPerformance] = useState<Performance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (p: Performance) => {
    setSelectedPerformance(p);
    setIsPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PERFORMANCES.length) % PERFORMANCES.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PERFORMANCES.length);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,58,58,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(90deg,rgba(255,215,0,0.08)_1px,transparent_1px),linear-gradient(rgba(255,215,0,0.08)_1px,transparent_1px)] bg-[length:48px_48px] performance-float" />
      </div>

      <div className="mb-10 text-center shrink-0">
        <span className="text-yellow-400 text-xs font-black tracking-[0.5em] uppercase mb-2 block">Stage Program</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter gradient-text-gold inline-block mb-2">节目表演</h2>
        <p className="text-white/40 text-lg font-light">马鸣风萧萧，智领舞台秀</p>
      </div>

      <div className="flex-1 flex items-center justify-center pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center gap-10">
          <div 
            onClick={() => handleOpen(PERFORMANCES[currentIndex])}
            className="group relative h-[26rem] w-full max-w-3xl cursor-pointer rounded-[2.8rem] glass-card border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-500 overflow-hidden hover:scale-[1.01]"
          >
            <div className="absolute -top-12 -right-8 h-40 w-40 rounded-full border border-yellow-300/20 performance-orbit" />
            <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full border border-yellow-300/15 performance-orbit" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black/70 to-red-950" />
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.2),transparent_60%)]" />
            <div className="absolute inset-0 performance-sheen">
              <div className="absolute inset-y-0 left-1/2 w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <div className="absolute inset-0">
              <div className="absolute inset-10 rounded-[2rem] border border-yellow-300/20" />
              <div className="absolute inset-16 rounded-[1.6rem] border border-yellow-300/10" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-yellow-400 text-xs font-black tracking-[0.6em] uppercase mb-5">Secret Program</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight gradient-text-gold mb-4">点击揭晓</h3>
              <p className="text-sm text-white/60 font-medium">直接进入节目详情</p>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-12 h-2 w-2 rounded-full bg-yellow-200/60 performance-sparkle" />
              <div className="absolute top-24 right-20 h-1.5 w-1.5 rounded-full bg-white/60 performance-sparkle" />
              <div className="absolute bottom-20 right-12 h-2 w-2 rounded-full bg-yellow-300/60 performance-sparkle" />
              <div className="absolute bottom-12 left-20 h-1.5 w-1.5 rounded-full bg-white/50 performance-sparkle" />
            </div>
          </div>

          <div className="flex items-center gap-6 text-white/70">
            <button
              onClick={goPrev}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-yellow-400/40 hover:text-yellow-300 transition-colors"
            >
              上一个
            </button>
            <div className="text-xs tracking-[0.4em] uppercase">
              {currentIndex + 1} / {PERFORMANCES.length}
            </div>
            <button
              onClick={goNext}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-yellow-400/40 hover:text-yellow-300 transition-colors"
            >
              下一个
            </button>
          </div>
        </div>
      </div>

      {selectedPerformance && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-500">
          {/* Festive Background for Modal */}
          <div className="absolute inset-0 bg-red-950/90 backdrop-blur-3xl" onClick={() => setSelectedPerformance(null)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,28,37,0.2),transparent_70%)]" />
          </div>
          
          <div className="relative w-full max-w-6xl aspect-[16/9] glass-card rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(255,0,0,0.3)] border-yellow-400/20">
            <div className="md:w-3/5 h-full relative">
              <img 
                src={selectedPerformance.cover} 
                alt={selectedPerformance.title} 
                className="w-full h-full object-cover opacity-90"
              />
              <button 
                onClick={toggleMusic}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-red-600/95 backdrop-blur-xl border border-yellow-400/50 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-red-900 hover:scale-110 transition-all duration-500 shadow-2xl"
              >
                {isPlaying ? (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="ml-2"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
            </div>
            <div className="md:w-2/5 p-16 flex flex-col justify-center bg-gradient-to-br from-red-950/40 to-black/20">
              <span className="text-xs font-black tracking-[0.6em] text-yellow-500 uppercase mb-6">{selectedPerformance.type}</span>
              <h2 className="text-5xl font-black mb-10 leading-[1.1] tracking-tighter gradient-text-gold">{selectedPerformance.title}</h2>
              <div className="space-y-10">
                <div>
                  <h4 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] mb-3">领衔表演</h4>
                  <p className="text-2xl font-bold text-white tracking-wide">{selectedPerformance.performers.join('、')}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedPerformance(null)}
                className="mt-16 text-white/40 hover:text-yellow-400 transition-all flex items-center gap-4 font-black text-sm tracking-widest uppercase group"
              >
                <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </span>
                关闭详情
              </button>
            </div>
            
            <audio 
              ref={audioRef} 
              src={selectedPerformance.musicUrl} 
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceGrid;
