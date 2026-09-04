"use client";

import React, { useState } from 'react';
import { MapPin, Sparkles, Megaphone, ChevronDown, Lightbulb, MessageSquare, Camera, Star, FileText, Bot, Link2, Youtube, BadgeCheck, Crosshair, PhoneCall, ListChecks } from 'lucide-react';

type Card = { icon: React.ReactNode; title: string; teaser: string; detail: string };
type Pillar = { key: string; label: string; icon: React.ReactNode; cards: Card[]; insight: string };

const pillars: Pillar[] = [
  {
    key: 'local',
    label: 'Local SEO',
    icon: <MapPin size={18} />,
    cards: [
      {
        icon: <FileText size={20} />,
        title: 'GBP Content Creation',
        teaser: 'Optimized updates published straight to your Google Business Profile.',
        detail: 'Google rewards active profiles. We publish consistent posts, offers, and service announcements so your profile signals a living business instead of an abandoned listing.'
      },
      {
        icon: <MessageSquare size={20} />,
        title: 'GBP Questions & Answers',
        teaser: 'Pre populated, auto answered FAQs right on Google Maps.',
        detail: 'Homeowners read the Q&A section before they ever call. We fill it with the questions they actually ask, insurance, response time, emergency availability, so their concerns are answered before your phone rings.'
      },
      {
        icon: <Camera size={20} />,
        title: 'GBP Photos & Videos',
        teaser: 'Project photos tagged with metadata and geocoordinates.',
        detail: 'Every photo we upload carries location data and service tags, so Google connects your real jobs to the exact neighborhoods you want to rank in.'
      },
      {
        icon: <Star size={20} />,
        title: 'Google 5 Star Reviews',
        teaser: 'Automated campaigns for a consistent flow of reviews.',
        detail: 'Finished jobs turn into review requests automatically. A steady weekly flow of five star reviews signals more to Google than a burst of ten reviews once a year.'
      }
    ],
    insight: 'If your Google Business Profile lists a service but your website has no dedicated page for it, Google assumes you do not actually offer it. Even if it is mentioned on your homepage. That is why we build an individual page for every service in every city you serve.'
  },
  {
    key: 'ai',
    label: 'AI Search',
    icon: <Sparkles size={18} />,
    cards: [
      {
        icon: <Bot size={20} />,
        title: 'AI Crawl & Indexing',
        teaser: 'GPTBot, Gemini, and Claude crawlers index your site successfully.',
        detail: 'AI assistants send their own crawlers to read your website. We make sure your pages, llms.txt file, and schema markup are fully readable, so ChatGPT, Gemini, and Claude know exactly what you do and where you do it.'
      },
      {
        icon: <MessageSquare size={20} />,
        title: 'Conversation Optimization',
        teaser: 'Site structure aligned with how people actually talk to AI.',
        detail: 'Nobody types keywords into ChatGPT. They ask full questions. We structure your pages and FAQs to match real conversational questions, so AI engines pull your answers when homeowners ask.'
      },
      {
        icon: <Link2 size={20} />,
        title: 'Brand Mentions & Citations',
        teaser: 'Citations and structured data built for AI platforms.',
        detail: 'AI engines recommend businesses they see mentioned consistently across the web. We build those citations and the structured data behind them automatically, week after week.'
      },
      {
        icon: <Youtube size={20} />,
        title: 'Targeted Blogs, FAQs & Videos',
        teaser: 'Content loaded with schema data that feeds AI models.',
        detail: 'Two blog posts every week based on real keyword research, plus YouTube videos with transcripts wired into your page schema, so both Google and AI engines understand exactly what your content covers.'
      }
    ],
    insight: 'More homeowners every day ask ChatGPT, Gemini, and Perplexity "who is the best restoration company near me." The same authority work that ranks you on Google is what positions you to be the answer they get.'
  },
  {
    key: 'ads',
    label: 'Paid Ads & PPC',
    icon: <Megaphone size={18} />,
    cards: [
      {
        icon: <BadgeCheck size={20} />,
        title: 'Google LSA Management',
        teaser: 'Your Local Services Ads and Google Screened badge, handled.',
        detail: 'We manage your Google Local Services Ads, keep your Google Screened badge active, and keep your leads verified, so the ads budget goes to real jobs.'
      },
      {
        icon: <Crosshair size={20} />,
        title: 'PPC Keyword Targeting',
        teaser: 'Negative keywords and high priority terms stop wasted spend.',
        detail: 'Most wasted ad spend comes from the wrong clicks. We set negative keywords and prioritize the searches that actually become jobs, so you stop paying for the ones that never would.'
      },
      {
        icon: <ListChecks size={20} />,
        title: 'Call Tracking & Recording',
        teaser: 'Dynamic numbers match every lead to its campaign.',
        detail: 'Every campaign gets its own tracking number, so you know exactly which dollar produced which call. Recordings show you how every lead was handled.'
      },
      {
        icon: <PhoneCall size={20} />,
        title: '24/7 AI Receptionist',
        teaser: 'Never miss an expensive ad click.',
        detail: 'Ad clicks cost real money, and they call at 2am. Your AI receptionist answers instantly and books the job, so paid leads never ring out.'
      }
    ],
    insight: 'The average restoration job is worth $15,000. One extra booked call can pay for a year of your marketing.'
  }
];

export default function VisibilityPillars() {
  const [active, setActive] = useState('local');
  const [open, setOpen] = useState<string | null>(null);
  const pillar = pillars.find(p => p.key === active)!;

  return (
    <section id="visibility-pillars" className="py-20 md:py-28 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#fafbfe] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            How It Actually Works
          </span>
          <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-extrabold text-slate-900 mb-5 tracking-tight leading-[1.1]">
            Three Ways We{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 pb-[0.12em] -mb-[0.12em]">Boost Your Visibility</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-slate-600 leading-relaxed font-medium max-w-2xl">
            Dominate local maps, get chosen by AI answers, and run ads that pay for themselves. Click any card to see how it works.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
          {pillars.map(p => (
            <button
              key={p.key}
              onClick={() => { setActive(p.key); setOpen(null); }}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-[14px] sm:text-[15px] font-bold transition-all border ${
                active === p.key
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-lg shadow-blue-500/25'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-700 shadow-sm'
              }`}
            >
              {p.icon}
              {p.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {pillar.cards.map(card => {
            const id = `${pillar.key}:${card.title}`;
            const isOpen = open === id;
            return (
              <button
                key={id}
                onClick={() => setOpen(isOpen ? null : id)}
                aria-expanded={isOpen}
                className={`text-left bg-white border rounded-2xl p-5 transition-all duration-300 relative overflow-hidden group ${
                  isOpen ? 'border-blue-300 shadow-xl shadow-blue-500/10' : 'border-slate-200/70 shadow-sm hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'bg-blue-50 border-blue-100/60 text-blue-700'
                  }`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[16px] font-extrabold text-slate-900 leading-snug">{card.title}</h3>
                      <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </div>
                    <p className="text-[13.5px] text-slate-500 font-medium leading-snug mt-1">{card.teaser}</p>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed border-t border-slate-100 pt-3">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Insight */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 md:p-7 shadow-xl shadow-blue-900/15 flex items-start gap-4 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="w-11 h-11 rounded-full bg-white/15 border border-white/25 flex items-center justify-center shrink-0 text-yellow-300">
              <Lightbulb size={22} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-blue-100 uppercase tracking-[0.18em] mb-1.5">Did You Know</p>
              <p className="text-[15.5px] md:text-[17px] text-white font-medium leading-relaxed">{pillar.insight}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
