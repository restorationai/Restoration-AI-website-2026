"use client";

import { motion } from 'framer-motion';

const stats = [
  { number: "1,600", suffix: "+", label: "Calls Answered Daily" },
  { number: "$26M", suffix: "+", label: "In Secured Jobs" },
  { number: "0", suffix: "", label: "Missed Calls" }
];

export default function StatsBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden shadow-xl shadow-blue-900/10">
      {/* Large decorative shapes — oversized for personality */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Big top-left orb */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-[80px]" />
        {/* Big bottom-right orb */}
        <div className="absolute -bottom-28 -right-28 w-[24rem] h-[24rem] bg-white/10 rounded-full blur-[80px]" />
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-[100px]" />
        {/* Angled geometric accent — like Outrank's triangle shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.04] rotate-45 translate-x-1/2 -translate-y-1/2 rounded-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.04] rotate-45 -translate-x-1/2 translate-y-1/2 rounded-3xl" />

      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 lg:gap-16 xl:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-[280px] py-6 md:py-0"
              >
                <div className="text-6xl md:text-7xl font-bold text-white tracking-tight whitespace-nowrap">
                  {stat.number}
                  {stat.suffix && <span className="text-white">{stat.suffix}</span>}
                </div>
                <p className="text-lg font-medium text-white/80 mt-3 whitespace-nowrap">
                  {stat.label}
                </p>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-20 bg-white/20 md:ml-8 lg:ml-16 xl:ml-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
