"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px] text-blue-600">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M8.5 12.5l2.5 2.5 5-5.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pricingTiers = [
  {
    name: "Leakproof",
    sub: "Start answering every call.",
    desc: "Best for: Companies that want every call answered and every lead captured.",
    price: "$297",
    priceSuffix: "/mo",
    micro: "$0.45/min · $0.04/SMS",
    bullets: [
      "AI receptionist — 24/7 call answering",
      "Lead qualification",
      "Call logs and transcripts",
      "Dashboard and analytics"
    ],
    buttonText: "Book a Demo",
    isPopular: false
  },
  {
    name: "Rapid Response",
    sub: "Answer, qualify, dispatch, and book — automatically.",
    desc: "Best for: Companies ready to automate their entire front office.",
    price: "$597",
    priceSuffix: "/mo",
    micro: "$0.20/min · $0.02/SMS",
    bullets: [
      "Everything in Leakproof, plus:",
      "Rapid Disqualification (recover wasted ad spend)",
      "Smart Route Booking",
      "Dispatch system",
      "Work authorizations",
      "Visual intake",
      "Team management"
    ],
    buttonText: "Book a Demo",
    isPopular: true
  },
  {
    name: "Enterprise / Multi-Location",
    sub: "Custom solutions for large operations.",
    desc: "",
    price: "Talk to Us",
    priceSuffix: "",
    micro: "",
    bullets: [
      "Everything in Rapid Response, plus:",
      "Multi-location support",
      "Custom integrations",
      "Dedicated onboarding",
      "Volume pricing"
    ],
    buttonText: "Contact Sales",
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section className="pt-24 pb-0 relative" id="pricing">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Pricing
          </span>
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Simple Pricing.
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Pays for Itself with One Job.
          </p>
        </div>

        {/* 3-Column Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className="flex h-full">
              {tier.isPopular ? (
                <div className="relative p-[3px] bg-gradient-to-b from-blue-500 to-blue-800 rounded-[32px] shadow-[0_0_50px_rgba(37,99,235,0.15)] flex flex-col h-full w-full">
                  {/* POPULAR BADGE */}
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg z-20">
                    Popular
                  </div>
                  
                  <div className="bg-white rounded-[29px] p-8 flex-1 flex flex-col h-full">
                    {/* Header Region */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 font-outfit mb-2">{tier.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3 leading-snug">{tier.sub}</p>
                      {tier.desc && <p className="text-slate-600 text-[14px] leading-relaxed min-h-[40px]">{tier.desc}</p>}
                      
                      <div className="mt-8 mb-2 flex items-baseline gap-1">
                        <span className="text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">{tier.price}</span>
                        {tier.priceSuffix && <span className="text-slate-500 font-medium">{tier.priceSuffix}</span>}
                      </div>
                      {tier.micro && (
                        <div className="text-[10px] text-blue-600 font-bold tracking-wider uppercase">
                          {tier.micro}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 w-full mb-6" />

                    {/* Features List */}
                    <ul className="flex-1 space-y-4 mb-8">
                      {tier.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle />
                          <span className="text-slate-700 font-medium text-[15px] leading-snug">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button className="w-full py-4 rounded-2xl font-bold text-[16px] transition-all bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md hover:shadow-lg hover:to-blue-900">
                      {tier.buttonText}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative p-[2px] bg-slate-200 rounded-[32px] shadow-sm flex flex-col h-full w-full">
                  <div className="bg-white rounded-[30px] p-8 flex-1 flex flex-col h-full">
                    {/* Header Region */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 font-outfit mb-2">{tier.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3 leading-snug">{tier.sub}</p>
                      {tier.desc && <p className="text-slate-600 text-[14px] leading-relaxed min-h-[40px]">{tier.desc}</p>}
                      
                      <div className="mt-8 mb-2 flex items-baseline gap-1">
                        <span className="text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">{tier.price}</span>
                        {tier.priceSuffix && <span className="text-slate-500 font-medium">{tier.priceSuffix}</span>}
                      </div>
                      {tier.micro && (
                        <div className="text-[10px] text-blue-600 font-bold tracking-wider uppercase">
                          {tier.micro}
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 w-full mb-6" />

                    {/* Features List */}
                    <ul className="flex-1 space-y-4 mb-8">
                      {tier.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle />
                          <span className="text-slate-700 font-medium text-[15px] leading-snug">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Button */}
                    <button className="w-full py-4 rounded-2xl font-bold text-[16px] transition-all bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md">
                      {tier.buttonText}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 font-medium text-[15px]">
          No contracts. No setup fees. Live in 48 hours. Cancel anytime.
        </div>

      </div>
    </section>
  );
}
