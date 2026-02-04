
import React, { useState, useEffect, useRef } from 'react';
import { SectionType } from './types';
import { SECTION_MUSIC } from './constants';
import Navbar from './components/Navbar';
import MusicToggle from './components/MusicToggle';
import Cover from './components/sections/Cover';
import SignIn from './components/sections/SignIn';
import WarmUpSection from './components/sections/WarmUpSection';
import PerformanceGrid from './components/sections/PerformanceGrid';
import LuckyDraw from './components/sections/LuckyDraw';
import SimpleSection from './components/sections/SimpleSection';
import AwardsSection from './components/sections/AwardsSection';
import OpeningSection from './components/sections/OpeningSection';
import ClosingSection from './components/sections/ClosingSection';
import GamesSection from './components/sections/GamesSection';
import SpeechSection from './components/sections/SpeechSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.COVER);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const nextTrack = SECTION_MUSIC[activeSection];
    if (!audioRef.current || !nextTrack) {
      audioRef.current?.pause();
      return;
    }
    audioRef.current.src = nextTrack.url;
    if (isPlaying) {
      audioRef.current.play().catch(() => console.log('Autoplay blocked'));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, activeSection]);

  const handleSectionChange = (section: SectionType) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 400);
  };

  const toggleMusic = () => setIsPlaying(!isPlaying);

  const renderSection = () => {
    switch (activeSection) {
      case SectionType.COVER:
        return <Cover onNext={() => handleSectionChange(SectionType.SIGN_IN)} />;
      case SectionType.SIGN_IN:
        return <SignIn />;
      case SectionType.WARM_UP:
        return <WarmUpSection />;
      case SectionType.OPENING:
        return <OpeningSection />;
      case SectionType.SPEECH:
        return <SpeechSection />;
      case SectionType.AWARDS:
        return <AwardsSection />;
      case SectionType.PERFORMANCE:
        return <PerformanceGrid />;
      case SectionType.GAMES:
        return <GamesSection />;
      case SectionType.LUCKY_DRAW:
        return <LuckyDraw />;
      case SectionType.CLOSING:
        return <ClosingSection />;
      case SectionType.BANQUET:
        return <SimpleSection title="晚宴交流" type={SectionType.BANQUET} coverOnly />;
      default:
        return <Cover onNext={() => handleSectionChange(SectionType.SIGN_IN)} />;
    }
  };

  const currentMusic = SECTION_MUSIC[activeSection];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-festive text-white selection:bg-yellow-400 selection:text-red-900">
      <audio ref={audioRef} loop />

      <main className={`h-full w-full transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
        {renderSection()}
      </main>

      {currentMusic && (
        <MusicToggle
          isPlaying={isPlaying}
          onToggle={toggleMusic}
          label={currentMusic.label}
          accent={currentMusic.accent}
          glow={currentMusic.glow}
          bar={currentMusic.bar}
        />
      )}
      
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      {/* Festive overlay effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-red-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-900/40 to-transparent" />
      </div>
    </div>
  );
};

export default App;
