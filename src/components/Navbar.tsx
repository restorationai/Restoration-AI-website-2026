"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center py-5 transition-all duration-300">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-[98%] max-w-[1400px] rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200 py-3 shadow-xl shadow-slate-200/50'
            : 'bg-white/80 backdrop-blur-sm border-slate-200/60 py-4'
        }`}
      >
        <div className="px-8 lg:px-12 flex justify-between items-center">
          {/* LOGO */}
          <a href="/" className="flex items-center group -ml-2 lg:-ml-4 -mt-2.5">
            <img 
              src="/website-photos/new-logo.png" 
              alt="Restoration AI Logo" 
              className="h-8 md:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-slate-600">
            <a href="/#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="/#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>

            <a href="/blog" className="hover:text-slate-900 transition-colors">Blog</a>
          </div>

          {/* RIGHT SIDE: Two CTAs like Outrank */}
          <div className="flex items-center gap-4">
            <a
              href="/#calendar-section"
              className="hidden lg:inline-flex items-center justify-center text-[14px] font-bold text-slate-700 bg-white border-2 border-slate-100 px-6 py-2.5 rounded-full hover:bg-slate-50 hover:border-slate-200 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Book A Strategy Call
            </a>
            <a
              href="https://app.restorationai.io/signup"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-7 py-3 rounded-full text-[14px] font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg shadow-blue-900/20"
            >
              Start for Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden text-slate-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white border border-slate-200 py-4 px-6 rounded-2xl flex flex-col gap-4 shadow-xl md:hidden">
            <a href="/#features" className="text-slate-700 font-medium text-sm">Features</a>
            <a href="/#pricing" className="text-slate-700 font-medium text-sm">Pricing</a>
            <a href="/blog" className="text-slate-700 font-medium text-sm">Blog</a>
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-3 pt-1">
              <a href="/signin" className="text-slate-600 font-medium text-sm">Login</a>
              <a href="https://app.restorationai.io/signup" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white px-5 py-2.5 rounded-xl font-semibold text-sm text-center">
                Start for Free
              </a>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}
