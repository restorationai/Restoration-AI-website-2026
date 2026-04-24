"use client";

import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="pt-12 pb-12 relative text-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
          Ready To Answer Every <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Emergency Call?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center">
            <a 
              href="/signup" 
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(30,58,138,0.4)]"
            >
              Get Started Free
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="text-xs text-slate-500 mt-2 text-center">Set up in 15 minutes, no credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
