import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserFrame } from './BrowserFrame';
import { ShieldAlert, UserCheck } from 'lucide-react';

type LargeLossPhase = 'ALERT' | 'SCANNING' | 'MATCHED';

export const LargeLossAnimation: React.FC = () => {
  const [phase, setPhase] = useState<LargeLossPhase>('ALERT');

  useEffect(() => {
    const playSequence = async () => {
      // Scene 1: The Alert (0.0s - 2.5s)
      setPhase('ALERT');
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Scene 2: The Seniority Match (2.5s - 5.5s)
      setPhase('SCANNING');
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Scene 3: The Result (5.5s - 9.0s) - Extended by 1 second
      setPhase('MATCHED');
      await new Promise((resolve) => setTimeout(resolve, 3500));
    };

    const intervalId = setInterval(playSequence, 9000); // Updated to 9 seconds
    playSequence();

    return () => clearInterval(intervalId);
  }, []);

  const technicians = [
    { id: 1, name: 'TECH 1', role: 'Junior Tech' },
    { id: 2, name: 'TECH 2', role: 'Junior Tech' },
    { id: 3, name: 'TECH 3', role: 'Senior Lead', exp: '10+ YRS EXP' },
  ];

  return (
    <div className="w-full flex justify-center items-center h-[300px] sm:h-[350px] lg:h-[420px] relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.65] origin-center w-[800px] flex justify-center shrink-0">
        <BrowserFrame>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          
          {/* Technicians List Background */}
          <div className="w-full max-w-3xl space-y-4 px-8">
            {technicians.map((tech, i) => (
              <motion.div
                key={tech.id}
                className={`relative p-8 rounded-2xl border transition-all duration-500 flex items-center justify-between ${
                  phase === 'MATCHED' && tech.id === 3 
                    ? 'bg-blue-600 border-white shadow-[0_0_40px_rgba(37,99,235,0.4)] scale-105 z-10' 
                    : 'bg-slate-900/50 border-slate-800'
                }`}
                animate={phase === 'MATCHED' && tech.id === 3 ? {
                  scale: [1.05, 1.08, 1.05],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    phase === 'MATCHED' && tech.id === 3 ? 'bg-white text-blue-600' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {tech.id === 3 ? <UserCheck className="w-6 h-6" /> : <div className="w-6 h-6 rounded-full border-[3px] border-current opacity-20" />}
                  </div>
                  <span className={`text-4xl font-black tracking-tight whitespace-nowrap ${
                    phase === 'MATCHED' && tech.id === 3 ? 'text-white' : 'text-slate-500'
                  }`}>
                    {tech.name}
                  </span>
                </div>

                <AnimatePresence>
                  {phase === 'SCANNING' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-4"
                    >
                      {tech.id < 3 ? (
                        <span className="text-red-400 font-bold uppercase tracking-widest text-sm bg-red-400/10 px-4 py-2 rounded-full border border-red-400/20 whitespace-nowrap">
                          {tech.role}
                        </span>
                      ) : (
                        <motion.span 
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1.1 }}
                          className="text-green-400 font-bold uppercase tracking-widest text-sm bg-green-400/10 px-5 py-2.5 rounded-full border border-green-400/30 shadow-[0_0_20px_rgba(74,222,128,0.2)] whitespace-nowrap"
                        >
                          {tech.role?.toUpperCase()} ({tech.exp})
                        </motion.span>
                      )}
                    </motion.div>
                  )}
                  {phase === 'MATCHED' && tech.id === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white text-blue-600 font-black px-6 py-3 rounded-full text-sm uppercase tracking-widest whitespace-nowrap shadow-lg"
                    >
                      SENIOR LEAD SELECTED
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Scan Line Overlay */}
                {phase === 'SCANNING' && (
                  <motion.div 
                    initial={{ left: '-10%' }}
                    animate={{ left: '110%' }}
                    transition={{ duration: 0.8, delay: i * 0.4, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Central Overlay for Phase 1: ALERT */}
          <AnimatePresence>
            {phase === 'ALERT' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center p-8 bg-[#020617]/90 backdrop-blur-sm"
              >
                <div className="w-[85%] max-w-2xl bg-white rounded-3xl p-12 flex flex-col items-center justify-center gap-6 text-center shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-slate-200">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shrink-0 shadow-xl shadow-red-600/20"
                  >
                    <ShieldAlert className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="flex flex-col items-center gap-4">
                    <h2 className="text-slate-900 text-lg font-black uppercase tracking-[0.4em]">URGENT DISPATCH</h2>
                    <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] flex flex-col items-center">
                      <span>NEW JOB:</span>
                      <span>WATER DAMAGE</span>
                    </h1>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result Text Overlay Removed as requested */}
        </div>
      </BrowserFrame>
      </div>
    </div>
  );
};
