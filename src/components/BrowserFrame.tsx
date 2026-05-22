import React from 'react';

export const BrowserFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-[800px] h-[560px] rounded-[2.5rem] bg-slate-900 border-8 border-slate-800 shadow-2xl overflow-hidden flex flex-col shrink-0">
    <div className="h-10 w-full shrink-0 bg-slate-800 flex items-center px-6 gap-2 z-30 relative">
      <div className="flex gap-1.5 font-bold">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="flex-1 mx-4 h-6 bg-slate-900/50 rounded-full flex items-center px-3 justify-between">
        <div className="w-20 h-1.5 bg-white/5 rounded-full" />
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-white/5 rounded-sm" />
          <div className="w-4 h-4 bg-white/5 rounded-sm" />
        </div>
      </div>
    </div>
    <div className="flex-1 w-full relative">
      {children}
    </div>
  </div>
);
