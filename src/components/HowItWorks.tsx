"use client";

import React from 'react';
import { ArrowRight, Phone, Settings2, ShieldCheck, DollarSign, Calendar } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-12 lg:py-16 font-sans min-h-[auto] xl:min-h-0 flex items-center">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1500px] relative z-10 w-full">
        
        {/* TOP ROW: Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mb-10 lg:mb-12">
          
          {/* Left Column */}
          <div className="flex-1 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              HOW TO GET STARTED
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              From Setup to Booked Jobs <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">in 5 Minutes</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full lg:max-w-md xl:max-w-lg lg:pb-2">
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-medium mb-5">
              No complex coding or training periods. You're a few clicks away from a watertight business. Book a call or start free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="#demo" 
                className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl text-[14px] font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow"
              >
                Book a Strategy Call
              </a>
              <a 
                href="/signup" 
                className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl text-[14px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Start for Free
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6">
          
          {/* Card 1 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors items-center justify-center">
                <div className="h-7 absolute top-0 w-full border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50 z-20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center relative mt-4 group-hover:bg-blue-50 transition-colors">
                   <Phone size={24} className="text-blue-600" />
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex gap-2 mt-3 w-1/2">
                   <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
                   <div className="h-2 w-1/3 bg-blue-200 rounded-full"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-auto relative z-10 flex flex-col items-start">
                <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-[11px] font-bold mb-3">1</div>
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight">Book a Call or<br/>Sign Up Free Today</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Book a quick call to see exactly how it works, ask questions, and test the AI agent live. Or sign up free and jump straight in to see it real time.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors items-center justify-center">
                <div className="h-7 absolute top-0 w-full border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50 z-20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="w-48 h-10 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center px-3 mt-4 gap-3 relative group-hover:border-blue-200 transition-colors">
                   <Settings2 size={16} className="text-blue-500" />
                   <div className="flex-1 flex flex-col gap-1.5">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full relative">
                         <div className="absolute inset-y-0 left-0 w-3/4 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="h-1 w-1/2 bg-slate-200 rounded-full"></div>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-auto relative z-10 flex flex-col items-start">
               <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-[11px] font-bold mb-3">2</div>
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight">We Set Everything Up<br/>for You in Minutes</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Your dedicated rep walks you through a 5-minute onboarding and handles the setup. Your integrations are dialed in fast to run exactly how you operate.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors justify-end">
                <div className="h-7 absolute top-0 w-full border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50 z-20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 opacity-30 pointer-events-none flex items-end px-3 z-10">
                  <div className="flex-1 flex items-end justify-between border-b border-slate-300 pb-0 h-full gap-2 relative">
                     <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 w-[120%] -ml-[10%] h-full text-green-500 group-hover:text-green-600 transition-colors">
                        <path d="M0 40 L20 25 L40 35 L60 10 L80 15 L100 0 V40 H0 Z" fill="currentColor" fillOpacity="0.2"/>
                        <path d="M0 40 L20 25 L40 35 L60 10 L80 15 L100 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
                <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-full border border-green-200 shadow-[0_0_15px_rgba(74,222,128,0.2)] flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform">
                  <DollarSign size={28} className="text-green-500" />
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-auto relative z-10 flex flex-col items-start">
               <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center text-[11px] font-bold mb-3">3</div>
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight">Turn Every Incoming Call<br/>into Real Revenue</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Go live and start capturing every high-value call that would've slipped through. Your AI answers, qualifies, and books jobs 24/7 like an expert.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
