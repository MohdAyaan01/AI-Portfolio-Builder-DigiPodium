'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../Components/Navbar'

export default function About() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden relative selection:bg-indigo-500/30">
            <Navbar />
            <div className="py-20 px-6 relative">
                {/* Background Blurs */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-24 pt-10">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest mb-8">
                            Our Mission
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[1.1] text-white">
                            We're redefining professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">identity</span>.
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            At Pro Folio X, we believe building a professional presence shouldn't take weeks. Our AI tools handle the heavy lifting while you focus on your growth.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                        <div className="relative group p-1 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-[2.5rem]">
                            <img
                                src="/AboutLogo.jpeg"
                                alt="Team at work"
                                className="w-full aspect-video md:aspect-square object-cover rounded-[2.4rem] opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay rounded-[2.4rem]"></div>
                        </div>
                        
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Built for the future.</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Automated Excellence", desc: "Our AI agents analyze your profile to create perfectly structured layouts.", icon: "⚡" },
                                    { title: "Bespoke Design", desc: "Every portfolio is unique, tailored to your professional brand and style.", icon: "🎨" },
                                    { title: "Global Reach", desc: "Optimized for speed and accessibility, ensuring your reach is worldwide.", icon: "🌍" }
                                ].map((f, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-white/[0.02] border border-white/[0.05] rounded-3xl hover:bg-white/[0.04] transition-all">
                                        <div className="text-2xl">{f.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1 tracking-tight">{f.title}</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "Active Users", value: "10k+" },
                            { label: "Portfolios Built", value: "25k+" },
                            { label: "Average Rating", value: "4.9/5" },
                            { label: "Growth Rate", value: "300%" }
                        ].map((s, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl text-center shadow-xl">
                                <h4 className="text-4xl font-semibold text-white mb-2 tracking-tighter">{s.value}</h4>
                                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}