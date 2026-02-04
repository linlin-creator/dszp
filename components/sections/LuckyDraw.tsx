
import React, { useState, useEffect, useRef } from 'react';
import { PARTICIPANTS, PRIZES } from '../../constants';

const LuckyDraw: React.FC = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentName, setCurrentName] = useState('幸运抽奖');
  const [winners, setWinners] = useState<{name: string, prize: string}[]>([]);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

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
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden">
      <div className="mb-10 text-center shrink-0">
        <span className="text-yellow-400 text-xs font-black tracking-[0.6em] uppercase mb-3 block">Grand Lottery</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold inline-block mb-4">幸运抽奖</h2>
        <div className="flex justify-center">
            <div className="glass-card px-10 py-4 rounded-[2rem] border-yellow-400/30 bg-red-950/40">
                <span className="text-[10px] font-black text-yellow-400/40 uppercase tracking-[0.5em] block mb-2">当前待抽</span>
                <span className="text-2xl font-black text-white tracking-widest">{PRIZES[currentPrizeIndex]?.name || '盛典圆满'}</span>
            </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-0">
        <div className="lg:col-span-3 flex flex-col items-center justify-center glass-card rounded-[4rem] border-yellow-400/10 relative overflow-hidden bg-gradient-to-br from-red-950 to-black/60 shadow-[inset_0_0_100px_rgba(255,0,0,0.2)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)] transition-opacity duration-1000 ${isDrawing ? 'opacity-100' : 'opacity-20'}`} />
            {/* Moving lines effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-0 left-1/4 w-[1px] h-full bg-yellow-400 animate-pulse" />
              <div className="absolute top-0 left-2/4 w-[1px] h-full bg-yellow-400 animate-pulse" style={{animationDelay: '1s'}} />
              <div className="absolute top-0 left-3/4 w-[1px] h-full bg-yellow-400 animate-pulse" style={{animationDelay: '2s'}} />
            </div>
          </div>

          <div className={`relative z-10 text-8xl md:text-[14vw] font-black mb-16 transition-all duration-75 tracking-tighter ${isDrawing ? 'scale-110 blur-[1px] text-yellow-400' : 'scale-100 text-white drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]'}`}>
            {currentName}
          </div>

          <div className="z-10 flex gap-6">
            {!isDrawing ? (
              <button 
                onClick={startDraw}
                disabled={winners.length >= PARTICIPANTS.length || !PRIZES[currentPrizeIndex]}
                className="px-20 py-7 bg-white text-red-900 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] active:scale-95 disabled:opacity-20"
              >
                开启幸运
              </button>
            ) : (
              <button 
                onClick={stopDraw}
                className="px-20 py-7 bg-yellow-400 text-red-900 rounded-full font-black text-2xl hover:scale-110 transition-all shadow-[0_20px_60px_-10px_rgba(255,215,0,0.5)] active:scale-95"
              >
                中奖名单
              </button>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 glass-card rounded-[4rem] p-10 flex flex-col border-yellow-400/10 min-h-0 bg-red-950/30 backdrop-blur-3xl">
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-yellow-400">
            中奖荣耀榜 <span className="bg-yellow-400 text-red-900 px-3 py-1 rounded-xl text-sm font-black">{winners.length}</span>
          </h3>
          <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar pr-2">
            {winners.map((w, idx) => (
              <div key={idx} className="p-6 rounded-[2rem] bg-white/5 border border-yellow-400/10 flex items-center justify-between group hover:bg-white/10 transition-all duration-500">
                <div className="flex-1 min-w-0 pr-4">
                  <div className="font-black text-2xl truncate mb-1">{w.name}</div>
                  <div className="text-[10px] text-yellow-400/50 font-black uppercase tracking-[0.2em] truncate">{w.prize}</div>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-sm font-black border border-yellow-400/20">
                  #{winners.length - idx}
                </div>
              </div>
            ))}
            {winners.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-yellow-400/10 italic font-bold tracking-widest uppercase">静待锦鲤</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyDraw;
