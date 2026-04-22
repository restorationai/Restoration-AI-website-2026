"use client";

import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function UsVsThem() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-outfit">
            Speed to lead isn't a theory. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">It's your revenue.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* THE HUMAN WAY */}
          <div className="bg-blue-700/10 border border-slate-200 rounded-3xl p-8 opacity-70 hover:opacity-90 transition-opacity">
            <h3 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
              The Human Way
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                  <X className="text-red-500" size={14} />
                </div>
                <div>
                   <p className="text-slate-700 font-semibold mb-1">Voicemail at 2 AM</p>
                   <p className="text-slate-500 text-sm">Customer hangs up and calls the next guy on Google Search.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                  <X className="text-red-500" size={14} />
                </div>
                <div>
                   <p className="text-slate-700 font-semibold mb-1">Human Answering Service</p>
                   <p className="text-slate-500 text-sm">Takes a message, forgets to dispatch, or gets the details wrong.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                  <X className="text-red-500" size={14} />
                </div>
                <div>
                   <p className="text-slate-700 font-semibold mb-1">15-Minute Response Time</p>
                   <p className="text-slate-500 text-sm">In restoration, 15 minutes is the difference between a job and a "thanks for calling back, we're already taken care of."</p>
                </div>
              </li>
            </ul>
          </div>

          {/* THE RESTORATION AI WAY */}
          <div className="bg-white border border-blue-700/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(14,165,233,0.08)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recommended</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              Restoration AI
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                  <Check className="text-emerald-600" size={14} />
                </div>
                <div>
                   <p className="text-slate-900 font-semibold mb-1">Instant 24/7 Answer</p>
                   <p className="text-slate-500 text-sm">Every call is answered on the first ring by a native-speaking AI.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                  <Check className="text-emerald-600" size={14} />
                </div>
                <div>
                   <p className="text-slate-900 font-semibold mb-1">Autonomous Dispatch</p>
                   <p className="text-slate-500 text-sm">The AI qualifies, intakes info, and triggers your team dispatch in under 60 seconds.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                  <Check className="text-emerald-600" size={14} />
                </div>
                <div>
                   <p className="text-slate-900 font-semibold mb-1">Closed-Loop Integration</p>
                   <p className="text-slate-500 text-sm">Syncs directly with JobNimbus/Albiware and sends a confirmation text to the customer.</p>
                </div>
              </li>
            </ul>

            <div className="mt-12">
               <a href="/signup" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all group-hover:gap-4">
                 Switch to Restoration AI <ArrowRight size={20} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
