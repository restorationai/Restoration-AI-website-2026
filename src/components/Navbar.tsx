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

            {/* INTEGRATIONS DROPDOWN */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors bg-transparent font-semibold text-[15px]">
                Integrations
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/70 py-2 min-w-[220px] flex flex-col">
                  <a href="/integrations/albiware" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">Albiware</a>
                  <a href="/integrations/jobber" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">Jobber</a>
                  <a href="/integrations/xcelerate" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">Xcelerate</a>
                  <a href="/integrations/dash" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">DASH</a>
                  <a href="/integrations/housecall-pro" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">Housecall Pro</a>
                  <a href="/integrations/jobnimbus" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">JobNimbus</a>
                  <a href="/integrations/encircle" className="px-5 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors block font-medium">Encircle</a>
                </div>
              </div>
            </div>

            <a href="/#testimonials" className="hover:text-slate-900 transition-colors">Success Stories</a>
            <a href="/blog" className="hover:text-slate-900 transition-colors">Blog</a>
          </div>

          {/* RIGHT SIDE: Two CTAs like Outrank */}
          <div className="flex items-center gap-4">
            <a
              href="/#calendar-section"
              className="hidden lg:inline-flex items-center justify-center text-[14px] font-bold text-slate-700 bg-white border-2 border-slate-100 px-6 py-2.5 rounded-full hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm"
            >
              Book A Strategy Call
            </a>
            <a
              href="https://app.restorationai.io/#/signup"
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
            <div className="flex flex-col gap-2">
              <span className="text-slate-500 font-semibold text-xs tracking-wider uppercase">Integrations</span>
              <div className="pl-3 border-l-2 border-slate-100 flex flex-col gap-2.5 mt-2">
                <a href="/integrations/albiware" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">Albiware</a>
                <a href="/integrations/jobber" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">Jobber</a>
                <a href="/integrations/xcelerate" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">Xcelerate</a>
                <a href="/integrations/dash" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">DASH</a>
                <a href="/integrations/housecall-pro" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">Housecall Pro</a>
                <a href="/integrations/jobnimbus" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">JobNimbus</a>
                <a href="/integrations/encircle" className="text-slate-700 font-medium text-sm hover:text-blue-700 transition-colors">Encircle</a>
              </div>
            </div>
            <a href="/#testimonials" className="text-slate-700 font-medium text-sm">Success Stories</a>
            <a href="/blog" className="text-slate-700 font-medium text-sm">Blog</a>
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-3 pt-1">
              <a href="/signin" className="text-slate-600 font-medium text-sm">Login</a>
              <a href="https://app.restorationai.io/#/signup" className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md shadow-blue-900/20 text-white px-5 py-2.5 rounded-xl font-semibold text-sm text-center">
                Start for Free
              </a>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
}
