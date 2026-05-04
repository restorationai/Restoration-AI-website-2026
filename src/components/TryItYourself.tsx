"use client";

import React from 'react';
import { VoiceWidget } from './VoiceWidget';

const WEBHOOK_URL = '';
const EXTERNAL_ID = 'hero_demo_session';

export default function TryItYourself() {
  return (
    <section className="relative bg-transparent font-sans pb-20">

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Card — same frosted style as CallRecordings outer container */}
        <div className="relative p-8 md:p-10 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 overflow-hidden">

          {/* Background accents */}
          <div className="absolute inset-x-10 inset-y-10 bg-blue-600/5 blur-[140px] rounded-[50px] pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-sky-50/30 rounded-[40px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

            {/* Left: headline + bullets */}
            <div className="lg:w-[40%] shrink-0">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-slate-600 text-[10px] font-black tracking-widest uppercase">Live Demo — Real AI</span>
              </div>

              <h2 className="text-[26px] md:text-[32px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-3">
                Still not sure?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Hear it live.
                </span>
              </h2>

              <p className="text-slate-500 text-[14px] leading-relaxed font-medium mb-6 max-w-xs">
                Speak directly with the same AI your customers will call — 24 hours a day, every day.
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  'Answers in under 2 seconds',
                  'Asks real restoration intake questions',
                  'Dispatches your crew instantly',
                ].map(line => (
                  <div key={line} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-[13px] font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:flex-1">
              <VoiceWidget
                externalId={EXTERNAL_ID}
                webhookUrl={WEBHOOK_URL}
                buttonLabel="Start Live Call"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
