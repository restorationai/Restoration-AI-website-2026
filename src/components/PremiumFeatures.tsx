import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PremiumFeatures() {
  return (
    <section id="features" className="relative py-12 lg:py-16 font-sans min-h-[auto] xl:min-h-0 flex items-center">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1500px] relative z-10 w-full">
        
        {/* TOP ROW: Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mb-10 lg:mb-12">
          
          {/* Left Column */}
          <div className="flex-1 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              POWERFUL FEATURES
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              The Features That Set <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Restoration AI</span> Apart
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full lg:max-w-md xl:max-w-lg lg:pb-2">
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-medium mb-5">
              Book a call to see how this fits into your business or sign up today completely free
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

        {/* BOTTOM ROW: 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          
          {/* Card 1 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors">
                <div className="h-7 border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-2 flex-1 justify-center relative">
                   <div className="h-6 mx-auto w-3/4 max-w-[160px] bg-red-50 rounded-md border border-red-100 border-dashed flex items-center justify-center group-hover:bg-red-100/80 transition-colors">
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest">Disconnected</span>
                  </div>
                </div>
                <div className="absolute top-9 left-1/2 -translate-x-1/2 w-[1px] h-full bg-blue-100 -z-10 group-hover:bg-blue-300 transition-colors"></div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">LSA Rapid Disqualification</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Stop wasting thousands on bad LSA leads that were never going to turn into jobs. Your AI hangs up before you get charged, then calls them back.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors">
                <div className="h-7 border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1 justify-center items-center relative">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 group-hover:scale-110 transition-transform mb-2">
                    <span className="text-blue-600 font-bold text-[10px]">Doc</span>
                  </div>
                  <div className="h-2 w-20 bg-slate-200 rounded-md"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">Instant Work Authorization</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Secure the job before you even arrive by sending a digital work authorization during the call. Homeowners can sign digitally right away.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col pt-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Graphic Placeholder */}
              <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors">
                 <div className="absolute inset-x-0 bottom-0 h-16 opacity-30 pointer-events-none flex items-end px-3">
                  <div className="flex-1 flex items-end justify-between border-b border-slate-300 pb-2 h-full gap-2 relative">
                     <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full -mb-2 z-10 text-blue-500 group-hover:text-blue-600 transition-colors">
                        <path d="M0 40 L20 30 L40 35 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
                <div className="h-7 border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50 relative z-20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-1.5 flex-1 justify-center relative z-20">
                  <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100 shadow-sm">
                    <div className="h-2 w-12 bg-slate-200 rounded"></div>
                    <div className="h-2 w-6 bg-green-200 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100 shadow-sm transition-transform group-hover:translate-x-1">
                    <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    <div className="h-2 w-6 bg-blue-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">Automated Dispatch System</h3>
                <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                  Dispatch jobs instantly based on your exact team setup and priorities. We set everything up to match your workflow so nothing changes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - New */}
          <div className="group flex flex-col pt-1">
             <div className="bg-white/80 backdrop-blur-sm rounded-[24px] p-5 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:border-blue-200 flex-1 flex flex-col h-full relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

               {/* Graphic Placeholder */}
               <div className="w-full h-[140px] bg-slate-50 rounded-xl border border-slate-100 mb-5 flex flex-col overflow-hidden relative group-hover:border-blue-100 transition-colors items-center justify-center relative">
                  <div className="h-7 absolute top-0 w-full border-b border-slate-100 flex items-center px-3 shrink-0 bg-slate-100/50 z-20">
                     <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div><div className="w-2 h-2 rounded-full bg-slate-300"></div>
                     </div>
                  </div>
                  {/* Map Pin Mockup */}
                  <div className="relative mt-4">
                     <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center relative z-20 group-hover:bg-blue-600 transition-colors">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                     </div>
                     <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 blur-[2px] rounded-[100%]"></div>
                     {/* Routing dashed line */}
                     <svg className="absolute top-1/2 left-full w-12 h-8 pointer-events-none" viewBox="0 0 50 30" fill="none">
                        <path d="M0 0 Q 25 -10, 50 20" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="group-hover:stroke-blue-500 transition-colors" />
                     </svg>
                  </div>
               </div>

               {/* Text Content */}
               <div className="relative z-10 flex-1 flex flex-col">
                 <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">Smart Technician Routing</h3>
                 <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                   Send the closest technician every time without guessing or manual coordination. Your AI tracks where your team is so no one is driving across county.
                 </p>
               </div>
             </div>
          </div>

          {/* Card 5 - New */}
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
                  {/* Image/Photo Mockup */}
                  <div className="relative mt-4 flex items-center justify-center gap-3">
                     <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform z-20">
                        {/* Mountain/Sun mock icon */}
                        <div className="w-6 h-6 border-2 border-blue-400 rounded-md relative overflow-hidden">
                           <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                           <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rotate-45"></div>
                           <div className="absolute -bottom-2 -right-1 w-4 h-4 bg-blue-500 rotate-45"></div>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1.5">
                        <div className="h-2 w-14 bg-slate-200 rounded"></div>
                        <div className="h-1.5 w-10 bg-slate-200 rounded"></div>
                     </div>
                  </div>
               </div>

               {/* Text Content */}
               <div className="relative z-10 flex-1 flex flex-col">
                 <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">Real Time Photo Logging</h3>
                 <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                   Get real job site context before you even arrive by sending homeowners a simple link during the call to upload photos instantly. Your team can see the damage, prepare properly, and walk into every job already knowing exactly what to expect.
                 </p>
               </div>
             </div>
          </div>

          {/* Card 6 - New */}
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
                  {/* Waveform/AI Intelligence Mockup */}
                  <div className="relative mt-4 flex flex-col items-center justify-center gap-2">
                     <div className="flex items-end justify-center gap-1 h-8 group-hover:scale-110 transition-transform">
                        <div className="w-1.5 h-3 bg-blue-300 rounded-full"></div>
                        <div className="w-1.5 h-6 bg-blue-400 rounded-full"></div>
                        <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                        <div className="w-1.5 h-5 bg-blue-400 rounded-full"></div>
                        <div className="w-1.5 h-2 bg-blue-300 rounded-full"></div>
                     </div>
                     <div className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[8px] font-bold uppercase rounded-full tracking-wider mt-1 border border-blue-200">
                        Analyzing Tone
                     </div>
                  </div>
               </div>

               {/* Text Content */}
               <div className="relative z-10 flex-1 flex flex-col">
                 <h3 className="text-[17px] font-extrabold text-slate-900 mb-2 leading-tight flex items-center whitespace-nowrap">Emergency Call Intelligence</h3>
                 <p className="text-slate-500 leading-[1.6] font-medium text-[13px]">
                   Handle high stress calls the right way with an AI trained on real emergency scenarios and thousands of past interactions. It can recognize panic, respond calmly, and adjust its tone based on the situation so every caller feels understood and taken care of.
                 </p>
               </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
