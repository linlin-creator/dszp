import React from 'react';

const SpeechSection: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0b0000]" />
      <div className="absolute inset-0 speech-aurora opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,215,0,0.14),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(255,90,90,0.18),transparent_55%)]" />
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(120deg,rgba(255,215,0,0.06),transparent_30%,rgba(255,255,255,0.04),transparent_70%,rgba(255,90,90,0.06))] animate-[speech-aurora_18s_ease_infinite]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-12 top-24 h-2 w-2 rounded-full bg-yellow-300/60 speech-dots" />
        <div className="absolute right-20 top-40 h-3 w-3 rounded-full bg-red-300/60 speech-dots [animation-delay:-1.2s]" />
        <div className="absolute left-24 bottom-28 h-2 w-2 rounded-full bg-yellow-200/60 speech-dots [animation-delay:-2.2s]" />
        <div className="absolute right-32 bottom-20 h-2 w-2 rounded-full bg-yellow-300/60 speech-dots [animation-delay:-0.6s]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div className="text-left">
          <div className="speech-caption text-[11px] md:text-sm tracking-[0.6em] uppercase text-amber-200/80 mb-6">
            Executive Address
          </div>
          <h2 className="speech-title text-6xl md:text-[8vw] font-black tracking-tight gradient-text-gold mb-6 drop-shadow-2xl">
            领导致辞
          </h2>
          <p className="text-lg md:text-2xl text-amber-100/85 mb-10 tracking-[0.2em]">
            大数智朴 · 2026 马年年会
          </p>

          <div className="relative rounded-[2.5rem] glass-card border border-yellow-400/20 px-10 py-8 overflow-hidden speech-float">
            <div className="absolute inset-0 award-shimmer opacity-60" />
            <div className="absolute inset-0 speech-sheen opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,215,0,0.16),transparent_40%,rgba(255,90,90,0.18))] opacity-30" />
            <div className="text-xs text-yellow-300/70 tracking-[0.45em] uppercase mb-4">
              Keynote
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tracking-wide">
              以智为桨 · 以朴为帆
            </div>
            <div className="mt-4 text-sm text-white/50 tracking-[0.3em] uppercase">
              共赴新征程
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2.5rem] border border-yellow-300/20 rotate-3" />
          <div className="absolute inset-0 rounded-[2.5rem] border border-yellow-300/10 -rotate-3" />
          <div className="absolute -inset-8 rounded-full border border-yellow-400/10 speech-ring" />
          <div className="absolute -inset-16 rounded-full border border-red-400/10 speech-ring-slow" />
          <div className="absolute -top-12 -right-8 h-28 w-28 rounded-full border border-red-400/20 speech-orbit" />
          <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full border border-yellow-300/20 speech-orbit" />
          <div className="absolute inset-0 speech-red-glow bg-[radial-gradient(circle_at_bottom,rgba(255,60,60,0.35),transparent_60%)]" />
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-[2.5rem] glass-card border border-yellow-400/30 overflow-hidden speech-card-float speech-card-tilt">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.2),transparent_55%)]" />
            <div className="absolute inset-0 speech-grid opacity-60" />
            <div className="absolute inset-0 speech-scan opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <div className="mb-6 text-xs text-yellow-300/70 tracking-[0.45em] uppercase">Speaker</div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300/40 to-yellow-500/20 border border-yellow-300/40 flex items-center justify-center text-3xl font-black text-white mb-6 speech-glow-pulse">
                致
              </div>
              <div className="text-3xl font-black text-white tracking-wide mb-2">致辞主讲</div>
              <div className="text-xs text-yellow-400/70 tracking-[0.4em] uppercase">Leadership</div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechSection;
