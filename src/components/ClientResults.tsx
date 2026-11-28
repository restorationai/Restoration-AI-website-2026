"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

type Shot = { src: string; w: number; h: number; alt: string; caption: React.ReactNode };

const ranks: Shot[] = [
  { src: '/results/ranks/sioux-falls-water.webp', w: 1200, h: 892, alt: 'Rank map: water damage restoration, 100 percent of the area in the top 3', caption: <>Water damage restoration: <b>100%</b> of the area in the top 3</> },
  { src: '/results/ranks/corona.webp', w: 1200, h: 926, alt: 'Rank map: emergency plumbing, up 42 points since Aug 27', caption: <>Emergency plumbing: <b>up 42 points</b> since Aug 27</> },
  { src: '/results/ranks/austin-roofing.webp', w: 1200, h: 892, alt: 'Rank map: roofing repair, 94 percent of the area in the top 3', caption: <>Roofing repair: <b>94%</b> in the top 3</> },
  { src: '/results/ranks/american-fork.webp', w: 1200, h: 879, alt: 'Rank map: water damage repair, 78 percent of the area in the top 3', caption: <>Water damage repair: <b>78%</b> in the top 3</> },
  { src: '/results/ranks/sioux-falls-fire.webp', w: 1200, h: 892, alt: 'Rank map: fire damage restoration, 100 percent of the area in the top 3', caption: <>Fire damage restoration: <b>100%</b> in the top 3</> },
];

const wins: Shot[] = [
  { src: '/results/wins/m49.webp', w: 1386, h: 466, alt: 'Client text: just got my first water damage job from your efforts', caption: <><b>First big job</b> from the work we did</> },
  { src: '/results/wins/m62.webp', w: 1125, h: 299, alt: 'Client text: we showed up 3rd and then 2nd on Google', caption: <>Showing up <b>2nd and 3rd</b> on Google</> },
  { src: '/results/wins/m33.webp', w: 1125, h: 219, alt: 'Client text: we came up on one of the top spots near Corona', caption: <>One of the <b>top spots</b> in their city</> },
  { src: '/results/wins/m64.webp', w: 1263, h: 809, alt: 'Client text: we received a call saying ChatGPT recommended us', caption: <>A customer called because <b>ChatGPT recommended them</b></> },
  { src: '/results/wins/m35.webp', w: 1124, h: 160, alt: 'Client text: something you guys changed got us a call', caption: <>Ad calls <b>started coming in again</b></> },
  { src: '/results/wins/m44.webp', w: 1124, h: 100, alt: 'Client text: where I see you guys really shine is the website creation', caption: <>"Where you <b>really shine</b> is the website"</> },
];

function Card({ shot, onOpen, className = '' }: { shot: Shot; onOpen: (s: Shot) => void; className?: string }) {
  return (
    <figure className={`bg-white border border-slate-200/70 rounded-2xl shadow-sm overflow-hidden ${className}`}>
      <button type="button" onClick={() => onOpen(shot)} className="block w-full cursor-zoom-in" aria-label={`Enlarge: ${shot.alt}`}>
        <img src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading="lazy" decoding="async" className="w-full h-auto block" />
      </button>
      <figcaption className="px-4 py-3 text-[13.5px] text-slate-600 font-medium leading-snug border-t border-slate-100 [&_b]:text-slate-900 [&_b]:font-extrabold">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

export default function ClientResults() {
  const [open, setOpen] = useState<Shot | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section id="testimonials" className="pt-10 pb-12 relative font-sans scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-9 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Client Wins
          </span>
          <h2 className="text-[34px] md:text-[44px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Real Results From{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 pb-[0.12em] -mb-[0.12em]">Real Clients</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">
            A live look at client rankings, street by street. Tap any image to see it bigger.
          </p>
        </div>

        {/* Rank maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {ranks.map((s, i) => (
            <Card key={s.src} shot={s} onOpen={setOpen} className={i === 0 ? 'md:col-span-2 lg:col-span-3' : i === 1 ? 'lg:col-span-3' : 'lg:col-span-2'} />
          ))}
        </div>

        {/* Client texts */}
        <h3 className="text-center text-[22px] md:text-[26px] font-extrabold text-slate-900 tracking-tight mt-12 mb-2">
          What Clients Are <span className="text-blue-600">Telling Us</span>
        </h3>
        <p className="text-center text-[15px] text-slate-600 font-medium mb-6">Real messages from real clients.</p>
        <div className="columns-1 md:columns-2 gap-4 [&>figure]:mb-4 [&>figure]:break-inside-avoid">
          {wins.map(s => <Card key={s.src} shot={s} onOpen={setOpen} />)}
        </div>

        <div className="flex justify-center gap-3 flex-wrap mt-6">
          {[['Zero', 'contracts'], ['94%', 'client retention to date'], ['Cancel', 'anytime']].map(([a, b]) => (
            <div key={b} className="bg-white border border-slate-200 rounded-full px-4 py-2 text-[14px] text-slate-600 font-medium shadow-sm">
              <b className="text-slate-900 font-extrabold">{a}</b> {b}
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/85 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
        >
          <img src={open.src} alt={open.alt} className="max-w-full max-h-full rounded-xl shadow-2xl bg-white" />
          <button type="button" aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 flex items-center justify-center">
            <X size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
