
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
    const handleActivity = () => {
      setIsVisible(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Hide after 3 seconds
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    
    // Initial timer
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-1 p-1.5 glass-card rounded-full border border-yellow-400/20 shadow-2xl overflow-x-auto max-w-[95vw] md:max-w-none no-scrollbar">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id as SectionType)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-500 whitespace-nowrap ${
              activeSection === section.id
                ? 'bg-yellow-400 text-red-900 shadow-lg shadow-yellow-400/20'
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
