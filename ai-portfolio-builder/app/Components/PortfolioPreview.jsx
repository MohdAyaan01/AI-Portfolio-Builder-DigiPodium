import React, { useState } from 'react';
import { Mail, Link, ExternalLink, Globe, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioPreview = ({ data, theme, setTheme }) => {
    const [showEditor, setShowEditor] = useState(false);
    if (!data) return null;
    return (
        <div
            className="w-full border border-white/5 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative"
            style={{
                fontFamily: theme?.fontFamily === 'mono' ? 'monospace' : theme?.fontFamily === 'serif' ? 'Georgia, serif' : 'sans-serif',
                 background: `linear-gradient(135deg, ${theme?.bgColor || '#121212'} 0%, #050505 100%)`
            }}
        >
            {/* Animated Glow Blobs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundColor: theme?.primaryColor || '#14b8a6' }}
                className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full pointer-events-none opacity-30"
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"
            />

            {/* 1. IDENTITY SECTION */}
            <div className="flex flex-col mb-12 border-b border-white/5 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] text-teal-400 font-bold uppercase tracking-widest">
                        Ready To Deploy
                    </div>
                    <button
                        onClick={() => setShowEditor(!showEditor)}
                        className={`p-2 rounded-xl border transition-all text-[11px] font-bold flex items-center gap-2 ${showEditor ? 'bg-teal-500/10 border-teal-500/30 text-teal-400' : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'}`}
                    >
                        ✏️ {showEditor ? 'Close Editor' : 'Edit Theme'}
                    </button>
                </div>

                {/* INLINE EDITOR PANEL */}
                {showEditor && (
                    <div className="mb-8 p-4 bg-zinc-900/60 border border-white/5 rounded-2xl flex flex-wrap gap-6">
                        <div className="flex flex-col gap-1">
                            <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Primary Color</label>
                            <input type="color" value={theme?.primaryColor || '#14b8a6'}
                                onChange={(e) => theme && setTheme?.({ ...theme, primaryColor: e.target.value })}
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Font Style</label>
                            <select value={theme?.fontFamily || 'sans'}
                                onChange={(e) => theme && setTheme?.({ ...theme, fontFamily: e.target.value })}
                                className="bg-zinc-800 text-white text-xs border border-white/10 rounded-lg px-3 py-2 outline-none">
                                <option value="sans">Modern</option>
                                <option value="serif">Classic</option>
                                <option value="mono">Terminal</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Background</label>
                            <input type="color" value={theme?.bgColor || '#121212'}
                                onChange={(e) => theme && setTheme?.({ ...theme, bgColor: e.target.value })}
                                className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent" />
                        </div>
                    </div>
                )}

                <h1 className="text-4xl font-extrabold tracking-tighter mb-4 uppercase" style={{ color: theme?.primaryColor || '#ffffff' }}>
                    {data.fullName}
                </h1>
                <p className="max-w-xl text-zinc-400 text-sm leading-relaxed font-medium">
                    {data.professionalBio}
                </p>
            </div>
            {/* 2. SKILLS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div>
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.entries(data.skills || {}).map(([category, items]) => (
                            Array.isArray(items) && items.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-zinc-900/80 rounded-2xl text-[11px] text-zinc-300 font-bold transition-all cursor-default border" style={{ borderColor: (theme?.primaryColor || '#14b8a6') + '40' }}>
                                    {skill}
                                </span>
                            ))
                        ))}
                    </div>
                </div>
                {/* 3. CONTACT BAR */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 flex flex-col justify-center gap-4 text-center md:text-left">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: theme?.primaryColor || '#14b8a6' }}>Contact Node</h3>
                    <div className="space-y-4">
                        {data.contactInfo?.email && (
                            <div className="flex items-center gap-3 text-xs text-zinc-400 font-bold">
                                <div className="p-2 bg-teal-500/10 rounded-lg">
                                    <Mail size={14} className="text-teal-500" />
                                </div>
                                {data.contactInfo.email}
                            </div>
                        )}
                        {data.contactInfo?.linkedin && (
                            <div className="flex items-center gap-3 text-xs text-zinc-400 font-bold">
                                <div className="p-2 bg-indigo-500/10 rounded-lg">
                                    <Link size={14} className="text-indigo-500" />
                                </div>
                                LinkedIn Profile
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 4. PROJECTS SECTION (IF AVAILABLE) */}
            {data.projects && Array.isArray(data.projects) && data.projects.length > 0 && (
                <div className="mb-12">
                    <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6 underline decoration-teal-500 decoration-2 underline-offset-8">Featured Work</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {data.projects.map((project, idx) => (
                            <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="text-[13px] font-bold text-white uppercase">{project.title}</h4>
                                    <Rocket size={14} style={{ color: theme?.primaryColor || '#14b8a6' }} />
                                </div>
                                <p className="text-[11px] text-zinc-500 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {(Array.isArray(project.techStack)
                                        ? project.techStack
                                        : (project.techStack?.split(',').map(s => s.trim()) || [])
                                    ).map((tech, tIdx) => (
                                        <span key={tIdx} className="text-[9px] font-bold text-teal-400/60 uppercase">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 5. ACTION BUTTONS */}
            <div className="flex items-center gap-3 mt-8">
                <button className="flex-1 py-4 bg-teal-500 text-black rounded-2xl text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(20,184,166,0.25)]">
                    Publish Portfolio
                </button>
                <button className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-zinc-800 transition shadow-xl">
                    <ExternalLink size={18} />
                </button>
            </div>
        </div>
    );
};

export default PortfolioPreview;
