"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneCall,
  ClipboardList,
  BellRing,
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
  History,
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
} from 'lucide-react';

import PhoneAnimation from './PhoneAnimation';
import ReviewRankingAnimation from './ReviewRankingAnimation';
import WorkAuthAnimation from './WorkAuthAnimation';
import { SavingsAnimation } from './SavingsAnimation';
import { DispatchAnimation } from './DispatchAnimation';
import { ModernPhotoUploadAnimation } from './ModernPhotoUploadAnimation';
import { LargeLossAnimation } from './LargeLossAnimation';
import { CRMDashboardAnimation } from './CRMDashboardAnimation';

type FeatureData = {
  id: string;
  NavIcon: React.ElementType;
  iconColor: string;
  iconBg: string;
  shortLabel: string;
  navTagline: string;
  label: string;
  title: string;
  desc: string;
  items: { icon: React.ReactNode; title: string; desc: string }[];
  mediaType: 'component' | 'video';
  mediaComponent?: React.ReactNode;
  mediaSrc?: string;
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: 'easeOut' } } }}
    className="flex items-start gap-4 lg:gap-6 group h-auto lg:h-[110px]"
  >
    <div className="mt-1 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white shadow-sm shadow-blue-900/5 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-xl lg:text-[22px] font-black text-slate-900 tracking-tight">{title}</h4>
      <p className="text-base lg:text-[17px] text-slate-600 font-bold leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
    <div className="flex flex-col items-center w-full sm:w-[260px]">
      <a
        href="https://app.restorationai.io/#/signup"
        className="inline-flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-900/25 text-white rounded-xl text-[16px] font-bold hover:from-blue-500 hover:to-blue-700 hover:scale-[1.02] transition-all w-full"
      >
        Get Started For Free
        <ArrowRight size={18} strokeWidth={2.5} />
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

const FeatureVideo = ({ src }: { src: string }) => (
  <div className="relative w-full max-w-[280px] lg:max-w-[320px] mx-auto flex justify-center items-center">
    <video src={src} autoPlay loop muted playsInline className="w-full h-auto mix-blend-multiply" />
  </div>
);

