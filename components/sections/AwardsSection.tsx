
import React, { useState } from 'react';
import { AWARDS_DATA } from '../../constants';

const AwardsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (idx: number) => {
    if (flippedCards.includes(idx)) {
      setFlippedCards(flippedCards.filter(i => i !== idx));
    } else {
      setFlippedCards([...flippedCards, idx]);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-6 md:p-12 lg:p-16 overflow-hidden">
      <div className="mb-12 text-center shrink-0">
        <span className="text-yellow-400 text-sm font-black tracking-[0.5em] uppercase mb-4 block">Honor Roll</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold mb-2">表彰典礼</h2>
        <p className="text-white/40 text-lg">点击卡片 · 揭晓荣耀</p>
      </div>

      <div className="flex-1 w-full max-w-7xl flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full h-[60%]">
          {AWARDS_DATA.map((award, idx) => (
            <div 
              key={idx} 
              className={`flip-card h-full ${flippedCards.includes(idx) ? 'flipped' : ''}`}
              onClick={() => toggleFlip(idx)}
            >
              <div className="flip-card-inner">
                {/* Front side */}
                <div className="flip-card-front glass-card border-yellow-400/20 shadow-2xl">
                    <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                        </svg>
                    </div>
                    <h4 className="text-3xl font-black px-6 tracking-tight leading-tight">{award.title}</h4>
                    <div className="mt-8 text-yellow-400/40 animate-pulse text-xs tracking-widest uppercase font-bold">点击揭晓</div>
                </div>

                {/* Back side */}
                <div className="flip-card-back glass-card bg-gradient-to-br from-red-600/40 to-red-900/40 border-yellow-400/50 shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                   <span className="text-[10px] font-black tracking-[0.4em] text-yellow-400 uppercase mb-8">{award.title}</span>
                   {award.items ? (
                      <div className="space-y-4 px-6 w-full">
                        {award.items.map((it, i) => (
                          <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                             <div className="font-black text-xl text-white">{it.name}</div>
                             <div className="text-[10px] text-yellow-400/60 font-bold uppercase tracking-widest mt-1">{it.dept}</div>
                          </div>
                        ))}
                      </div>
                   ) : (
                     <div className="px-6 w-full">
                       <div className="text-4xl font-black mb-3 text-white drop-shadow-lg">{award.rep}</div>
                       <div className="text-xs text-yellow-400/60 font-black uppercase tracking-[0.3em]">{award.dept}</div>
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
