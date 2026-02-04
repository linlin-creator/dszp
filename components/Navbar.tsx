
import React, { useState, useEffect, useRef } from 'react';
import { SectionType } from '../types';
import { SECTIONS } from '../constants';

interface NavbarProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const revealThreshold = 120;
    const hideDelayMs = 150;

    const scheduleHide = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, hideDelayMs);
    };

    const handlePointerMove = (clientY: number) => {
      const distanceFromBottom = window.innerHeight - clientY;
      if (distanceFromBottom <= revealThreshold) {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        setIsVisible(true);
      } else {
        scheduleHide();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      handlePointerMove(event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) handlePointerMove(touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', scheduleHide);
    
    scheduleHide();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', scheduleHide);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-1 p-1.5 glass-card rounded-full border border-red-400/20 shadow-2xl overflow-x-auto max-w-[95vw] md:max-w-none no-scrollbar">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id as SectionType)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-500 whitespace-nowrap ${
              activeSection === section.id
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
