'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Plus, Download, LayoutGrid, Globe, FileText, User, Share2, Heart, Eye } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { workspaceApps, communityApps } from './data';
import Link from 'next/link';
import PortfolioPreview from '../Components/PortfolioPreview';
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import axios from "axios"
const ProjectCard = ({ title, author, templateId, image, stats, isPremium, result, type }) => {
    const router = useRouter();

    const handleUseTemplate = () => {
        if (!result) {
            toast.error("Please generate your portfolio data first using the input above!");
            return;
        }
        // 1. Save the AI result to LocalStorage
        localStorage.setItem('portfolioData', JSON.stringify(result));

        // 2. Redirect to the template page (lowercase for route consistency)
        router.push(`/${templateId?.toLowerCase()}`);
    };
    const getBadgeStyles = (type) => {
        switch (type) {
            case 'Professional': return 'bg-teal-500 text-black';
            case 'Creative': return 'bg-purple-500 text-white';
            case 'Minimalist': return 'bg-zinc-200 text-black';
            case 'Bold': return 'bg-orange-500 text-black';
            default: return 'bg-zinc-800 text-white';
        }
    };
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group flex flex-col transition-all duration-300"
        >
            {/* Card Image Container */}
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 shadow-xl">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700">
                        <LayoutGrid size={40} className="opacity-20 translate-y-2" />
                    </div>
                )}

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button className="px-5 py-2.5 bg-white text-black rounded-full text-[11px] font-bold hover:scale-105 active:scale-95 transition">
                        Preview
                    </button>
                    <button
                        onClick={handleUseTemplate}
                        className="px-5 py-2.5 bg-teal-500 text-black border border-white/10 rounded-full text-[11px] font-bold hover:bg-teal-400 transition"
                    >
                        Use Now
                    </button>
                </div>

                {/* Top Right Badge */}
                {isPremium && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-teal-500 text-black rounded-md text-[9px] font-black uppercase tracking-widest shadow-lg">
                        Premium
                    </div>
                )}

                {/* Categorization Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border shadow-lg ${getBadgeStyles(type)}`}>
                    {type}
                </div>
            </div>

            {/* Card Metadata (Below Image - Behance Style) */}
            <div className="mt-4 flex items-start justify-between px-1">
                <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold text-white group-hover:text-teal-400 transition-colors truncate max-w-[150px]">
                        {title}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                        by <span className="hover:text-zinc-300 cursor-pointer underline-offset-2 hover:underline">{author || "AI Builder"}</span>
                    </span>
                </div>

                {/* Social Stats */}
                <div className="flex items-center gap-3 mt-0.5">
                    <div className="flex items-center gap-1 text-zinc-500 hover:text-red-400 cursor-pointer transition-colors">
                        <Heart size={13} className="fill-current opacity-60" />
                        <span className="text-[11px] font-bold">{stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500">
                        <Eye size={13} className="opacity-60" />
                        <span className="text-[11px] font-bold">{stats.views}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const DashboardContent = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);
    const [selectedStyle, setSelectedStyle] = useState('Professional');
    const [activeTab, setActiveTab] = useState('Workspace');
    const [activeCategory, setActiveCategory] = useState('Featured');
    const categories = ["Featured", "New", "Quick Apps", "Free"];
    const [theme, setTheme] = useState({
        primaryColor: '#14b8a6',   // teal
        fontFamily: 'sans',
        bgColor: '#050505',
    });

    const [editableContent, setEditableContent] = useState(null);
    const [history, setHistory] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (!storedUser || storedUser === 'undefined') {
                try {
                    // Everything must be inside ONE single object
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (res.data.success) {
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        // Force a re-fetch of history now that we have the user
                        fetchHistory(res.data.user._id);
                    }
                } catch (err) {
                    console.error("Failed to fetch user profile:", err);
                }
            }
        };

        const fetchHistory = async (userId) => {
            const user = userId ? { _id: userId } : JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem('token');
            console.log("Current User For History", user);
            if (user?._id) {
                try {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/history/${user._id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setHistory(res.data);
                } catch (err) {
                    console.error("Failed to fetch history:", err);
                }
            }
        };

        fetchUser();
        fetchHistory();
    }, []);
  
        
    const handleGenerate = async () => {
    // 1. Check for token BEFORE doing anything
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
        toast.error("Your session has expired. Redirecting to Login...");
        setTimeout(() => window.location.href = '/Login', 2000);
        return;
    }

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const formData = new FormData();
    if (file) formData.append("resume", file);
    formData.append("prompt", prompt);
    formData.append("style", selectedStyle);
    formData.append("userId", user?._id);

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/generate`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        
        setResult(response.data);
        setEditableContent(response.data);
        setHistory(prev => [response.data, ...prev]);
        toast.success("Portfolio Generated Successfully!");
    } catch (error) {
        console.error("Generate Error:", error);
        // If the server says 401, it means the token was bad
        if (error.response?.status === 401) {
            toast.error("Session expired. Please log in again.");
            localStorage.clear();
            setTimeout(() => window.location.href = '/Login', 2000);
        } else {
            toast.error("Generation failed. Please try again.");
        }
    } finally {
        setLoading(false);
    }
    };


    return (
        <main className="ml-24 pt-28 px-10 pb-20 min-h-screen bg-[#050505] relative overflow-hidden">
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                accept=".pdf,.docx"
            />

            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-600/[0.03] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-teal-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-16 relative z-10 transition-all">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                    Make Your Portfolio. <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">More Professional.</span>
                </h1>
                <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase">Powered By Pro Folio X.</p>

                <div className="mt-12 w-full max-w-2xl relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 to-purple-500/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 pl-8 flex items-center justify-between shadow-2xl">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder={file ? `Instruction for ${file.name}...` : "Build Your Portfolio Here..."}
                            className="bg-transparent border-none outline-none text-zinc-300 text-sm w-full placeholder:text-zinc-600"
                        />
                        <div className="flex items-center gap-4 px-2">

                            <div className="flex items-center gap-4 text-zinc-500 border-l border-white/5 pl-4 ml-2">
                                <button
                                    onClick={() => fileInputRef.current.click()}
                                    className={`flex items-center gap-1.5 transition group ${file ? 'text-teal-400' : 'hover:text-teal-400'}`}
                                >
                                    <FileText size={16} className={file ? 'scale-110' : 'group-hover:scale-110 transition-transform'} />
                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest transition-all ${file ? 'inline' : 'hidden group-hover:inline'}`}>
                                        {file ? file.name.split('.')[0].slice(0, 8) + '..' : 'Resume'}
                                    </span>
                                </button>
                                <Plus size={18} className="hover:text-white transition cursor-pointer" />
                                <button
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className="w-10 h-10 bg-teal-500 text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg shadow-teal-500/20 cursor-pointer disabled:opacity-50"
                                >
                                    {loading ? (
                                        <Sparkles size={18} className="animate-spin" />
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Result Section */}
                <AnimatePresence>
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full max-w-2xl mt-6 relative z-10"
                        >
                            <div className="flex items-center justify-between mb-4 px-4">
                                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.2em]">Generated View</span>
                                <button onClick={() => setResult(null)} className="text-zinc-600 hover:text-white transition">
                                    <Zap size={14} />
                                </button>
                            </div>

                            {/* THE TRANSFORMATION: Turning JSON into DESIGN */}

                            <div className="w-full max-w-2xl">
                                {/* LEFT: Preview */}
                                <PortfolioPreview data={editableContent} theme={theme} setTheme={setTheme} />


                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-2 p-1 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5 relative">
                    <button
                        onClick={() => setActiveTab('Workspace')}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-colors duration-300 ${activeTab === 'Workspace' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        {activeTab === 'Workspace' && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-zinc-800 rounded-xl shadow-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <div className="w-5 h-5 bg-teal-500/10 rounded-lg flex items-center justify-center p-0.5">
                                <LayoutGrid size={12} className={activeTab === 'Workspace' ? 'text-teal-400' : 'text-zinc-500'} />
                            </div>
                            Recent History
                            <span className="ml-1 px-1.5 py-0.5 bg-zinc-700/50 rounded-md text-[9px] text-zinc-400">{history.length}/3</span>
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('Community')}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-colors duration-300 ${activeTab === 'Community' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        {activeTab === 'Community' && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-zinc-800 rounded-xl shadow-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <Globe size={13} className={activeTab === 'Community' ? 'text-purple-400' : 'text-zinc-500'} />
                            Templates
                        </span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition group">
                        <Zap size={16} className="group-hover:fill-yellow-500/20 group-hover:text-yellow-500" />
                    </button>
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <Download size={16} />
                    </button>
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <Plus size={18} />
                    </button>
                </div>
            </div>

            {
                activeTab === 'Community' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-8 overflow-x-auto hide-scrollbar pb-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-300 whitespace-nowrap ${activeCategory === cat ? 'text-black border-white' : 'text-zinc-500 border-white/10 hover:border-white/30'}`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="active-category-pill"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </motion.div>
                )
            }

            <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 relative z-10"
            >
                {(activeTab === 'Workspace' ? history : communityApps).map((portfolio, index) => (
                    <ProjectCard
                        key={index}
                        title={portfolio.content?.fullName || "Untitled Portfolio"}
                        author="You"
                        templateId={portfolio.templateId}
                        result={portfolio.content}
                        stats={{ likes: 0, views: 0 }}
                        type={portfolio.templateId}
                    />
                ))}
            </motion.div>
        </main >
    );

};


export default DashboardContent;
