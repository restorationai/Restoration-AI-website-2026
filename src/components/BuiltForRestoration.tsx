"use client";

import React from 'react';
import { Droplet, Flame, Biohazard, Handshake, HardHat, Sparkles } from 'lucide-react';

export default function BuiltForRestoration() {
  const capabilities = [
    {
      icon: <Droplet size={56} strokeWidth={1.5} />,
      color: "text-blue-500",
      text: "Identifies water damage emergencies & categories"
    },
    {
      icon: <Flame size={56} strokeWidth={1.5} />,
      color: "text-orange-500",
      text: "Handles fire, smoke, & soot damage intake"
    },
    {
      icon: <Biohazard size={56} strokeWidth={1.5} />,
      color: "text-emerald-500",
      text: "Understands mold remediation protocols"
    },
    {
      icon: <Handshake size={56} strokeWidth={1.5} />,
      color: "text-indigo-500",
      text: "Flawlessly handles referral partner calls"
    },
    {
      icon: <HardHat size={56} strokeWidth={1.5} />,
      color: "text-amber-500",
      text: "Handles reconstruction & renovation inquiries"
    },
    {
      icon: <Sparkles size={56} strokeWidth={1.5} />,
      color: "text-cyan-500",
      text: "Books carpet cleaning & maintenance jobs"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative font-sans">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfe] to-white pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10 w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center shrink-0">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Not a Generic Answering Service.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-sm">We're Built for Restoration.</span>
          </h2>
          <div className="text-[18px] md:text-[22px] text-slate-600 leading-snug font-medium max-w-3xl">
            An AI receptionist that understands your industry—every job type, every urgency level, every intake question.
          </div>
        </div>

        {/* Capability Grid (1x6 mobile, 3x2 desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto mb-10 w-full">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-5 group">
              <div className={`${cap.color} drop-shadow-sm group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300`}>
                {cap.icon}
              </div>
              <h3 className="text-[18px] md:text-[21px] font-bold text-slate-800 leading-snug max-w-[280px]">
                {cap.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Micro-Copy */}
        <div className="text-center w-full mt-4">
          <div className="text-[12px] md:text-[14px] text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
            Your AI asks the right intake questions—water source, affected areas, timeline, insurance status—so your team shows up prepared, not guessing.
          </div>
        </div>

      </div>
    </section>
  );
}
