"use client";

import React from 'react';

// Premium glowing Red X
const RedXIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 drop-shadow-[0_2px_4px_rgba(239,68,68,0.4)]">
    <circle cx="12" cy="12" r="10" fill="url(#redGrad)" fillOpacity="0.1" stroke="url(#redGrad)" strokeWidth="1.5" />
    <path d="M15 9L9 15M9 9l6 6" stroke="url(#redGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="redGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ef4444" />
        <stop offset="1" stopColor="#b91c1c" />
      </linearGradient>
    </defs>
  </svg>
);

// Premium glowing Blue Check
const BlueCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
    <circle cx="12" cy="12" r="10" fill="url(#blueGrad)" stroke="url(#blueGradLight)" strokeWidth="1" />
    <path d="M8 12.5L10.5 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="blueGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3dd0ff" />
        <stop offset="1" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="blueGradLight" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#2563eb" />
      </linearGradient>
    </defs>
  </svg>
);

export default function BuiltForRestoration() {
  const humanChips = [
    "Relies on manual notes that lead to mistakes",
    "Takes too long to pass info to your team",
    "Can’t qualify good jobs from bad ones fast enough",
    "Doesn’t know how to talk to stressed customers"
  ];

  const genericAiChips = [
    "Doesn’t follow your preferred script",
    "No real dispatch logic, just basic call handling",
    "Locks you into expensive contracts",
    "Poor integrations with real business workflows"
  ];

  const ourChips = [
    "Built specifically for restoration companies",
    "Handles emergency calls the right way",
    "Follows your exact script every time",
    "Instantly sends job details to your team",
    "Captures every detail the first time",
    "Filters real jobs from bad calls fast",
    "Handles multiple calls at once without breaking",
    "Fully integrated system that fits your workflow"
  ];

  return (
    <section className="py-8 md:py-12 relative font-sans min-h-0 flex items-center justify-center">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10 w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10 flex flex-col items-center shrink-0">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 drop-shadow-sm">Restoration</span>
          </h2>
          <p className="text-[14px] md:text-[16px] text-slate-500 leading-relaxed font-medium max-w-3xl">
            Most answering services and AI tools weren’t built for real restoration calls. Restoration AI was intimately designed for real-world emergency situations where speed, accuracy, and control matter most.
          </p>
        </div>

        {/* Stacked Layout Container */}
        <div className="w-full flex flex-col gap-5 md:gap-6 flex-1 min-h-0 shrink-0">
          
          {/* Top Row: Weak Competitors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 shrink-0 relative">
            
            {/* Card 1: Human Answering */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center transition-all hover:bg-white hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)] hover:border-red-100 group">
              <h3 className="text-[17px] md:text-[19px] font-extrabold text-slate-800 mb-4 tracking-tight border-b border-slate-100 pb-3 w-full text-center group-hover:text-red-900 transition-colors">
                Human Answering Services
              </h3>
              <div className="flex flex-col gap-2.5 w-full">
                {humanChips.map((chip, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50/50 px-3.5 py-2 rounded-2xl border border-slate-100 transition-all hover:bg-red-50/80 hover:border-red-200 hover:shadow-sm hover:-translate-y-[1px]">
                    <RedXIcon />
                    <span className="text-slate-600 font-semibold text-[13px] md:text-[14px] leading-snug">
                      {chip}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Other AI */}
            <div className="bg-white/80 backdrop-blur-xl rounded-[28px] p-6 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center transition-all hover:bg-white hover:shadow-[0_8px_30px_rgba(239,68,68,0.06)] hover:border-red-100 group">
              <h3 className="text-[17px] md:text-[19px] font-extrabold text-slate-800 mb-4 tracking-tight border-b border-slate-100 pb-3 w-full text-center group-hover:text-red-900 transition-colors">
                Other AI Companies
              </h3>
              <div className="flex flex-col gap-2.5 w-full">
                {genericAiChips.map((chip, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50/50 px-3.5 py-2 rounded-2xl border border-slate-100 transition-all hover:bg-red-50/80 hover:border-red-200 hover:shadow-sm hover:-translate-y-[1px]">
                    <RedXIcon />
                    <span className="text-slate-600 font-semibold text-[13px] md:text-[14px] leading-snug">
                      {chip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Bottom Card: The Dominant Dark-Mode Hero Card */}
          <div className="relative group shrink-0 w-full mt-2 lg:mt-4">
            {/* Massive atmospheric glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-[40px] pointer-events-none -z-10"></div>
            
            <div className="bg-gradient-to-br from-[#0a1128] via-[#0d1b3e] to-[#0a1128] rounded-[36px] p-6 lg:p-8 border-[1.5px] border-blue-500/30 shadow-[0_20px_50px_rgba(15,23,42,0.5)] hover:border-blue-400/50 hover:shadow-[0_30px_60px_rgba(37,99,235,0.25)] transition-all duration-500 relative overflow-hidden flex flex-col">
              
              {/* Internal lighting effects */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
              
              {/* Premium Title */}
              <h3 className="text-[24px] md:text-[30px] font-extrabold text-white mb-6 tracking-tight text-center relative z-10 flex flex-wrap items-center justify-center gap-3 pb-5 border-b border-white/10">
                 <img src="/website-photos/new-logo.png" alt="Restoration AI" className="h-16 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </h3>
              
              {/* 2x4 Chip Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10 w-full">
                {ourChips.map((chip, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/[0.04] backdrop-blur-md px-4 py-3.5 rounded-[20px] border border-white/10 hover:bg-white/[0.08] hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] group/chip cursor-default h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-transparent group-hover/chip:from-blue-500/10 group-hover/chip:via-tranparent transition-all duration-500 pointer-events-none"></div>
                    <div className="mt-0.5">
                      <BlueCheckIcon />
                    </div>
                    <span className="text-blue-50 font-semibold text-[13px] md:text-[14.5px] leading-snug flex-1 drop-shadow-md">
                      {chip}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
