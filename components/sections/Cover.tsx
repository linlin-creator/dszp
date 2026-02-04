
import React from 'react';

interface CoverProps {
  onNext: () => void;
}

const Cover: React.FC<CoverProps> = ({ onNext }) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Premium Horse Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-20 scale-110 animate-pulse transition-transform duration-[20s]"
          alt="Horse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5">
            <div className="text-[50vw] font-black text-red-600 select-none leading-none float-animation">马</div>
        </div>
      </div>

      <div className="z-10 text-center px-6 max-w-7xl">
        <div className="flex flex-col items-center">
            <p className="text-xs md:text-sm font-black text-red-500 tracking-[0.6em] mb-10 uppercase animate-in slide-in-from-top-4 duration-1000">
              Nanjing Dashu Zhipu Technology 
            </p>
            <h1 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none mb-12 animate-in zoom-in-95 duration-1000">
              <span className="gradient-text-red">2026</span>
              <br />
              <span className="relative inline-block mt-4 whitespace-nowrap">
                跃马智行 朴实无华
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-white/40 mb-16 max-w-4xl mx-auto tracking-[0.4em] leading-relaxed animate-in fade-in duration-1000 delay-300">
              南京大数智朴科技有限公司·新年年会盛典
            </p>
            
            <button 
              onClick={onNext}
              className="group relative px-16 py-6 bg-red-600 text-white rounded-full font-black text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-red-500 shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] active:scale-95"
            >
              <span className="relative z-10 tracking-[0.2em]">开启盛典精彩</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />
            </button>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13L12 18L17 13M7 6L12 11L17 6"/>
        </svg>
      </div>
    </div>
  );
};

export default Cover;
