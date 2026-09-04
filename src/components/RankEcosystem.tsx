"use client";

import React from 'react';
import { PanelTop, Share2, MapPin, PhoneCall, Youtube, FileText, BarChart3, Network } from 'lucide-react';

const cards = [
  {
    icon: <PanelTop size={22} />,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-100/60",
    title: "250 Page Website",
    text: "Custom optimized sites targeting all your local cities."
  },
  {
    icon: <Share2 size={22} />,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-100/60",
    title: "Social Media Citations",
    text: "Automated weekly local citations and social posts to drive ranking signals."
  },
  {
    icon: <MapPin size={22} />,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100/60",
    title: "Local Rank",
    text: "Track and dominate street by street Google Maps rankings."
  },
  {
    icon: <PhoneCall size={22} />,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-100/60",
    title: "AI Receptionist",
    text: "24/7 automated lead capture, qualification, and booking."
  },
  { core: true },
  {
    icon: <Youtube size={22} />,
    iconColor: "text-red-600",
    iconBg: "bg-red-50 border-red-100/60",
    title: "YouTube Videos",
    text: "Rank in video search results with optimized local content."
  },
  {
    icon: <FileText size={22} />,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-100/60",
    title: "Articles with Link Exchange",
    text: "SEO optimized blog posts that build local authority with link exchanges."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.535 0-6.4-2.865-6.4-6.4 0-3.535 2.865-6.4 6.4-6.4 1.582 0 3.026.574 4.143 1.526l3.056-3.056C19.356 2.503 15.992 1 12.24 1 6.168 1 1.24 5.928 1.24 12s4.928 11 11 11c5.786 0 10.286-4.086 10.286-10.286 0-.693-.064-1.36-.186-2H12.24z" />
      </svg>
    ),
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 border-blue-100/60",
    title: "Google & Paid Ads",
    text: "Monitor organic rankings and LSA ads in real time."
  },
  {
    icon: <BarChart3 size={22} />,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100/60",
    title: "Unified Analytics",
    text: "Track phone calls, lead forms, GBP, and citations in one view."
  }
];

export default function RankEcosystem() {
  return (
    <section className="py-14 md:py-16 relative isolate font-sans">
      
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10 w-full flex flex-col justify-center">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center shrink-0">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <Network size={15} className="text-blue-700" />
            <span className="text-[13px] font-bold text-blue-700 uppercase tracking-widest">The Rank AI Ecosystem</span>
          </div>
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Everything That Drives Your Rank,<br/>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-sm pb-[0.12em] -mb-[0.12em]">Unified in One System.</span>
          </h2>
          <div className="text-[16px] md:text-[19px] text-slate-600 leading-snug font-medium max-w-3xl">
            A complete growth engine built specifically for restoration business owners.
          </div>
        </div>

        {/* Grid with center core */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
          {cards.map((card, i) =>
            card.core ? (
              <div key={i} className="hidden lg:flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full border-2 border-blue-200/60 animate-ping [animation-duration:2.6s]" />
                  <div className="absolute w-32 h-32 rounded-full border border-blue-200/40" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl shadow-blue-900/30 flex items-center justify-center">
                    <span className="text-white text-3xl font-black tracking-tight">R</span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="bg-white border border-slate-200/60 rounded-2xl shadow-lg shadow-slate-200/40 p-5 flex flex-col gap-2 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-50/60 blur-2xl pointer-events-none rounded-full" />
                <div className={`relative z-10 w-10 h-10 rounded-full ${card.iconBg} border flex items-center justify-center shadow-sm shrink-0 ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h3 className="relative z-10 text-[16px] font-bold text-slate-900 leading-snug">{card.title}</h3>
                <p className="relative z-10 text-[13.5px] text-slate-600 leading-snug font-medium">{card.text}</p>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
