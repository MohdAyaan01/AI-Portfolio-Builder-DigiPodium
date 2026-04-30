'use client'
import React, { useState, useRef, useEffect } from "react"
import {
    Bell, Zap, MoreHorizontal, User, Sparkles,
    Moon, Globe, Settings, MessageSquare,
    HelpCircle, LogOut, ExternalLink, Users, ChevronRight
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Sub-Component: The Profile Dropdown ---
const ProfileDropdown = ({ isOpen }) => {
    if (!isOpen) return null;

    const menuGroups = [
        [
            { icon: <Moon size={14} />, label: "Appearance", hasArrow: true },
            { icon: <Globe size={14} />, label: "Language", hasArrow: true },
            { icon: <Zap size={14} />, label: "Prompt Templates", hasArrow: true },
        ],
        [
            { icon: <Bell size={14} />, label: "Notifications" },
            { icon: <Settings size={14} />, label: "Settings" },
        ],
        [
            { icon: <MessageSquare size={14} />, label: "What's new" },
            { icon: <HelpCircle size={14} />, label: "Help center" },
            { icon: <User size={14} />, label: "Contact" },
        ]
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-16 right-0 w-[280px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden z-[100]"
        >
            {/* User Header */}
            <div className="p-5 flex items-center gap-3 border-b border-white/5">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div className="flex flex-col text-left">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white tracking-tight">Mohdayaan</span>
                        <span className="px-1.5 py-0.5 bg-zinc-800 text-[9px] text-zinc-400 font-bold rounded uppercase tracking-widest">Free</span>
                    </div>
                    <span className="text-[11px] text-zinc-500">muhammadxayaan007@gmail.com</span>
                </div>
            </div>

            {/* Menu Items */}
            <div className="pb-2">
                {menuGroups.map((group, gIdx) => (
                    <div key={gIdx} className="px-2 py-2 border-t border-white/5 first:border-t-0">
                        {group.map((item, iIdx) => (
                            <button key={iIdx} className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition text-zinc-400 hover:text-white text-[12px] font-medium group text-left">
                                <span className="text-zinc-500 group-hover:text-teal-400 transition-colors">{item.icon}</span>
                                <span className="flex-1">{item.label}</span>
                                {item.hasArrow && <div className="w-1.5 h-1.5 border-r border-b border-zinc-600 rotate-[-45deg]" />}
                            </button>
                        ))}
                    </div>
                ))}
                <div className="px-2 pt-2 border-t border-white/5">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-rose-500/5 hover:bg-rose-500/10 rounded-xl transition text-rose-400 text-[12px] font-semibold mb-1">
                        <ExternalLink size={14} /> <span>Community Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition text-zinc-400 hover:text-white text-[12px] font-medium">
                        <LogOut size={14} /> <span>Log out</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

import { SettingsModal } from '../Settings/page';

// --- Sub-Component: The More Dropdown ---
const MoreDropdown = ({ isOpen, onSettingsOpen }) => {
    if (!isOpen) return null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-16 right-0 w-[200px] bg-[#0C0C0C]/90 border border-white/10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-3xl p-1.5 z-[100]"
        >
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition group text-left">
                <div className="w-7 h-7 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Zap size={14} className="text-yellow-400 fill-yellow-400/20" />
                </div>
                <span className="text-[12px] font-bold text-white tracking-tight">Upgrade</span>
            </button>
            <button 
                onClick={onSettingsOpen}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition group text-left"
            >
                <div className="w-7 h-7 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <Settings size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[12px] font-semibold text-zinc-300 group-hover:text-white transition-colors">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition group text-left">
                <div className="w-7 h-7 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <Users size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[12px] font-semibold text-zinc-300 group-hover:text-white transition-colors">Members</span>
            </button>
            <div className="h-px bg-white/5 my-1.5 mx-2" />
            <button className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition group text-left overflow-hidden">
                <div className="w-7 h-7 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <MoreHorizontal size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <span className="flex-1 text-[12px] font-semibold text-zinc-300 group-hover:text-white transition-colors">More</span>
                <ChevronRight size={14} className="text-zinc-600 group-hover:-translate-x-0.5 transition-transform" />
            </button>
        </motion.div>
    );
};

// --- Sub-Component: The Credits Dropdown ---
const CreditsDropdown = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[260px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden z-[100] p-4 text-left"
        >
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold text-zinc-300">Free Plan</span>
                    <Settings size={12} className="text-zinc-600 hover:text-white cursor-pointer transition-colors" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-purple-400" />
                    <span className="text-xs font-semibold text-white">AI Credits</span>
                    <span className="ml-auto text-xs font-bold text-white">0</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                    <div className="w-[10%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                </div>
                <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold text-white rounded-xl transition flex items-center justify-center gap-2">
                        Get More
                    </button>
                    <Link href="/Pricing" className="flex-1 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 rounded-xl transition flex items-center justify-center gap-2">
                        Upgrade
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Navbar Component ---
const NavbarDemo = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isCreditsOpen, setIsCreditsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    
    const profileRef = useRef(null);
    const moreRef = useRef(null);
    const creditsRef = useRef(null);

    // Handles clicking outside to close the menus
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
            if (moreRef.current && !moreRef.current.contains(event.target)) {
                setIsMoreOpen(false);
            }
            if (creditsRef.current && !creditsRef.current.contains(event.target)) {
                setIsCreditsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-fit z-40 max-md:top-4 max-md:w-[95%]">
            <div className="absolute inset-0 bg-teal-500/20 blur-[60px] rounded-full scale-110 opacity-50" />

            <nav className="relative flex items-center justify-between gap-6 px-6 py-2.5 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] group">
                {/* Left: Brand */}
                <div className="flex items-center gap-3 pr-6 border-r border-white/5 cursor-pointer hover:opacity-80 transition">
                    <div className="w-8 h-8 bg-zinc-900 border border-white/20 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition">
                        <Sparkles size={16} className="text-teal-400" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-[11px] font-bold text-teal-500 uppercase tracking-widest leading-none mb-1">PRO FOLIO X</span>
                        <span className="text-sm font-semibold text-white leading-none">Workspace</span>
                    </div>
                </div>

                {/* Center: Credits toggle */}
                <div className="hidden lg:flex items-center gap-6 relative" ref={creditsRef}>
                    <button 
                        onClick={() => { 
                            setIsCreditsOpen(!isCreditsOpen); 
                            setIsProfileOpen(false); 
                            setIsMoreOpen(false); 
                        }}
                        className={`flex items-center gap-3 px-4 py-1.5 border rounded-2xl transition-all duration-300 ${isCreditsOpen ? 'bg-white/10 border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                    >
                        <span className="text-[11px] font-semibold text-white">Credits</span>
                        <Zap size={10} className={`${isCreditsOpen ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-500'} transition-colors`} />
                    </button>

                    <AnimatePresence>
                        {isCreditsOpen && <CreditsDropdown isOpen={isCreditsOpen} />}
                    </AnimatePresence>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3 pl-6 border-l border-white/5">
                    {/* Profile Toggle */}
                    <div className="relative" ref={profileRef}>
                        <button
                            onClick={() => { 
                                setIsProfileOpen(!isProfileOpen); 
                                setIsMoreOpen(false); 
                                setIsCreditsOpen(false);
                            }}
                            className={`flex items-center gap-2 pl-1 pr-3 py-1 border rounded-full transition-all duration-300 ${isProfileOpen ? 'bg-zinc-800 border-teal-500/50' : 'bg-zinc-900 border-white/10 hover:border-teal-500/50'}`}
                        >
                            <div className="w-6 h-6 bg-teal-500/10 rounded-full flex items-center justify-center">
                                <User size={14} className="text-teal-400" />
                            </div>
                            <span className="text-[11px] font-medium text-slate-300">Profile</span>
                        </button>

                        <AnimatePresence>
                            {isProfileOpen && <ProfileDropdown isOpen={isProfileOpen} />}
                        </AnimatePresence>
                    </div>

                    {/* More actions Toggle */}
                    <div className="relative" ref={moreRef}>
                        <button 
                            onClick={() => { 
                                setIsMoreOpen(!isMoreOpen); 
                                setIsProfileOpen(false); 
                                setIsCreditsOpen(false);
                            }}
                            className={`p-1.5 rounded-full transition-all duration-300 ${isMoreOpen ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        >
                            <MoreHorizontal size={18} />
                        </button>

                        <AnimatePresence>
                            {isMoreOpen && <MoreDropdown isOpen={isMoreOpen} onSettingsOpen={() => { setIsSettingsOpen(true); setIsMoreOpen(false); }} />}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>

            {/* Premium Settings Modal */}
            <AnimatePresence>
                {isSettingsOpen && (
                    <SettingsModal 
                        isOpen={isSettingsOpen} 
                        onClose={() => setIsSettingsOpen(false)} 
                    />
                )}
            </AnimatePresence>
        </header>
    );
}

export default NavbarDemo;
