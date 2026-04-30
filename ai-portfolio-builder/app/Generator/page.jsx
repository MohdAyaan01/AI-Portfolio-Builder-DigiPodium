'use client';
import React, { useState, useRef } from 'react';

import { toast } from "react-hot-toast";

const GeneratorPage = () => {
    const [file, setFile] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.type === "application/pdf" || selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                setFile(selectedFile);
                toast.success(`Attached: ${selectedFile.name}`);
            } else {
                toast.error("Please upload a PDF or DOCX file.");
            }
        }
    };

    const handleGenerate = async () => {
        if (!file) return toast.error("Please upload your resume first!");
        if (!prompt) return toast.error("Please add some instructions for the AI.");

        const user = JSON.parse(localStorage.getItem('user'));
        if (!user?._id) {
            return toast.error("Please login first!");
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("resume", file);
        formData.append("prompt", prompt);
        formData.append("userId", user._id);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolio/generate`, {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("Generation failed");

            const data = await response.json();
            setResult(data);
            toast.success("Portfolio Generated Successfully!");
        } catch (error) {
            console.error("Failed To Generate:", error);
            toast.error("Generation failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className="min-h-screen bg-[#050505] p-20 text-white">
          <div className="max-w-2xl mx-auto bg-white/5 p-10 rounded-3xl border border-white/10">
              <h1 className="text-3xl font-bold mb-6">AI Portfolio Generator</h1>
              <input type="file" onChange={handleFileChange} className="mb-4 block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-500 file:text-black hover:file:bg-teal-400" />
              <textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Describe your style..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 outline-none focus:border-teal-500 transition-all h-32"
              />
              <button 
                onClick={handleGenerate} 
                disabled={loading}
                className="w-full bg-teal-500 text-black font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                  {loading ? "Generating..." : "Generate Portfolio"}
              </button>

              {result && (
                  <div className="mt-10 p-6 bg-teal-500/10 border border-teal-500/20 rounded-2xl">
                      <h2 className="text-xl font-bold text-teal-400 mb-2">Success!</h2>
                      <p className="text-zinc-400 text-sm">Your portfolio data has been generated. Head to your dashboard to view it.</p>
                  </div>
              )}
          </div>
      </div>
    );
};

export default GeneratorPage;