const featuresData: FeatureData[] = [
  {
    id: 'ai-phone',
    NavIcon: PhoneCall,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    shortLabel: '24/7 AI Receptionist & Dispatcher',
    navTagline: 'Qualifies leads, dispatches your crew',
    label: '24/7 AI RECEPTIONIST & DISPATCHER',
    title: 'Answers Calls. Dispatches Techs. Instantly.',
    desc: 'Your AI answers fast, gets job details, and immediately notifies your team to spring into action.',
    items: [
      { icon: <PhoneCall size={20} className="text-blue-500" />, title: 'Never Miss a Call', desc: 'Your AI answers every call in seconds.' },
      { icon: <ClipboardList size={20} className="text-blue-500" />, title: 'Collects Job Details', desc: 'Name, address, loss type, and urgency.' },
      { icon: <BellRing size={20} className="text-blue-500" />, title: 'Instant Notifications', desc: 'Techs get push alerts the moment a job is booked.' },
      { icon: <CheckCircle2 size={20} className="text-blue-500" />, title: 'Easy Acceptance', desc: 'Techs can accept or decline jobs with a single tap.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <PhoneAnimation />,
  },
  {
    id: 'rapid-disqualification',
    NavIcon: ShieldAlert,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
    shortLabel: 'Lead Cost Recovery',
    navTagline: 'Stop paying for bad leads',
    label: 'LEAD COST RECOVERY — RAPID DISQUALIFICATION',
    title: 'Stop Paying for Bad Leads. Get Your Money Back.',
    desc: 'Running LSA ads or using lead brokers? The AI identifies low-quality and spam leads within seconds and ends the call.',
    items: [
      { icon: <ShieldAlert size={20} className="text-rose-500" />, title: 'Identify Bad Leads', desc: 'Catches out-of-area or old damage immediately.' },
      { icon: <DollarSign size={20} className="text-rose-500" />, title: 'Save Ad Spend', desc: 'Document proof to dispute LSA or broker charges.' },
      { icon: <AlertOctagon size={20} className="text-rose-500" />, title: 'Automatic Tagging', desc: 'Logs disqualified calls with reasons in the dashboard.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <SavingsAnimation />,
  },
  {
    id: 'smart-route',
    NavIcon: MapPin,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
    shortLabel: 'Smart Route Booking',
    navTagline: 'More jobs per day, less windshield time',
    label: 'SMART ROUTE BOOKING',
    title: 'Book Jobs on the Route, Not Across Town.',
    desc: "AI checks your technicians' existing appointments and books new jobs near where they already are. Tighter routes. More jobs per day.",
    items: [
      { icon: <MapPin size={20} className="text-emerald-500" />, title: 'Optimize Travel', desc: 'Books jobs based on closest available technician.' },
      { icon: <Navigation size={20} className="text-emerald-500" />, title: 'Fits Existing Routes', desc: 'Checks current appointments to reduce windshield time.' },
      { icon: <TrendingUp size={20} className="text-emerald-500" />, title: 'More Jobs per Day', desc: 'Tighter routes mean you can squeeze in more work.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <DispatchAnimation />,
  },
  {
    id: 'visual-intake',
    NavIcon: Camera,
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-50',
    shortLabel: 'Visual Intake',
    navTagline: 'See damage before you roll a truck',
    label: 'VISUAL INTAKE',
    title: 'See the Damage Before You Roll a Truck.',
    desc: "During or after the call, the AI sends the customer a link to upload photos of the damage. You see what you're dealing with before your tech leaves.",
    items: [
      { icon: <Smartphone size={20} className="text-violet-500" />, title: 'Pre-Arrival Context', desc: 'Send an SMS link for customers to upload photos.' },
      { icon: <Camera size={20} className="text-violet-500" />, title: 'Easy Uploads', desc: 'No app required, works right in their mobile browser.' },
      { icon: <ImageIcon size={20} className="text-violet-500" />, title: 'Instant Sync', desc: 'Photos are attached to the job record instantly.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <ModernPhotoUploadAnimation />,
  },
  {
    id: 'work-auth',
    NavIcon: FileSignature,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    shortLabel: 'Work Authorizations',
    navTagline: 'Paperwork signed before arrival',
    label: 'WORK AUTHORIZATIONS',
    title: 'Authorization Signed Before Your Tech Arrives.',
    desc: 'The AI sends work authorizations to the customer automatically. By the time your tech pulls up, the paperwork is already done.',
    items: [
      { icon: <Send size={20} className="text-indigo-500" />, title: 'Automated Sending', desc: 'Paperwork is texted/emailed automatically.' },
      { icon: <FileSignature size={20} className="text-indigo-500" />, title: 'Digital Signatures', desc: 'Customers sign securely on their own device.' },
      { icon: <CheckSquare size={20} className="text-indigo-500" />, title: 'Ready to Work', desc: 'Techs arrive with authorization already completed.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <WorkAuthAnimation />,
  },
  {
    id: 'team-management',
    NavIcon: Users,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    shortLabel: 'Team Management & Scheduling',
    navTagline: 'Your whole crew, one view',
    label: 'TEAM MANAGEMENT & SCHEDULING',
    title: 'Your Whole Crew. One Dashboard.',
    desc: 'Manage tech availability, service areas, schedules, and skill sets. The AI uses this data to dispatch and route intelligently.',
    items: [
      { icon: <Users size={20} className="text-orange-500" />, title: 'Live Availability', desc: "See who's working, who's off, and where they are." },
      { icon: <Settings size={20} className="text-orange-500" />, title: 'Skill-Based Routing', desc: 'Assign jobs based on Water, Fire, or Mold certifications.' },
      { icon: <Zap size={20} className="text-orange-500" />, title: 'Automatic Adjustments', desc: 'AI instantly reroutes if a tech calls in sick.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <LargeLossAnimation />,
  },
  {
    id: 'dashboard',
    NavIcon: LayoutDashboard,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    shortLabel: 'Full Visibility Dashboard',
    navTagline: 'Every call, every dollar tracked',
    label: 'FULL VISIBILITY DASHBOARD',
    title: 'Every Call. Every Lead. Every Dollar.',
    desc: "Full call transcripts, recordings, lead status, booking history, and performance metrics. Know exactly what's happening at all times.",
    items: [
      { icon: <LayoutDashboard size={20} className="text-cyan-600" />, title: 'Full Visibility', desc: 'Track calls, bookings, disqualifications, and revenue.' },
      { icon: <History size={20} className="text-cyan-600" />, title: 'Transcripts & Audio', desc: 'Read or listen to every interaction the AI has.' },
      { icon: <BarChart3 size={20} className="text-cyan-600" />, title: 'Performance Metrics', desc: 'Know exactly how your phones are performing 24/7.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <CRMDashboardAnimation />,
  },
  {
    id: 'review-tool',
    NavIcon: Star,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    shortLabel: '5-Star Review Engine',
    navTagline: 'Turn finished jobs into reviews',
    label: '5-STAR REVIEW ENGINE',
    title: 'Turn Finished Jobs Into 5-Star Reviews.',
    desc: 'Your AI asks past customers for reviews automatically.',
    items: [
      { icon: <Send size={20} className="text-amber-500" />, title: 'Auto Review Requests', desc: 'Sends texts and emails for you.' },
      { icon: <ArrowUpCircle size={20} className="text-amber-500" />, title: 'Boost Your Ranking', desc: 'More reviews means more calls.' },
      { icon: <Settings size={20} className="text-amber-500" />, title: 'Works by Itself', desc: 'Zero time needed from your team.' },
    ],
    mediaType: 'component' as const,
    mediaComponent: <ReviewRankingAnimation />,
  },
];

const bulletContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function FeaturesShowcase() {
  const [active, setActive] = useState(0);
  const f = featuresData[active];

  return (
    <section className="relative py-8 lg:py-16 bg-[#fafafa] overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px] relative z-10 w-full">

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-4 lg:mb-10">
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-black text-[#0f172a] tracking-tight leading-[1.05] lg:whitespace-nowrap">
            Capture More Jobs Without{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">More Work</span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 items-start mt-0 lg:mt-8">

          {/* Mobile Nav - Single Feature with Arrows */}
          <div className="flex lg:hidden flex-col w-full mb-3">
            <div className="text-center text-slate-400 text-[12px] font-bold mb-1.5 uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="h-[1px] w-8 bg-slate-200"></span>
              Tap arrows to explore
              <span className="h-[1px] w-8 bg-slate-200"></span>
            </div>
            <div className="flex items-center justify-between w-full gap-1 sm:gap-2">
              <button 
                onClick={() => setActive(prev => prev > 0 ? prev - 1 : featuresData.length - 1)} 
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all rounded-full flex-shrink-0"
              >
                <ChevronLeft size={28} />
              </button>
              
              <div className="flex-1 relative overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-200/80 p-4 sm:p-5 min-h-[90px] flex items-center cursor-pointer"
                   onClick={() => setActive(prev => prev < featuresData.length - 1 ? prev + 1 : 0)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-3 w-full"
                  >
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${featuresData[active].iconBg}`}>
                      {React.createElement(featuresData[active].NavIcon, { size: 20, className: featuresData[active].iconColor, strokeWidth: 2 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-tight">
                        {featuresData[active].shortLabel}
                      </p>
                      <p className="text-[13px] text-slate-500 mt-1 leading-tight">
                        {featuresData[active].navTagline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button 
                onClick={() => setActive(prev => prev < featuresData.length - 1 ? prev + 1 : 0)} 
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all rounded-full flex-shrink-0"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {featuresData.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-[5px] rounded-full transition-all duration-300 ${idx === active ? 'w-5 bg-blue-500' : 'w-1.5 bg-slate-200'}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Left Nav */}
          <div className="hidden lg:flex w-[26%] flex-col shrink-0 pb-0 gap-0">
            {featuresData.map((feat, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={feat.id}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full shrink-0 text-left flex items-center gap-3 px-5 py-[13px] rounded-2xl transition-colors outline-none mb-1 origin-left ${
                    isActive ? 'bg-white shadow-sm border border-slate-200/80' : 'bg-transparent hover:bg-white/70 border border-transparent'
                  }`}
                >
                  {/* Sliding active bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 lg:top-[10%] bottom-0 lg:bottom-[10%] w-full lg:w-[3px] h-[3px] lg:h-auto bg-blue-600 rounded-b-2xl lg:rounded-b-none lg:rounded-r-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}

                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${isActive ? feat.iconBg : 'bg-slate-100'}`}>
                    <feat.NavIcon size={11} className={isActive ? feat.iconColor : 'text-slate-400'} strokeWidth={2} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-[14px] font-bold leading-tight transition-colors ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {feat.shortLabel}
                    </p>
                    <p className="text-[12px] text-slate-400 mt-0.5 leading-tight">{feat.navTagline}</p>
                  </div>

                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <ChevronRight size={14} className="text-blue-500 shrink-0" />
                  </motion.div>
                </motion.button>
              );
            })}
          </div>

          {/* Right content — old layout */}
          <div className="w-full lg:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col w-full"
              >
                {/* Title + description */}
                <div className="mb-6 lg:mb-0 text-center lg:text-left h-auto lg:h-[150px]">
                  <h3 className="text-3xl lg:text-[42px] font-extrabold text-[#0f172a] mb-3 lg:mb-5 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[16px] lg:text-[20px] text-slate-600 font-medium max-w-4xl leading-relaxed mx-auto lg:mx-0">
                    {f.desc}
                  </p>
                </div>

                {/* Media + bullets */}
                <div className="flex flex-col lg:grid lg:grid-cols-[50%_50%] gap-8 lg:gap-0 items-center lg:items-start pt-0 lg:pt-4 min-h-[480px]">

                  {/* Media */}
                  <div className="w-full flex justify-center items-center min-h-[240px] lg:min-h-[420px]">
                    {f.mediaType === 'component' ? f.mediaComponent : <FeatureVideo src={f.mediaSrc!} />}
                  </div>

                  {/* Bullets */}
                  <motion.div
                    key={`bullets-${active}`}
                    variants={bulletContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-col pt-0 lg:pt-8 lg:pl-10 h-full lg:h-[480px]"
                  >
                    {f.items.map((item, idx) => (
                      <FeatureItem key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTAs below */}
        <div className="mt-6 lg:-mt-16 relative z-10 flex justify-center max-w-4xl mx-auto">
          <ActionButtons />
        </div>

      </div>
    </section>
  );
}
