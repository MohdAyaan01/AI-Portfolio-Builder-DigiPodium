"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, CreditCard, Layout, Terminal, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

const updates = [
    {
        date: "April 2026",
        version: "v1.2.0",
        title: "The Variety Update",
        status: "LIVE",
        description: "Added 4 core template styles (Professional, Creative, Minimalist, Bold) with a dedicated Live Editor Studio and we also working on to provide all the features as soon as possible",
        icon: <Layout className="text-teal-400" size={20} />,
        color: "teal"
    },
    {
        date: "Late April 2026",
        version: "v1.3.0",
        title: "Monetization & Security",
        status: "IN PROGRESS",
        description: "Implementing Stripe payment gateway for Premium templates and enhancing user data encryption.",
        icon: <CreditCard className="text-amber-400" size={20} />,
        color: "amber"
    },
    {
        date: "May 2026",
        version: "v1.5.0",
        title: "AI Expansion Pack",
        status: "PLANNED",
        description: "Introducing 50+ hand-crafted industrial templates and a GPT-4o powered cover letter generator.",
        icon: <Sparkles className="text-purple-400" size={20} />,
        color: "purple"
    },
    {
        date: "Early June 2026",
        version: "v2.0.0",
        title: "Enterprise Sync",
        status: "PLANNED",
        description: "Automated syncing with LinkedIn and GitHub to keep your portfolio perpetually up to date.",
        icon: <Zap className="text-blue-400" size={20} />,
        color: "blue"
    }
];

const UpdateBadge = ({ status }) => {
    const styles = {
        LIVE: "bg-teal-500/10 text-teal-500 border-teal-500/20",
        "IN PROGRESS": "bg-amber-500/10 text-amber-500 border-amber-500/20",
        PLANNED: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${styles[status]}`}>
            {status}
        </span>
    );
};

export default function UpdatesPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 py-24">
                {/* Header */}
                <header className="mb-24 text-center">
                    <Link href="/Dashboard" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Dashboard</span>
                    </Link>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
                    >
                        Project <span className="text-teal-400">Updates</span>
                    </motion.h1>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
                        Stay informed about current releases, work-in-progress features, and our future roadmap for the AI Portfolio Builder.
                    </p>
                </header>

                {/* Timeline */}
                <div className="relative border-l border-zinc-900 ml-4 md:ml-0">
                    <div className="space-y-24">
                        {updates.map((update, index) => (
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                key={index} 
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Node */}
                                <div className="absolute left-0 -translate-x-1/2 mt-1 w-4 h-4 bg-[#050505] border-2 border-zinc-800 rounded-full z-10">
                                    <div className={`absolute inset-1 rounded-full ${update.status === 'LIVE' ? 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-zinc-700'}`} />
                                </div>

                                {/* Content */}
                                <div className="group bg-[#09090b] border border-white/5 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-white/10 hover:shadow-2xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                                                {update.icon}
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-1">{update.version}</div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{update.title}</h3>
                                            </div>
                                        </div>
                                        <UpdateBadge status={update.status} />
                                    </div>

                                    <p className="text-zinc-500 leading-relaxed mb-10 text-lg">
                                        {update.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-zinc-900/50 pt-8">
                                        <div className="flex items-center gap-2 text-zinc-600">
                                            <Clock size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{update.date}</span>
                                        </div>
                                        {update.status === 'LIVE' ? (
                                            <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest">Available Now</span>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                 <div className="flex gap-1">
                                                    {[1,2,3].map(i => (
                                                        <div key={i} className="w-1 h-1 bg-zinc-800 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                                                    ))}
                                                 </div>
                                                 <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Syncing</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline Line Extension */}
                    <div className="absolute top-0 bottom-0 left-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-teal-500/50 via-zinc-900 to-transparent" />
                </div>

                {/* Footer Section */}
                <footer className="mt-40 text-center">
                    <div className="inline-block p-12 bg-zinc-900/40 border border-white/5 rounded-[40px] text-center backdrop-blur-xl">
                        <Shield className="mx-auto mb-6 text-teal-500" size={32} />
                        <h4 className="text-xl font-bold mb-4">Enterprise Security</h4>
                        <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
                            Every update is built with raw focus on privacy and high-speed delivery.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
