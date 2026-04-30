'use client'
import React from "react";

const testimonials = [
    { id: "01", date: "May 10, 2025", text: '"Pro Folio X helped me turn my basic resume into a professional portfolio in less than 10 minutes. The AI structured everything perfectly, saving me hours."', name: "James Bond", role: "Amazon.com, Inc.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
    { id: "02", date: "April 14, 2025", text: '"As a final-year student, I needed a portfolio quickly for placements. Pro Folio X made the entire process effortless. Highly recommended tools."', name: "Anna", role: "Flipkart", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
    { id: "03", date: "Jun 10, 2025", text: '"The customization options are what impressed me the most. The AI gives a solid starting point with full control over layout, colors, and content."', name: "Chris", role: "Walmart", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
];

const Testimonial = () => {
    return (
        <section className='bg-[#050505] font-sans border-b border-white/[0.05] py-24 md:py-32 relative overflow-hidden'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
                {/* Header */}
                <div className='flex flex-col items-center text-center mb-16 md:mb-24'>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                        <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Loved by users</span>
                    </div>
                    <h3 className='text-4xl md:text-[56px] font-semibold tracking-tighter text-white leading-tight max-w-2xl'>
                        Trusted by <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400'>10,000+</span> professionals
                    </h3>
                    <p className='text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mt-6'>
                        Every testimonial is a testament to the profound impact we strive to create every single day across the industry.
                    </p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className='bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between h-full transition-all duration-300 shadow-2xl shadow-black/50 group'
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-8">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#6366f1" stroke="none">
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className='text-base md:text-lg leading-relaxed text-zinc-300 font-medium mb-10 tracking-tight'>
                                {item.text}
                            </p>
                            
                            {/* Author */}
                            <div className='flex items-center gap-4'>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-12 h-12 rounded-full object-cover border border-white/10 group-hover:scale-110 transition-transform duration-300'
                                />
                                <div className="flex flex-col">
                                    <p className='text-sm font-semibold tracking-wide text-white'>{item.name}</p>
                                    <p className='text-xs text-zinc-500 mt-0.5'>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;