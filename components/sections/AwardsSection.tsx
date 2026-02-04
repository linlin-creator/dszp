
import React, { useState } from 'react';
import { AWARDS_DATA } from '../../constants';

const AwardsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + AWARDS_DATA.length) % AWARDS_DATA.length);
    setIsFlipped(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % AWARDS_DATA.length);
    setIsFlipped(false);
  };

  const currentAward = AWARDS_DATA[currentIndex];

  return (
    <div className="h-full w-full flex flex-col items-center p-6 md:p-12 lg:p-16 overflow-hidden">
      <div className="mb-12 text-center shrink-0">
        <span className="text-yellow-400 text-sm font-black tracking-[0.5em] uppercase mb-4 block">Honor Roll</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold mb-2">表彰典礼</h2>
        <p className="text-white/40 text-lg">点击卡片 · 揭晓荣耀</p>
      </div>

      <div className="flex-1 w-full max-w-7xl flex items-center justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center gap-10">
          <div 
            className={`flip-card h-[28rem] w-full ${isFlipped ? 'flipped' : ''}`}
            onClick={toggleFlip}
          >
            <div className="flip-card-inner">
              {/* Front side */}
              <div className="flip-card-front glass-card border-yellow-400/20 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_60%)]" />
                  <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full border border-yellow-300/25 award-orbit" />
                  <div className="absolute -bottom-12 -left-8 h-28 w-28 rounded-full border border-yellow-300/15 award-orbit-slow" />
                  <div className="absolute inset-0 award-shimmer">
                    <div className="absolute inset-y-0 left-1/2 w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 -m-3 rounded-full border border-yellow-300/30" />
                      <div className="absolute inset-0 -m-8 rounded-full border border-yellow-300/15" />
                      <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 award-pulse">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                          </svg>
                      </div>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black px-6 tracking-tight leading-tight gradient-text-gold">{currentAward.title}</h4>
                    <div className="mt-6 text-yellow-300/60 text-xs tracking-[0.6em] uppercase font-bold">点击揭晓</div>
                  </div>
              </div>

              {/* Back side */}
              <div className="flip-card-back glass-card bg-gradient-to-br from-red-600/40 to-red-900/40 border-yellow-400/50 shadow-[0_0_60px_rgba(255,215,0,0.15)]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.18),transparent_60%)]" />
                 <div className="absolute -top-10 -right-6 h-28 w-28 rounded-full border border-yellow-300/20 opacity-60" />
                 <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full border border-yellow-300/15 opacity-50" />
                 <div className="absolute top-8 left-1/2 h-1 w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
                 <div className="absolute bottom-10 left-1/2 h-1 w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />

                 <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                   <span className="text-[10px] font-black tracking-[0.5em] text-yellow-400 uppercase mb-4">{currentAward.title}</span>

                   <div className="relative mb-6">
                     <div className="absolute inset-0 -m-3 rounded-full border border-yellow-300/30" />
                     <div className="absolute inset-0 -m-8 rounded-full border border-yellow-300/15" />
                     <div className="w-28 h-28 rounded-full border border-yellow-300/40 flex items-center justify-center bg-gradient-to-br from-yellow-200/20 to-yellow-500/10 shadow-[0_0_50px_rgba(255,215,0,0.25)]">
                       <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="url(#trophyGradBack)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                         <defs>
                           <linearGradient id="trophyGradBack" x1="0" y1="0" x2="1" y2="1">
                             <stop offset="0%" stopColor="#FFE9A6" />
                             <stop offset="60%" stopColor="#FFD700" />
                             <stop offset="100%" stopColor="#D4AF37" />
                           </linearGradient>
                         </defs>
                         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                         <path d="M4 22h16" />
                         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                       </svg>
                     </div>
                   </div>

                   {currentAward.items ? (
                      <div className="px-6 w-full">
                        <div className="grid grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
                          {currentAward.items.map((it, i) => (
                            <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-md flex flex-col items-center gap-3">
                               <div className="relative">
                                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-500/20 border border-yellow-300/40 flex items-center justify-center text-lg font-black text-white">
                                   {it.name?.slice(0, 1)}
                                 </div>
                                 <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-yellow-300/80 border border-red-900/50" />
                               </div>
                               <div className="text-center">
                                 <div className="font-black text-lg text-white">{it.name}</div>
                                 <div className="text-[10px] text-yellow-400/60 font-bold uppercase tracking-widest mt-1">{it.dept}</div>
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                   ) : (
                     <div className="px-6 w-full flex flex-col items-center">
                       <div className="flex flex-col items-center gap-4">
                         <div className="relative">
                           <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-500/20 border border-yellow-300/40 flex items-center justify-center text-2xl font-black text-white">
                             {currentAward.rep?.slice(0, 1)}
                           </div>
                           <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-yellow-300/80 border border-red-900/50" />
                         </div>
                         <div className="text-center">
                           <div className="text-4xl font-black text-white drop-shadow-lg">{currentAward.rep}</div>
                           <div className="text-xs text-yellow-400/60 font-black uppercase tracking-[0.3em]">{currentAward.dept}</div>
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
              </div>
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
              {currentIndex + 1} / {AWARDS_DATA.length}
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
    </div>
  );
};

export default AwardsSection;
