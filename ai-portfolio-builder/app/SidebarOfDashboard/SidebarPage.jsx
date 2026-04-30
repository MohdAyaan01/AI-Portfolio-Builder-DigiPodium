'use client'
import React from "react"
import Link from "next/link"
import { Search, History, Users, Plus, LayoutGrid, Megaphone, HelpCircle, Settings } from "lucide-react"
const SidebarPage = () => {
    const items = [
        { icon: <Search size={20} />, label: "Search", href:"/Search" },
        { icon: <History size={20} />, label: "Activity", href:"/Activity" },
        { icon: <Users size={20} />, label: "Team", href:"/Team" },
        { icon: <Megaphone size={20} />, label: "Updates", href:"/Updates"},
        { icon: <Settings size={20} />, label: "Settings", href: "/Settings" },
    ]

    return (
        <aside className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-50 max-md:hidden">
            <div className="relative group">
                {/* Background Aurora Glow */}
                <div className="absolute -inset-4 bg-gradient-to-b from-teal-500/20 via-purple-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating Dock Body */}
                <div className="relative flex flex-col gap-3 p-3 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Logo/Avatar at Top */}
                    <div className="w-12 h-12 mb-2 rounded-full overflow-hidden border border-white/10 p-1 hover:scale-110 transition duration-300 cursor-pointer">
                        <img src="/PortfolioLogo.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                    </div>

                    {items.map((item, index) => {
                        const content = (
                            <>
                                <span className="relative z-10">{item.icon}</span>
                                {/* Hover tooltip - slide out */}
                                <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-medium rounded-lg opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/5 shadow-xl">
                                    {item.label}
                                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-l border-b border-white/5" />
                                </div>

                                {/* Active Item Indicator (Subtle dot) */}
                                {index === 1 && !item.primary && (
                                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-3 bg-teal-500 rounded-full blur-[0.5px]" />
                                )}
                            </>
                        );

                        const className = `
                            relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300
                            ${item.primary ? 'bg-teal-500 text-black shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:scale-105 active:scale-95' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                        `;

                        return (
                            <div key={index} className="relative group/item">
                                {item.href ? (
                                    <Link href={item.href} className={className}>
                                        {content}
                                    </Link>
                                ) : (
                                    <button className={className}>
                                        {content}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Help/Support floating separate below */}
            <div className="mt-6 relative group/help">
                <Link href="/Help" className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition shadow-lg hover:bg-white/10 hover:border-teal-500/30">
                    <HelpCircle size={20} />
                </Link>
                {/* Tooltip with Bridge to prevent vanishing */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 pl-4 group-hover/help:opacity-100 opacity-0 transition-all duration-300 pointer-events-none group-hover/help:pointer-events-auto">
                    <div className="px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-medium rounded-lg whitespace-nowrap border border-white/5 shadow-2xl relative translate-x-1 group-hover/help:translate-x-0 transition-transform">
                        <Link href="/Help" className="hover:text-teal-400 transition-colors">Help & Support</Link>
                        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-l border-b border-white/5" />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarPage