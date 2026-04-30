'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../Components/Navbar'

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden relative selection:bg-indigo-500/30">
            <Navbar />
            <div className="py-20 px-6 relative z-10">
                {/* Background Blurs */}
                <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20 pt-10">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-8">
                            Get in touch
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 max-w-3xl">
                            Let's start <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">building</span> together.
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
                            Have questions? Our team is here to help you build the perfect professional presence. 
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="group relative bg-white/[0.02] border border-white/[0.05] p-8 md:p-12 rounded-[3rem] shadow-2xl backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {/* Form Side */}
                                <div className="flex flex-col gap-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                                            <div className="flex bg-white/[0.03] border border-white/[0.08] rounded-2xl p-2 h-14 items-center gap-4 px-4 focus-within:border-indigo-500/50 transition-colors">
                                                <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                                <input type="email" placeholder="you@example.com" className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-zinc-600" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:scale-[1.02] transition-all">
                                        Send Message
                                    </button>
                                    <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest">Typical response time: &lt; 2 hours</p>
                                </div>

                                {/* Info Side */}
                                <div className="flex flex-col justify-between py-2">
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold">Call us</h4>
                                                <p className="text-xs text-zinc-500">+1 (555) 000-0000</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold">Headquarters</h4>
                                                <p className="text-xs text-zinc-500">San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex items-center gap-4 pt-8 border-t border-white/5">
                                        <div className="flex -space-x-3">
                                            {[
                                                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
                                                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
                                                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
                                            ].map((img, i) => (
                                                <img key={i} src={img} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a]" alt="User"/>
                                            ))}
                                        </div>
                                        <span className="text-xs text-zinc-500 font-medium">Join 2,300+ professionals</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}