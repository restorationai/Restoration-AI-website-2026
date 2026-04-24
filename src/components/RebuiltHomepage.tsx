import React from 'react';
import { ChevronRight, Zap, Phone, Database, Check, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function RebuiltHomepage() {
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
          <h1 className="text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-slate-900">
            Your System<br />
            Stays the Same<br />
            <span className="text-[#3dd0ff]">Now Every Call<br />
              Gets Answered</span>
          </h1>

          <p className="text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium">
            Albiware is built specifically for restoration operations, from mitigation to reconstruction. When paired with Restoration AI, every call is captured, qualified, and organized into a ready-to-act job - so your team can respond faster without adding manual work or losing opportunities before they even begin.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <a href="/#calendar-section" className="inline-flex justify-center items-center px-10 py-4 lg:py-5 bg-[#3dd0ff] text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:bg-blue-600 transition hover:scale-[1.02] transform">
              Book a Call
            </a>
            <button className="px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center gap-2 hover:bg-slate-50 transition hover:scale-[1.02] transform">
              See How It Works <ChevronRight size={20} className="text-slate-500" />
            </button>
          </div>
        </div>

        {/* Right Image Placeholder (Forest Photo Layout) */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[520px] aspect-[4/3] rounded-[36px] bg-slate-100 overflow-hidden border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
            <img
              src="/website-photos/hero.png"
              alt="Hero Placeholder"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* Fallback gradient if missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 mix-blend-multiply opacity-50 -z-10"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK BANNER ("2 AM...") */}
      <section className="relative z-10 bg-[#061124] py-14 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Using a standard grid without dividing lines as seen in screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            <div className="flex flex-col space-y-1">
              <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">2 AM</h3>
              <p className="text-white font-bold text-[16px] tracking-wide mt-1">Peak Call Time</p>
              <p className="text-slate-400 text-[13px] font-medium mt-1">Highest water damage volume.</p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">5 min</h3>
              <p className="text-white font-bold text-[16px] tracking-wide mt-1">Window to Act</p>
              <p className="text-slate-400 text-[13px] font-medium mt-1">First to answer wins the job.</p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Zero</h3>
              <p className="text-white font-bold text-[16px] tracking-wide mt-1">Manual Entry</p>
              <p className="text-slate-400 text-[13px] font-medium mt-1">Direct Albiware job creation.</p>
            </div>

            <div className="flex flex-col space-y-1">
              <h3 className="text-[#3dd0ff] text-[32px] font-bold leading-tight">Easy</h3>
              <p className="text-white font-bold text-[16px] tracking-wide mt-1">Setup Process</p>
              <p className="text-slate-400 text-[13px] font-medium mt-1">Ready in days, not months.</p>
            </div>

          </div>
        </div>
      </section>

      {/* PAIN SECTION -> Added as a Split Section (Text Left, Image Right) */}
      <section className="relative z-10 py-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Text */}
        <div className="flex-1 space-y-7 lg:max-w-[540px]">
          <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Your System Is Only as Good as the Information Going Into It
          </h2>
          <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
            Albiware works best when every job starts with complete and accurate information. But in reality, intake is often rushed or inconsistent, which leads to missing details, unclear scope, and extra back-and-forth before work can even begin. Restoration AI follows your exact intake process and captures the right information the first time, so every job enters Albiware clean, structured, and ready to move forward without slowing your team down.
          </p>
        </div>

        {/* Right Premium Placeholder */}
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
      <section className="relative z-10 pt-24 pb-20 px-6 max-w-[800px] mx-auto text-center space-y-7">
        <h2 className="text-[40px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight">
          Your Intake, Fully Automated
        </h2>
        <p className="text-[17px] text-slate-500 leading-[1.6] font-medium">
          From the first ring to a fully organized job inside your workflow, everything is handled in real time without adding extra work to your team. No typing, no callbacks, no confusion. Just clear, structured jobs delivered exactly how your business already operates so your team can move faster and capture more work without added stress.
        </p>
      </section>

      {/* SECTION 5: TIMELINE */}
      <section className="relative z-10 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-blue-200 -translate-x-[50%] hidden md:block z-0"></div>

          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row items-stretch justify-between relative mb-24 z-10 gap-8 md:gap-0">
            {/* Node */}
            <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex">
              <Phone size={28} className="text-blue-400" />
            </div>

            {/* Left Card */}
            <div className="w-full md:w-[48%] md:pr-5">
              <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Every Call Answered and Handled the Right Way</h3>
                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">The moment the phone rings, Restoration AI answers instantly and handles the conversation the way a real restoration office would. It understands damage types, urgency, and context so every call is properly qualified and handled with the level of detail your business actually needs.</p>
              </div>
            </div>

            {/* Right Placeholder */}
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
            {/* Node */}
            <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex">
              <Database size={28} className="text-blue-400" />
            </div>

            {/* Left Placeholder */}
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

            {/* Right Card */}
            <div className="w-full md:w-[48%] md:pl-5">
              <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Everything Captured While the Call Is Still Happening</h3>
                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">While the call is happening, every detail is captured, organized, and structured in real time without your team lifting a finger. No typing, no callbacks, no missed information. Your office is not stuck doing intake or cleaning things up later. Everything is already done for them.</p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col md:flex-row items-stretch justify-between relative z-10 gap-8 md:gap-0">
            {/* Node */}
            <div className="absolute left-[50%] top-[50%] w-[64px] h-[64px] rounded-full bg-[#061124] flex items-center justify-center -translate-x-[50%] -translate-y-[50%] border-[10px] border-white shadow-sm z-20 hidden md:flex text-white">
              <CheckCircle2 size={30} strokeWidth={2.5} />
            </div>

            {/* Left Card */}
            <div className="w-full md:w-[48%] md:pr-5">
              <div className="bg-white p-14 lg:p-16 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] h-full flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-slate-900 leading-[1.2] mb-5">Logged Into Albiware Exactly How Your Team Already Works</h3>
                <p className="text-[18px] text-slate-500 leading-relaxed font-medium">By the time the call ends, everything is already logged inside Albiware exactly how your team expects it. No new systems, no retraining, and no disruption to your workflow. The only difference is you are capturing more jobs without adding more work.</p>
              </div>
            </div>

            {/* Right Placeholder */}
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
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {/* Card 1 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Automated Job Creation</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Every call instantly creates a new job record inside Albiware exactly how your team expects it.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Instant SMS Confirmations</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Homeowners receive immediate text confirmation the moment the call ends, building instant trust.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Smart Dispatch Alerts</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Your on-call technician is notified instantly with full job context and navigation links.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">24/7 Availability</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Never miss an emergency job, even at 3 AM on a holiday weekend. We're always on.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Precision Address Validation</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Job addresses are verified via Google Maps API for zero navigation errors or dispatch confusion.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Real-time Photo Logging</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Call data and job site context are attached directly to the Albiware file automatically.</p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Zero Manual Entry</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Eliminate human error and hours of tedious data entry every single week for your dispatch team.</p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20">
              <CheckCircle2 size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-[21px] font-bold text-slate-900 mb-2.5 leading-tight">Digital Authorization</h3>
            <p className="text-[16px] text-slate-500 leading-relaxed font-medium">Automatically trigger work authorizations to get crews on site and working faster.</p>
          </div>

          {/* Card 9 */}
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
