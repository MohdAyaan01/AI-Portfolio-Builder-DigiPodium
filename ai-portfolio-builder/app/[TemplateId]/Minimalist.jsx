"use client";
import React from 'react';

const Minimalist = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-serif py-32 px-10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Simple Centered Header */}
        <h1 className="text-5xl font-light tracking-tight mb-8">
          {data.fullName}
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-lg mx-auto mb-20">
          {data.professionalBio}
        </p>

        {/* Clean Project List */}
        <div className="space-y-24">
            {data.projects?.map((item, i) => (
                <div key={i} className="group">
                    <h3 className="text-2xl mb-4 italic hover:text-zinc-500 transition cursor-pointer">{item.title}</h3>
                    <p className="text-sm text-zinc-400 max-w-md mx-auto">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Minimalist;
