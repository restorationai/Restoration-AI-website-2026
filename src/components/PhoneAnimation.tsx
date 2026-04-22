import React, { useState, useEffect, useRef } from 'react';

const PhoneAnimation = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [playKey, setPlayKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldPlay((prev) => {
            if (!prev) setPlayKey((k) => k + 1);
            return true;
          });
        } else {
          setShouldPlay(false);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Removed interval loop - component now completely resets only when scrolled out of view

  return (
    <div ref={ref} className={`relative flex justify-center w-full transition-all duration-1000 py-0 ${shouldPlay ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* 
        This wrapper is destroyed and recreated every 9s due to the `key`. 
        This securely resets all the CSS animations. 
        We also handle viewport scaling here to make it much bigger.
      */}
      <div key={playKey} className={`relative flex justify-center scale-95 sm:scale-100 lg:scale-[1.15] origin-center ${shouldPlay ? 'play-animation' : ''}`}>
        
        {/* Phone Body */}
        <div className="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden transform transition hover:scale-105 duration-500">
          <div className="absolute top-0 inset-x-0 h-6 w-32 mx-auto bg-slate-800 rounded-b-xl z-30"></div>
          
          {/* 1. Incoming Screen (Layer that fades out) */}
          <div className="incoming-screen absolute inset-0 z-20 bg-slate-950 flex flex-col pt-16 pb-8 px-6 pointer-events-none">
            <div className="flex flex-col items-center mb-auto">
              <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                <i className="fa-solid fa-user text-4xl text-slate-500"></i>
              </div>
              <h3 className="text-2xl text-white font-light">Homeowner</h3>
              <p className="text-slate-400 text-sm mt-1">Incoming Call...</p>
            </div>
            
            <div className="mt-auto">
              <div className="relative h-12 bg-slate-800 rounded-full flex items-center px-1 overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-slate-500 font-bold tracking-widest uppercase animate-pulse">Slide to Answer</span>
                 </div>
                 {/* The element that slides across */}
                 <div className="answer-slider w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 block">
                    <i className="fa-solid fa-phone text-white text-sm"></i>
                 </div>
              </div>
            </div>
          </div>

          {/* 2. Active Call Screen (The AI Interface) */}
          <div className="absolute inset-0 flex flex-col pt-12 pb-6 px-4 bg-slate-900/95 z-10">
            <div className="flex flex-col items-center mb-6">
              <div className="w-28 h-28 rounded-full bg-brand-dark border-2 border-brand-neon/50 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.4)] mb-4 relative overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Tx5eKisj3Xluq1SeZKe3/media/693c75ba9caf9aea42d79079.png" 
                  alt="AI Avatar"
                  className="w-full h-full object-cover z-10"
                />
                <div className="absolute inset-0 rounded-full border border-brand-neon animate-ping-slow opacity-30"></div>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">Restoration AI</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <p className="text-slate-400 text-xs uppercase tracking-widest">Call Active</p>
              </div>
            </div>

            {/* Audio Waveform */}
            <div className="active-element-1 flex justify-center gap-1 h-8 mb-auto opacity-0">
              {[0, 0.1, 0.2, 0.3, 0.4].map((delay, i) => (
                <div key={i} className="w-1 bg-brand-neon rounded-full animate-wave" style={{animationDelay: `${delay}s`}}></div>
              ))}
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-3 w-full mb-4">
              <div className="active-element-2 bg-slate-800 p-3 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl text-xs text-slate-300 opacity-0 border border-slate-700">
                 <span className="text-[9px] font-bold text-slate-500 block mb-1 uppercase">Homeowner</span>
                 "My basement is flooding right now!"
              </div>
              <div className="active-element-3 bg-brand-neon/10 border border-brand-neon/30 p-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-xs text-white opacity-0">
                 <span className="text-[9px] font-bold text-brand-neon block mb-1 uppercase">AI Agent</span>
                 "I'm dispatching a tech to you immediately."
              </div>
            </div>

            {/* Confirmation Toast */}
            <div className="active-element-4 bg-green-500/20 border border-green-500 p-2.5 rounded-xl flex items-center gap-3 opacity-0 shadow-lg backdrop-blur-md mb-12">
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-black shrink-0 relative overflow-hidden">
                <i className="fa-solid fa-check text-xs relative z-10"></i>
              </div>
              <div>
                <div className="text-white text-[10px] font-bold leading-tight">Tech Notified</div>
                <div className="text-green-400 text-[9px] leading-tight">with Job Summary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Outer Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-[90px] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PhoneAnimation;
