export default function Clients() {
    return (
        <section className="w-full bg-[#050505] py-24 border-y border-white/[0.05] relative overflow-hidden font-sans">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[200px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative z-10 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Trusted Network</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">
                    Empowering top <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">creators</span> worldwide
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                    {[
                        { name: "Michael", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
                        { name: "James", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
                        { name: "Emily", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" },
                        { name: "John", img: "https://randomuser.me/api/portraits/men/75.jpg" },
                    ].map((client, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">
                            <div className="relative p-1 rounded-full bg-gradient-to-b from-white/10 to-transparent group-hover:from-indigo-500/50 transition-all duration-500 ease-out hover:-translate-y-2">
                                <img src={client.img} alt={client.name}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black/50 shadow-2xl object-cover" />
                                {/* Label Tooltip style */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded-md border border-white/10 shadow-lg">{client.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
