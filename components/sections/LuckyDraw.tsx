
import React, { useState, useEffect, useRef } from 'react';
import { PARTICIPANTS, PRIZES } from '../../constants';

const LuckyDraw: React.FC = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentName, setCurrentName] = useState('幸运抽奖');
  const [winners, setWinners] = useState<{name: string, prize: string}[]>([]);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [revealTick, setRevealTick] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startDraw = () => {
    if (isDrawing || winners.length >= PARTICIPANTS.length) return;
    setIsDrawing(true);
    timerRef.current = window.setInterval(() => {
      const randomIndex = Math.floor(Math.random() * PARTICIPANTS.length);
      setCurrentName(PARTICIPANTS[randomIndex].name);
    }, 40);
  };

  const stopDraw = () => {
    if (!isDrawing) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const available = PARTICIPANTS.filter(p => !winners.some(w => w.name === p.name));
    if (available.length === 0) {
      setCurrentName("满载而归");
      setIsDrawing(false);
      return;
    }
    const winner = available[Math.floor(Math.random() * available.length)];
    const prize = PRIZES[currentPrizeIndex] || { name: '新春特惠奖' };
    setCurrentName(winner.name);
    setWinners([{ name: winner.name, prize: prize.name }, ...winners]);
    setCurrentPrizeIndex(prev => prev + 1);
    setIsDrawing(false);
    setRevealTick(prev => prev + 1);
  };

  const currentPrize = PRIZES[currentPrizeIndex]?.name || '盛典圆满';
  const remaining = PARTICIPANTS.length - winners.length;
  const canDraw = !isDrawing && remaining > 0 && Boolean(PRIZES[currentPrizeIndex]);

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 lucky-aurora opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_45%,rgba(255,255,255,0.08)_100%)] mix-blend-screen opacity-50" />
      </div>

      <div className="mb-8 text-center shrink-0 relative z-10">
        <span className="text-yellow-300/80 text-xs font-black tracking-[0.6em] uppercase mb-3 block">Quantum Lottery Engine</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold inline-block mb-4">幸运抽奖</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="glass-card px-6 py-3 rounded-2xl border-yellow-400/20 bg-red-950/40">
            <div className="text-[10px] font-black text-yellow-300/60 uppercase tracking-[0.4em] mb-1">当前奖项</div>
            <div className="text-lg font-black text-white tracking-widest">{currentPrize}</div>
          </div>
          <div className="glass-card px-6 py-3 rounded-2xl border-yellow-400/10 bg-red-950/30">
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">剩余席位</div>
            <div className="text-lg font-black text-white tracking-widest">{remaining}</div>
          </div>
          <div className="glass-card px-6 py-3 rounded-2xl border-yellow-400/10 bg-red-950/30">
            <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-1">累计中奖</div>
            <div className="text-lg font-black text-white tracking-widest">{winners.length}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-0 relative z-10">
        <div className="lg:col-span-3 relative">
          <div className="absolute inset-0 rounded-[4rem] border border-yellow-400/10 bg-gradient-to-br from-red-950/70 to-black/70 shadow-[inset_0_0_120px_rgba(255,0,0,0.25)]" />
          <div className="absolute inset-0 rounded-[4rem] overflow-hidden">
            <div className={`absolute -inset-24 border border-yellow-400/20 rounded-full lucky-orbit ${isDrawing ? 'opacity-70' : 'opacity-30'}`} />
            <div className={`absolute -inset-10 border border-yellow-400/10 rounded-full lucky-orbit ${isDrawing ? 'opacity-60' : 'opacity-20'}`} style={{ animationDuration: '28s' }} />
            <div className={`absolute inset-0 lucky-scan ${isDrawing ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute left-12 right-12 h-16 bg-gradient-to-b from-yellow-400/30 via-yellow-200/10 to-transparent blur-xl" />
            </div>
          </div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
            <div key={revealTick} className="absolute inset-0 pointer-events-none">
              <div className={`absolute inset-12 rounded-[3rem] border border-yellow-400/20 ${!isDrawing ? 'lucky-reveal' : ''}`} />
            </div>

            <div className={`text-6xl md:text-[8vw] font-black tracking-tighter transition-all duration-100 ${isDrawing ? 'scale-[1.06] blur-[1px] text-yellow-300 lucky-glitch' : 'scale-100 text-white drop-shadow-[0_0_40px_rgba(255,215,0,0.35)]'}`}>
              {currentName}
            </div>

            <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              {!isDrawing ? (
                <button
                  onClick={startDraw}
                  disabled={!canDraw}
                  className="px-16 py-6 bg-white text-red-900 rounded-full font-black text-xl tracking-widest uppercase hover:scale-110 transition-all shadow-[0_20px_70px_-15px_rgba(255,255,255,0.5)] active:scale-95 disabled:opacity-30"
                >
                  开启幸运
                </button>
              ) : (
                <button
                  onClick={stopDraw}
                  className="px-16 py-6 bg-yellow-400 text-red-900 rounded-full font-black text-xl tracking-widest uppercase hover:scale-110 transition-all shadow-[0_20px_70px_-15px_rgba(255,215,0,0.6)] active:scale-95"
                >
                  锁定名单
                </button>
              )}
              <div className="text-xs uppercase tracking-[0.6em] text-white/40 font-black">
                {isDrawing ? '抽奖进行中' : canDraw ? '等待启动' : '抽奖结束'}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 glass-card rounded-[4rem] p-8 md:p-10 flex flex-col border-yellow-400/10 min-h-0 bg-red-950/30 backdrop-blur-3xl lucky-pulse">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black flex items-center gap-4 text-yellow-300">
              中奖荣耀榜
            </h3>
            <span className="bg-yellow-400 text-red-900 px-3 py-1 rounded-xl text-xs font-black tracking-widest">
              #{winners.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar pr-2">
            {winners.map((w, idx) => (
              <div key={idx} className={`p-5 rounded-[2rem] bg-white/5 border border-yellow-400/10 flex items-center justify-between group hover:bg-white/10 transition-all duration-500 ${idx === 0 ? 'lucky-reveal' : ''}`}>
                <div className="flex-1 min-w-0 pr-4">
                  <div className="font-black text-2xl truncate mb-1">{w.name}</div>
                  <div className="text-[10px] text-yellow-300/60 font-black uppercase tracking-[0.2em] truncate">{w.prize}</div>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-300 text-sm font-black border border-yellow-400/20">
                  #{winners.length - idx}
                </div>
              </div>
            ))}
            {winners.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-yellow-300/20 italic font-bold tracking-widest uppercase">静待锦鲤</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyDraw;
