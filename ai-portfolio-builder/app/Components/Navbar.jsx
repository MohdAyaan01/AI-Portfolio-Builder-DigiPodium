'use client'
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className="flex flex-col items-center w-full relative z-50">
            <div className="flex items-center justify-center gap-12 px-6 py-8 w-full max-w-[1400px] mx-auto">
                {/* Logo and Menu wrapped in a centered flex container */}
                <div className="flex items-center gap-10 bg-white/[0.03] border border-white/[0.05] px-8 py-3 rounded-full backdrop-blur-xl shadow-2xl shadow-black/50">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group border-r border-white/10 pr-8">
                        <div className="w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
                            <img src="/PortfolioLogo.png" alt="Pro Folio X Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-lg font-bold tracking-tighter text-white">PRO FOLIO X</span>
                    </a>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
                        <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
                        <Link href="/Pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</Link>
                        <Link href="/About" className="text-zinc-400 hover:text-white transition-colors">About</Link>
                        <Link href="/Contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
