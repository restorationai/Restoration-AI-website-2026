"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function BrowserVideo() {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] flex flex-col rounded-[24px] overflow-hidden border border-slate-200 shadow-xl bg-white group cursor-pointer hover:shadow-2xl transition-shadow duration-500">
      
      {/* Video Content Area */}
      <div className="flex-1 bg-slate-50 flex items-center justify-center relative overflow-hidden">
        
        {/* Placeholder for actual Video/Loom embed */}
        <div className="absolute inset-0 bg-white flex flex-col items-center justify-center">
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_8px_30px_rgba(37,99,235,0.4)] mb-6 border-4 border-blue-50 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </motion.div>

            <div className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-[15px] tracking-wide shadow-md flex items-center gap-2 group-hover:shadow-lg transition-shadow">
              Watch the <span className="text-blue-200 border-b border-blue-200/30">two-minute demo</span>
            </div>

        </div>

      </div>
    </div>
  );
}
