import React, { useState } from 'react';
import { ChevronRight, Zap, Phone, Database, CheckCircle2, ArrowDown, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Does Restoration AI integrate directly with Jobber?",
    answer: "Restoration AI is designed to work alongside your existing Jobber workflow so your team can improve how calls are handled without changing the way the business already runs. The goal is to make sure every lead is answered properly, every key detail is captured, and your team gets cleaner information to work with from the start."
  },
  {
    question: "Why would I need this if I already use Jobber?",
    answer: "Jobber helps manage work once it is in your system, but it does not solve what happens during the call itself. If calls are mishandled, rushed, or inconsistent, bad information enters the workflow and slows everything down. Restoration AI improves the intake side so your Jobber process starts with stronger information and better job flow."
  },
  {
    question: "Can this handle emergency restoration calls correctly?",
    answer: "Yes. Restoration AI is built specifically for restoration conversations, including urgent water, fire, and mold situations. It is designed to handle stressed callers, ask the right questions, and keep the conversation moving in a way that fits real-world restoration scenarios."
  },
  {
    question: "Will my team have to learn a new system?",
    answer: "No. The point is not to replace the system your team already knows. Restoration AI is there to improve the front end of the process by handling calls better and collecting cleaner information, while your team keeps using the workflow they are already comfortable with."
  },
  {
    question: "Can it follow the way we want calls handled?",
    answer: "Yes. One of the biggest advantages is consistency. Restoration AI can be aligned to your preferred script, your preferred call flow, and the specific details your company wants captured, so the experience feels more like your business and less like a generic answering solution."
  },
  {
    question: "What makes this better than a normal answering service for Jobber users?",
    answer: "A normal answering service usually takes messages and passes them along. Restoration AI is built to handle restoration-specific calls with more accuracy, more consistency, and more control. That means better conversations, better job details, and faster handoff to your team instead of a loose message that creates more work later."
  }
];

export default function JobberHomepage() {
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
                        Jobber Integration
                    </div>

                    <h1 className="text-5xl md:text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                        Your Jobber Workflow<br />
                        Stays the Same.<br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Now Every Call<br />
                            Gets Answered.</span>
                    </h1>

                    <div className="space-y-4">
                        <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium">
                            Restoration AI works alongside Jobber so your team can answer every call, capture better job details, and move faster without changing the way your business already runs. 
                        </p>
                        <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium pb-2">
                            Built for restoration companies that want faster intake, cleaner job information, and fewer missed opportunities.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                            Book a Strategy Call
                        </button>
                        <a href="https://app.restorationai.io/signup" className="group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                            Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Right Logo */}
                <div className="flex-1 w-full flex justify-center lg:justify-end lg:self-start lg:mt-12">
                    <img
                        src="https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507f238381eafa8930222.webp"
                        alt="Jobber Logo"
                        className="w-full max-w-[360px] lg:max-w-[460px] h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </section>

            {/* SECTION 2: DARK BANNER STATS */}
            <section className="relative z-10 bg-[#061124] py-14 w-full">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">2 AM</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Peak Call Time</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Most emergency calls happen outside business hours</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">5 min</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Response Window</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Time before the homeowner calls someone else</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Zero</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Manual Entry</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">No typing or intake work for your office</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-1">
                            <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Easy</h3>
                            <p className="text-white font-bold text-[16px] tracking-wide mt-1">Setup Process</p>
                            <p className="text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]">Live quickly with no disruption</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* PAIN SECTION */}
            <section className="relative z-10 pt-24 pb-12 px-6 max-w-[800px] mx-auto text-center space-y-7">
                <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                    Jobber Is Only as Good as the Information Going Into It
                </h2>
                <div className="space-y-8 flex flex-col items-center">
                    <p className="text-[17px] text-slate-500 leading-[1.6] font-medium max-w-3xl">
                        Jobber helps your team stay organized, but the workflow still depends on what happens when the phone rings. If calls are handled poorly, key details get missed, urgency gets lost, and your team starts the job with bad information. Restoration AI makes sure every call is answered the right way, so the right information gets captured before it ever reaches your workflow.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 pt-2">
                        <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform">
                            Book a Strategy Call
                        </button>
                        <a href="https://app.restorationai.io/signup" className="group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center">
                            Start for Free <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 4: YOUR INTAKE, FULLY AUTOMATED */}
            <section className="relative z-10 pt-8 pb-24 px-6 max-w-[800px] mx-auto text-center space-y-7">
                <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight">
                    Your Intake, Fully Automated
                </h2>
                <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
                    Restoration AI answers inbound calls instantly, handles restoration conversations the right way, captures the details your team actually needs, and helps move the job forward fast. Instead of relying on rushed notes, missed details, or inconsistent phone handling, your team gets a cleaner intake process from the very first call.
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
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Call Answered Instantly</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">The moment a lead calls in, Restoration AI answers right away and starts the conversation correctly. It handles emergency situations with the right tone, asks the right questions, and keeps the call moving without delay.</p>
                        </div>
                        
                        {/* STEP 2 */}
                        <div className="bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10">
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Job Details Captured Clearly</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">Customer details, property information, job type, urgency, and other key notes are gathered in a clean, consistent way. That means your team gets better information from the start instead of trying to piece things together later.</p>
                        </div>
                        
                        {/* STEP 3 */}
                        <div className="bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10">
                            <h3 className="text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4">Your Team Moves Faster</h3>
                            <p className="text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium">Once the call is complete, the right information is ready for your workflow so your team can respond faster, book smarter, and stay organized inside the system they already use. No messy handoff, no wasted time, and no missed momentum.</p>
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
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Built for Restoration Calls</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Handles water, fire, and mold calls the right way instead of using a generic script.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Cleaner Job Intake</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Captures the information your team actually needs before the job ever gets moving.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Works Alongside Jobber</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Fits into your existing workflow so you can improve intake without changing your whole system.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Faster Team Handoffs</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Gets the right job details in front of your team faster so they can act quickly.</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Better Lead Qualification</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Helps sort real opportunities from weak calls so your time goes to the right jobs.</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                        <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
                            <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Consistent Every Time</h3>
                        <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Follows the same process on every call so nothing important gets skipped.</p>
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
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Slow Down a Good Workflow</span>
                </h2>
                <p className="text-[18px] text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-[1.6]">
                  If your team already uses Jobber, you do not need a whole new system. You need every call handled the right way so the right information reaches your workflow from the start.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                  <button className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] hover:bg-slate-50 transition-all transform hover:scale-[1.02]">
                    Book a Strategy Call
                  </button>
                  <a href="https://app.restorationai.io/signup" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-[18px] hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(28,91,255,0.4)]">
                    Start for Free
                    <ChevronRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </section>

        </div>
    );
}
