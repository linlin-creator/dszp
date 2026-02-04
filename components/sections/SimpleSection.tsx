
import React from 'react';
import { SectionType } from '../../types';

interface SimpleSectionProps {
  title: string;
  type: SectionType;
  coverOnly?: boolean;
}

const SimpleSection: React.FC<SimpleSectionProps> = ({ title, type, coverOnly }) => {
  const getSubText = () => {
    switch(type) {
      case SectionType.GAMES: return "妙趣横生 · 协作无间";
      case SectionType.BANQUET: return "举杯邀明月 · 共饮智朴情";
      case SectionType.SPEECH: return "智者领航 · 赋能未来";
      default: return "马到成功 · 精彩继续";
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background for Banquet and Speech */}
      {coverOnly && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={type === SectionType.BANQUET 
              ? "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=2000" 
              : "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=2000"} 
            className="w-full h-full object-cover opacity-25 scale-105 animate-pulse"
            alt="Festive BG"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-transparent to-red-950/80" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        <span className="text-yellow-400 text-sm font-black tracking-[0.6em] uppercase mb-6 block animate-in fade-in slide-in-from-top-4">Program Event</span>
        <h2 className={`font-black tracking-tighter leading-none mb-8 gradient-text-gold ${coverOnly ? 'text-7xl md:text-[10vw]' : 'text-6xl md:text-8xl'}`}>{title}</h2>
        <p className="text-2xl md:text-3xl font-light text-white/50 tracking-widest leading-relaxed max-w-4xl mx-auto mb-16 italic animate-in fade-in delay-200">
          {getSubText()}
        </p>

        {!coverOnly && type === SectionType.GAMES && (
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group glass-card p-10 rounded-[3rem] text-center hover:bg-yellow-400/5 hover:border-yellow-400 transition-all duration-500 border-yellow-400/10 cursor-pointer">
                  <div className="w-20 h-20 rounded-[2rem] bg-red-600/20 mb-8 mx-auto flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-red-950 transition-all duration-700 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                    <span className="text-3xl font-black">{i + 1}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-3 tracking-tight group-hover:text-yellow-400 transition-colors">互动环节 {i + 1}</h4>
                  <p className="text-xs text-white/30 font-bold uppercase tracking-widest">Team Cooperation</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleSection;
