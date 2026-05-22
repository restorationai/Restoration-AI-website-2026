import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame } from './PhoneFrame';
import { Camera, Globe, Send, ChevronLeft, MoreHorizontal } from 'lucide-react';

type UploadPhase = 'SMS' | 'TRANSITION' | 'PORTAL';

export const ModernPhotoUploadAnimation: React.FC = () => {
  const [phase, setPhase] = useState<UploadPhase>('SMS');

  useEffect(() => {
    const playSequence = async () => {
      // Scene 1: The SMS Request (0.0s - 5.0s)
      setPhase('SMS');
      await new Promise(r => setTimeout(r, 5000));

      // Scene 2: The Transition (5.0s - 6.0s)
      setPhase('TRANSITION');
      await new Promise(r => setTimeout(r, 1000));

      // Scene 3: The Upload Portal (6.0s - 12.0s)
      setPhase('PORTAL');
      await new Promise(r => setTimeout(r, 6000));
    };

    const intervalId = setInterval(playSequence, 12000);
    playSequence();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-[400px] flex justify-center items-center relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.6] origin-center shrink-0">
        <PhoneFrame>
        <AnimatePresence mode="wait">
          {phase === 'SMS' && (
            <motion.div
              key="sms-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col bg-[#0b1426] h-full"
            >
              {/* iOS-style Header */}
              <div className="pt-12 pb-4 px-6 border-b border-white/5 flex items-center justify-between">
                <ChevronLeft className="text-blue-500 w-6 h-6" />
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mb-1">
                    <span className="text-white text-xs font-bold">RA</span>
                  </div>
                  <span className="text-white text-xs font-bold">Restoration AI</span>
                </div>
                <MoreHorizontal className="text-blue-500 w-6 h-6" />
              </div>

              {/* Message Thread */}
              <div className="flex-1 p-4 space-y-4">
                <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Today 2:45 PM</div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0, scale: 0.9 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="max-w-[85%] bg-slate-800 text-white rounded-2xl p-5 text-base font-bold leading-snug relative shadow-lg"
                >
                  Please upload photos of the damage here so we can arrive fully prepared:{' '}
                  <motion.span 
                    animate={{ scale: [1, 1.05, 1], color: ['#60a5fa', '#93c5fd', '#60a5fa'] }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                    className="text-blue-400 underline font-black"
                  >
                    link.restoration.ai/view
                  </motion.span>
                </motion.div>
              </div>

              {/* Input Bar */}
              <div className="p-4 flex items-center gap-2 border-t border-white/5 bg-white/5 mb-8">
                <div className="flex-1 h-9 bg-white/10 rounded-full flex items-center px-4">
                  <span className="text-white/20 text-xs font-medium">Text Message</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white/50">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'TRANSITION' && (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center bg-[#0b1426] h-full"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-4 border-blue-600/30 border-t-blue-600 rounded-full"
              />
              <span className="text-blue-500 text-xs font-bold mt-4 tracking-widest">LOADING</span>
            </motion.div>
          )}

          {phase === 'PORTAL' && (
            <motion.div
              key="portal-screen"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-1 flex flex-col bg-slate-50 h-full"
            >
              {/* Browser Header */}
              <div className="bg-white border-b border-slate-200 px-4 pt-12 pb-3">
                <div className="bg-slate-100 h-10 rounded-lg flex items-center justify-center px-3 gap-2 border border-slate-200">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-600 font-bold truncate">link.restoration.ai</span>
                </div>
              </div>

              {/* Page Content */}
              <div className="flex-1 p-6 flex flex-col pt-8">
                <h2 className="text-slate-900 text-[1.35rem] px-2 font-black text-center mb-8 leading-tight">
                  Take photos of the damage here so we're more prepared.
                </h2>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4 flex-1 max-h-[360px]">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="aspect-square bg-white border-2 border-dashed border-slate-300 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 group hover:border-blue-400 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                        <Camera className="w-6 h-6 text-slate-400" />
                      </div>
                      <span className="text-xs font-black text-slate-500 uppercase tracking-widest mt-1">
                        Upload Image
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="p-6 text-center bg-white border-t border-slate-200">
                <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Restoration AI Photo Portal</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PhoneFrame>
      </div>
    </div>
  );
};
