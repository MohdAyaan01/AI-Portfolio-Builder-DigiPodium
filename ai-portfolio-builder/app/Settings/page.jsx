'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Lock, Bell, Eye, 
    Palette, Globe, Shield, 
    LogOut, X, ChevronRight,
    Mail, CreditCard, Sparkles,
    Check,
    ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';

const SettingsModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('Profile');
    const [saved, setSaved] = useState(false);

    if (!isOpen) return null;

    const tabs = [
        { id: 'Profile', icon: <User size={16} />, label: 'Profile Settings' },
        { id: 'Account', icon: <Mail size={16} />, label: 'Account & Billing' },
        { id: 'Appearance', icon: <Palette size={16} />, label: 'Appearance' },
        { id: 'Security', icon: <Shield size={16} />, label: 'Security & Privacy' },
    ];

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
      
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <div className="fixed top-8 left-10 z-[100]">
                <Link 
                    href="/Dashboard" 
                    className="group flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-teal-500/30 hover:bg-white/[0.08] transition-all duration-500 shadow-2xl"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">Back to Dashboard</span>
                </Link>
            </div>
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl h-[80vh] bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row"
            >
                {/* Fixed Background Accents */}
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/5 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-teal-500/5 blur-[100px] pointer-events-none" />

                {/* Sidebar */}
                <div className="w-full md:w-72 border-r border-white/5 bg-black/20 p-6 flex flex-col items-center">
                    <div className="w-full mb-8">
                        <h2 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Settings</h2>
                        <nav className="space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-semibold transition-all duration-300 relative group ${activeTab === tab.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'}`}
                                >
                                    {activeTab === tab.id && (
                                        <motion.div 
                                            layoutId="active-tab-highlight"
                                            className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={activeTab === tab.id ? 'text-teal-400' : 'group-hover:text-teal-400/70 transition-colors'}>
                                        {tab.icon}
                                    </span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-auto w-full pt-6 border-t border-white/5">
                        <div className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-semibold text-rose-500 hover:bg-rose-500/5 transition-all">
                            <LogOut size={16} />
                            <Link href="/">Sign Out</Link>
                            
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-none">
                    <header className="flex justify-between items-start mb-10">
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{activeTab}</h1>
                            <p className="text-zinc-500 text-sm">Manage your account preferences and settings.</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-2 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </header>

                    <div className="space-y-12 max-w-2xl">
                        {activeTab === 'Profile' && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="relative group">
                                        <div className="w-24 h-24 bg-teal-500 rounded-[2rem] flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                                            M
                                        </div>
                                        <button className="absolute -bottom-2 -right-2 p-2 bg-zinc-800 border border-white/10 rounded-xl text-white shadow-xl hover:scale-110 transition group-hover:bg-teal-600 group-hover:border-teal-400/50">
                                            <Sparkles size={14} />
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-bold text-white">Profile Photo</h3>
                                        <p className="text-zinc-500 text-xs mb-3">Upload a new photo to your account.</p>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-[11px] font-bold text-white rounded-lg transition border border-white/5">Change</button>
                                            <button className="px-4 py-2 hover:bg-rose-500/5 text-[11px] font-bold text-rose-500 rounded-lg transition">Remove</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Display Name</label>
                                        <input 
                                            type="text" 
                                            defaultValue="moayaan" 
                                            className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-teal-500/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Username</label>
                                        <div className="relative flex items-center">
                                            <span className="absolute left-5 text-zinc-600 text-sm lowercase">@</span>
                                            <input 
                                                type="text" 
                                                defaultValue="moayaan.dev" 
                                                className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl pl-10 pr-5 py-3.5 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Personal Website</label>
                                        <input 
                                            type="url" 
                                            placeholder="https://yourpage.com" 
                                            className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-teal-500/50 transition-all"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'Account' && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <div className="p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-[2rem] flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-indigo-500/10 rounded-2xl">
                                            <CreditCard className="text-indigo-400" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-tight">Free Plan</h4>
                                            <p className="text-zinc-500 text-[11px]">Your next billing date is April 24, 2026.</p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-black text-[11px] font-black rounded-xl transition shadow-lg shadow-indigo-500/20 active:scale-95 uppercase tracking-widest">
                                        Upgrade
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-2 pl-4">
                                        <div className="flex flex-col">
                                            <span className="text-[14px] font-bold text-white uppercase tracking-tight">Email Notifications</span>
                                            <span className="text-xs text-zinc-500">Receive weekly updates about your workspace.</span>
                                        </div>
                                        <button className="w-12 h-6 bg-teal-500 rounded-full relative p-1 transition-colors">
                                            <div className="w-4 h-4 bg-black rounded-full translate-x-6 transition-transform" />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between p-2 pl-4 border-t border-white/5 pt-6">
                                        <div className="flex flex-col">
                                            <span className="text-[14px] font-bold text-white uppercase tracking-tight">Public Profile</span>
                                            <span className="text-xs text-zinc-500">Allow search engines to index your profile.</span>
                                        </div>
                                        <button className="w-12 h-6 bg-zinc-800 rounded-full relative p-1 hover:bg-zinc-700 transition">
                                            <div className="w-4 h-4 bg-zinc-400 rounded-full translate-x-0 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'Appearance' && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-6 bg-zinc-900 border-2 border-teal-500/40 rounded-3xl cursor-pointer hover:bg-zinc-800 transition">
                                        <div className="w-full aspect-[4/3] bg-black rounded-2xl mb-4 border border-white/5 overflow-hidden p-2">
                                             <div className="w-full h-full bg-zinc-900/50 rounded-xl" />
                                        </div>
                                        <span className="text-sm font-bold text-teal-400">Deep Space</span>
                                    </div>
                                    <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl cursor-pointer hover:border-white/20 transition group">
                                        <div className="w-full aspect-[4/3] bg-zinc-100 rounded-2xl mb-4 border border-zinc-200 overflow-hidden p-2">
                                             <div className="w-full h-full bg-zinc-200/50 rounded-xl" />
                                        </div>
                                        <span className="text-sm font-bold text-zinc-500 group-hover:text-white transition-colors">Industrial Light</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        
                        {/* Action Footer (Only showing if content exists) */}
                        <div className="flex items-center justify-end gap-3 pt-10 border-t border-white/5">
                            <button 
                                onClick={onClose}
                                className="px-6 py-3 bg-zinc-900 text-zinc-400 text-xs font-bold hover:text-white transition uppercase tracking-widest rounded-2xl"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSave}
                                className={`px-8 py-3 bg-white text-black text-xs font-black rounded-2xl transition-all duration-500 flex items-center gap-2 group overflow-hidden ${saved ? 'bg-teal-500 !text-white' : 'hover:scale-[1.02] active:scale-95 shadow-[0_15px_30px_rgba(255,255,255,0.1)]'}`}
                            >
                                <AnimatePresence mode="wait">
                                    {saved ? (
                                        <motion.span 
                                            key="saved"
                                            initial={{ y: 20 }}
                                            animate={{ y: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Check size={14} strokeWidth={3} />
                                            SAVED
                                        </motion.span>
                                    ) : (
                                        <motion.span 
                                            key="save"
                                            initial={{ y: -20 }}
                                            animate={{ y: 0 }}
                                            className="uppercase tracking-widest"
                                        >
                                            Save Changes
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function SettingsPage() {
    // This allows the file to work as a standalone page if visited via index
    const [isOpen, setIsOpen] = useState(true);
    return (
        <main className="min-h-screen bg-[#050505]">
            <SettingsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {!isOpen && (
                <div className="flex items-center justify-center min-h-screen">
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="px-10 py-4 bg-teal-500 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition"
                    >
                        Open Settings
                    </button>
                </div>
            )}
        </main>
    );
}

// Named export for use as a component
export { SettingsModal };
