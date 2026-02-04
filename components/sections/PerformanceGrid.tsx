
import React, { useState, useRef } from 'react';
import { PERFORMANCES } from '../../constants';
import { Performance } from '../../types';

const PerformanceGrid: React.FC = () => {
  const [selectedPerformance, setSelectedPerformance] = useState<Performance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = (p: Performance) => {
    setSelectedPerformance(p);
    setIsPlaying(false);
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
      <div className="mb-10 text-center shrink-0">
        <span className="text-yellow-400 text-xs font-black tracking-[0.5em] uppercase mb-2 block">Stage Program</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter gradient-text-gold inline-block mb-2">节目表演</h2>
        <p className="text-white/40 text-lg font-light">马鸣风萧萧，智领舞台秀</p>
      </div>

      <div className="flex-1 overflow-y-auto custom-scroll pr-2 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PERFORMANCES.map((p) => (
            <div 
              key={p.id}
              onClick={() => handleOpen(p)}
              className="group relative h-[22rem] rounded-[2.5rem] overflow-hidden glass-card cursor-pointer hover:border-yellow-400/50"
            >
              <img 
                src={p.cover} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-1 bg-yellow-400 text-red-900 text-[10px] font-black tracking-widest uppercase mb-4 inline-block rounded-full">
                  {p.type}
                </span>
                <h3 className="text-3xl font-black mb-2 tracking-tight group-hover:text-yellow-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-white/50 font-medium">参演: {p.performers.join('、')}</p>
              </div>
            </div>
          ))}
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
