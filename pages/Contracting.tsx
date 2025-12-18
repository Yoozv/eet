
import React from 'react';
import { Project } from '../types';

interface ContractingProps {
  projects: Project[];
}

const Contracting: React.FC<ContractingProps> = ({ projects }) => {
  return (
    <div className="min-h-screen">
      <div className="bg-slate-800 py-24 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contracting & Infrastructure</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Modern engineering and construction services across Ethiopia.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="text-slate-500">A gallery of our commitment to excellence in civil works.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <img src={project.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={project.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                <button className="self-start text-white border-b border-white/50 hover:border-white transition-all text-sm font-bold">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <i className="fa-solid fa-hard-hat text-4xl text-blue-900 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Civil Works</h4>
            <p className="text-slate-600 text-sm">Roads, bridges, and complex structural engineering.</p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-ruler-combined text-4xl text-blue-900 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Building Construction</h4>
            <p className="text-slate-600 text-sm">Residential complexes and commercial high-rises.</p>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-toolbox text-4xl text-blue-900 mb-4"></i>
            <h4 className="text-xl font-bold mb-2">Renovation & Finishing</h4>
            <p className="text-slate-600 text-sm">High-end interior finishing and allied sectors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracting;
