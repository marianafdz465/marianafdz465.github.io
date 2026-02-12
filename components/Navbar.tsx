
import React, { useEffect, useState, useRef } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Research', id: 'research' },
    { name: 'Archive', id: 'projects' },
    { name: 'Thought', id: 'writings' },
    { name: 'About', id: 'personal' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 pointer-events-none">
      <div className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto transition-all duration-700 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
        
        {/* Logo / Brand */}
        <button 
          onClick={() => onNavigate('home')}
          className="elegant text-3xl font-light text-gray-900 hover:text-pink-400 transition-all duration-500 tracking-tighter group flex items-center gap-2"
        >
          <span className="bg-pink-100/50 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-pink-200 group-hover:bg-pink-200 transition-colors">M</span>
          <span className="hidden sm:inline">MFE<span className="text-pink-300">.</span></span>
        </button>
        
        {/* Floating Interactive Pill */}
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-1.5 rounded-full flex gap-2 shadow-[0_8px_32px_0_rgba(244,197,204,0.15)] ring-1 ring-pink-100/20 transition-all hover:shadow-[0_8px_32px_0_rgba(244,197,204,0.25)]">
          {links.map(link => (
            <button 
              key={link.id} 
              onClick={() => onNavigate(link.id)}
              className={`relative px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-full flex items-center gap-2 group ${
                currentView === link.id ? 'text-pink-500' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {/* Active Indicator Background */}
              {currentView === link.id && (
                <div className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 animate-in fade-in zoom-in duration-300" />
              )}
              
              <span className="relative z-10">{link.name}</span>
              
              {/* Subtle Active Dot */}
              {currentView === link.id && (
                <span className="w-1 h-1 rounded-full bg-pink-400/60 animate-pulse" />
              )}
              
              {/* Hover effect highlight */}
              <div className="absolute inset-0 bg-pink-50/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 opacity-0 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        {/* Side Badge */}
        <div className="hidden lg:flex items-center gap-4">
           <div className="w-8 h-[1px] bg-pink-200/50"></div>
           <span className="text-[9px] uppercase tracking-[0.6em] text-pink-300/80 font-bold whitespace-nowrap">PhD Scholar</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
