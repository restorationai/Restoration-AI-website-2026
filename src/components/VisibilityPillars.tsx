"use client";

import React, { useState } from 'react';
import { MapPin, Sparkles, Megaphone, ChevronDown, MessageSquare, Star, FileText, Bot, Link2, Youtube, BadgeCheck, Crosshair, PhoneCall, ListChecks, X, MousePointerClick, LocateFixed } from 'lucide-react';

/* ---------- pillar color systems (rank.ai style: green / indigo / red) ---------- */

type Palette = {
  tabActive: string; tabIdle: string; icon: string; iconOpen: string; chip: string; chipVal: string;
  borderOpen: string; hover: string; dot: string; bar: string;
};

const palettes: Record<string, Palette> = {
  local: {
    tabActive: 'bg-gradient-to-r from-emerald-500 to-emerald-700 shadow-emerald-500/25',
    tabIdle: 'bg-white text-emerald-700 border-emerald-300 shadow-lg shadow-emerald-400/40 hover:shadow-emerald-400/60 hover:border-emerald-400',
    icon: 'bg-emerald-50 border-emerald-100/70 text-emerald-600',
    iconOpen: 'bg-emerald-600 text-white',
    chip: 'bg-emerald-50 border-emerald-100', chipVal: 'text-emerald-700',
    borderOpen: 'border-emerald-300 shadow-emerald-500/10', hover: 'hover:border-emerald-300',
    dot: 'bg-emerald-500', bar: 'from-emerald-600 to-emerald-400'
  },
  ai: {
    tabActive: 'bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-indigo-500/25',
    tabIdle: 'bg-white text-indigo-700 border-indigo-300 shadow-lg shadow-indigo-400/40 hover:shadow-indigo-400/60 hover:border-indigo-400',
    icon: 'bg-indigo-50 border-indigo-100/70 text-indigo-700',
    iconOpen: 'bg-indigo-600 text-white',
    chip: 'bg-indigo-50 border-indigo-100', chipVal: 'text-indigo-700',
    borderOpen: 'border-indigo-300 shadow-indigo-500/10', hover: 'hover:border-indigo-300',
    dot: 'bg-indigo-500', bar: 'from-indigo-600 to-indigo-400'
  },
  ads: {
    tabActive: 'bg-gradient-to-r from-red-500 to-rose-700 shadow-red-500/25',
    tabIdle: 'bg-white text-red-600 border-red-300 shadow-lg shadow-red-400/40 hover:shadow-red-400/60 hover:border-red-400',
    icon: 'bg-red-50 border-red-100/70 text-red-600',
    iconOpen: 'bg-red-600 text-white',
    chip: 'bg-red-50 border-red-100', chipVal: 'text-red-700',
    borderOpen: 'border-red-300 shadow-red-500/10', hover: 'hover:border-red-300',
    dot: 'bg-red-500', bar: 'from-red-600 to-rose-400'
  }
};

/* ---------- visual panels (recreated from the rank.ai dashboards) ---------- */

const RankGrid = () => {
  const rows = [[1, 1, 2, 1, 4], [2, 1, 1, 5, 8], [1, 3, 1, 7, 9]];
  const color = (n: number) => n <= 2 ? 'bg-emerald-500' : n === 3 ? 'bg-emerald-400' : n <= 6 ? 'bg-orange-400' : 'bg-red-500';
  return (
    <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[12px] font-bold text-slate-800">Local Rank Tracking</p>
        <div className="flex gap-1.5">
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">85% Maps</span>
          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">12% Org</span>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
        {rows.map((r, ri) => (
          <div key={ri} className="flex justify-between mb-2 last:mb-0">
            {r.map((n, ci) => (
              <div key={ci} className={`w-9 h-9 rounded-full ${color(n)} text-white text-[13px] font-black flex items-center justify-center shadow-sm`}>{n}</div>
            ))}
          </div>
        ))}
      </div>
      <p className="text-[10.5px] font-bold text-slate-400 mt-2.5 text-center uppercase tracking-widest">Your rank, block by block</p>
    </div>
  );
};

