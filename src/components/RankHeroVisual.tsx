"use client";

import React from 'react';

/**
 * Hero proof visual: local SEO before/after heatmap card with an
 * overlapping ChatGPT recommendation panel. Rebuilt from the Rank AI
 * landing page composite using the uncropped source images so nothing
 * is cut off inside the frame.
 */
export default function RankHeroVisual() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-white">
      <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/70 px-[4%] py-[4.5%] flex items-center">
        <img
          src="/rank-heatmap-card.webp"
          alt="Local SEO ranking heatmap showing low visibility before and top rankings after"
          className="w-[44%] rounded-xl shadow-lg shadow-slate-300/50 relative z-0"
          loading="eager"
        />
        <img
          src="/rank-chatgpt-card.webp"
          alt="ChatGPT recommending a restoration company as the top answer for best restoration company near me"
          className="w-[54%] -ml-[6%] rounded-2xl shadow-2xl shadow-slate-500/30 relative z-10"
          loading="eager"
        />
      </div>
    </div>
  );
}
