"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, 
  ClipboardList, 
  BellRing, 
  FileText, 
  History, 
  TrendingUp,
  Send,
  ArrowUpCircle,
  Settings,
  Zap,
  CheckCircle2,
  ShieldAlert,
  MapPin,
  Camera,
  FileSignature,
  Users,
  LayoutDashboard,
  DollarSign,
  AlertOctagon,
  Navigation,
  Image as ImageIcon,
  Smartphone,
  CheckSquare,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ChevronRight
} from 'lucide-react';

import PhoneAnimation from './PhoneAnimation';
import ReviewRankingAnimation from './ReviewRankingAnimation';

{/* Reusable Icon Component for the feature lists */}
const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start gap-5 group">
    <div className="mt-1 w-12 h-12 rounded-2xl bg-white shadow-sm shadow-blue-900/5 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-[17px] font-bold text-slate-900 tracking-tight">{title}</h4>
      <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

{/* Reusable Buttons container */}
const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full relative z-20">
    <div className="flex flex-col items-center w-full sm:w-[260px]">
      <a
        href="/signup"
        className="inline-flex justify-center items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-900/25 text-white rounded-xl text-[16px] font-bold hover:from-blue-500 hover:to-blue-700 hover:scale-[1.02] transition-all w-full"
      >
        Get Started Today
      </a>
      <p className="text-[12px] text-slate-500 mt-3 text-center font-medium">Set up in 5 minutes, no credit card required</p>
    </div>
    <div className="flex flex-col items-center w-full sm:w-[260px] self-start">
      <a
        href="/#calendar-section"
        className="inline-flex justify-center items-center px-6 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-xl text-[16px] font-bold hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] transition-all shadow-sm w-full"
      >
        Book a Strategy Call
      </a>
    </div>
  </div>
);

{/* Reusable Video Element */}
const FeatureVideo = ({ src }: { src: string }) => (
  <div className="relative w-full max-w-[280px] lg:max-w-[320px] mx-auto flex justify-center items-center">
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto mix-blend-multiply"
    />
  </div>
);

