import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserFrame } from './BrowserFrame';

type DispatchPhase = 'DETECTED' | 'SCANNING' | 'MATCHED' | 'OPTIMIZED';

export const DispatchAnimation: React.FC = () => {
  const [phase, setPhase] = useState<DispatchPhase>('DETECTED');

  useEffect(() => {
    const playSequence = async () => {
      // Scene 1: New Job Detected (0-2s)
      setPhase('DETECTED');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Scene 2: Scanning Techs (2-4s)
      setPhase('SCANNING');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Scene 3: Tech Matched (4-6s)
      setPhase('MATCHED');
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Scene 4: Dispatch Optimized (6-9s)
      setPhase('OPTIMIZED');
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    const intervalId = setInterval(playSequence, 9000);
    playSequence();

    return () => clearInterval(intervalId);
  }, []);

  const center = { x: 400, y: 260 };
  const techs = [
    { id: 1, x: 180, y: 160 },
    { id: 2, x: 620, y: 160 },
    { id: 3, x: 580, y: 380 },
  ];

  return (
    <div className="w-full flex justify-center items-center h-[300px] sm:h-[350px] lg:h-[420px] relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.65] origin-center w-[800px] flex justify-center shrink-0">
        <BrowserFrame>
          <div className="absolute inset-0 bg-[#0B0F19] overflow-hidden flex flex-col items-center justify-center">
            
            {/* Top Text: NEW JOB DETECTED */}
            <AnimatePresence>
              {phase === 'DETECTED' && (
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-24 text-white text-4xl font-black tracking-[0.1em]"
                >
                  NEW JOB DETECTED
                </motion.h1>
              )}
            </AnimatePresence>

            {/* Top Text: DISPATCH OPTIMIZED */}
            <AnimatePresence>
              {phase === 'OPTIMIZED' && (
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-24 text-blue-500 text-[2.75rem] leading-none font-black tracking-tight"
                >
                  DISPATCH OPTIMIZED
                </motion.h1>
              )}
            </AnimatePresence>

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full z-10">
              {techs.map((tech) => (
                <AnimatePresence key={`line-${tech.id}`}>
                  {(phase === 'SCANNING' || phase === 'MATCHED' || (phase === 'OPTIMIZED' && tech.id === 3)) && (
                    <motion.line
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      x1={center.x}
                      y1={center.y}
                      x2={tech.x}
                      y2={tech.y}
                      stroke={tech.id === 3 && (phase === 'MATCHED' || phase === 'OPTIMIZED') ? '#22c55e' : '#3b82f6'}
                      strokeWidth={tech.id === 3 && (phase === 'MATCHED' || phase === 'OPTIMIZED') ? 6 : 3}
                      strokeOpacity={0.6}
                      className="transition-colors duration-500"
                    />
                  )}
                </AnimatePresence>
              ))}
            </svg>

            {/* Tech Nodes */}
            {techs.map((tech) => (
              <AnimatePresence key={`node-${tech.id}`}>
                {(phase === 'SCANNING' || phase === 'MATCHED' || (phase === 'OPTIMIZED' && tech.id === 3)) && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="absolute z-20"
                    style={{ left: tech.x, top: tech.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className={`w-10 h-10 rounded-full border-4 ${
                      tech.id === 3 && (phase === 'MATCHED' || phase === 'OPTIMIZED')
                        ? 'bg-[#22c55e] border-white shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                        : 'bg-slate-700/50 border-slate-500'
                    } transition-colors duration-500`} />
                    
                    {tech.id === 3 && (phase === 'MATCHED' || phase === 'OPTIMIZED') && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-14 left-1/2 -translate-x-1/2 bg-[#16a34a] text-white font-black text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap"
                      >
                        CLOSEST TECHNICIAN
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Central Job Node */}
            <div className="absolute z-30" style={{ left: center.x, top: center.y, transform: 'translate(-50%, -50%)' }}>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-[-20px] bg-red-600 rounded-full blur-sm"
              />
              <div className="relative w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
                JOB LOCATION
              </div>
            </div>

          </div>
        </BrowserFrame>
      </div>
    </div>
  );
};
