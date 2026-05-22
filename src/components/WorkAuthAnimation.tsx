import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame } from './PhoneFrame';
import { Mail, Send } from 'lucide-react';

type ScenePhase = 'ALERT' | 'INTERACTION' | 'FORM';

const WorkAuthAnimation: React.FC = () => {
  const [scene, setScene] = useState<ScenePhase>('ALERT');

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      // Scene 1: Alert (0s - 3.5s)
      if (isMounted) setScene('ALERT');
      await new Promise(resolve => setTimeout(resolve, 3500));
      
      // Scene 2: Click (3.5s - 4.0s)
      if (isMounted) setScene('INTERACTION');
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Scene 3: Form & Signature (4.0s - 10.0s)
      if (isMounted) setScene('FORM');
      await new Promise(resolve => setTimeout(resolve, 6000));
    };

    runSequence();
    const intervalId = setInterval(runSequence, 10000); // 10s total loop
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] flex justify-center items-center relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.6] origin-center shrink-0">
        <PhoneFrame>
          <AnimatePresence mode="wait">
            {(scene === 'ALERT' || scene === 'INTERACTION') && (
              <motion.div
                key="notification-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col bg-[#0b1426] h-full"
              >
                <div className="mt-24 text-center select-none">
                  <h2 className="text-[5.5rem] font-light text-white opacity-90 leading-none">9:41</h2>
                  <p className="text-xl text-white/60 mt-2">Friday, May 1</p>
                </div>

                <div className="flex-1 flex items-center justify-center px-6 mt-8">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: scene === 'INTERACTION' ? 1.05 : 1,
                      filter: scene === 'INTERACTION' ? 'brightness(1.5) drop-shadow(0 0 15px rgba(59, 130, 246, 0.6))' : 'brightness(1)'
                    }}
                    transition={{ 
                      y: { type: 'spring', damping: 15, stiffness: 100 },
                      scale: { type: 'spring', damping: 8, stiffness: 300 }
                    }}
                    className="w-full bg-[#2A3143] border border-white/5 p-5 rounded-[1.5rem] shadow-2xl flex gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#2D7DF6] rounded-[0.85rem] flex items-center justify-center shrink-0 shadow-lg mt-1">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-white text-[11px] font-bold tracking-widest uppercase opacity-70 mb-1">New Message</span>
                      <p className="text-white text-base leading-snug font-medium">
                        Your Work Authorization is ready for signature. <span className="text-[#2D7DF6] block mt-0.5">Click to review.</span>
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mb-14 flex flex-col items-center mt-auto">
                  <motion.div 
                    animate={{ x: [-2, 2, -2], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-40 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-4"
                  />
                  <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-black">Swipe up to open</span>
                </div>
              </motion.div>
            )}

            {scene === 'FORM' && (
              <motion.div
                key="form-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white flex flex-col h-full"
              >
                <div className="px-6 pt-16 pb-6 border-b border-gray-100 flex justify-center">
                  <h1 className="text-[1.35rem] font-black text-slate-900 tracking-tight">Work Authorization Form</h1>
                </div>

                <div className="flex-1 p-6 flex flex-col pt-8">
                  <div className="p-6 bg-white border-2 border-gray-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] italic text-xl text-gray-800 leading-relaxed">
                    "I hereby authorize <span className="font-extrabold text-black">ABC Restoration</span> to proceed with emergency services..."
                  </div>

                  <div className="space-y-4 mt-auto mb-10">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest block pl-2">Sign Here</label>
                    <div className="w-full h-32 border-2 border-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden bg-white">
                      <motion.svg className="absolute inset-0 w-full h-full text-[#1A62FF] scale-[1.35] origin-center translate-y-2 translate-x-[15%]" viewBox="0 0 300 120">
                        <motion.path 
                          d="M 50 60 C 60 20, 80 20, 60 80 C 50 120, 30 110, 40 80 C 50 60, 70 70, 80 70 C 80 60, 100 60, 90 80 C 80 90, 100 90, 110 70 C 110 20, 110 20, 110 90 C 110 60, 130 50, 130 90 C 130 60, 150 50, 150 90 C 160 80, 170 80, 180 80" 
                          stroke="currentColor" 
                          strokeWidth="3.5" 
                          fill="none" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ 
                            pathLength: { delay: 0.5, duration: 3, ease: "easeInOut" },
                            opacity: { delay: 0.5, duration: 0.01 }
                          }}
                        />
                      </motion.svg>
                    </div>
                  </div>

                  <div className="w-full bg-[#1A62FF] py-5 rounded-3xl text-white font-black text-lg shadow-md flex items-center justify-center gap-3">
                    <span>Submit</span>
                    <Send className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </PhoneFrame>
      </div>
    </div>
  );
};

export default WorkAuthAnimation;