const AiVisibility = () => (
  <div className="w-full max-w-[310px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[12px] font-bold text-slate-800 mb-3">AI Search Visibility</p>
    {[
      ['/rank-assets/chatgpt.webp', 'ChatGPT', '#1', '98.4%'],
      ['/rank-assets/gemini.webp', 'Google Gemini', '#1', '92.1%'],
      ['/rank-assets/perplexity.webp', 'Perplexity AI', '#2', '88.0%'],
      ['/rank-assets/claude.webp', 'Claude', '#2', '84.5%'],
    ].map(([img, name, rank, pct]) => (
      <div key={name} className="flex items-center gap-2.5 border-t border-slate-100 py-2.5 last:pb-0">
        <span className="text-[12px] font-black text-slate-900 w-6">{rank}</span>
        <img src={img} alt={name} className="w-5 h-5 object-contain" loading="lazy" />
        <span className="text-[12.5px] font-bold text-slate-700 flex-1">{name}</span>
        <span className="text-[11.5px] font-bold text-emerald-600">▲ {pct}</span>
      </div>
    ))}
  </div>
);

const PpcLeads = () => (
  <div className="w-full max-w-[310px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <p className="text-[12px] font-bold text-slate-800">PPC & Ads Live Leads</p>
      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">✓ Google Screened</span>
    </div>
    <div className="grid grid-cols-2 gap-2.5 mb-3">
      <div className="border border-slate-200 rounded-xl p-3">
        <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest">LSA Calls</p>
        <p className="text-[22px] font-black text-slate-900 leading-tight">28</p>
        <p className="text-[10.5px] font-bold text-emerald-600">▲ 14.8%</p>
      </div>
      <div className="border border-slate-200 rounded-xl p-3">
        <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest">Avg. CPL</p>
        <p className="text-[22px] font-black text-slate-900 leading-tight">$42</p>
        <p className="text-[10.5px] font-bold text-emerald-600">▼ 8.2%</p>
      </div>
    </div>
    <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Active Lead Campaigns</p>
    {[['Water Damage Chicago', '12.4% Conv.'], ['Fire Damage Cleanup', '10.8% Conv.']].map(([n, c]) => (
      <div key={n} className="flex items-center justify-between py-1.5 border-t border-slate-100">
        <span className="flex items-center gap-2 text-[12px] font-bold text-slate-700"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{n}</span>
        <span className="text-[11.5px] font-bold text-red-600">{c}</span>
      </div>
    ))}
  </div>
);

const ChatMock = () => (
  <div className="w-full max-w-[320px] bg-slate-900 rounded-2xl p-4 shadow-lg">
    <div className="flex items-center gap-2 mb-3">
      <img src="/rank-assets/chatgpt.webp" alt="ChatGPT" className="w-5 h-5 rounded-full" loading="lazy" />
      <span className="text-[12px] font-bold text-slate-300">ChatGPT</span>
    </div>
    <div className="bg-slate-700/70 rounded-xl rounded-tr-sm px-3 py-2 text-[12.5px] text-slate-100 font-medium mb-2 ml-8">
      Who is the best restoration company near me?
    </div>
    <div className="bg-slate-800 border border-slate-700 rounded-xl rounded-tl-sm px-3 py-2 text-[12.5px] text-slate-200 font-medium mr-6">
      The top recommendation is <span className="font-bold text-white">Brooklyn Restoration Pros</span>, rated 4.9 with 24/7 emergency response.
    </div>
  </div>
);

const CitationChart = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <div className="flex items-end justify-between mb-1">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Citations Built</p>
        <p className="text-[26px] font-black text-slate-900 leading-tight">11,815</p>
      </div>
      <span className="text-[11px] font-bold text-emerald-600">▲ growing</span>
    </div>
    <div className="flex items-end gap-1.5 h-[90px] mt-2">
      {[18, 26, 38, 47, 61, 78, 100].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-md" style={{ height: `${h}%` }} />
        </div>
      ))}
    </div>
    <div className="flex justify-between mt-1 text-[9px] font-bold text-slate-400">
      <span>Month 1</span><span>Month 7</span>
    </div>
  </div>
);

const ContentDash = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Multi Channel Content</p>
    <p className="text-[26px] font-black text-slate-900 leading-tight mb-3">720,435 <span className="text-[12px] font-bold text-slate-500">weekly views</span></p>
    {[['Articles with Link Exchange', 90], ['YouTube Videos', 72], ['Social Media Citations', 58], ['GBP Posts', 44]].map(([label, w]) => (
      <div key={label as string} className="mb-2">
        <p className="text-[11px] font-bold text-slate-600 mb-1">{label}</p>
        <div className="h-2 bg-slate-100 rounded-full"><div className="h-2 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full" style={{ width: `${w}%` }} /></div>
      </div>
    ))}
  </div>
);

