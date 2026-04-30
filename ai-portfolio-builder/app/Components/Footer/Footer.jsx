export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] relative overflow-hidden font-sans">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
                    {/* Brand */}
                    <div className="flex flex-col items-start gap-8 max-w-sm">
                        <a href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-500/20">
                                <img src="/PortfolioLogo.png" width="20" height="20"/>
                            </div>
                            <span className="text-xl font-semibold tracking-tight text-white">Pro Folio X</span>
                        </a>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Crafting perfect portfolios in minutes. Start building your professional presence with our AI-powered generation tool.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-semibold text-white tracking-wide">Product</h4>
                            <ul className="flex flex-col gap-4">
                                {['Home', 'Support', 'Pricing', 'Affiliate'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-semibold text-white tracking-wide">Resources</h4>
                            <ul className="flex flex-col gap-4">
                                {['Company', 'Blogs', 'Community', 'Careers', 'About'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-semibold text-white tracking-wide">Legal</h4>
                            <ul className="flex flex-col gap-4">
                                {['Privacy', 'Terms'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-zinc-500">
                        © 2026 Pro Folio X. All Rights Reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};