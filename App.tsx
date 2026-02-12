
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
    }, 400);
  };

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 pt-32 animate-in fade-in duration-1000">
            <div className="lg:col-span-8">
              <Hero />
            </div>
            <div className="lg:col-span-4 lg:pt-32">
              <div className="sticky top-40">
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
          <section className="py-48 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="elegant text-7xl mb-24 text-gray-900 font-light italic">Essays & Field Notes</h2>
            <div className="grid gap-20">
              {WRITINGS.map((writing) => (
                <article key={writing.id} className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 gap-4 border-b border-pink-50 pb-8">
                     <h3 className="elegant text-4xl font-light group-hover:text-pink-500 transition-all duration-500 leading-tight text-gray-900">{writing.title}</h3>
                     <span className="text-[10px] font-bold text-pink-300 uppercase tracking-[0.4em]">{writing.date}</span>
                  </div>
                  <p className="text-gray-600 font-light text-xl elegant italic leading-relaxed mb-8 max-w-3xl">{writing.excerpt}</p>
                  <div className="flex items-center gap-8">
                    <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.4em]">{writing.readTime}</span>
                    <div className="h-[1px] w-12 bg-pink-100 group-hover:w-24 group-hover:bg-pink-300 transition-all duration-700" />
                    <span className="text-[10px] uppercase font-bold text-gray-700 group-hover:text-pink-400 tracking-[0.3em] transition-colors">Open Article</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      case 'personal':
        return (
          <section className="py-48 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="elegant text-7xl mb-20 text-gray-900 font-light italic">Personal Pursuits</h2>
            <p className="text-3xl text-gray-700 elegant italic font-light mb-20 max-w-3xl leading-snug">
              "Finding harmony between the digital abstract and the physical tactile."
            </p>
            <div className="flex flex-wrap gap-4 mb-32">
              {INTERESTS.map((interest) => (
                <div 
                  key={interest} 
                  className="bg-white/60 backdrop-blur-sm px-10 py-5 rounded-full border border-pink-100 text-gray-600 hover:border-pink-300 hover:text-pink-500 transition-all cursor-default text-[10px] uppercase tracking-[0.3em] font-bold shadow-sm"
                >
                  {interest}
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { seed: 'analog', label: 'Analog Study', offset: false },
                { seed: 'synth', label: 'Audio Texture', offset: true },
                { seed: 'tea', label: 'Presence', offset: false }
              ].map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden rounded-[3rem] shadow-2xl shadow-pink-100/20 ${img.offset ? 'md:translate-y-20' : ''}`}>
                  <img 
                    src={`https://picsum.photos/seed/${img.seed}/800/1200`} 
                    className="h-[550px] w-full object-cover grayscale brightness-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]" 
                    alt={img.label} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute bottom-10 left-10">
                    <span className="serif-display text-2xl text-white italic opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-1000 font-medium">{img.label}</span>
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
    <div className="min-h-screen selection:bg-pink-100/50 selection:text-pink-900 bg-[#FDF6F0]">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      <main className={`transition-all duration-700 ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {renderContent()}
      </main>

      <footer className="py-40 border-t border-pink-100/50 bg-[#EDE0D4]/30 mt-40">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="elegant text-6xl mb-8 font-light text-gray-900 tracking-tight italic">Let's Dialogue<span className="text-pink-200">.</span></h3>
            <p className="text-gray-500 elegant text-xl italic font-light max-w-xs">Open for scholarly collaboration and creative inquiry at Notre Dame.</p>
          </div>
          <div className="flex flex-col items-end gap-12">
            <div className="flex gap-12">
              {['Scholar', 'GitHub', 'LinkedIn'].map(name => (
                <a key={name} href="#" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] hover:text-pink-400 transition-all">{name}</a>
              ))}
            </div>
            <a href="mailto:mariana@nd.edu" className="serif-display text-4xl text-gray-900 border-b border-pink-200 pb-2 hover:text-pink-400 transition-all">mariana@nd.edu</a>
          </div>
        </div>
        <div className="text-center mt-32 text-[8px] text-gray-300 font-bold tracking-[0.8em] uppercase">
          &copy; {new Date().getFullYear()} Mariana F. Espinosa <span className="mx-8 opacity-40">|</span> South Bend
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
