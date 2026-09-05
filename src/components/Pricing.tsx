"use client";

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  "Custom 250 Page Website",
  "Google Business Profile Management",
  "Review Generation on Autopilot",
  "2 Blog Posts Every Week",
  "YouTube Videos & Local Content",
  "Google Ads & LSA Management",
  "24/7 AI Receptionist Included",
  "Street by Street Rank Tracking"
];

export default function Pricing() {
  return (
    <section className="pt-6 pb-4 relative scroll-mt-24" id="pricing">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Simple Pricing.
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Pays for Itself with One Job.
          </p>
        </div>

        {/* Single horizontal plan card */}
        <div className="relative p-[3px] bg-gradient-to-r from-blue-500 to-blue-800 rounded-[32px] shadow-[0_0_50px_rgba(37,99,235,0.15)]">
          <div className="bg-white rounded-[29px] p-7 md:p-9 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">

            {/* Left: name, price, CTA */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[320px] shrink-0">
              <h3 className="text-3xl font-bold text-slate-900 font-outfit mb-1">Rank AI</h3>
              <p className="text-blue-600 font-semibold mb-5 leading-snug">Your entire Google presence, done for you.</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">$1,297</span>
                <span className="text-slate-500 font-medium">/month</span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium mb-6">No long term contracts. Cancel anytime.</p>
              <a
                href="/#calendar-section"
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-[15px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Book A Strategy Call
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px self-stretch bg-slate-200" />
            <div className="lg:hidden h-px w-full bg-slate-200" />

            {/* Right: feature bullets */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 w-full">
              {features.map(f => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Check size={13} strokeWidth={3.5} />
                  </span>
                  <span className="text-[14.5px] font-semibold text-slate-700 leading-snug">{f}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
