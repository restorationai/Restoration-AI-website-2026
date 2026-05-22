import React from 'react';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col">
    {/* Dynamic Island Area */}
    <div className="absolute top-0 inset-x-0 h-10 flex justify-center z-50">
      <div className="mt-2 w-24 h-6 bg-black rounded-full" />
    </div>
    <div className="flex-1 flex flex-col relative">
      {children}
    </div>
    {/* Home Indicator */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50" />
  </div>
);
