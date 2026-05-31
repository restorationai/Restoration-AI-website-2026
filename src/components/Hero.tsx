"use client";

import React from 'react';
import { Bot, PhoneCall, Star, CheckCircle2, TrendingUp, ShieldAlert } from 'lucide-react';
import BrowserVideo from './BrowserVideo';
import LogoMarquee from './LogoMarquee';

const badges = [
  {
    id: 1,
    type: 'custom' as const,
    label: "Restoration Calls Handled Right",
    icon: <PhoneCall className="text-blue-700" size={20} />,
    pos: "top-[160px] right-[50%] mr-[220px] lg:mr-[280px] xl:mr-[340px]",
    rotate: "-12deg",
    width: "w-[140px]"
  },
  {
    id: 2,
    type: 'custom_pill' as const,
    label: (
      <div className="flex flex-col items-start justify-center">
        <span className="text-[16px] font-black text-slate-800 leading-none tracking-tight">$26M+</span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">in Secured Jobs</span>
      </div>
    ),
    icon: <TrendingUp className="text-blue-700" size={18} />,
    pos: "top-[360px] right-[50%] mr-[300px] lg:mr-[380px] xl:mr-[440px]",
    rotate: "12deg",
    width: "w-[190px]"
  },
  {
    id: 3,
    type: 'custom' as const,
    label: (
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[26px] font-black text-slate-800 leading-none tracking-tight">24/7</span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Dispatch</span>
      </div>
    ),
    icon: <Bot className="text-blue-700" size={20} />,
    pos: "top-[560px] right-[50%] mr-[240px] lg:mr-[300px] xl:mr-[360px]",
    rotate: "-12deg",
    width: "w-[140px]"
  },
  {
    id: 4,
    type: 'custom_pill' as const,
    label: <span className="text-[11px] font-bold text-slate-700 tracking-widest uppercase whitespace-normal text-left leading-snug">Proven in<br/>Real Emergencies</span>,
    icon: <ShieldAlert className="text-blue-700" size={18} />,
    pos: "top-[180px] left-[50%] ml-[220px] lg:ml-[280px] xl:ml-[340px]",
    rotate: "-12deg",
    width: "w-[200px]"
  },
  {
    id: 5,
    type: 'custom' as const,
    label: "Used by Top Restoration Teams",
    icon: <CheckCircle2 className="text-blue-700" size={20} />,
    pos: "top-[360px] left-[50%] ml-[300px] lg:ml-[380px] xl:ml-[440px]",
    rotate: "12deg",
    width: "w-[140px]"
  },
  {
    id: 6,
    type: 'custom_pill' as const,
    label: (
      <div className="flex flex-col items-start justify-center">
        <span className="text-[16px] font-black text-slate-800 leading-none tracking-tight">0</span>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Missed Calls</span>
      </div>
    ),
    icon: <PhoneCall className="text-[#3dd0ff]" size={18} />,
    pos: "top-[560px] left-[50%] ml-[240px] lg:ml-[300px] xl:ml-[360px]",
    rotate: "12deg",
    width: "w-[170px]"
  },
];

