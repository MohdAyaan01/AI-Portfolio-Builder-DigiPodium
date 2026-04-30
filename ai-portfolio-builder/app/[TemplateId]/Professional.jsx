"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu } from 'lucide-react';

const Professional = ({ data, isEditing, onSave }) => {
  if (!data) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-teal-500"></div>
    </div>
  );

  const handleChange = (field, value) => {
    onSave({ ...data, [field]: value });
  };

  const parseTech = (tech) => {
    if (!tech) return [];
    return typeof tech === 'string' ? tech.split(/[,.\s]+/).filter(Boolean) : tech;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-teal-500/30 selection:text-white overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-48">
        {/* Header / Hero */}
        <header className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-teal-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-500/80">
                {isEditing ? "Editing Mode Active" : "Available for Projects"}
            </span>
          </motion.div>

          {isEditing ? (
            <input 
              className="bg-transparent text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12 text-teal-400 border-b border-teal-500/20 w-full outline-none"
              value={data.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
          ) : (
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12"
            >
              {data.fullName?.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 0 ? "text-white" : "text-transparent stroke-text"}>
                  {word}<br />
                </span>
              ))}
            </motion.h1>
          )}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl border-l-[1px] border-zinc-800 pl-8 md:pl-12 py-2"
          >
            {isEditing ? (
              <textarea 
                className="bg-transparent text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed italic w-full h-32 outline-none"
                value={data.professionalBio}
                onChange={(e) => handleChange('professionalBio', e.target.value)}
              />
            ) : (
              <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed italic">
                "{data.professionalBio}"
              </p>
            )}
          </motion.div>
        </header>

        {/* Expertise Grid */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-12 border-b border-zinc-900 pb-6">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500">Technical Expertise</h2>
            <Cpu size={14} className="text-teal-500" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900 rounded-px overflow-hidden">
            {Object.entries(data.skills || {}).map(([category, items]) => (
              Array.isArray(items) && items.map((skill, i) => (
                <motion.div 
                  key={i}
                  className="bg-[#080808] p-6 flex flex-col items-center justify-center text-center group transition-all"
                >
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{skill}</span>
                </motion.div>
              ))
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-500">Selected Works</h2>
            <div className="px-4 py-1.5 bg-zinc-900 rounded-full text-[9px] font-bold text-zinc-500 uppercase border border-white/5">Archive 24/25</div>
          </div>

          <div className="space-y-32">
            {data.projects?.map((project, i) => (
              <motion.div 
                key={i} 
                className="grid md:grid-cols-12 gap-12 group"
              >
                <div className="md:col-span-5 relative">
                  <div className="text-[140px] font-black text-zinc-900/40 absolute -top-20 -left-10 select-none">
                    0{i + 1}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 relative z-10">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {parseTech(project.techStack).map((tech, ti) => (
                      <span key={ti} className="text-[9px] font-black uppercase tracking-widest bg-zinc-900 text-zinc-400 px-3 py-1 rounded-sm border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col justify-center">
                  <p className="text-lg text-zinc-400 leading-relaxed mb-8 border-l-2 border-zinc-900 pl-8 group-hover:border-teal-500 transition-all">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-500 group/btn">
                    Case Study <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-40 border-t border-zinc-900">
           <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Let's Build</h4>
           <span className="text-3xl md:text-5xl font-black text-white hover:text-teal-400 transition-colors underline underline-offset-8 decoration-zinc-800">
             SEND MESSAGE
           </span>
        </footer>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
};

export default Professional;
