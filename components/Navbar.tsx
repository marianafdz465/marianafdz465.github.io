
import React from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Research', id: 'research' },
    { name: 'Projects', id: 'projects' },
    { name: 'Writings', id: 'writings' },
    { name: 'Personal', id: 'personal' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EDE0D4] border-b border-pink-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')}
          className="elegant text-3xl font-medium text-gray-900 hover:text-pink-400 transition-colors"
        >
          MFE.
        </button>
        <div className="hidden md:flex gap-10">
          {links.map(link => (
            <button 
              key={link.id} 
              onClick={() => onNavigate(link.id)}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 pb-1 border-b-2 ${
                currentView === link.id 
                  ? 'text-pink-500 border-pink-300' 
                  : 'text-gray-900 border-transparent hover:text-pink-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
        <button className="md:hidden text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;