const GbpPost = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
    <img src="/rank-assets/gbp_photo_1.webp" alt="Restoration job site photo posted to Google Business Profile" className="w-full h-[130px] object-cover" loading="lazy" />
    <div className="p-3.5">
      <p className="text-[13px] font-bold text-slate-800 leading-snug">24/7 Emergency Water Extraction, Now Serving Your Area</p>
      <div className="flex items-center gap-2 mt-2.5">
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">Posted this week ✓</span>
        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">✦ Auto published</span>
      </div>
    </div>
  </div>
);

const QAMock = () => (
  <div className="w-full max-w-[310px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Questions & Answers</p>
    <div className="flex gap-2 mb-2">
      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-[11px] font-black flex items-center justify-center shrink-0">Q</div>
      <p className="text-[12.5px] font-bold text-slate-800 leading-snug">Do you offer 24/7 emergency water extraction?</p>
    </div>
    <div className="flex gap-2">
      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">A</div>
      <p className="text-[12.5px] font-medium text-slate-600 leading-snug">Yes. Crews are on call around the clock, including holidays, with typical arrival under 60 minutes.</p>
    </div>
    <p className="text-[10px] font-bold text-emerald-600 mt-3">✦ Powered by Rank AI</p>
  </div>
);

const ReviewGrowth = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <div className="flex items-center justify-between mb-3">
      <div className="text-center flex-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Before</p>
        <p className="text-[24px] font-black text-slate-400 leading-tight">6</p>
        <p className="text-[10px] font-bold text-slate-400">reviews</p>
      </div>
      <span className="text-emerald-600 text-xl font-black px-2">→</span>
      <div className="text-center flex-1">
        <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">After</p>
        <p className="text-[24px] font-black text-slate-900 leading-tight">120</p>
        <div className="flex justify-center gap-0.5 mt-0.5">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />)}
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
      <span className="text-[11.5px] font-bold text-slate-600">Review velocity</span>
      <span className="text-[11.5px] font-bold text-emerald-600">▲ 4 new this week</span>
    </div>
  </div>
);

const KeywordTargets = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Keyword Targeting</p>
    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 mb-2">
      <span className="text-[12px] font-bold text-slate-800">water damage restoration</span>
      <span className="text-[10.5px] font-bold text-emerald-700">3,142/mo</span>
    </div>
    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 mb-2">
      <span className="text-[12px] font-bold text-slate-800">emergency flood cleanup</span>
      <span className="text-[10.5px] font-bold text-emerald-700">1,890/mo</span>
    </div>
    {['free water removal', 'diy flood cleanup'].map(k => (
      <div key={k} className="flex items-center justify-between bg-red-50/60 border border-red-100 rounded-xl px-3 py-2 mb-2 last:mb-0">
        <span className="text-[12px] font-bold text-slate-400 line-through">{k}</span>
        <span className="text-[10.5px] font-bold text-red-500">blocked</span>
      </div>
    ))}
  </div>
);

const CallTracking = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Calls by Campaign</p>
    {[['Google LSA', '(718) 555-0142', 86], ['Google Ads', '(718) 555-0177', 64], ['Organic / Maps', '(718) 555-0199', 100]].map(([name, num, w]) => (
      <div key={name as string} className="mb-2.5 last:mb-0">
        <div className="flex justify-between text-[11.5px] font-bold text-slate-700 mb-1">
          <span>{name}</span><span className="text-slate-400 font-medium">{num}</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full"><div className="h-2 bg-gradient-to-r from-red-600 to-rose-400 rounded-full" style={{ width: `${w}%` }} /></div>
      </div>
    ))}
  </div>
);

const ReceptionistMock = () => (
  <div className="w-full max-w-[300px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
        <PhoneCall size={18} />
      </div>
      <div>
        <p className="text-[13px] font-bold text-slate-800 leading-tight">Incoming ad call</p>
        <p className="text-[11px] font-medium text-slate-500">2:14 AM · from Google LSA</p>
      </div>
      <span className="ml-auto text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-1">Answered</span>
    </div>
    <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-[12px] font-medium text-slate-600 leading-snug">
      "My basement is flooding right now!"
    </div>
    <div className="mt-2 bg-emerald-600 rounded-xl px-3 py-2 text-[12px] font-bold text-white leading-snug">
      Job booked. Crew notified with the full damage summary.
    </div>
  </div>
);

