
import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110"
          alt="Fireworks"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-transparent to-red-900/80" />
      </div>

      <div className="relative z-10 px-6 max-w-5xl">
        <span className="text-yellow-400 text-sm font-black tracking-[0.6em] uppercase mb-10 block animate-in fade-in duration-1000">Vision 2026</span>
        <h2 className="text-7xl md:text-[11vw] font-black tracking-tighter leading-none mb-12 gradient-text-gold animate-in zoom-in-95 duration-1000">收场展望</h2>
        <div className="w-48 h-[3px] bg-yellow-400 mx-auto mb-16 opacity-30" />
        <p className="text-2xl md:text-4xl font-light text-white/60 tracking-[0.3em] leading-relaxed italic">
          策马奔腾 · 锦绣前程
          <br />
          <span className="text-lg md:text-xl font-medium mt-8 inline-block opacity-40">南京大数智朴科技有限公司 · 共创共赢</span>
        </p>
      </div>
    </div>
  );
};

export default ClosingSection;
