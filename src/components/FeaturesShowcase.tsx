"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  ClipboardList, 
  BellRing, 
  FileText, 
  Search, 
  FolderOpen, 
  History, 
  TrendingUp,
  Send,
  ArrowUpCircle,
  Settings,
  Zap,
  UserPlus,
  CheckCircle2
} from 'lucide-react';

import PhoneAnimation from './PhoneAnimation';
import ReviewRankingAnimation from './ReviewRankingAnimation';
import ChatWidgetAnimation from './ChatWidgetAnimation';

{/* Reusable Icon Component for the feature lists */}
const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 w-10 h-10 rounded-full bg-blue-700/10 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div className="space-y-0.5">
      <h4 className="text-[18px] font-bold text-slate-900 tracking-tight">{title}</h4>
      <p className="text-[15px] text-slate-500 font-medium">{desc}</p>
    </div>
  </div>
);

{/* Reusable Buttons container */}
const ActionButtons = () => (
  <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:items-start">
    <div className="flex flex-col items-center sm:items-start w-full sm:w-[240px]">
      <a
        href="/signup"
        className="inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white rounded-lg text-[15px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all w-full"
      >
        Get Started Today
      </a>
      <p className="text-[11px] text-slate-500 mt-2 text-center sm:text-left">Set up in 15 minutes, no credit card required</p>
    </div>
    <a
      href="/#calendar-section"
      className="inline-flex justify-center items-center px-6 py-3 bg-white text-slate-700 border-2 border-slate-200 rounded-lg text-[15px] font-bold hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-[240px]"
    >
      Book a Strategy Call
    </a>
  </div>
);

export default function FeaturesShowcase() {
  return (
    <section className="relative min-h-screen py-10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl space-y-10 relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto relative -top-6 flex flex-col items-center shrink-0">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Everything That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 drop-shadow-sm">Captures More Jobs</span> Without More Work
          </h2>
        </div>

        {/* SECTION 1: AI PHONE AGENT (STANDARD: Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-8 lg:pl-16 lg:pr-4">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 bg-blue-700/10 text-blue-700 text-[11px] uppercase font-bold tracking-widest rounded-md">
                AI PHONE AGENT
              </span>
              <h2 className="text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Answers Calls. Gets Jobs<br />Moving.
              </h2>
              <p className="text-[16px] xl:text-[17px] font-semibold text-blue-700 max-w-lg leading-relaxed">
                Your AI answers fast, gets job details, and pushes your team into action.
              </p>
            </div>

            <div className="space-y-6">
              <FeatureItem 
                icon={<PhoneCall size={18} className="text-blue-700" />}
                title="Never Miss a Call"
                desc="Your AI answers every call in seconds."
              />
              <FeatureItem 
                icon={<ClipboardList size={18} className="text-blue-700" />}
                title="Collects Job Details"
                desc="Name, address, loss type, and urgency."
              />
              <FeatureItem 
                icon={<BellRing size={18} className="text-blue-700" />}
                title="Wakes Up Techs"
                desc="Calls techs until someone confirms."
              />
              <FeatureItem 
                icon={<FileText size={18} className="text-blue-700" />}
                title="Clear Summaries"
                desc="Clean job notes for your team."
              />
            </div>

            <ActionButtons />
          </div>

          {/* Animation Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-center lg:pr-16">
            <PhoneAnimation />
          </div>
        </div>



        {/* SECTION 3: REVIEW TOOL (REVERSED: Text Right, Image Left) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-8 lg:pl-12">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 bg-blue-700/10 text-blue-700 text-[11px] uppercase font-bold tracking-widest rounded-md">
                REVIEW TOOL
              </span>
              <h2 className="text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Turn Finished Jobs Into<br />5-Star Reviews
              </h2>
              <p className="text-[16px] xl:text-[17px] font-semibold text-blue-700 max-w-lg leading-relaxed">
                Your AI asks past customers for reviews automatically.
              </p>
            </div>

            <div className="space-y-6">
              <FeatureItem 
                icon={<Send size={18} className="text-blue-700" />}
                title="Auto Review Requests"
                desc="Sends texts and emails for you."
              />
              <FeatureItem 
                icon={<ArrowUpCircle size={18} className="text-blue-700" />}
                title="Boost Your Ranking"
                desc="More reviews means more calls."
              />
              <FeatureItem 
                icon={<Settings size={18} className="text-blue-700" />}
                title="Works by Itself"
                desc="Zero time needed from your team."
              />
            </div>

            <ActionButtons />
          </div>

          {/* Animation Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <ReviewRankingAnimation />
          </div>
        </div>

        <hr className="border-slate-100 max-w-6xl mx-auto" />

        {/* SECTION 4: CHAT WIDGET (STANDARD: Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 space-y-8 lg:pr-12">
            <div className="space-y-5">
              <span className="inline-block px-3 py-1 bg-blue-700/10 text-blue-700 text-[11px] uppercase font-bold tracking-widest rounded-md">
                CHAT WIDGET
              </span>
              <h2 className="text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Capture Website Leads
              </h2>
              <p className="text-[16px] xl:text-[17px] font-semibold text-blue-700 max-w-lg leading-relaxed">
                Answers questions and collects info 24/7.
              </p>
            </div>

            <div className="space-y-6">
              <FeatureItem 
                icon={<Zap size={18} className="text-blue-700" />}
                title="Fast Answers"
                desc="Helps customers so they don't bounce."
              />
              <FeatureItem 
                icon={<UserPlus size={18} className="text-blue-700" />}
                title="Grabs Lead Info"
                desc="Gets name, phone, and job details."
              />
              <FeatureItem 
                icon={<CheckCircle2 size={18} className="text-blue-700" />}
                title="Sends Leads to CRM"
                desc="New contacts show up instantly."
              />
            </div>

            <ActionButtons />
          </div>

          {/* Animation Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <ChatWidgetAnimation />
          </div>
        </div>

      </div>
    </section>
  );
}
