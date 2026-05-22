import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserFrame } from './BrowserFrame';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  Calendar, 
  Megaphone, 
  MousePointer2, 
  Play, 
  X,
  FileText,
  Phone,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

type CRMPhase = 'HOVER' | 'ACTION' | 'POPUP';

export const CRMDashboardAnimation: React.FC = () => {
  const [phase, setPhase] = useState<CRMPhase>('HOVER');
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const playSequence = async () => {
      // Phase 1: The Hover (0.0s - 4.0s)
      setPhase('HOVER');
      setHoverIdx(0);
      await new Promise(r => setTimeout(r, 1000));
      setHoverIdx(1);
      await new Promise(r => setTimeout(r, 1000));
      setHoverIdx(2);
      await new Promise(r => setTimeout(r, 1000));
      setHoverIdx(3);
      await new Promise(r => setTimeout(r, 1000));

      // Phase 2: The Action (4.0s - 6.0s)
      setPhase('ACTION');
      setHoverIdx(null); // Clear hover highlight during action
      await new Promise(r => setTimeout(r, 2000));

      // Phase 3: The Pop-Up (6.0s - 12.0s)
      setPhase('POPUP');
      await new Promise(r => setTimeout(r, 6000));
    };

    const intervalId = setInterval(playSequence, 12000);
    playSequence();

    return () => clearInterval(intervalId);
  }, []);

  const metrics = [
    { label: 'Total Calls', value: '216' },
    { label: 'Appts Booked', value: '69' },
    { label: 'Success Rate', value: '100%' },
    { label: 'Review Rate', value: '100%' }
  ];

  return (
    <div className="w-full flex justify-center items-center h-[300px] sm:h-[350px] lg:h-[420px] relative overflow-visible pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-[0.6] lg:scale-[0.65] origin-center w-[800px] flex justify-center shrink-0">
        <BrowserFrame>
        <div className="w-full h-full flex bg-slate-50 font-sans text-sm relative">
          
          {/* Sidebar */}
          <div className="w-48 bg-[#0A192F] flex flex-col p-4 gap-2 shrink-0">
            <div className="flex items-center gap-3 px-3 py-4 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold tracking-tight">RestorationAI</span>
            </div>
            
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: MapPin, label: 'AI Dispatcher' },
              { icon: Users, label: 'CRM' },
              { icon: Calendar, label: 'Calendars' },
              { icon: Megaphone, label: 'Marketing' }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${item.active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
                <item.icon className="w-4 h-4" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main Stage */}
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Top Bar */}
            <div className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
              <h2 className="text-xl font-bold text-slate-800">Performance Overview</h2>
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" />
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 bg-slate-50 overflow-hidden">
              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {metrics.map((m, i) => (
                  <motion.div 
                    key={i}
                    animate={hoverIdx === i ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' } : { y: 0 }}
                    className={`p-5 rounded-2xl bg-white border border-slate-200 transition-colors ${hoverIdx === i ? 'border-blue-300 shadow-sm shadow-blue-500/10' : ''}`}
                  >
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">{m.label}</p>
                    <p className="text-2xl font-black text-slate-900">{m.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Call History Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-700">Call History</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {[
                    { name: 'John Smith', type: 'Water Damage', status: 'Booked' },
                    { name: 'Maria Garcia', type: 'Pipe Burst', status: 'Booked' },
                    { name: 'Spam Caller', type: 'Blocked', status: 'Spam' }
                  ].map((row, i) => (
                    <div key={i} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 w-1/3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${row.status === 'Spam' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-600'}`}>
                          {row.status === 'Spam' ? <ShieldAlert className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                        </div>
                        <span className="font-bold text-slate-800">{row.name}</span>
                      </div>
                      <div className="w-1/3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${row.status === 'Spam' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                          {row.type}
                        </span>
                      </div>
                      <div className="w-1/3 flex justify-end">
                        <motion.div 
                          animate={i === 0 && (phase === 'ACTION' || phase === 'POPUP') ? { backgroundColor: '#2563eb', color: '#ffffff', borderColor: '#2563eb' } : {}}
                          className={`px-4 py-1.5 rounded-lg border text-xs font-bold transition-all border-slate-200 text-slate-600`}
                        >
                          View Details
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cursor */}
            <motion.div
              className="absolute z-[70] pointer-events-none"
              initial={{ x: 100, y: 400 }}
              animate={
                phase === 'HOVER' 
                  ? [
                      { x: 80, y: 150, scale: 1 }, // Card 1
                      { x: 230, y: 150, scale: 1 }, // Card 2
                      { x: 380, y: 150, scale: 1 }, // Card 3
                      { x: 530, y: 150, scale: 1 }, // Card 4
                    ][hoverIdx ?? 3]
                  : phase === 'ACTION'
                  ? { 
                      x: [530, 540, 540, 540], // Move to button
                      y: [150, 310, 310, 310], // Adjusted Y
                      scale: [1, 1, 0.8, 1]     // Click
                    }
                  : { x: 540, y: 310, scale: 1, opacity: 0 }
              }
              transition={{ 
                duration: phase === 'ACTION' ? 1.5 : 0.8,
                times: phase === 'ACTION' ? [0, 0.6, 0.8, 1] : undefined,
                ease: "easeInOut" 
              }}
            >
              <MousePointer2 className="w-6 h-6 text-slate-800 drop-shadow-md" fill="white" />
            </motion.div>

            {/* Modal Backdrop */}
            <AnimatePresence>
              {phase === 'POPUP' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="w-full max-w-lg bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden flex flex-col"
                  >
                    {/* Modal Header */}
                    <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl font-bold text-slate-800">Call Details</h3>
                      </div>
                      <X className="w-5 h-5 text-slate-400" />
                    </div>

                    {/* Modal Content */}
                    <div className="p-8 space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Name</p>
                          <p className="text-lg font-bold text-slate-800">John Smith</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Address</p>
                          <p className="text-sm font-bold text-slate-800">123 Main St, Springfield, CA</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Call Recording</p>
                          <span className="text-[10px] font-bold text-slate-400">0:00 / 0:51</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-current" />
                          </div>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="w-0 h-full bg-blue-600" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2">AI Summary</p>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed bg-green-50/50 p-4 rounded-xl border border-green-100">
                            Homeowner reported a leaking water heater in the garage. AI dispatched a tech immediately.
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Transcript Snippet</p>
                          <p className="text-sm text-slate-800 font-bold italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                            "Hi, I have water everywhere in my garage..."
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </BrowserFrame>
      </div>
    </div>
  );
};
