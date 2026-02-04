
import React, { useState } from 'react';
import { PARTICIPANTS } from '../../constants';

const SignIn: React.FC = () => {
  const [signedIn, setSignedIn] = useState<string[]>([]);

  const handleSignIn = (name: string) => {
    if (!signedIn.includes(name)) {
      setSignedIn([...signedIn, name]);
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-12 lg:p-16 overflow-hidden">
      <div className="mb-8 text-center shrink-0">
          <span className="text-yellow-400 text-xs font-black tracking-[0.6em] uppercase mb-3 block">Guest Registration</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter gradient-text-gold inline-block mb-3">签到留念</h2>
          <p className="text-white/40 text-lg font-light">智汇马年 · 签到盛典</p>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-8">
        <div className="flex-1 overflow-y-auto custom-scroll pr-4 pb-20">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {PARTICIPANTS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSignIn(p.name)}
                disabled={signedIn.includes(p.name)}
                className={`group h-20 md:h-24 rounded-3xl border transition-all duration-500 flex items-center justify-center relative overflow-hidden ${
                  signedIn.includes(p.name)
                    ? 'bg-yellow-400 border-yellow-400 text-red-900 scale-95 shadow-lg'
                    : 'glass-card border-yellow-400/10 hover:border-yellow-400/40 text-white/70 hover:text-white'
                }`}
              >
                <div className="text-base md:text-xl font-black relative z-10">{p.name}</div>
                {signedIn.includes(p.name) && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 glass-card rounded-[4rem] p-10 text-center relative flex flex-col items-center justify-center border-yellow-400/20 bg-red-950/40 backdrop-blur-3xl shrink-0">
          <div className="text-[10px] text-yellow-400 font-black uppercase tracking-[0.5em] mb-8">实 时 签 到</div>
          <div className="text-8xl md:text-[10rem] font-black tracking-tighter gradient-text-gold leading-none">
              {signedIn.length}
          </div>
          <div className="text-yellow-400/30 text-2xl font-black mt-2">/ {PARTICIPANTS.length}</div>
          <div className="w-full h-[1px] bg-yellow-400/20 my-10" />
          <div className="text-sm font-bold text-white/60">
            {signedIn.length === PARTICIPANTS.length ? "全体智朴人已到齐！" : "入场进行中..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
