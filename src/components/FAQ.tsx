"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How is Rank AI different from every other SEO agency I have been burned by?",
    answer: "Rank AI is built exclusively for restoration business owners, not a general agency juggling dentists and roofers. Everything is transparent: you watch your rankings move street by street, you see every page, blog, and citation we build, and there are no long term contracts holding you in place. We stay accountable through results, not paperwork."
  },
  {
    question: "What exactly do I get with Rank AI?",
    answer: "A complete Google presence built and run for you: a custom website with up to 250 pages, full Google Business Profile management, review generation, two keyword researched blog posts every week, YouTube videos, Google Ads and Local Services Ads management, and a 24/7 AI receptionist included at no extra cost. One system, one team, all done for you."
  },
  {
    question: "How long until I see results?",
    answer: "Rankings are earned, so they build over time rather than overnight. Your website, Google Business Profile, and content engine go live quickly, and from there you watch your rankings move block by block in your tracking dashboard. Because there are no long term contracts, we have to keep earning your business every single month."
  },
  {
    question: "Do you guarantee a number one ranking?",
    answer: "No one can honestly guarantee a specific spot on Google or in AI results, and you should be careful with anyone who does. What we control is the work: dedicated pages for every service in every city, content built from real keyword research, every page submitted to Google for indexing, and a monthly audit that finds and fixes anything Google skipped. That is the machine that moves rankings."
  },
  {
    question: "Why does AI search matter for a restoration company?",
    answer: "More homeowners every day ask ChatGPT, Gemini, and Perplexity who they should call. Those engines read websites with their own crawlers and recommend businesses they can verify. We structure your site, schema, and citations so you are positioned to be the answer when someone asks for the best restoration company near them."
  },
  {
    question: "I already have a website. Why do I need a 250 page one?",
    answer: "Here is what most owners never hear: if your Google Business Profile lists a service but your website has no dedicated page for that exact service, Google assumes you do not actually offer it. That is why we build an individual page for every service in every city you serve, each one unique and written around the search terms homeowners actually use."
  },
  {
    question: "How much work do I have to do?",
    answer: "Almost none, on purpose. We build the website, manage your Google Business Profile, write the blogs, post the videos, request the reviews, and run the ads. You run your restoration business and take the calls. When we need something from you, it is usually photos of your work and a quick approval."
  },
  {
    question: "Am I locked into a contract?",
    answer: "No. There are no long term contracts and no hidden fees, and you can cancel anytime. We would rather be easy to work with and easy to leave. To date, every client who has started with Rank AI is still with us, and that is by results, not by contract."
  },
  {
    question: "How does the review generation work?",
    answer: "Finished jobs turn into review requests automatically, so you build a steady, consistent flow of five star reviews instead of a burst once a year. Reviews are one of the heaviest local ranking signals Google looks at, and consistency matters more than volume."
  },
  {
    question: "What is the AI receptionist, and does it cost extra?",
    answer: "It is included at no additional cost. Once your rankings and ads start producing calls, the AI receptionist answers every one of them 24/7, collects the job details, and books the appointment, so the visibility we build never gets wasted on a missed call."
  },
  {
    question: "Can I see where I rank before I sign up?",
    answer: "Yes, and you should. On your strategy call we pull up your business live and show you exactly where you rank today on Google and in AI search. You will see your starting point, and exactly what needs to change, before you ever spend a dollar."
  },
  {
    question: "Does this work for fire, mold, and reconstruction, or just water damage?",
    answer: "All of it. We build dedicated pages and content for every service line you offer: water, fire, smoke, mold, biohazard, reconstruction, and anything else on your list, in every city you serve. If you offer it, we make sure Google and AI search know it."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative isolate">
            {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl w-full">
        
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
             const isOpen = openIndex === idx;
             return (
              <div
                key={idx}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'bg-slate-50 border-slate-300 shadow-md transform scale-[1.01]' : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 md:px-7 h-[90px] md:h-[100px] text-left focus:outline-none"
                >
                  <span className="text-[18px] md:text-[20px] font-bold text-slate-900 tracking-tight leading-snug pr-8 line-clamp-2">{faq.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'rotate-0'}`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0 text-slate-600 text-[16px] md:text-[18px] leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
