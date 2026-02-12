
import React from 'react';
import { BIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[75vh] flex flex-col justify-center items-start text-left px-0 relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        
        <div className="lg:col-span-8 z-10">
          <div className="inline-block px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-pink-100 rounded-full mb-10 animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-pink-400/80">Computer Science Research</span>
          </div>
          
          <h1 className="serif-display text-4xl md:text-5xl lg:text-7xl mb-10 text-gray-900 font-normal tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Mariana <span className="italic text-pink-300/70">Fernandez-Espinosa</span><span className="text-pink-200">.</span>
          </h1>
          
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="flex flex-col gap-3 mb-12 border-l-2 border-pink-200/40 pl-8">
              <p className="text-pink-500/80 font-bold uppercase tracking-[0.5em] text-[10px]">
                {BIO.role}
              </p>
              <p className="text-gray-500 font-semibold uppercase tracking-[0.2em] text-[9px]">
                <a 
                  href="https://www.nd.edu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-500 transition-colors underline decoration-pink-100 underline-offset-8"
                >
                  {BIO.university}
                </a>
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-600/80 leading-relaxed elegant italic font-light mb-12 max-w-xl">
              "{BIO.description}"
            </p>
            
            <div className="flex items-center gap-6">
               <div className="w-12 h-[1px] bg-pink-100"></div>
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
                South Bend, Indiana
               </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 relative flex justify-end">
          <div className="relative w-full max-w-[320px] animate-in fade-in zoom-in duration-1000 delay-500">
            {/* Soft shadow layer */}
            <div className="absolute inset-0 bg-pink-200/10 blur-[80px] -z-10 rounded-full" />
            
            {/* Decorative frames */}
            <div className="absolute -inset-6 border border-pink-100/50 rounded-[3rem] -z-10 transform rotate-3"></div>
            <div className="absolute -inset-6 border border-amber-100/30 rounded-[3rem] -z-20 transform -rotate-2"></div>
            
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 bg-white group hover:shadow-pink-100/50 transition-all duration-700">
              <img 
                src="profile.jpg" 
                alt={BIO.name}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
