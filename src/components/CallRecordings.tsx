"use client";

import React from 'react';

const mockRecordings = [
  {
    company: "SERVPRO",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a162c135a8c8334ab39.png",
    badge: "EMERGENCY NIGHT DISPATCH",
    title: "Water Damage Mainline Pipe Burst",
    duration: "0:01",
    progressClass: "w-[15%]"
  },
  {
    company: "DRY1OUT",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a5b2c135a8c8334b582.png", 
    badge: "PRE-QUALIFIED COMMERCIAL LEAD",
    title: "Heavy Mold Remediation Quote",
    duration: "0:02",
    progressClass: "w-[20%]"
  },
  {
    company: "SERVPRO",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a162c135a8c8334ab39.png",
    badge: "URGENT RESIDENTIAL INQUIRY",
    title: "Post-Fire Structural Cleanup",
    duration: "6:12",
    progressClass: "w-[80%]"
  },
  {
    company: "AMERICLEAN",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a178696a78b8dffaf10.png", 
    badge: "OFFICE COMPLEX INTAKE",
    title: "Category 3 Flood Loss",
    duration: "7:05",
    progressClass: "w-[65%]"
  }
];

export default function CallRecordings() {
  return (
    <section className="py-24 relative bg-transparent font-sans">
      


      {/* EDGE GLOWS — subtle blue glows hugging the sides */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none z-0 -translate-x-1/2" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none z-0 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div className="relative inline-block px-10 md:px-24">
            
            {/* Left Diagonal Arrow (Pointing Down-Right) */}
            <div className="absolute left-0 md:left-2 lg:-left-2 bottom-4 md:bottom-2 transform hidden md:block">
              <svg className="w-10 h-10 md:w-16 md:h-16 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14m0 0V9m0 10H9" />
              </svg>
            </div>

            <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1] relative z-10">
              Hear Real Recordings <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 drop-shadow-sm">
                In Real Life Scenarios
              </span>
            </h2>

            {/* Right Diagonal Arrow (Pointing Down-Left) */}
            <div className="absolute right-0 md:right-2 lg:-right-2 bottom-4 md:bottom-2 transform hidden md:block">
              <svg className="w-10 h-10 md:w-16 md:h-16 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5L5 19m0 0V9m0 10h10" />
              </svg>
            </div>
            
          </div>
        </div>

        {/* Outer Interface Boundary */}
        <div className="relative p-6 md:p-8 lg:p-10 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 mx-auto w-full">
          {/* Prominent Center Blue Glow - Lightened */}
          <div className="absolute inset-x-10 inset-y-10 bg-blue-600/5 blur-[140px] rounded-[50px] pointer-events-none -z-10"></div>
          
          {/* Subtle iridescent glow behind grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 rounded-[40px] pointer-events-none"></div>

          {/* Recordings Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 w-full mx-auto">
            
            {mockRecordings.map((rec, i) => (
              <div 
                key={i}
                className="w-full bg-white border border-slate-100 rounded-[20px] overflow-hidden shadow-sm flex flex-col font-sans hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Full Width Logo Header (Dynamic Edge-To-Edge) */}
                <div className="w-full bg-white border-b border-slate-100 flex items-center justify-center overflow-hidden mix-blend-multiply relative">
                  <img src={rec.logo} alt={`${rec.company} logo`} className="w-full h-auto object-cover scale-[1.03]" />
                </div>

                {/* Card Content Base */}
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  
                  {/* Meta Labels (Rigid Height for Perfect Horizontal Alignment) */}
                  <div className="flex justify-between items-start h-[44px] gap-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wide flex items-center gap-1.5 shrink-0 pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                      {rec.company}
                    </span>
                    <span className="text-[8px] font-bold text-purple-600 bg-purple-50 tracking-wider px-2 py-1 rounded border border-purple-100/50 text-right leading-[1.3] max-w-[65%]">
                      {rec.badge}
                    </span>
                  </div>

                  {/* Scenario Title Container (Fixed Height) */}
                  <div className="h-[76px] flex flex-col justify-start">
                    <h3 className="text-[19px] lg:text-[21px] xl:text-[22px] leading-[1.25] font-bold text-slate-900 font-outfit tracking-tight">
                      {rec.title}
                    </h3>
                  </div>

                  {/* Anchor Bottom Elements */}
                  <div className="mt-auto">
                    {/* Dotted Separator */}
                    <div className="border-t-[2px] border-dotted border-slate-300 w-full mb-5" />

                  {/* Interactive Audio Player Graphic */}
                  <div className="flex items-center gap-4 mb-2 w-full cursor-not-allowed opacity-90 group transition-all">
                    
                    {/* Play Button */}
                    <div className="w-10 h-10 flex-shrink-0 bg-[#0B152A] rounded-xl flex items-center justify-center shadow-sm transform group-hover:scale-[1.05] transition-transform">
                      <svg className="w-4 h-4 text-white ml-0.5 fill-white" viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z"/>
                      </svg>
                    </div>
                    
                    {/* Track Bar */}
                    <div className="flex-1 flex items-center gap-3">
                      <span className="text-[10px] font-mono text-slate-400 font-medium tracking-wide">0:00</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                        <div className={`absolute top-0 left-0 bottom-0 bg-blue-500 rounded-full ${rec.progressClass}`}></div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 font-medium tracking-wide">{rec.duration}</span>
                    </div>

                  </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
