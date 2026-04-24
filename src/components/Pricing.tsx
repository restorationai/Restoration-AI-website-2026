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
    name: "AI Leak Proof System",
    sub: "Capture Every Lead. Wake Up for Emergencies.",
    desc: "Designed for owner-operators who need to stop missing calls but prefer to manage their crews manually",
    price: "$297",
    priceSuffix: "/mo",
    micro: "$0.45/MIN CALL + $0.04/SMS SEGMENT",
    bullets: [
      "24/7 AI Receptionist (Never miss a call)",
      "Instant Lead Capture (Books directly to calendar)",
      "\"Wake Up\" Protocol (Calls you 3x for emergencies)",
      "Manual Dispatch Mode (You call your own crew)",
      "1 Transfer Line (Routes to Owner)"
    ],
    buttonText: "Sign Up Today",
    isPopular: false
  },
  {
    name: "Rapid Response System",
    sub: "Automate Your Operations. Sleep While We Dispatch.",
    desc: "The industry standard for restoration companies running ads and managing a team.",
    price: "$597",
    priceSuffix: "/mo",
    micro: "$0.20/MIN CALL + $0.02/SMS SEGMENT",
    bullets: [
      "Everything in Leak Proof System",
      "Autonomous Dispatching (AI calls your crew roster)",
      "Smart LSA Disqualifier (Saves Ad Spend)",
      "Multi-User Routing (3 Lines + 6 Team Contacts)",
      "Proprietary Dispatch Logic (Priority Ranking)",
      "50% Discount on Usage Rates"
    ],
    buttonText: "Sign Up Today",
    isPopular: true
  },
  {
    name: "Enterprise / Custom",
    sub: "Tailored Logic for Complex Organizations.",
    desc: "For companies that need specific routing rules based on structure type, territory, or complex internal workflows.",
    price: "Talk to Us",
    priceSuffix: "",
    micro: "VOLUME DISCOUNTS AVAILABLE",
    bullets: [
      "Everything in Rapid Response",
      "Custom Logic Branches (e.g., Structure-Type Routing)",
      "Dedicated Server Resources",
      "API Access & Webhooks",
      "White-Glove Onboarding",
      "Back-Office Automation (Invoicing/Estimates)"
    ],
    buttonText: "Contact Us",
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
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Pricing
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Scalable systems designed for high-volume restoration companies.
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
                      <p className="text-slate-600 text-[14px] leading-relaxed min-h-[60px]">{tier.desc}</p>
                      
                      <div className="mt-8 mb-2 flex items-baseline gap-1">
                        <span className="text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">{tier.price}</span>
                        {tier.priceSuffix && <span className="text-slate-500 font-medium">{tier.priceSuffix}</span>}
                      </div>
                      <div className="text-[10px] text-blue-600 font-bold tracking-wider uppercase">
                        {tier.micro}
                      </div>
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
                      <p className="text-slate-600 text-[14px] leading-relaxed min-h-[60px]">{tier.desc}</p>
                      
                      <div className="mt-8 mb-2 flex items-baseline gap-1">
                        <span className="text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight">{tier.price}</span>
                        {tier.priceSuffix && <span className="text-slate-500 font-medium">{tier.priceSuffix}</span>}
                      </div>
                      <div className="text-[10px] text-blue-600 font-bold tracking-wider uppercase">
                        {tier.micro}
                      </div>
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

      </div>
    </section>
  );
}
