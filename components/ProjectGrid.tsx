
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white/20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="elegant text-6xl mb-20 text-gray-800 font-light italic">Projects & Artifacts</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-white/40 rounded-[2.5rem] overflow-hidden border border-pink-100/50 hover:shadow-2xl hover:shadow-pink-100/20 transition-all duration-500 hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative">
                 <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
              <div className="p-10">
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] border border-pink-100 text-pink-300 px-3 py-1 rounded-full font-bold uppercase tracking-[0.2em]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="elegant text-4xl mb-4 font-light group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 font-light text-sm italic">
                  {project.description}
                </p>
                <a href={project.link} className="text-[10px] font-bold text-gray-800 hover:text-pink-400 transition-colors uppercase tracking-[0.3em] inline-flex items-center gap-3">
                  Case Study <div className="w-8 h-[1px] bg-gray-200 group-hover:w-12 group-hover:bg-pink-300 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
