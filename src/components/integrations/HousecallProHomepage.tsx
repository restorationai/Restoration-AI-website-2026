import React, { useState } from 'react';
import { ChevronRight, Zap, Phone, Database, CheckCircle2, ArrowDown, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Does this integrate with Housecall Pro?",
    answer: "Restoration AI works alongside your workflow so you get better call handling without changing your system."
  },
  {
    question: "Why do I need this if I already use Housecall Pro?",
    answer: "Housecall Pro manages jobs, but it doesn’t control how calls are handled. This fixes the intake side."
  },
  {
    question: "Can it handle emergency calls?",
    answer: "Yes, it’s built specifically for restoration calls and high-stress situations."
  },
  {
    question: "Will my team need to learn something new?",
    answer: "No, your team keeps using Housecall Pro like normal."
  },
  {
    question: "Can it follow our script?",
    answer: "Yes, it follows your exact preferred script and call flow."
  },
  {
    question: "What makes this better than an answering service?",
    answer: "It captures better details, handles calls correctly, and keeps your workflow clean."
  }
];

export default function HousecallProHomepage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="relative min-h-screen bg-white font-sans overflow-hidden">

            {/* Background grid */}
            <div
                className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 90%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 90%)'
                }}
            />

            {/* SECTION 1: HERO */}
            <section className="relative z-10 pt-36 pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                {/* Left Text */}
                <div className="flex-1 space-y-6 md:space-y-7">
                    <div className="inline-flex flex-row items-center gap-2 px-4 py-1.5 border border-slate-200 bg-white rounded-full font-bold text-[13px] tracking-wide text-slate-700 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                        Housecall Pro Integration
                    </div>

                    <h1 className="text-5xl md:text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                        Your Housecall Pro Workflow<br />
                        Stays the Same.<br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Now Every Call<br />
                            Gets Answered.</span>
                    </h1>

                    <div className="space-y-4">
                        <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium">
                            Restoration AI works alongside Housecall Pro so your team can answer every call, capture better job details, and move faster without changing your system.
                        </p>
                        <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium pb-2">
                            Built for restoration companies that want faster intake, cleaner job information, and zero missed opportunities.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                            Book a Strategy Call
                        </button>
                        <button className="group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                            Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Logo */}
                <div className="flex-1 w-full flex justify-center lg:justify-end lg:self-start lg:mt-12">
                    <img
                        src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507ed38381eafa8930119.png"
                        alt="Housecall Pro Logo"
                        className="w-full max-w-[360px] lg:max-w-[460px] h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </section>

            {/* SECTION 2: DARK BANNER STATS */}
            <section className="relative z-10 bg-[#061124] py-14 w-full">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3b82f6] text-[32px] font-bold leading-tight">2 AM</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Peak Call Time</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Most emergency calls happen outside business hours</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3b82f6] text-[32px] font-bold leading-tight">5 min</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Response Window</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Time before the homeowner calls someone else</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3b82f6] text-[32px] font-bold leading-tight">Zero</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Manual Entry</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">No typing or intake work for your office</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3b82f6] text-[32px] font-bold leading-tight">Easy</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Setup Process</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Live quickly with no disruption</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PAIN SECTION */}
            <section className="relative z-10 py-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                <div className="flex-1 space-y-7 lg:max-w-[540px]">
                    <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                        Housecall Pro Is Only as Good as the Information Going Into It
                    </h2>
                    <div className="space-y-6">
                        <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
                            Housecall Pro helps manage your jobs, but it still depends on how calls are handled. If calls are rushed, inconsistent, or handled the wrong way, your team starts every job with bad information. Restoration AI fixes that by making sure every call is handled properly before it ever reaches your workflow.
                        </p>
                        <div className="flex flex-wrap items-center gap-5 pt-2">
                            <button className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold text-[16px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                                Book a Strategy Call
                            </button>
                            <button className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[16px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                                Start for Free <ChevronRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="w-full max-w-[440px] aspect-square rounded-[44px] border border-blue-400/30 bg-white/60 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center relative p-8">
                        <div className="w-[52px] h-[52px] bg-blue-50 rounded-[18px] flex items-center justify-center mb-5">
                            <Database size={24} className="text-blue-400 stroke-[2.5]" />
                        </div>
                        <h4 className="text-[11px] font-bold tracking-[0.15em] text-blue-400 uppercase">
                            VISUAL COMING SOON
                        </h4>
                        <p className="text-[13px] text-slate-400 mt-2.5 text-center max-w-[200px] font-medium leading-[1.6]">
                            Premium visual animation being prepared here.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: YOUR INTAKE, FULLY AUTOMATED */}
            <section className="relative z-10 pt-16 pb-24 px-6 max-w-[800px] mx-auto text-center space-y-7">
                <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight">
                    Your Intake, Fully Automated
                </h2>
                <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
                    Restoration AI answers calls instantly, handles restoration conversations correctly, captures key job details, and keeps everything moving. Your team gets clean, structured information instead of messy notes or missed details.
                </p>
            </section>

            {/* SECTION 5: TIMELINE */}
            <section className="relative z-10 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="relative">
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-blue-200 -translate-x-[50%] hidden md:block z-0"></div>

                    {/* STEP 1 */}
                    <div className="flex flex-col md:flex-row items-stretch justify-between relative mb-24 z-10 gap-8 md:gap-0">
                        <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex">
                            <Phone size={28} className="text-blue-400" />
                        </div>
                        <div className="w-full md:w-[48%] md:pr-5">
                            <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Call Answered Instantly</h3>
                                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">Every call is picked up right away and handled the correct way from the start.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] md:pl-5">
                            <div className="w-full h-full min-h-[300px] rounded-[32px] border border-blue-400/30 bg-blue-50/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                <img src="/website-photos/step1.png" alt="Step 1" className="w-full h-full object-cover absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-300" onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')} />
                                <div className="relative z-10 flex flex-col items-center mix-blend-overlay opacity-50">
                                    <Zap size={24} className="text-blue-400 mb-4 stroke-[2]" />
                                    <h4 className="text-[11px] font-bold tracking-[0.15em] text-blue-400 uppercase">VISUAL MOCKUP</h4>
                                    <p className="text-[12px] text-slate-400 mt-2 font-medium">Step 1 integration visual coming soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="flex flex-col md:flex-row items-stretch justify-between relative mb-24 z-10 gap-8 md:gap-0">
                        <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex">
                            <Database size={28} className="text-blue-400" />
                        </div>
                        <div className="w-full md:w-[48%] md:pr-5 order-last md:order-first">
                            <div className="w-full h-full min-h-[300px] rounded-[32px] border border-blue-400/30 bg-blue-50/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                <img src="/website-photos/step2.png" alt="Step 2" className="w-full h-full object-cover absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-300" onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')} />
                                <div className="relative z-10 flex flex-col items-center mix-blend-overlay opacity-50">
                                    <Zap size={24} className="text-blue-400 mb-4 stroke-[2]" />
                                    <h4 className="text-[11px] font-bold tracking-[0.15em] text-blue-400 uppercase">VISUAL MOCKUP</h4>
                                    <p className="text-[12px] text-slate-400 mt-2 font-medium">Step 2 integration visual coming soon.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] md:pl-5">
                            <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Job Details Captured Clearly</h3>
                                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">All important information is collected cleanly so your team doesn’t have to guess later.</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="flex flex-col md:flex-row items-stretch justify-between relative z-10 gap-8 md:gap-0">
                        <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex text-white">
                            <CheckCircle2 size={30} strokeWidth={2.5} />
                        </div>
                        <div className="w-full md:w-[48%] md:pr-5">
                            <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Your Team Moves Faster</h3>
                                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">Your team gets what they need immediately so they can respond faster and win more jobs.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] md:pl-5">
                            <div className="w-full h-full min-h-[300px] rounded-[32px] border border-blue-400/30 bg-blue-50/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                <img src="/website-photos/step3.png" alt="Step 3" className="w-full h-full object-cover absolute inset-0 rounded-[32px] opacity-0 transition-opacity duration-300" onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')} />
                                <div className="relative z-10 flex flex-col items-center mix-blend-overlay opacity-50">
                                    <Zap size={24} className="text-blue-400 mb-4 stroke-[2]" />
                                    <h4 className="text-[11px] font-bold tracking-[0.15em] text-blue-400 uppercase">VISUAL MOCKUP</h4>
                                    <p className="text-[12px] text-slate-400 mt-2 font-medium">Step 3 integration visual coming soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: POWERFUL FEATURES ARROWS */}
            <section className="relative z-10 max-w-5xl mx-auto flex justify-center items-center gap-10 lg:gap-16 pt-8 pb-10">
                <ArrowDown size={36} className="text-slate-400/80 stroke-[1.5]" />
                <h2 className="text-[38px] lg:text-[44px] font-extrabold text-[#111827] tracking-tight">Powerful Features</h2>
                <ArrowDown size={36} className="text-slate-400/80 stroke-[1.5]" />
            </section>

            {/* SECTION 7: FEATURES GRID */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

                    {/* Feature 1 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Built for Restoration Calls</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Handles water, fire, and mold calls correctly</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Cleaner Job Intake</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Captures real job details the first time</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Works Alongside Housecall Pro</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Improves intake without changing your system</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Faster Team Handoffs</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Your team gets info instantly</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Better Lead Qualification</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Focus on real jobs, not wasted calls</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#1C5BFF] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Consistent Every Time</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Same process on every call</p>
                    </div>

                </div>
            </section>

            {/* HORIZONTAL DIVIDER */}
            <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            {/* SECTION 8: FAQ */}
            <section className="py-24 bg-white relative">
              <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
                  <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                     const isOpen = openIndex === idx;
                     return (
                      <div
                        key={idx}
                        className={`border rounded-3xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'bg-slate-50 border-slate-300 shadow-md transform scale-[1.01]' : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between px-6 md:px-7 h-[90px] md:h-[100px] text-left focus:outline-none"
                        >
                          <span className="text-[18px] md:text-[20px] font-bold text-slate-900 tracking-tight leading-snug pr-8 line-clamp-2">{faq.question}</span>
                          <ChevronDown
                            size={24}
                            className={`text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'rotate-0'}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0 text-slate-600 text-[16px] md:text-[18px] leading-relaxed font-medium">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                     )
                  })}
                </div>
              </div>
            </section>

            {/* HORIZONTAL DIVIDER */}
            <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            {/* SECTION 9: BOTTOM CTA */}
            <section className="py-32 bg-white relative overflow-hidden text-center">
              <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                  Stop Letting Bad Intake <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Slow Down Your Workflow</span>
                </h2>
                <p className="text-[18px] text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-[1.6]">
                   If you use Housecall Pro, you don’t need a new system. You need every call handled the right way.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                  <button className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] hover:bg-slate-50 transition-all transform hover:scale-[1.02]">
                    Book a Strategy Call
                  </button>
                  <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-[18px] hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(28,91,255,0.4)]">
                    Start for Free
                    <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>

        </div>
    );
}
