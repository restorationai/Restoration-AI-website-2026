"use client";

import React from 'react';

const columns = [
  { label: 'In-House Staff',               highlight: false },
  { label: 'Answering Service',            highlight: false },
  { label: 'Generic AI',                   highlight: false },
  { label: 'Restoration AI',               highlight: true  },
];

const rows = [
  { feature: '24/7/365 coverage',                       values: [false, true,  true,  true]  },
  { feature: 'Understands restoration',                 values: [true,  false, false, true]  },
  { feature: 'Qualifies leads & filters bad ones in real time', values: [true,  false, false, true]  },
  { feature: 'Handles multiple calls at once',          values: [false, false, true,  true]  },
  { feature: 'Dispatches techs automatically',          values: [false, false, false, true]  },
  { feature: "Books on your tech's existing route",     values: [true,  false, false, true]  },
  { feature: 'Sends work authorizations',               values: [true,  false, false, true]  },
  { feature: 'Consistent quality on every call',        values: [false, false, false, true]  },
  { feature: 'No sick days, turnover, or training',     values: [false, false, true,  true]  },
  { feature: 'Under $600/month',                        values: [false, true,  true,  true]  },
];

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-label="Yes">
    <circle cx="10" cy="10" r="10" className="fill-blue-600" />
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mx-auto" aria-label="No">
    <circle cx="10" cy="10" r="10" className="fill-red-50" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#f87171" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-white">
      <div className="container-pill">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#3dd0ff] uppercase tracking-[0.2em] mb-3">Compare</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Generic answering services costs you jobs.
          </h2>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 bg-slate-50 border-b border-slate-200 w-[34%]" />
                {columns.map((col) => (
                  <th
                    key={col.label}
                    className={`px-3 py-3 text-center text-xs font-bold border-b border-slate-200 w-[16.5%] ${
                      col.highlight
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    {col.highlight && (
                      <span className="block text-[9px] font-semibold text-blue-200 uppercase tracking-widest mb-0.5">Best choice</span>
                    )}
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                >
                  <td className="px-4 py-2.5 text-sm font-medium text-slate-700 border-b border-slate-100">
                    {row.feature}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`px-3 py-2.5 text-center border-b border-slate-100 ${
                        columns[j].highlight ? 'bg-blue-50' : ''
                      }`}
                    >
                      {val ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Closing line + CTA */}
        <div className="max-w-4xl mx-auto mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://app.restorationai.io/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-[15px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap"
            >
              Get Started for Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <p className="text-xs text-slate-400">Set up in 5 minutes · No credit card required</p>
          </div>
        </div>

      </div>
    </section>
  );
}
