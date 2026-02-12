
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PulseFeed from './components/PulseFeed';
import ResearchSection from './components/ResearchSection';
import ProjectGrid from './components/ProjectGrid';
import AIAssistant from './components/AIAssistant';
import { WRITINGS, INTERESTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState('home');
  const [isFading, setIsFading] = useState(false);

  const handleNavigate = (newView: string) => {
    if (newView === view) return;
    setIsFading(true);
    setTimeout(() => {
      setView(newView);
      window.scrollTo(0, 0);
      setIsFading(false);
    }, 300);
  };

  const footerLinks = [
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> 
    },
    { 
      name: 'Google Scholar', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6zM5.23 20.501l-1.47 1.499-4-4.5 1.47-1.499zm17.54 0l1.47 1.499-4 4.5-1.47-1.499zM0 6.74v1.5l1.5-1.5zm24 0l-1.5-1.5 1.5 1.5zM12 2l2 2-2 2-2-2z"/></svg> 
    },
    { 
      name: 'GitHub', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
    },
    { 
      name: 'Email', 
      url: 'mailto:mariana@nd.edu', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
    },
  ];

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 pt-24 animate-in fade-in duration-700">
            <div className="lg:col-span-8">
              <Hero />
            </div>
            <div className="lg:col-span-4 lg:pt-32">
              <div className="sticky top-32">
                <PulseFeed />
              </div>
            </div>
          </div>
        );
      case 'research':
        return <ResearchSection />;
      case 'projects':
        return <ProjectGrid />;
      case 'writings':
        return (
          <section className="py-40 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="elegant text-7xl mb-24 text-gray-900 font-light italic">Essays & Field Notes</h2>
            <div className="grid gap-20">
              {WRITINGS.map((writing) => (
                <article key={writing.id} className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 gap-4">
                     <h3 className="elegant text-4xl font-light group-hover:text-pink-500 transition-all duration-500 leading-tight text-gray-900">{writing.title}</h3>
                     <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em] border-b border-pink-200 pb-1">{writing.date}</span>
                  </div>
                  <p className="text-gray-800 font-light text-xl elegant italic leading-relaxed mb-8 max-w-3xl">{writing.excerpt}</p>
                  <div className="flex items-center gap-8">
                    <span className="text-[9px] uppercase font-bold text-pink-500 tracking-[0.4em]">{writing.readTime}</span>
                    <div className="h-[1px] w-16 bg-pink-200 group-hover:w-32 group-hover:bg-pink-300 transition-all duration-700" />
                    <span className="text-[10px] uppercase font-bold text-gray-700 group-hover:text-gray-900 tracking-[0.3em] transition-colors">Read Full Text</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      case 'personal':
        return (
          <section className="py-40 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="elegant text-7xl mb-20 text-gray-900 font-light italic">Personal Pursuits</h2>
            <p className="text-3xl text-gray-800 elegant italic font-light mb-20 max-w-3xl leading-snug">
              "Finding harmony between the digital abstract and the physical tactile."
            </p>
            <div className="flex flex-wrap gap-4 mb-32">
              {INTERESTS.map((interest) => (
                <div 
                  key={interest} 
                  className="bg-white/70 backdrop-blur-sm px-10 py-5 rounded-full border border-pink-100 text-gray-800 hover:border-pink-300 hover:text-pink-500 transition-all cursor-default text-[11px] uppercase tracking-[0.2em] font-bold shadow-sm"
                >
                  {interest}
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { seed: 'analog', label: 'Film Photography', offset: false },
                { seed: 'synth', label: 'Sound Synthesis', offset: true },
                { seed: 'tea', label: 'Zen Spaces', offset: false }
              ].map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-[3rem] shadow-2xl shadow-pink-100/30 ${img.offset ? 'md:translate-y-16' : ''}`}>
                  <img 
                    src={`https://picsum.photos/seed/${img.seed}/800/1000`} 
                    className="h-[500px] w-full object-cover grayscale brightness-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" 
                    alt={img.label} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-8 left-8">
                    <span className="elegant text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 italic font-medium">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-pink-100 selection:text-pink-900 bg-[#FDF6F0]">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      <main className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderContent()}
      </main>

      <footer className="py-40 border-t border-pink-200 bg-[#EDE0D4] mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="max-w-md">
            <h3 className="elegant text-6xl mb-6 font-light text-gray-900">Let's Connect.</h3>
            <p className="text-gray-800 elegant text-xl italic font-light">Open for scholarly collaboration and creative dialogue at Notre Dame.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            {footerLinks.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                className="flex items-center gap-3 text-[11px] font-bold text-gray-700 uppercase tracking-[0.4em] hover:text-pink-500 transition-all group"
              >
                <span className="text-gray-400 group-hover:text-pink-400 transition-colors">
                  {link.icon}
                </span>
                <span className="border-b border-transparent hover:border-pink-200 pb-1">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-40 text-[9px] text-gray-600 font-bold tracking-[0.5em] uppercase">
          &copy; {new Date().getFullYear()} Mariana Fernandez-Espinosa <span className="mx-6 opacity-40">|</span> V.2.2 Space
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
