'use client'
import React from "react"
import Link from "next/link"
import Navbar from "../Components/Navbar"
import PaymentButton from "../Components/PaymentButton"
const Pricing = () => {
    const [starterAnnual, setStarterAnnual] = React.useState(false)
    const [scaleAnnual, setScaleAnnual] = React.useState(false)

    const starterFeatures = ["Core UI components", "Limited workflow", "24 hour support"]
    const scaleFeatures = ["All UI components", "Unlimited workflow", "Priority support", "Custom domains"]

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden selection:bg-indigo-500/30 relative">
            <Navbar />
            <div className="py-20 px-6 relative">
                {/* Background Blurs */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20 pt-10">
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-white leading-tight">
                            Predictable <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Pricing</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
                            Choose the perfect plan for your professional journey. Simple, transparent, and built for growth.
                        </p>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        
                        {/* Starter Card */}
                        <div className="group relative bg-white/[0.02] border border-white/[0.05] p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 hover:border-white/[0.1] shadow-2xl">
                            <div className="mb-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                                    <p className="text-zinc-500 text-sm">Perfect for individuals</p>
                                </div>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-5xl font-semibold tracking-tight">
                                    ${starterAnnual ? '149' : '19'}
                                    <span className="text-zinc-500 text-lg font-normal tracking-normal">{starterAnnual ? '/year' : '/month'}</span>
                                </h4>
                            </div>

                            <div className="space-y-4 mb-12 flex-1">
                                {starterFeatures.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-zinc-300 text-sm">{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Annual Toggle */}
                            <div className="flex items-center justify-between mb-8 p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                                <span className="text-sm font-medium text-zinc-400">Bill Annually (Save 20%)</span>
                                <button onClick={() => setStarterAnnual(!starterAnnual)} className={`w-11 h-6 rounded-full transition-colors relative ${starterAnnual ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
                                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${starterAnnual ? 'translate-x-5' : 'translate-x-0'}`}/>
                                </button>
                            </div>

                            <button className="w-full py-4 rounded-full border border-white/10 font-semibold text-white hover:bg-white hover:text-black transition-all">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Pro/Scale Card */}
                        <div className="group relative bg-white/[0.03] border border-indigo-500/30 p-10 rounded-[2.5rem] flex flex-col transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1 hover:border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                            <div className="mb-8 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                                    <p className="text-zinc-400 text-sm">For serious professionals</p>
                                </div>
                                <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase font-bold tracking-widest rounded-full">
                                    Popular
                                </span>
                            </div>

                            <div className="mb-10">
                                <h4 className="text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                    ${scaleAnnual ? '499' : '49'}
                                    <span className="text-zinc-500 text-lg font-normal tracking-normal">{scaleAnnual ? '/year' : '/month'}</span>
                                </h4>
                            </div>

                            <div className="space-y-4 mb-12 flex-1">
                                {scaleFeatures.map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-zinc-200 text-sm font-medium">{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Annual Toggle */}
                            <div className="flex items-center justify-between mb-8 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                                <span className="text-sm font-medium text-indigo-300">Bill Annually (Save 20%)</span>
                                <button onClick={() => setScaleAnnual(!scaleAnnual)} className={`w-11 h-6 rounded-full transition-colors relative ${scaleAnnual ? 'bg-indigo-500' : 'bg-zinc-700'}`}>
                                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${scaleAnnual ? 'translate-x-5' : 'translate-x-0'}`}/>
                                </button>
                            </div>

                            <button className="w-full py-4">
                                <PaymentButton/>
                            </button>
                        </div>

                    </div>

                    {/* Footer Quote */}
                    <p className="mt-20 text-center text-zinc-500 text-sm">
                        All plans include a 14-day free trial. No credit card required to start.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Pricing