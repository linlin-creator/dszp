
import React from 'react';

const WarmUpSection: React.FC = () => {
  const bars = Array.from({ length: 28 });
  const rings = [0, 1, 2];

  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]" />
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-white/5 blur-3xl warmup-drift" />
        <div className="absolute -bottom-28 -right-28 w-[36rem] h-[36rem] rounded-full bg-white/6 blur-3xl warmup-drift" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.06),transparent_45%,rgba(255,255,255,0.08))] mix-blend-screen opacity-70" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60vmin] h-[60vmin]">
            {rings.map((ring, idx) => (
              <div
                key={ring}
                className={`absolute inset-0 rounded-full border border-white/10 warmup-beat ${idx === 1 ? 'warmup-spin' : ''}`}
                style={{
                  transform: `scale(${1 + idx * 0.18})`,
                  animationDelay: `${idx * 0.4}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end justify-center gap-[6px] px-8 pb-10">
          {bars.map((_, i) => (
            <div
              key={i}
              className="w-[6px] md:w-[10px] bg-white/70 rounded-full warmup-bar"
              style={{
                height: `${25 + (i * 7) % 60}%`,
                animationDelay: `${i * 0.08}s`,
                animationDuration: `${0.9 + (i % 4) * 0.18}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6">
        <span className="text-white/70 text-xs font-black tracking-[0.6em] uppercase mb-4 block drop-shadow-lg">Atmosphere</span>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter gradient-text-gold mb-8 drop-shadow-2xl">暖场入场</h2>
        <p className="text-xl md:text-3xl font-light text-white/60 tracking-widest max-w-3xl mx-auto leading-relaxed">
          宾客入席 · 乐动智朴
        </p>
      </div>
    </div>
  );
};

export default WarmUpSection;