const featuresData = [
  {
    id: 'ai-phone',
    label: '24/7 AI RECEPTIONIST & DISPATCH',
    title: 'Answers Calls. Dispatches Techs. Instantly.',
    desc: 'Your AI answers fast, gets job details, and immediately notifies your team to spring into action.',
    items: [
      { icon: <PhoneCall size={20} className="text-blue-500" />, title: 'Never Miss a Call', desc: 'Your AI answers every call in seconds.' },
      { icon: <ClipboardList size={20} className="text-blue-500" />, title: 'Collects Job Details', desc: 'Name, address, loss type, and urgency.' },
      { icon: <BellRing size={20} className="text-blue-500" />, title: 'Instant Notifications', desc: 'Techs get push alerts the moment a job is booked.' },
      { icon: <CheckCircle2 size={20} className="text-blue-500" />, title: 'Easy Acceptance', desc: 'Techs can accept or decline jobs with a single tap.' }
    ],
    mediaType: 'component',
    mediaComponent: <PhoneAnimation />
  },
  {
    id: 'rapid-disqualification',
    label: 'RAPID DISQUALIFICATION',
    title: 'Stop Paying for Bad Leads. Get Your Money Back.',
    desc: 'Running LSA ads or using lead brokers? The AI identifies low-quality and spam leads within seconds and ends the call.',
    items: [
      { icon: <ShieldAlert size={20} className="text-blue-500" />, title: 'Identify Bad Leads', desc: 'Catches out-of-area or old damage immediately.' },
      { icon: <DollarSign size={20} className="text-blue-500" />, title: 'Save Ad Spend', desc: 'Document proof to dispute LSA or broker charges.' },
      { icon: <AlertOctagon size={20} className="text-blue-500" />, title: 'Automatic Tagging', desc: 'Logs disqualified calls with reasons in the dashboard.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-rapid-disqualification.mp4'
  },
  {
    id: 'smart-route',
    label: 'SMART ROUTE BOOKING',
    title: 'Book Jobs on the Route, Not Across Town.',
    desc: 'AI checks your technicians\' existing appointments and books new jobs near where they already are. Tighter routes. More jobs per day.',
    items: [
      { icon: <MapPin size={20} className="text-blue-500" />, title: 'Optimize Travel', desc: 'Books jobs based on closest available technician.' },
      { icon: <Navigation size={20} className="text-blue-500" />, title: 'Fits Existing Routes', desc: 'Checks current appointments to reduce windshield time.' },
      { icon: <TrendingUp size={20} className="text-blue-500" />, title: 'More Jobs per Day', desc: 'Tighter routes mean you can squeeze in more work.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-smart-route-booking.mp4'
  },
  {
    id: 'visual-intake',
    label: 'VISUAL INTAKE',
    title: 'See the Damage Before You Roll a Truck.',
    desc: 'During or after the call, the AI sends the customer a link to upload photos of the damage. You see what you\'re dealing with before your tech leaves.',
    items: [
      { icon: <Smartphone size={20} className="text-blue-500" />, title: 'Pre-Arrival Context', desc: 'Send an SMS link for customers to upload photos.' },
      { icon: <Camera size={20} className="text-blue-500" />, title: 'Easy Uploads', desc: 'No app required, works right in their mobile browser.' },
      { icon: <ImageIcon size={20} className="text-blue-500" />, title: 'Instant Sync', desc: 'Photos are attached to the job record instantly.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-visual-intake.mp4'
  },

  {
    id: 'work-auth',
    label: 'WORK AUTHORIZATIONS',
    title: 'Authorization Signed Before Your Tech Arrives.',
    desc: 'The AI sends work authorizations to the customer automatically. By the time your tech pulls up, the paperwork is already done.',
    items: [
      { icon: <Send size={20} className="text-blue-500" />, title: 'Automated Sending', desc: 'Paperwork is texted/emailed automatically.' },
      { icon: <FileSignature size={20} className="text-blue-500" />, title: 'Digital Signatures', desc: 'Customers sign securely on their own device.' },
      { icon: <CheckSquare size={20} className="text-blue-500" />, title: 'Ready to Work', desc: 'Techs arrive with authorization already completed.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-work-authorizations.mp4'
  },
  {
    id: 'team-management',
    label: 'TEAM MANAGEMENT',
    title: 'Your Whole Crew. One Dashboard.',
    desc: 'Manage tech availability, service areas, schedules, and skill sets. The AI uses this data to dispatch and route intelligently.',
    items: [
      { icon: <Users size={20} className="text-blue-500" />, title: 'Live Availability', desc: 'See who\'s working, who\'s off, and where they are.' },
      { icon: <Settings size={20} className="text-blue-500" />, title: 'Skill-Based Routing', desc: 'Assign jobs based on Water, Fire, or Mold certifications.' },
      { icon: <Zap size={20} className="text-blue-500" />, title: 'Automatic Adjustments', desc: 'AI instantly reroutes if a tech calls in sick.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-team-management.mp4'
  },
  {
    id: 'dashboard',
    label: 'DASHBOARD',
    title: 'Every Call. Every Lead. Every Dollar.',
    desc: 'Full call transcripts, recordings, lead status, booking history, and performance metrics. Know exactly what\'s happening at all times.',
    items: [
      { icon: <LayoutDashboard size={20} className="text-blue-500" />, title: 'Full Visibility', desc: 'Track calls, bookings, disqualifications, and revenue.' },
      { icon: <History size={20} className="text-blue-500" />, title: 'Transcripts & Audio', desc: 'Read or listen to every interaction the AI has.' },
      { icon: <BarChart3 size={20} className="text-blue-500" />, title: 'Performance Metrics', desc: 'Know exactly how your phones are performing 24/7.' }
    ],
    mediaType: 'video',
    mediaSrc: '/videos/feature-dashboard-logs.mp4'
  },
  {
    id: 'review-tool',
    label: 'REVIEW TOOL',
    title: 'Turn Finished Jobs Into 5-Star Reviews',
    desc: 'Your AI asks past customers for reviews automatically.',
    items: [
      { icon: <Send size={20} className="text-blue-500" />, title: 'Auto Review Requests', desc: 'Sends texts and emails for you.' },
      { icon: <ArrowUpCircle size={20} className="text-blue-500" />, title: 'Boost Your Ranking', desc: 'More reviews means more calls.' },
      { icon: <Settings size={20} className="text-blue-500" />, title: 'Works by Itself', desc: 'Zero time needed from your team.' }
    ],
    mediaType: 'component',
    mediaComponent: <ReviewRankingAnimation />
  }
];

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  
  const activeFeature = featuresData[activeTab];
  const VISIBLE_TABS = 5;

  const handleNext = () => {
    if (startIndex < featuresData.length - VISIBLE_TABS) {
      setStartIndex(prev => Math.min(prev + VISIBLE_TABS, featuresData.length - VISIBLE_TABS));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => Math.max(prev - VISIBLE_TABS, 0));
    }
  };

  return (
    <section className="relative py-12 lg:py-16 bg-[#fafafa] overflow-hidden font-sans">
      
      {/* Dynamic Background Pattern to make it less plain */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-black text-[#0f172a] tracking-tight leading-[1.05] lg:whitespace-nowrap">
            Built for the Realities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb] drop-shadow-sm">Restoration</span>
          </h2>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Interactive Tabs with Pagination */}
          <div className="w-full lg:w-[28%] flex flex-col gap-4 relative">
            
            {/* Scroll Up Button */}
            <div className="h-14 mb-2">
              <button 
                onClick={handlePrev}
                disabled={startIndex === 0}
                className={`w-full h-full flex justify-center items-center rounded-[1.25rem] transition-all duration-300 ${
                  startIndex === 0 
                    ? 'opacity-30 cursor-not-allowed bg-slate-50 text-slate-400 border-[2.5px] border-transparent' 
                    : 'border-[2.5px] border-[#38bdf8] bg-white/40 text-[#0ea5e9] hover:bg-[#e0f2fe] shadow-sm cursor-pointer'
                }`}
              >
                <ChevronUp size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {featuresData.slice(startIndex, startIndex + VISIBLE_TABS).map((feature, idx) => {
                  const actualIndex = startIndex + idx;
                  const isActive = activeTab === actualIndex;
                  return (
                    <motion.button
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={feature.id}
                      onClick={() => setActiveTab(actualIndex)}
                      className={`w-full text-left px-7 py-5 rounded-[1.25rem] transition-all duration-300 outline-none group
                        ${isActive 
                          ? 'border-[2.5px] border-[#38bdf8] bg-white/60 shadow-md scale-[1.02]' 
                          : 'border-[2.5px] border-transparent hover:bg-white/80 hover:shadow-sm hover:scale-[1.02] hover:border-slate-200'
                        }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`block text-[13px] lg:text-[14px] uppercase font-bold tracking-[0.15em] transition-colors ${
                          isActive ? 'text-[#0ea5e9]' : 'text-slate-500 group-hover:text-slate-700'
                        }`}>
                          {feature.label}
                        </span>
                        {!isActive && (
                          <ChevronRight size={18} className="text-[#0ea5e9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        )}
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-[#0ea5e9] shadow-[0_0_8px_rgba(14,165,233,0.6)]"></div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Scroll Down Button */}
            <div className="h-14 mt-2">
              <button 
                onClick={handleNext}
                disabled={startIndex >= featuresData.length - VISIBLE_TABS}
                className={`w-full h-full flex justify-center items-center rounded-[1.25rem] transition-all duration-300 ${
                  startIndex >= featuresData.length - VISIBLE_TABS 
                    ? 'opacity-30 cursor-not-allowed bg-slate-50 text-slate-400 border-[2.5px] border-transparent' 
                    : 'border-[2.5px] border-[#38bdf8] bg-white/40 text-[#0ea5e9] hover:bg-[#e0f2fe] shadow-sm cursor-pointer'
                }`}
              >
                <ChevronDown size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Media and Content */}
          <div className="w-full lg:w-[72%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col w-full"
              >
                {/* Headline & Description (Now seamlessly floating) */}
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-[42px] font-extrabold text-[#0f172a] mb-5 tracking-tight">
                    {activeFeature.title}
                  </h3>
                  <p className="text-[18px] lg:text-[20px] text-slate-600 font-medium max-w-4xl leading-relaxed mx-auto lg:mx-0">
                    {activeFeature.desc}
                  </p>
                </div>
                
                {/* 2-Column Layout: Media (Left) & Bullets (Right) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start pt-2">
                  
                  {/* Media Container - Removed rigid white box, letting it breathe */}
                  <div className="w-full lg:w-[45%] flex justify-center items-center min-h-[240px] lg:min-h-[280px]">
                    {activeFeature.mediaType === 'component' ? (
                      activeFeature.mediaComponent
                    ) : (
                      <FeatureVideo src={activeFeature.mediaSrc!} />
                    )}
                  </div>

                  {/* Bullet Points Container */}
                  <div className="w-full lg:w-[55%] flex flex-col gap-8 pt-4">
                    {activeFeature.items.map((item, idx) => (
                      <FeatureItem 
                        key={idx} 
                        icon={item.icon} 
                        title={item.title} 
                        desc={item.desc} 
                      />
                    ))}
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Global Action Buttons */}
        <div className="mt-8 lg:mt-12 flex justify-center max-w-4xl mx-auto">
          <ActionButtons />
        </div>

      </div>
    </section>
  );
}
