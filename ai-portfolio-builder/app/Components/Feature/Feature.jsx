'use client'
import React from "react";

const Feature = () => {
    const featuresData = [
        {
            title: "Intelligent Workflow",
            description: "Automate repetitive workflows, monitor operations in real time, and provide contextual insights.",
            icon: <svg className='text-zinc-100' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
        },
        {
            title: "Smarter Operations",
            description: "Optimize processes, eliminate bottlenecks, and enhance productivity seamlessly.",
            icon: <svg className='text-zinc-100' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg>
        },
        {
            title: "AI Excellence",
            description: "Streamline operations and create a foundation for sustainable, long-term growth.",
            icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-100" /><path d="M3.29999 7L12 12L20.7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-100" /><path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-100" /></svg>
        },
        {
            title: "Scalable Infrastructure",
            description: "Transform complex workflows into efficient, scalable systems for fast growth.",
            icon: <svg className='text-zinc-100' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
        },
        {
            title: "Real-Time Intelligence",
            description: "Deliver real-time performance insights and enable seamless collaboration.",
            icon: <svg className='text-zinc-100' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
        },
        {
            title: "Future-Ready Systems",
            description: "Intelligent automation to handle repetitive tasks and unlock new opportunities.",
            icon: <svg className='text-zinc-100' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><path d="m12 15 5 6H7Z" /></svg>
        }
    ];

    return (
        <section id="features" className="py-24 md:py-32 border-b border-white/[0.05] relative overflow-hidden bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                    <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Core Capabilities</span>
                </div>
                
                <h2 className="text-4xl md:text-[56px] font-semibold tracking-tighter text-white leading-tight mb-6 max-w-3xl text-center">
                    Automate logic, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">accelerate</span> your growth.
                </h2>
                
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl text-center mb-20">
                    Streamline operations, boost productivity, and scale effortlessly — all powered by intelligent automation systems designed for the future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="group relative bg-white/[0.02] border border-white/[0.05] p-8 md:p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-white/[0.1] shadow-2xl shadow-black/50">
                            {/* Radial gradient hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none"></div>

                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-white shadow-inner relative z-10 transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-medium text-white mb-3 tracking-tight relative z-10">{feature.title}</h4>
                            <p className="text-sm text-zinc-400 leading-relaxed relative z-10">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;