/* ---------- content ---------- */

type Card = { icon: React.ReactNode; title: string; teaser: string; detail: string; bullets: string[]; stats: [string, string][]; visual: React.ReactNode };
type Pillar = { key: string; label: string; icon: React.ReactNode; cards: Card[] };

const pillars: Pillar[] = [
  {
    key: 'local', label: 'Local SEO', icon: <MapPin size={18} />,
    cards: [
      {
        icon: <LocateFixed size={20} />, title: 'Local Rank Tracking',
        teaser: 'Map based analytics and street by street performance insights.',
        detail: 'We track your rankings block by block across your entire service area, keyword by keyword, so you can see exactly where you own the map pack and where the next green dot is coming from.',
        bullets: ['Street by street ranking grid', 'Every keyword, every city', 'Updated on autopilot weekly'],
        stats: [['Street level', 'rank grid'], ['Weekly', 'tracking autopilot']],
        visual: <RankGrid />
      },
      {
        icon: <FileText size={20} />, title: 'GBP Content Creation',
        teaser: 'Optimized updates published straight to your Google Business Profile.',
        detail: 'Google rewards active profiles. We auto publish optimized posts, offers, and service announcements every week, so your profile signals a living business instead of an abandoned listing.',
        bullets: ['Weekly optimized GBP posts', 'Offers and service announcements', 'Photos geotagged and uploaded'],
        stats: [['Weekly', 'post cadence'], ['Auto', 'published for you']],
        visual: <GbpPost />
      },
      {
        icon: <MessageSquare size={20} />, title: 'GBP Questions & Answers',
        teaser: 'Pre populated, auto answered FAQs right on Google Maps.',
        detail: 'Homeowners read the Q&A section before they ever call. We pre populate it with the questions they actually ask and answer them instantly, so concerns are handled before your phone rings.',
        bullets: ['Real homeowner questions', 'Instant answers on Maps', 'Insurance and response time covered'],
        stats: [['Instant', 'answers on Maps'], ['Real', 'homeowner questions']],
        visual: <QAMock />
      },
      {
        icon: <Star size={20} />, title: 'Google 5 Star Reviews',
        teaser: 'Automated campaigns for a consistent flow of reviews.',
        detail: 'Finished jobs turn into review requests automatically. A steady weekly flow of five star reviews signals more to Google than a burst of ten reviews once a year.',
        bullets: ['Automated review campaigns', 'Consistent weekly flow', 'One of the heaviest local signals'],
        stats: [['Automated', 'review campaigns'], ['Consistent', 'weekly flow']],
        visual: <ReviewGrowth />
      }
    ]
  },
  {
    key: 'ai', label: 'AI Search', icon: <Sparkles size={18} />,
    cards: [
      {
        icon: <Bot size={20} />, title: 'AI Crawl & Indexing',
        teaser: 'GPTBot, Gemini, and Claude crawlers index your site successfully.',
        detail: 'AI assistants send their own crawlers to read your website. We make sure your pages, llms.txt file, and schema markup are fully readable, so every major AI engine knows exactly what you do and where you do it.',
        bullets: ['GPTBot, Gemini and Claude ready', 'llms.txt built for AI crawlers', 'Schema markup on every page'],
        stats: [['llms.txt', 'built for AI crawlers'], ['Schema', 'on every page']],
        visual: <AiVisibility />
      },
      {
        icon: <MessageSquare size={20} />, title: 'Conversation Optimization',
        teaser: 'Site structure aligned with how people actually talk to AI.',
        detail: 'Nobody types keywords into ChatGPT. They ask full questions. We structure your pages and FAQs to match real conversational questions, so when a homeowner asks who to call, AI engines pull your answers.',
        bullets: ['FAQs match real questions', 'Structured for AI answers', 'Built around how homeowners talk'],
        stats: [['FAQ', 'schema everywhere'], ['Conversational', 'page structure']],
        visual: <ChatMock />
      },
      {
        icon: <Link2 size={20} />, title: 'Brand Mentions & Citations',
        teaser: 'Citations and structured data built for AI platforms.',
        detail: 'AI engines recommend businesses they see mentioned consistently across the web. We build those citations and the structured data behind them automatically, week after week.',
        bullets: ['Automated weekly citations', 'Structured data included', 'Tracked across 4 AI platforms'],
        stats: [['Weekly', 'citation building'], ['4 platforms', 'tracked']],
        visual: <CitationChart />
      },
      {
        icon: <Youtube size={20} />, title: 'Targeted Blogs, FAQs & Videos',
        teaser: 'Content loaded with schema data that feeds AI models.',
        detail: 'Two blog posts every week based on real keyword research, plus YouTube videos with transcripts wired into your page schema. Both Google and AI engines understand exactly what your content covers.',
        bullets: ['2 keyword researched blogs weekly', 'YouTube with schema transcripts', 'Feeds Google and AI models'],
        stats: [['2 blogs', 'every week'], ['YouTube', 'transcripts in schema']],
        visual: <ContentDash />
      }
    ]
  },
  {
    key: 'ads', label: 'Paid Ads & PPC', icon: <Megaphone size={18} />,
    cards: [
      {
        icon: <BadgeCheck size={20} />, title: 'Google LSA Management',
        teaser: 'Your Local Services Ads and Google Screened badge, handled.',
        detail: 'We manage your Google Local Services Ads end to end, keep your Google Screened badge active, and keep your leads verified, so your ad budget goes to real jobs instead of junk calls.',
        bullets: ['Google Screened kept active', 'Only verified leads count', 'Managed end to end'],
        stats: [['Screened', 'badge kept active'], ['Verified', 'leads only']],
        visual: <PpcLeads />
      },
      {
        icon: <Crosshair size={20} />, title: 'PPC Keyword Targeting',
        teaser: 'Negative keywords and high priority terms stop wasted spend.',
        detail: 'Most wasted ad spend comes from the wrong clicks. We prioritize the searches that actually become jobs and block the ones that never will, so every dollar chases a real emergency.',
        bullets: ['Negative keywords set', 'High priority terms targeted', 'No budget on junk searches'],
        stats: [['Negative', 'keywords set'], ['Priority', 'terms targeted']],
        visual: <KeywordTargets />
      },
      {
        icon: <ListChecks size={20} />, title: 'Call Tracking & Recording',
        teaser: 'Dynamic numbers match every lead to its campaign.',
        detail: 'Every campaign gets its own tracking number, so you know exactly which dollar produced which call. Recordings show how every lead was handled, from ad click to booked job.',
        bullets: ['Unique number per campaign', 'Every call recorded', 'Know which dollar worked'],
        stats: [['Per campaign', 'tracking numbers'], ['Recorded', 'every call']],
        visual: <CallTracking />
      },
      {
        icon: <PhoneCall size={20} />, title: '24/7 AI Receptionist',
        teaser: 'Never miss an expensive ad click.',
        detail: 'Ad clicks cost real money, and emergencies call at 2am. Your AI receptionist answers instantly, collects the damage details, and books the job, so paid leads never ring out.',
        bullets: ['Answers in seconds, 24/7', 'Books the job on the call', 'Included at no extra cost'],
        stats: [['24/7', 'instant answer'], ['Included', 'at no extra cost']],
        visual: <ReceptionistMock />
      }
    ]
  }
];

