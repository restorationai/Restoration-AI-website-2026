"use client";

import React from 'react';
import { ChevronRight, Zap, Phone, Database, Check, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function DocuSketchHomepage() {
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
                <div className="flex-1 space-y-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-2">
                        <span className="text-[13px] font-bold text-blue-600 tracking-wide uppercase">DocuSketch Integration</span>
                    </div>
                    <h1 className="text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                        Your System Stays the Same<br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Now Every Call<br />
                            Starts a DocuSketch File.</span>
                    </h1>

                    <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium">
                        Keep your DocuSketch workflow exactly the way it already runs. Restoration AI makes sure every call is answered, every job is captured, and the right information reaches your team without adding more work to your office.
                    </p>

                    <p className="text-[15px] text-slate-400 max-w-[540px] leading-[1.6] font-medium">
                        Live in minutes. No disruption to your workflow. Just more jobs captured.
                    </p>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                            Book a Strategy Call
                        </button>
                        <button className="group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                            Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Image Placeholder */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="w-full max-w-[520px] aspect-[4/3] rounded-[36px] bg-slate-100 overflow-hidden border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
                        <img
                            src="/website-photos/hero.png"
                            alt="Hero Placeholder"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 mix-blend-multiply opacity-50 -z-10"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: STATS BAR */}
            <section className="relative z-10 bg-[#061124] py-14 w-full">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">2 AM</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Peak Call Time</p>
                            <p className="text-slate-400 text-[13px] font-medium mt-1">Most emergency calls happen outside business hours</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">5 min</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Response Window</p>
                            <p className="text-slate-400 text-[13px] font-medium mt-1">Time before the homeowner calls someone else</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Zero</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Manual Entry</p>
                            <p className="text-slate-400 text-[13px] font-medium mt-1">No typing or intake work for your office</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Easy</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Setup Process</p>
                            <p className="text-slate-400 text-[13px] font-medium mt-1">Live quickly with no disruption</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative z-10 pt-24 pb-12 px-6 max-w-[800px] mx-auto text-center space-y-7">
                <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    DocuSketch Is Only as Good as the Information Going Into It
                </h2>
                <div className="space-y-8 flex flex-col items-center">
                    <p className="text-[17px] text-slate-500 leading-[1.6] font-medium max-w-3xl">
                        DocuSketch helps your team document jobs accurately, but that process depends on how the job starts. When intake is rushed or inconsistent, crews arrive without clear scope, missing details, or incomplete context, which leads to mistakes, rework, and inaccurate documentation. Restoration AI captures the right information from the start so your team walks into every job with a clear understanding of what needs to be done.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 pt-2">
                        <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                            Book a Strategy Call
                        </button>
                        <button className="group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                            Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* SECTION 4: YOUR INTAKE, FULLY AUTOMATED */}
            <section className="relative z-10 pt-8 pb-24 px-6 max-w-[800px] mx-auto text-center space-y-7">
                <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight">
                    Your Intake, Fully Automated
                </h2>
                <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
                    From the first ring to a fully structured job ready for your team, everything is handled in real time without adding extra work to your office. No typing, no callbacks, and no confusion. Just clean, consistent intake that gives your team the clarity they need to document and execute jobs correctly from the beginning.
                </p>
            </section>

                        {/* SECTION 5: TIMELINE */}
            <section className="relative z-10 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-px bg-blue-200 -translate-x-[50%] hidden md:block z-0"></div>

                    {/* Cards */}
                    <div className="flex flex-col gap-10 md:gap-14 relative z-10 w-full py-8">
                        {/* STEP 1 */}
                        <div className="bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10">
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Every Call Answered and Handled the Right Way</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">Every incoming call is answered instantly and handled with consistency. Restoration AI understands restoration job types and urgency, ensuring every caller is handled professionally and no important details are missed before the job begins.</p>
                        </div>
                        
                        {/* STEP 2 */}
                        <div className="bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10">
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Everything Captured While the Call Is Still Happening</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">While the call is happening, all critical information is captured and structured in real time. Customer details, job context, and scope are organized immediately so your team is not chasing information later or guessing once they arrive on-site.</p>
                        </div>
                        
                        {/* STEP 3 */}
                        <div className="bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10">
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Your Team Documents Jobs With Complete Clarity</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">By the time your team begins documenting the job in DocuSketch, they already have the full picture. No missing details, no confusion, and no wasted time trying to figure out what should have been captured upfront. Just clean, structured information that leads to better documentation and fewer mistakes.</p>
                        </div>
                    </div>
{/* CTA Card */}
                    <div className="flex justify-center mt-16 relative z-20">
                        <div className="bg-white p-10 lg:p-12 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] text-center space-y-6 max-w-2xl w-full">
                            <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2]">See How It Fits Into Your Workflow</h3>
                            <div className="flex flex-wrap justify-center items-center gap-5 pt-2">
                                <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                                    Book a Strategy Call
                                </button>
                                <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                                    Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                                </button>
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
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Automated Job Creation</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Every call instantly creates a new job record inside DocuSketch exactly how your team expects it.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Instant SMS Confirmations</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Homeowners receive immediate text confirmation the moment the call ends, building instant trust.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Smart Dispatch Alerts</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Your on-call technician is notified instantly with full job context and navigation links.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">24/7 Availability</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Never miss an emergency job, even at 3 AM on a holiday weekend. We're always on.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Precision Address Validation</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Job addresses are verified via Google Maps API for zero navigation errors or dispatch confusion.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Real-time Photo Logging</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Call data and job site context are attached directly to the DocuSketch file automatically.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Zero Manual Entry</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Eliminate human error and hours of tedious data entry every single week for your dispatch team.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Digital Authorization</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Automatically trigger work authorizations to get crews on site and working faster.</p>
                    </div>
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Lead Quality Filtering</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">LSA and marketing leads are qualified so your team only handles active, revenue-generating jobs.</p>
                    </div>
                </div>
            </section>

            {/* HORIZONTAL DIVIDER */}
            <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.2)] mb-16"></div>

        </div>
    );
}