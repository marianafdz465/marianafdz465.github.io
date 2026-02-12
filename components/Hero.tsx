
import React from 'react';
import { BIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center items-start text-left px-0">
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/30 to-amber-200/20 rounded-full blur-[80px] opacity-60 scale-150 animate-pulse" />
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl relative z-10 overflow-hidden bg-white hover:scale-105 transition-all duration-[1s] ease-in-out group">
          <img 
            src="profile.jpg" 
            alt={BIO.name}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </div>
      </div>
      <h1 className="elegant text-5xl md:text-7xl lg:text-[6.5rem] mb-8 text-gray-900 font-light tracking-tighter leading-[1.0]">
        Mariana <br />
        <span className="text-gray-800 whitespace-nowrap block">Fernandez-Espinosa</span>
      </h1>
      <div className="flex flex-col gap-2 mb-12 border-l-2 border-pink-200 pl-6 ml-1">
        <p className="text-pink-500 font-bold uppercase tracking-[0.4em] text-[11px] md:text-xs">
          {BIO.role}
        </p>
        <p className="text-gray-800 font-semibold uppercase tracking-[0.2em] text-[10px]">
          <a 
            href="https://www.nd.edu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 transition-colors underline decoration-pink-200 underline-offset-4"
          >
            {BIO.university}
          </a>
        </p>
      </div>
      <p className="max-w-2xl text-2xl md:text-3xl text-gray-800 leading-snug elegant italic font-light mb-16">
        "{BIO.description}"
      </p>
    </section>
  );
};

export default Hero;