'use client'
import Link from 'next/link'
import React from 'react'
import Testimonials from './Testimonials/Testimonials'
import Feature from './Feature/Feature'
import Clients from './Clients/Clients'
import Footer from './Footer/Footer'
import Navbar from './Navbar'

const Page = () => {
    return (
        <main className="min-h-screen bg-[#050505] font-sans overflow-hidden selection:bg-indigo-500/30">
            {/* Massive deep background blurs for the whole page */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <header className='flex flex-col items-center relative z-10 w-full pt-10 pb-32'>
            <Navbar />

                {/* Hero Content */}
                <div className="mt-32 max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6 relative z-10 w-full">
                    
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        Introducing Pro Folio X Version 2.0
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold tracking-tighter text-white leading-[1.05] drop-shadow-2xl">
                        AI Portfolio Builder is an <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 animate-gradient-x">intelligent</span> web platform
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mt-8 leading-relaxed font-light">
                        Upload your resume, let AI generate your professional portfolio, and customize it flawlessly. Designed to help you land the dream role faster.
                    </p>

                    {/* CTA Details */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
                        <Link href="/Signup" className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-base font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(99,102,241,0.4)] group w-full sm:w-auto">
                            Get Started for Free
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </Link>
                        
                        <div className="flex items-center gap-4 sm:ml-6 mt-6 sm:mt-0 bg-white/[0.03] border border-white/[0.08] px-6 py-3 rounded-full backdrop-blur-sm">
                            <div className="flex -space-x-3">
                                {[
                                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
                                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
                                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
                                    "https://randomuser.me/api/portraits/men/75.jpg"
                                ].map((img, i) => (
                                    <img key={i} src={img} className="w-8 h-8 rounded-full border-2 border-[#050505]" alt="User"/>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-0.5">
                                <div className="flex text-yellow-500 gap-0.5">
                                    {Array(5).fill(0).map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                    ))}
                                </div>
                                <span className="text-xs text-zinc-400 font-medium tracking-wide">2300+ reviews</span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <Clients />
            <Feature />
            <Testimonials />
            <Footer />
        </main>
    )
}

export default Page
