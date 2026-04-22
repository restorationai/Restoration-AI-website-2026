"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function BrowserVideo() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto flex flex-col rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-white group cursor-pointer hover:shadow-2xl transition-shadow duration-500">
      
      {/* Video Content Area */}
      <div className="w-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
        
        <video 
          className="w-full h-auto object-contain block"
          src="/homepage-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
        />

      </div>
    </div>
  );
}
