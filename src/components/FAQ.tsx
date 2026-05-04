"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does an AI receptionist handle emergency water damage calls after hours?",
    answer: "Our restoration specific AI is active 24/7 to ensure every emergency call is answered on the first ring. It identifies the urgency of the situation, gathers essential job details, and can immediately dispatch your crews so you never lose a high ticket lead to a competitor."
  },
  {
    question: "Does this AI receptionist integrate with Albiware and other restoration CRMs?",
    answer: "Yes, our system features deep integration with Albiware and almost every other restoration specific CRM on the market. It automatically syncs lead details, job descriptions, and contact info directly into your project management software to eliminate manual data entry for your office staff."
  },
  {
    question: "Can the AI actually dispatch my mitigation crews to a job site?",
    answer: "Absolutely. The AI is programmed with your specific dispatching rules. When a high priority water damage or fire emergency comes in, the AI can trigger an immediate notification or call to your on call technician to ensure your response time is faster than anyone else in your market."
  },
  {
    question: "How is an AI receptionist better than a traditional restoration answering service?",
    answer: "Traditional answering services often just take a name and number which leads to delayed response times. Our AI does the heavy lifting by qualifying the lead, checking your team availability, and booking appointments directly while offering zero hold times for the caller."
  },
  {
    question: "Does the AI sound natural enough for stressed homeowners dealing with a flood?",
    answer: "We use advanced neural voice synthesis designed to sound professional and empathetic. In a high stress water damage situation, homeowners want quick answers and a calm experience, and our AI provides exactly that without ever sounding robotic or cold."
  },
  {
    question: "What happens if a caller has a complex technical question about the drying process?",
    answer: "Our AI is pre loaded with industry specific knowledge for the restoration world. If a homeowner asks a question it cannot answer, it is programmed to recognize the complexity and instantly route the call to you or a designated project manager so the customer always receives accurate information."
  },
  {
    question: "Can this AI help with lead intake for mold remediation and fire damage?",
    answer: "Yes, the AI is fully customizable for all restoration service lines including water mitigation, mold remediation, fire damage, and biohazard cleanup. It follows specific intake scripts for each service to ensure you get the right data every single time."
  },
  {
    question: "Will using an AI receptionist help me win more insurance or TPA work?",
    answer: "Speed to lead is the most important metric for winning restoration jobs. By answering instantly and professionalizing your intake process, you show insurance adjusters and TPAs that your company is the most reliable option for their policyholders."
  },
  {
    question: "How long does it take to set up the AI for my restoration business?",
    answer: "The setup is designed to be hands off for the business owner. Once you provide your service areas and basic business info, we handle the technical integration and Albiware syncing so you can be up and running with your automated receptionist in less than 48 hours."
  },
  {
    question: "Is the AI capable of handling multiple calls at the same time during a storm?",
    answer: "One of the biggest benefits for restoration owners is scalability. During a massive storm or flood event, the AI can handle an unlimited number of simultaneous calls, meaning you never have a busy signal and never miss a single lead during peak volume."
  },
  {
    question: "Can the AI book appointments directly on my Google Calendar or Albiware schedule?",
    answer: "Yes, the AI has the ability to see your real time availability and book appointments directly into your calendar. This allows you to wake up to a full schedule of confirmed mitigation jobs without ever picking up the phone."
  },
  {
    question: "Does this AI receptionist replace my existing office manager?",
    answer: "No, it empowers them to do more. By handling the repetitive initial intake and after hours emergencies, your office manager can focus on high value tasks like managing insurance claims and billing while the AI ensures no new revenue falls through the cracks."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl w-full">
        
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 font-bold tracking-[0.15em] text-[10px] rounded-full mb-4 uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            FAQ
          </span>
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
