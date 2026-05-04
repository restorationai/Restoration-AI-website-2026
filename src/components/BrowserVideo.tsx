"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2 } from 'lucide-react';

export default function BrowserVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInteracted, setIsInteracted] = useState(false);

  const handleInteraction = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsInteracted(true);
    }
  };

  return (
    <div 
      className="relative w-full max-w-[1200px] mx-auto flex flex-col rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-white group cursor-pointer hover:shadow-2xl transition-shadow duration-500"
      onClick={handleInteraction}
    >
      
      {/* Video Content Area */}
      <div className="w-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
        
        <video
          ref={videoRef}
          className="w-full h-auto object-contain block"
          src="/homepage-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={isInteracted}
        />

        <AnimatePresence>
          {!isInteracted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4 bg-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg">
                  <Volume2 size={28} className="ml-1" />
                </div>
                <span className="text-white font-bold text-sm md:text-lg tracking-wide uppercase text-center">
                  Tap to Unmute & Watch
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
