import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneFrame } from './PhoneFrame';
import { Phone, PhoneOff, ShieldCheck } from 'lucide-react';

type SavingsPhase = 'CALL' | 'DISQUALIFIED' | 'SAVINGS';

export const SavingsAnimation: React.FC = () => {
  const [phase, setPhase] = useState<SavingsPhase>('CALL');

  useEffect(() => {
    const playSequence = async () => {
      // Scene 1: The Call Incoming (0.0s - 3.5s)
      setPhase('CALL');
      await new Promise((resolve) => setTimeout(resolve, 3500));

      // Scene 2: The Disqualification (3.5s - 7.0s)
      setPhase('DISQUALIFIED');
      await new Promise((resolve) => setTimeout(resolve, 3500));

      // Scene 3: The Savings Confirmed (7.0s - 12.0s)
      setPhase('SAVINGS');
      await new Promise((resolve) => setTimeout(resolve, 5000));
    };

    const interval = setInterval(playSequence, 12000);
    playSequence();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] flex justify-center items-center relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.6] origin-center shrink-0">
        <PhoneFrame>
        <AnimatePresence mode="wait">
          {phase === 'CALL' && (
            <motion.div
              key="call"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col bg-[#0b1426] text-white"
            >
              {/* Status Bar */}
              <div className="h-10 flex items-center justify-between px-8 pt-4 w-full text-slate-500 shrink-0">
                <span className="text-[12px] font-semibold uppercase tracking-tight">9:41</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-2 bg-slate-400 rounded-sm"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="relative mb-8">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" 
                  />
                  <div className="relative w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 shadow-2xl">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <p className="text-blue-400 text-sm font-bold tracking-[0.25em] uppercase">Incoming Call...</p>
                  <h2 className="text-3xl font-black text-white mb-8">(105) 555-1234</h2>
                </div>
              </div>

              <div className="pb-16 flex justify-around w-full px-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                    <PhoneOff className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs uppercase font-black tracking-widest text-white">Decline</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs uppercase font-black tracking-widest text-white">Accept</span>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'DISQUALIFIED' && (
            <motion.div
              key="disqualified"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-red-950/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />
              
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100"
              >
                <div className="bg-red-600 p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-1">
                    <PhoneOff className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-white text-3xl font-black tracking-tight uppercase">Lead Disqualified</h2>
                </div>
                <div className="p-10 text-center bg-white">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">Internal Reason</p>
                  <p className="text-slate-900 text-2xl font-bold leading-tight">Not in our service area</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {phase === 'SAVINGS' && (
            <motion.div
              key="savings"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col bg-[#0b1426] text-white p-8"
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                  className="relative w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                  <div className="absolute inset-[-10px] rounded-full border-4 border-blue-500/30" />
                  <ShieldCheck className="w-12 h-12 text-white" />
                </motion.div>
                
                <div className="flex flex-col items-center justify-center w-full gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center justify-center text-center w-full"
                  >
                    <span className="text-[5.5rem] font-black text-white block leading-none mb-3">$0</span>
                    <span className="text-4xl font-black text-white">Charged</span>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="w-full mt-4"
                >
                  <div className="h-[1px] w-1/2 mx-auto bg-slate-800 mb-8" />
                  <div className="bg-blue-600 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center w-full">
                    <ShieldCheck className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/30 -rotate-12 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                      <p className="text-black font-black uppercase tracking-[0.2em] text-sm mb-2">You Saved:</p>
                      <p className="text-6xl font-black text-white">$1,600!</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PhoneFrame>
      </div>
    </div>
  );
};
