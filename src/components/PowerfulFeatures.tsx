"use client";

import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export default function PowerfulFeatures() {
  return (
    <div className="bg-slate-50 py-8 border-t border-slate-100">
      {/* SECTION 6: POWERFUL FEATURES ARROWS */}
      <section className="relative z-10 max-w-5xl mx-auto flex justify-center items-center gap-10 lg:gap-16 pt-8 pb-10">
        <ArrowDown size={36} className="text-slate-400/80 stroke-[1.5] hidden sm:block" />
        <h2 className="text-[38px] lg:text-[44px] font-extrabold text-slate-900 tracking-tight text-center">More Features</h2>
        <ArrowDown size={36} className="text-slate-400/80 stroke-[1.5] hidden sm:block" />
      </section>

      {/* SECTION 7: FEATURES GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {/* Card 1 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Automated Job Creation</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Every call instantly creates a new job record exactly how your team expects it.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Instant SMS Confirmations</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Homeowners receive immediate text confirmation the moment the call ends, building instant trust.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Smart Dispatch Alerts</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Your on-call technician is notified instantly with full job context and navigation links.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">24/7 Availability</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Never miss an emergency job, even at 3 AM on a holiday weekend. We're always on.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Precision Validation</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Job addresses are verified via Google Maps API for zero navigation errors or dispatch confusion.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Real-time Photo Logging</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Call data and job site context are attached directly to the file automatically.</p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Zero Manual Entry</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Eliminate human error and hours of tedious data entry every single week for your dispatch team.</p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Digital Authorization</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Automatically trigger work authorizations to get crews on site and working faster.</p>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Lead Quality Filtering</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">LSA and marketing leads are qualified so your team only handles active, revenue-generating jobs.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
