"use client";

import React, { useState } from 'react';
import { Youtube, Linkedin, Share2, FileText, CalendarCheck2, LineChart, BarChart3 } from 'lucide-react';

/* Ported from the rank.ai Content Strategy section. Same series shapes,
   same peak values (720,435 total), Blog recolored yellow for contrast
   with GBP Posts green. */

type Channel = {
  key: string; label: string; color: string; softBg: string; softBorder: string; softText: string;
  icon?: React.ReactNode; peak: number; points: number[];
};

const X_ICON = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const channels: Channel[] = [
  {
    key: 'youtube', label: 'YouTube', color: '#ef4444',
    softBg: 'bg-red-50', softBorder: 'border-red-200', softText: 'text-red-600',
    icon: <Youtube size={14} />, peak: 110000,
    points: [0, 45, 95, 105, 195, 175, 192]
  },
  {
    key: 'linkedin', label: 'LinkedIn', color: '#3b82f6',
    softBg: 'bg-blue-50', softBorder: 'border-blue-200', softText: 'text-blue-600',
    icon: <Linkedin size={14} />, peak: 85000,
    points: [0, 57, 75, 110, 90, 170, 150]
  },
  {
    key: 'x', label: 'X.com', color: '#111827',
    softBg: 'bg-slate-100', softBorder: 'border-slate-300', softText: 'text-slate-800',
    icon: X_ICON, peak: 140000,
    points: [0, 75, 85, 95, 165, 200, 185]
  },
  {
    key: 'gbp', label: 'GBP Posts', color: '#10b981',
    softBg: 'bg-emerald-50', softBorder: 'border-emerald-200', softText: 'text-emerald-600',
    icon: <Share2 size={14} />, peak: 185435,
    points: [0, 90, 105, 90, 145, 165, 160]
  },
  {
    key: 'blog', label: 'Blog', color: '#f59e0b',
    softBg: 'bg-amber-50', softBorder: 'border-amber-300', softText: 'text-amber-600',
    icon: <FileText size={14} />, peak: 200000,
    points: [0, 30, 35, 70, 115, 115, 125]
  }
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const W = 800, H = 300, PADL = 56, PADR = 16, PADT = 14, PADB = 34;
const MAXV = 210;

const xPos = (i: number) => PADL + (i * (W - PADL - PADR)) / (DAYS.length - 1);
const yPos = (v: number) => PADT + (1 - v / MAXV) * (H - PADT - PADB);

const cards = [
  {
    icon: <FileText size={20} />, bubble: 'bg-teal-50 border-teal-100 text-teal-600',
    title: 'Articles with Link Exchange',
    text: 'Deploy SEO optimized blog posts built for conversion. Our link exchange network builds backlink authority automatically.'
  },
  {
    icon: <Share2 size={20} />, bubble: 'bg-blue-50 border-blue-100 text-blue-600',
    title: 'Social Media Citations',
    text: 'Publish citation rich updates across key local business pages and social channels to build trusted search engine footprints.'
  },
  {
    icon: <Youtube size={20} />, bubble: 'bg-red-50 border-red-100 text-red-600',
    title: 'YouTube Videos',
    text: 'Establish direct search visibility on YouTube and Google Video search. Expand your local reach with targeted, optimized video content.'
  },
  {
    icon: <CalendarCheck2 size={20} />, bubble: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    title: 'GBP Posts',
    text: 'Keep your local listing hyper active. Automate regular Google Business Profile posts and updates to rank #1 in the local 3 pack.'
  }
];

export default function ContentPerformance() {
  const [active, setActive] = useState<Record<string, boolean>>(
    Object.fromEntries(channels.map(c => [c.key, true]))
  );
  const [mode, setMode] = useState<'line' | 'bar'>('line');

  const total = channels.reduce((s, c) => s + (active[c.key] ? c.peak : 0), 0);
  const shown = channels.filter(c => active[c.key]);

  return (
    <section id="content-strategy" className="py-14 md:py-16 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d3e5f9] to-transparent pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-9 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
            <BarChart3 size={12} />
            Content Strategy
          </span>
          <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-extrabold text-slate-900 mb-5 tracking-tight leading-[1.1]">
            We Generate Content{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 pb-[0.12em] -mb-[0.12em]">That Helps You Rank</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-slate-600 leading-relaxed font-medium max-w-2xl">
            Build local authority with automated SEO optimized blog posts, citation networks, and multi channel content.
          </p>
        </div>

        <div className="lg:flex lg:gap-5 lg:items-stretch">

        {/* Chart card */}
        <div className="flex-1 min-w-0 bg-white border border-slate-200/70 rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-7">
          <div className="flex flex-col gap-3 mb-3">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-slate-900">Multi Channel Content Performance</h3>
              <p className="text-[30px] md:text-[36px] font-black text-slate-900 leading-tight">
                {total.toLocaleString()}
                <span className="text-[14px] font-semibold text-slate-500 ml-2">Weekly Views</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {channels.map(c => (
                <button
                  key={c.key}
                  onClick={() => setActive(a => ({ ...a, [c.key]: !a[c.key] }))}
                  aria-pressed={active[c.key]}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12.5px] font-bold border transition-all ${
                    active[c.key]
                      ? `${c.softBg} ${c.softBorder} ${c.softText}`
                      : 'bg-white border-slate-200 text-slate-400 opacity-60'
                  }`}
                >
                  {c.icon}
                  {c.label}
                </button>
              ))}
              <span className="hidden sm:block w-px h-6 bg-slate-200 mx-1" />
              <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setMode('line')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12.5px] font-bold transition-colors ${mode === 'line' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
                >
                  <LineChart size={13} /> Line
                </button>
                <button
                  onClick={() => setMode('bar')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12.5px] font-bold transition-colors ${mode === 'bar' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
                >
                  <BarChart3 size={13} /> Bar
                </button>
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[560px] h-auto" role="img" aria-label="Weekly content views by channel">
              <defs>
                {channels.map(c => (
                  <linearGradient key={c.key} id={`grad-${c.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={c.color} stopOpacity="0.14" />
                    <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>

              {/* gridlines + y labels */}
              {[0, 52.5, 105, 157.5, 210].map(v => (
                <g key={v}>
                  <line x1={PADL} x2={W - PADR} y1={yPos(v)} y2={yPos(v)} stroke="#e2e8f0" strokeWidth="1" strokeDasharray={v === 0 ? '' : '3 4'} />
                  <text x={PADL - 10} y={yPos(v) + 4} textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">
                    {v === 0 ? '0' : `${Math.round((v / 210) * 75)}k`}
                  </text>
                </g>
              ))}
              {/* x labels */}
              {DAYS.map((d, i) => (
                <text key={d} x={xPos(i)} y={H - 10} textAnchor="middle" fontSize="11" fill="#94a3b8" fontWeight="600">{d}</text>
              ))}

              {mode === 'line' ? (
                shown.map(c => {
                  const pts = c.points.map((v, i) => `${xPos(i)},${yPos(v)}`).join(' ');
                  const area = `M ${xPos(0)} ${yPos(0)} L ${c.points.map((v, i) => `${xPos(i)} ${yPos(v)}`).join(' L ')} L ${xPos(6)} ${yPos(0)} Z`;
                  return (
                    <g key={c.key}>
                      <path d={area} fill={`url(#grad-${c.key})`} />
                      <polyline points={pts} fill="none" stroke={c.color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
                      {c.points.map((v, i) => (
                        <circle key={i} cx={xPos(i)} cy={yPos(v)} r="4" fill="#fff" stroke={c.color} strokeWidth="2.5" />
                      ))}
                    </g>
                  );
                })
              ) : (
                DAYS.map((_, di) => {
                  const bw = 10, gap = 3;
                  const groupW = shown.length * bw + (shown.length - 1) * gap;
                  return (
                    <g key={di}>
                      {shown.map((c, ci) => {
                        const x = xPos(di) - groupW / 2 + ci * (bw + gap);
                        const y = yPos(c.points[di]);
                        return (
                          <rect key={c.key} x={x} y={y} width={bw} height={Math.max(0, yPos(0) - y)} rx="3" fill={c.color} opacity="0.9" />
                        );
                      })}
                    </g>
                  );
                })
              )}
            </svg>
          </div>
        </div>

        {/* Cards: stacked beside the chart on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-6 lg:mt-0 lg:w-[380px] lg:shrink-0">
          {cards.map(card => (
            <div key={card.title} className="bg-white border border-slate-200/70 rounded-2xl shadow-sm p-4.5 lg:p-4 flex items-start gap-3.5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 ${card.bubble}`}>
                {card.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-extrabold text-slate-900 leading-snug mb-1">{card.title}</h3>
                <p className="text-[12.5px] text-slate-500 font-medium leading-snug">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        </div>

      </div>
    </section>
  );
}
