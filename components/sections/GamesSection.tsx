import React, { useState } from 'react';

type GameItem = {
  id: number;
  title: string;
  file: string;
  external?: boolean;
  accent: string;
  glow: string;
  motif: 'horse' | 'speed' | 'pun' | 'balloon' | 'draw' | 'music' | 'trousers';
};

const GAMES: GameItem[] = [
  {
    id: 1,
    title: '马年猜猜',
    file: 'https://www.kdocs.cn/l/cbD1A8IR5Mu1',
    external: true,
    accent: 'from-amber-400 via-yellow-300 to-amber-500',
    glow: 'rgba(255,215,0,0.35)',
    motif: 'horse',
  },
  {
    id: 2,
    title: '马不停蹄',
    file: 'https://www.kdocs.cn/l/ckRg2T6fJcoG',
    external: true,
    accent: 'from-rose-400 via-red-400 to-orange-400',
    glow: 'rgba(255,120,120,0.35)',
    motif: 'speed',
  },
  {
    id: 3,
    title: '谐音梗挑',
    file: 'https://www.kdocs.cn/l/cge0jcuFlQ3C',
    external: true,
    accent: 'from-cyan-300 via-emerald-300 to-lime-300',
    glow: 'rgba(120,255,210,0.35)',
    motif: 'pun',
  },
  {
    id: 4,
    title: '飞翔的气球',
    file: 'https://www.kdocs.cn/l/cgRD6nXurY7f',
    external: true,
    accent: 'from-sky-300 via-blue-300 to-indigo-400',
    glow: 'rgba(120,180,255,0.35)',
    motif: 'balloon',
  },
  {
    id: 5,
    title: '你划我猜',
    file: 'https://www.kdocs.cn/l/ceWmzqk0dFxK',
    external: true,
    accent: 'from-fuchsia-300 via-pink-300 to-rose-400',
    glow: 'rgba(255,120,210,0.35)',
    motif: 'draw',
  },
  {
    id: 6,
    title: '听音乐猜歌',
    file: 'https://www.kdocs.cn/l/catrcrkgRTWU',
    external: true,
    accent: 'from-emerald-300 via-teal-300 to-cyan-300',
    glow: 'rgba(120,255,220,0.35)',
    motif: 'music',
  },
  {
    id: 7,
    title: '徒手穿花裤',
    file: 'https://www.kdocs.cn/l/cbklf9GaMvKZ',
    external: true,
    accent: 'from-purple-300 via-violet-300 to-indigo-300',
    glow: 'rgba(180,140,255,0.35)',
    motif: 'trousers',
  },
];

const GamesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentGame = GAMES[currentIndex];
  const fileUrl = currentGame.external ? currentGame.file : `/game/${currentGame.file}`;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GAMES.length) % GAMES.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GAMES.length);
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,58,58,0.14),transparent_60%)]" />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(90deg,rgba(255,215,0,0.06)_1px,transparent_1px),linear-gradient(rgba(255,215,0,0.06)_1px,transparent_1px)] bg-[length:52px_52px] game-float" />
      </div>

      <div className="mb-10 text-center shrink-0">
        <span className="text-yellow-400 text-xs font-black tracking-[0.5em] uppercase mb-2 block">Game Arena</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter gradient-text-gold inline-block mb-2">互动游戏</h2>
        <p className="text-white/40 text-lg font-light">一次只揭晓一个游戏 · 点击即打开</p>
      </div>

      <div className="flex-1 flex items-center justify-center pb-24">
        <div className="w-full max-w-5xl flex flex-col items-center gap-10">
          <a
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative h-[28rem] w-full max-w-3xl cursor-pointer rounded-[3rem] glass-card border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-500 overflow-hidden hover:scale-[1.01]"
            style={{ boxShadow: `0 0 80px ${currentGame.glow}` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${currentGame.accent} opacity-20`} />
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black/70 to-red-950" />
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.2),transparent_60%)]" />

            <div className="absolute -top-10 -right-8 h-40 w-40 rounded-full border border-yellow-300/20 game-orbit" />
            <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full border border-yellow-300/15 game-orbit-slow" />

            <div className="absolute inset-0 game-sheen">
              <div className="absolute inset-y-0 left-1/2 w-[45%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.5em] text-yellow-400 uppercase">Game</span>
                <span className="text-[11px] font-black tracking-[0.5em] text-yellow-400 uppercase">No.{currentGame.id}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight gradient-text-gold mb-4">
                {currentGame.title}
              </h3>
              <div className="text-xs text-yellow-200/70 tracking-[0.35em] uppercase">
                点击打开
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-12 h-2 w-2 rounded-full bg-yellow-200/60 game-sparkle" />
              <div className="absolute top-24 right-20 h-1.5 w-1.5 rounded-full bg-white/60 game-sparkle" />
              <div className="absolute bottom-20 right-12 h-2 w-2 rounded-full bg-yellow-300/60 game-sparkle" />
              <div className="absolute bottom-12 left-20 h-1.5 w-1.5 rounded-full bg-white/50 game-sparkle" />
            </div>

            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {currentGame.motif === 'horse' && (
                <div className="game-motif">
                  <svg width="140" height="140" viewBox="0 0 120 120" fill="none" className="opacity-70">
                    <path d="M32 86c10-10 23-23 25-40 1-12 10-19 23-20 6 0 9 3 8 9-1 8-8 13-16 14-8 1-13 6-14 12-2 12-8 26-26 41" stroke="rgba(255,215,0,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="82" cy="36" r="4" fill="rgba(255,215,0,0.7)" />
                  </svg>
                </div>
              )}
              {currentGame.motif === 'speed' && (
                <div className="game-motif">
                  <div className="h-16 w-16 rounded-full border border-yellow-300/40 flex items-center justify-center text-yellow-200/80">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12h16M6 8h12M8 16h8" />
                    </svg>
                  </div>
                </div>
              )}
              {currentGame.motif === 'pun' && (
                <div className="game-motif">
                  <div className="px-6 py-3 rounded-full border border-yellow-300/40 text-yellow-200/80 text-sm tracking-[0.4em]">
                    谐音
                  </div>
                </div>
              )}
              {currentGame.motif === 'balloon' && (
                <div className="game-motif">
                  <div className="h-14 w-10 rounded-full border border-yellow-300/40 bg-yellow-200/10 relative">
                    <div className="absolute -bottom-6 left-1/2 h-6 w-[2px] -translate-x-1/2 bg-yellow-200/50" />
                  </div>
                </div>
              )}
              {currentGame.motif === 'draw' && (
                <div className="game-motif">
                  <div className="h-12 w-12 rounded-full border border-yellow-300/40 flex items-center justify-center text-yellow-200/80">
                    ✎
                  </div>
                </div>
              )}
              {currentGame.motif === 'music' && (
                <div className="game-motif">
                  <div className="h-12 w-12 rounded-full border border-yellow-300/40 flex items-center justify-center text-yellow-200/80">
                    ♫
                  </div>
                </div>
              )}
              {currentGame.motif === 'trousers' && (
                <div className="game-motif">
                  <div className="h-12 w-12 rounded-full border border-yellow-300/40 flex items-center justify-center text-yellow-200/80">
                    ★
                  </div>
                </div>
              )}
            </div>
          </a>

          <div className="flex items-center gap-6 text-white/70">
            <button
              onClick={goPrev}
              className="px-6 py-3 rounded-full border border-white/10 hover:border-yellow-400/40 hover:text-yellow-300 transition-colors"
            >
              上一个
            </button>
            <div className="text-xs tracking-[0.4em] uppercase">
              {currentIndex + 1} / {GAMES.length}
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

export default GamesSection;