/* ---------- component ---------- */

export default function VisibilityPillars() {
  const [active, setActive] = useState('local');
  const [open, setOpen] = useState<number | null>(null);
  const pillar = pillars.find(p => p.key === active)!;
  const pal = palettes[active];

  return (
    <section id="visibility-pillars" className="py-14 md:py-20 relative font-sans">
      

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
            Dominate local maps, get chosen by AI answers, and run ads that pay for themselves. Click any tile to open it up.
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
                  ? `${palettes[p.key].tabActive} text-white border-transparent shadow-lg`
                  : palettes[p.key].tabIdle
              }`}
            >
              {p.icon}
              {p.label}
            </button>
          ))}
        </div>

        {/* Desktop: expanding tile row */}
        <div className="hidden lg:flex gap-3 items-stretch h-[460px]">
          {pillar.cards.map((card, i) => {
            const isOpen = open === i;
            const collapsed = open !== null && !isOpen;
            return (
              <div
                key={`${pillar.key}:${card.title}`}
                onClick={() => setOpen(isOpen ? null : i)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(isOpen ? null : i); } }}
                style={{ flexGrow: isOpen ? 6 : collapsed ? 0.001 : 1, flexBasis: collapsed ? '124px' : '0px' }}
                className={`cursor-pointer transition-all duration-500 ease-in-out overflow-hidden rounded-2xl border bg-white relative min-w-0 ${
                  isOpen ? `${pal.borderOpen} shadow-2xl` : `border-slate-200/70 shadow-sm ${pal.hover} hover:shadow-md`
                }`}
              >
                {/* Collapsed mini card */}
                <div className={`absolute inset-0 flex flex-col items-center pt-5 pb-4 px-2 transition-opacity duration-300 ${collapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${pal.icon}`}>
                    {card.icon}
                  </div>
                  <span className="text-[12.5px] font-bold text-slate-700 text-center leading-snug mt-3">{card.title}</span>
                  <span className={`mt-auto inline-flex items-center gap-1 text-[11px] font-bold ${pal.chipVal}`}>
                    <MousePointerClick size={12} /> Open
                  </span>
                </div>

                {/* Closed (default) tile */}
                <div className={`absolute inset-0 p-6 flex flex-col transition-opacity duration-300 ${!isOpen && !collapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <div className={`w-11 h-11 rounded-full border flex items-center justify-center mb-4 ${pal.icon}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-extrabold text-slate-900 leading-snug mb-2">{card.title}</h3>
                  <p className="text-[13px] text-slate-500 font-medium leading-snug mb-4">{card.teaser}</p>
                  <ul className="flex flex-col gap-2.5">
                    {card.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full mt-[6px] shrink-0 ${pal.dot}`} />
                        <span className="text-[13px] font-semibold text-slate-700 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <span className={`mt-auto inline-flex items-center gap-1.5 text-[12px] font-bold ${pal.chipVal}`}>
                    <MousePointerClick size={14} /> Open
                  </span>
                </div>

                {/* Expanded panel */}
                <div className={`absolute inset-0 p-7 flex gap-6 transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0 pointer-events-none'}`}>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${pal.iconOpen}`}>
                        {card.icon}
                      </div>
                      <h3 className="text-[21px] font-extrabold text-slate-900 leading-tight">{card.title}</h3>
                    </div>
                    <p className="text-[14.5px] text-slate-600 font-medium leading-relaxed mb-4">{card.detail}</p>
                    <ul className="flex flex-col gap-2.5 mb-4">
                      {card.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${pal.dot}`} />
                          <span className="text-[14px] font-semibold text-slate-700 leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {card.stats.map(([v, l]) => (
                        <div key={l} className={`border rounded-xl px-3.5 py-2 ${pal.chip}`}>
                          <p className={`text-[14px] font-black leading-tight ${pal.chipVal}`}>{v}</p>
                          <p className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wide">{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[310px] shrink-0 bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-100 rounded-2xl flex items-center justify-center p-4">
                    {card.visual}
                  </div>
                  <button
                    aria-label="Close"
                    onClick={e => { e.stopPropagation(); setOpen(null); }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden flex flex-col gap-4">
          {pillar.cards.map((card, i) => {
            const isOpen = open === i;
            return (
              <button
                key={`${pillar.key}:m:${card.title}`}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`text-left bg-white border rounded-2xl p-5 transition-all duration-300 ${
                  isOpen ? `${pal.borderOpen} shadow-xl` : 'border-slate-200/70 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors ${isOpen ? pal.iconOpen : pal.icon}`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[16px] font-extrabold text-slate-900 leading-snug">{card.title}</h3>
                      <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-[13.5px] text-slate-500 font-medium leading-snug mt-1">{card.teaser}</p>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-[14px] text-slate-700 font-medium leading-relaxed border-t border-slate-100 pt-3 mb-3">{card.detail}</p>
                        <ul className="flex flex-col gap-2 mb-4">
                          {card.bullets.map(b => (
                            <li key={b} className="flex items-start gap-2.5">
                              <span className={`w-1.5 h-1.5 rounded-full mt-[6px] shrink-0 ${pal.dot}`} />
                              <span className="text-[13.5px] font-semibold text-slate-700 leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-center">{card.visual}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
