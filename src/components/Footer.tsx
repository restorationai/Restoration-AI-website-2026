import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] py-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xl shadow-md border border-blue-400/20">
                R
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">Restoration<span className="text-[#00e1ff]">AI</span></span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The world's first AI-native reception and dispatch platform for restoration contractors.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/#features" className="hover:text-white transition-colors">AI Receptionist</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors">Emergency Dispatch</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors">Work Authorizations</a></li>
              <li><a href="/#features" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/compliance" className="hover:text-white transition-colors">SMS Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Restoration AI Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><span className="sr-only">Twitter</span>𝕏</a>
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><span className="sr-only">LinkedIn</span>in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
