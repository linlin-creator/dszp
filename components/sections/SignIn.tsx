
import React, { useState } from 'react';
import { PARTICIPANTS } from '../../constants';

const SignIn: React.FC = () => {
  const [signedIn, setSignedIn] = useState<string[]>([]);
  const progress = Math.round((signedIn.length / PARTICIPANTS.length) * 100);

  const handleSignIn = (name: string) => {
    if (!signedIn.includes(name)) {
      setSignedIn([...signedIn, name]);
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]" />
        <div className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-white/6 blur-3xl signin-float" />
        <div className="absolute -bottom-32 -right-20 w-[26rem] h-[26rem] rounded-full bg-white/6 blur-3xl signin-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%,rgba(255,255,255,0.08))] mix-blend-screen opacity-70" />
      </div>

      <div className="mb-8 text-center shrink-0 relative z-10">
          <span className="text-white/70 text-xs font-black tracking-[0.6em] uppercase mb-3 block">Guest Registration</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold inline-block mb-3">签到留念</h2>
          <p className="text-white/40 text-lg font-light">智汇马年 · 签到盛典</p>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-8 relative z-10">
        <div className="flex-1 overflow-y-auto custom-scroll pr-4 pb-20">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {PARTICIPANTS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSignIn(p.name)}
                disabled={signedIn.includes(p.name)}
                className={`group h-20 md:h-24 rounded-3xl border transition-all duration-500 flex items-center justify-center relative overflow-hidden signin-float-card ${
                  signedIn.includes(p.name)
                    ? 'bg-white text-black scale-95 shadow-[0_15px_40px_-20px_rgba(255,255,255,0.8)] border-white/60'
                    : 'glass-card border-white/10 hover:border-white/40 text-white/70 hover:text-white'
                }`}
                style={{
                  animationDelay: `${(Number(p.id) % 9) * 0.2}s`,
                  animationDuration: `${6 + (Number(p.id) % 5)}s`
                }}
              >
                <div className="text-base md:text-xl font-black relative z-10">{p.name}</div>
                {signedIn.includes(p.name) && (
                  <div className="absolute inset-0 bg-white/15 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 glass-card rounded-[4rem] p-10 text-center relative flex flex-col items-center justify-center border-white/10 bg-black/40 backdrop-blur-3xl shrink-0 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-12 rounded-full border border-white/10 signin-orbit" />
            <div className="absolute inset-20 rounded-full border border-white/5 signin-orbit" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-0 signin-scan">
              <div className="absolute left-8 right-8 h-16 bg-gradient-to-b from-white/25 via-white/10 to-transparent blur-xl" />
            </div>
          </div>

          <div className="text-[10px] text-white/70 font-black uppercase tracking-[0.5em] mb-8">实 时 签 到</div>

          <div className="relative w-52 h-52 flex items-center justify-center mb-8">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(rgba(255,255,255,0.9) 0% ${progress}%, rgba(255,255,255,0.1) ${progress}% 100%)`
              }}
            />
            <div className="absolute inset-3 rounded-full bg-black/70 border border-white/10" />
            <div className="relative text-center">
              <div className="text-5xl font-black text-white">{progress}%</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black mt-2">Progress</div>
            </div>
          </div>

          <div className="text-6xl md:text-7xl font-black tracking-tighter gradient-text-gold leading-none">
              {signedIn.length}
          </div>
          <div className="text-white/30 text-xl font-black mt-2">/ {PARTICIPANTS.length}</div>
          <div className="w-full h-[1px] bg-white/10 my-8" />
          <div className="text-sm font-bold text-white/60">
            {signedIn.length === PARTICIPANTS.length ? "全体智朴人已到齐！" : "入场进行中..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