export default function Hero() {
  return (
    <section className="relative pt-[160px] md:pt-[290px] pb-[60px] md:pb-[110px] overflow-x-clip md:overflow-hidden flex flex-col items-center">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 10%, rgba(0,0,0,0.5) 60%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 10%, rgba(0,0,0,0.5) 60%, transparent 95%)',
          opacity: 0.65
        }}
      />

      <div className="hidden md:block absolute top-[5%] left-0 w-[500px] h-[900px] bg-blue-500/15 blur-[160px] pointer-events-none -z-10 -translate-x-1/2" />
      <div className="hidden md:block absolute top-[5%] right-0 w-[500px] h-[900px] bg-blue-500/15 blur-[160px] pointer-events-none -z-10 translate-x-1/2" />
      <div className="hidden md:block absolute top-[270px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* TOP SOCIAL PROOF */}
      <div className="absolute top-[100px] md:top-[125px] left-1/2 -translate-x-1/2 z-30 w-[95%] md:w-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="flex -space-x-2 bg-white/20 p-1 rounded-full backdrop-blur-sm border border-slate-200/50">
              {[
                "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b6653d829c73b24abf7d.png",
                "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b3594cde4bbc2adc0764.webp",
                "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359a7dcb4cff0b96d01.png",
                "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359c9e9d61b8651140d.jpg",
                "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b35984c045c2746ce839.webp"
              ].map((src, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-white flex items-center justify-center p-0.5 shadow-sm">
                  <img src={src} alt={`Company Logo ${i + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <span className="text-[13px] sm:text-[14px] text-slate-600 font-semibold text-center whitespace-normal sm:whitespace-nowrap leading-tight">
            Trusted by <span className="font-bold tracking-tight">Restoration Companies</span> Nationwide
          </span>
        </div>
      </div>

      {/* FLOATING CARDS */}
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={`absolute ${badge.pos} hidden lg:block z-10 ${badge.width}`}
          style={{ rotate: badge.rotate }}
        >
          {badge.type === 'custom' ? (
            <div className="bg-white border border-slate-200/60 rounded-xl shadow-lg shadow-slate-200/40 p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden h-[115px] w-full">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/70 blur-2xl pointer-events-none rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#3dd0ff]/5 blur-2xl pointer-events-none rounded-full" />
              <div className="relative z-10 flex flex-col items-center gap-2.5 w-full">
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shadow-sm border border-blue-100/50 shrink-0">
                  {badge.icon}
                </div>
                <div className="text-[12px] font-bold text-slate-700 text-center leading-snug max-w-[130px]">
                  {badge.label}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200/60 rounded-xl shadow-lg shadow-slate-200/40 px-4 py-2 flex flex-row items-center gap-2.5 relative overflow-hidden h-[65px] w-full">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/70 blur-xl pointer-events-none rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-700/5 blur-xl pointer-events-none rounded-full" />
              <div className="relative z-10 w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shadow-sm border border-blue-200/50 shrink-0">
                {badge.icon}
              </div>
              <div className="relative z-10 flex items-center h-full">
                {badge.label}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="container-pill w-full relative">
        <div className="text-center space-y-8 relative z-20 max-w-5xl mx-auto">
          <h1 className="text-[42px] sm:text-[48px] md:text-[84px] font-medium tracking-tight text-slate-900 leading-[1.05] relative">
            Never Miss a Call
            <br />
            <span className="relative inline-block">
              <span className="invisible">Never Lose a Job</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" aria-hidden="true">
                Never Lose a Job
              </span>
            </span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-slate-700 font-medium leading-[1.6] max-w-[600px] mx-auto px-4">
            24/7 AI receptionist built for restoration. Answers every call, qualifies every lead, dispatches crews in minutes.
          </p>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <a
                href="/#calendar-section"
                className="px-10 py-4 bg-white text-slate-700 border-2 border-slate-200/80 rounded-full text-[16px] font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2.5 w-full sm:w-[280px]"
              >
                Book A Strategy Call
              </a>
              <div className="flex flex-col items-center w-full sm:w-[280px]">
                <a
                  href="https://app.restorationai.io/signup"
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-[16px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-2xl shadow-blue-900/20 flex items-center justify-center gap-2 w-full"
                >
                  Get Started for Free
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <p className="text-xs text-slate-500 mt-2 text-center">Set up in 5 minutes, no credit card required</p>
              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED LOGOS */}
        <div className="mt-12 mb-2">
          <div className="flex flex-col items-center">
            <p className="text-center text-[16px] md:text-[20px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-[-10px] z-10 relative">
              Trusted by Restoration Contractors Nationwide
            </p>
          </div>
          <LogoMarquee />
        </div>

        {/* BROWSER VIDEO */}
        <div className="relative max-w-5xl mx-auto w-full z-10 mt-4">
          <div className="hidden md:block absolute inset-x-0 inset-y-10 bg-blue-600/25 blur-[140px] rounded-[50px] pointer-events-none -z-10" />
          <BrowserVideo />
        </div>
      </div>
    </section>
  );
}
