
import React from 'react';
import { PUBLICATIONS } from '../constants';

const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-32 max-w-5xl mx-auto px-6">
      <h2 className="elegant text-6xl mb-20 text-gray-800 font-light italic">Selected Publications</h2>
      <div className="grid gap-20">
        {PUBLICATIONS.map((pub) => (
          <div key={pub.id} className="group flex flex-col md:flex-row gap-12 items-start border-l border-pink-100/30 pl-8 md:pl-0 md:border-l-0">
            <div className="md:w-1/4">
               <span className="elegant text-8xl text-pink-100 font-light opacity-60 group-hover:opacity-100 group-hover:text-pink-200 transition-all duration-700">
                {pub.year}
              </span>
            </div>
            <div className="md:w-3/4">
              <h3 className="elegant text-3xl font-medium text-gray-800 mb-4 group-hover:text-pink-400 transition-colors leading-tight">
                {pub.title}
              </h3>
              <p className="text-[11px] text-gray-400 mb-6 font-medium tracking-[0.1em] uppercase">
                {pub.authors.join(', ')} <span className="mx-2 text-pink-100">•</span> <span className="text-pink-300 font-bold">{pub.venue}</span>
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed font-light text-base italic">
                {pub.abstract}
              </p>
              <div className="flex items-center gap-3">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-[9px] border border-[#FADADD]/50 text-gray-400 px-3 py-1 rounded-full tracking-widest uppercase font-bold">
                    {tag}
                  </span>
                ))}
                {pub.link && (
                  <a href={pub.link} className="ml-auto text-[10px] font-bold text-gray-400 hover:text-pink-400 flex items-center gap-2 transition-colors uppercase tracking-[0.2em]">
                    Manuscript <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
