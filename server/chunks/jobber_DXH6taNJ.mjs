globalThis.process ??= {};
globalThis.process.env ??= {};
import "./page-ssr_DoeYdN5E.mjs";
import { c as createComponent } from "./astro-component_C8BU5KYa.mjs";
import { o as reactExports, l as renderComponent, r as renderTemplate } from "./worker-entry_D4Rxi1Wr.mjs";
import { B as BookACall } from "./BookACall_Co-FmS82.mjs";
import { j as jsxRuntimeExports, m as motion, $ as $$MainLayout } from "./MainLayout_lnYWzVbu.mjs";
import { C as ChevronRight, a as CircleCheck } from "./circle-check_Xv8tgjh_.mjs";
import { A as ArrowDown } from "./arrow-down_g7bPmy5b.mjs";
import { C as ChevronDown, A as AnimatePresence } from "./chevron-down_C0pilIkH.mjs";
const faqs = [
  {
    question: "Does Restoration AI integrate directly with Jobber?",
    answer: "Restoration AI is designed to work alongside your existing Jobber workflow so your team can improve how calls are handled without changing the way the business already runs. The goal is to make sure every lead is answered properly, every key detail is captured, and your team gets cleaner information to work with from the start."
  },
  {
    question: "Why would I need this if I already use Jobber?",
    answer: "Jobber helps manage work once it is in your system, but it does not solve what happens during the call itself. If calls are mishandled, rushed, or inconsistent, bad information enters the workflow and slows everything down. Restoration AI improves the intake side so your Jobber process starts with stronger information and better job flow."
  },
  {
    question: "Can this handle emergency restoration calls correctly?",
    answer: "Yes. Restoration AI is built specifically for restoration conversations, including urgent water, fire, and mold situations. It is designed to handle stressed callers, ask the right questions, and keep the conversation moving in a way that fits real-world restoration scenarios."
  },
  {
    question: "Will my team have to learn a new system?",
    answer: "No. The point is not to replace the system your team already knows. Restoration AI is there to improve the front end of the process by handling calls better and collecting cleaner information, while your team keeps using the workflow they are already comfortable with."
  },
  {
    question: "Can it follow the way we want calls handled?",
    answer: "Yes. One of the biggest advantages is consistency. Restoration AI can be aligned to your preferred script, your preferred call flow, and the specific details your company wants captured, so the experience feels more like your business and less like a generic answering solution."
  },
  {
    question: "What makes this better than a normal answering service for Jobber users?",
    answer: "A normal answering service usually takes messages and passes them along. Restoration AI is built to handle restoration-specific calls with more accuracy, more consistency, and more control. That means better conversations, better job details, and faster handoff to your team instead of a loose message that creates more work later."
  }
];
function JobberHomepage() {
  const [openIndex, setOpenIndex] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-white font-sans overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-[0.25] pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 20%, rgba(255, 255, 255, 0) 90%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 pt-36 pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-6 md:space-y-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-row items-center gap-2 px-4 py-1.5 border border-slate-200 bg-white rounded-full font-bold text-[13px] tracking-wide text-slate-700 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-blue-600 animate-pulse" }),
          "Jobber Integration"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-5xl lg:text-[60px] font-extrabold leading-[1.1] tracking-tight text-slate-900", children: [
          "Your Jobber Workflow",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Stays the Same.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent", children: [
            "Now Every Call",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Gets Answered."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium", children: "Restoration AI works alongside Jobber so your team can answer every call, capture better job details, and move faster without changing the way your business already runs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-slate-500 max-w-[540px] leading-[1.6] font-medium pb-2", children: "Built for restoration companies that want faster intake, cleaner job information, and fewer missed opportunities." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform", children: "Book a Strategy Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center", children: [
            "Start for Free ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-white group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 w-full flex justify-center lg:justify-end lg:self-start lg:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507f238381eafa8930222.webp",
          alt: "Jobber Logo",
          className: "w-full max-w-[360px] lg:max-w-[460px] h-auto object-contain drop-shadow-2xl"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 bg-[#061124] py-14 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[#3dd0ff] text-[32px] font-bold leading-tight", children: "2 AM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-[16px] tracking-wide mt-1", children: "Peak Call Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]", children: "Most emergency calls happen outside business hours" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[#3dd0ff] text-[32px] font-bold leading-tight", children: "5 min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-[16px] tracking-wide mt-1", children: "Response Window" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]", children: "Time before the homeowner calls someone else" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[#3dd0ff] text-[32px] font-bold leading-tight", children: "Zero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-[16px] tracking-wide mt-1", children: "Manual Entry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]", children: "No typing or intake work for your office" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[#3dd0ff] text-[32px] font-bold leading-tight", children: "Easy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-[16px] tracking-wide mt-1", children: "Setup Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-[14px] mt-2 font-medium max-w-[200px]", children: "Live quickly with no disruption" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 pt-24 pb-12 px-6 max-w-[800px] mx-auto text-center space-y-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.1]", children: "Jobber Is Only as Good as the Information Going Into It" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-slate-500 leading-[1.6] font-medium max-w-3xl", children: "Jobber helps your team stay organized, but the workflow still depends on what happens when the phone rings. If calls are handled poorly, key details get missed, urgency gets lost, and your team starts the job with bad information. Restoration AI makes sure every call is answered the right way, so the right information gets captured before it ever reaches your workflow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-5 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-50 transition hover:scale-[1.02] transform", children: "Book a Strategy Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-[18px] shadow-[0_0_25px_rgba(28,91,255,0.35)] hover:from-blue-700 hover:to-blue-900 transition hover:scale-[1.02] transform flex items-center gap-2 justify-center", children: [
            "Start for Free ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-white group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 pt-8 pb-24 px-6 max-w-[800px] mx-auto text-center space-y-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[40px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight", children: "Your Intake, Fully Automated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] text-slate-500 leading-[1.6] font-medium", children: "Restoration AI answers inbound calls instantly, handles restoration conversations the right way, captures the details your team actually needs, and helps move the job forward fast. Instead of relying on rushed notes, missed details, or inconsistent phone handling, your team gets a cleaner intake process from the very first call." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 pb-16 px-6 lg:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[50%] top-0 bottom-0 w-px bg-blue-200 -translate-x-[50%] hidden md:block z-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 md:gap-14 relative z-10 w-full py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4", children: "Call Answered Instantly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium", children: "The moment a lead calls in, Restoration AI answers right away and starts the conversation correctly. It handles emergency situations with the right tone, asks the right questions, and keeps the call moving without delay." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4", children: "Job Details Captured Clearly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium", children: "Customer details, property information, job type, urgency, and other key notes are gathered in a clean, consistent way. That means your team gets better information from the start instead of trying to piece things together later." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-10 lg:p-14 rounded-[32px] border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center text-center mx-auto max-w-4xl w-full relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[28px] lg:text-[32px] font-bold text-slate-900 leading-[1.2] mb-4", children: "Your Team Moves Faster" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] lg:text-[18px] text-slate-500 leading-relaxed font-medium", children: "Once the call is complete, the right information is ready for your workflow so your team can respond faster, book smarter, and stay organized inside the system they already use. No messy handoff, no wasted time, and no missed momentum." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 max-w-5xl mx-auto flex justify-center items-center gap-10 lg:gap-16 pt-8 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 36, className: "text-slate-400/80 stroke-[1.5]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[38px] lg:text-[44px] font-extrabold text-[#111827] tracking-tight", children: "Powerful Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 36, className: "text-slate-400/80 stroke-[1.5]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Built for Restoration Calls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Handles water, fire, and mold calls the right way instead of using a generic script." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Cleaner Job Intake" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Captures the information your team actually needs before the job ever gets moving." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Works Alongside Jobber" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Fits into your existing workflow so you can improve intake without changing your whole system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Faster Team Handoffs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Gets the right job details in front of your team faster so they can act quickly." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Better Lead Qualification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Helps sort real opportunities from weak calls so your time goes to the right jobs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 lg:p-9 rounded-[32px] border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[42px] h-[42px] rounded-full bg-[#3dd0ff] flex items-center justify-center mb-5 shadow-sm shadow-blue-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 20, className: "text-white", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[21px] font-bold text-slate-900 mb-2.5 leading-tight", children: "Consistent Every Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-slate-500 leading-relaxed font-medium", children: "Follows the same process on every call so nothing important gets skipped." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-white relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center max-w-4xl mx-auto mb-16 flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]", children: "Frequently Asked Questions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `border rounded-3xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? "bg-slate-50 border-slate-300 shadow-md transform scale-[1.01]" : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setOpenIndex(isOpen ? null : idx),
                  className: "w-full flex items-center justify-between px-6 md:px-7 h-[90px] md:h-[100px] text-left focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px] md:text-[20px] font-bold text-slate-900 tracking-tight leading-snug pr-8 line-clamp-2", children: faq.question }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        size: 24,
                        className: `text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : "rotate-0"}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 md:px-7 pb-6 md:pb-7 pt-0 text-slate-600 text-[16px] md:text-[18px] leading-relaxed font-medium", children: faq.answer })
                }
              ) })
            ]
          },
          idx
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-32 bg-white relative overflow-hidden text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12 text-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1.1]", children: [
        "Stop Letting Bad Intake ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent", children: "Slow Down a Good Workflow" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-[1.6]", children: "If your team already uses Jobber, you do not need a whole new system. You need every call handled the right way so the right information reaches your workflow from the start." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-[18px] border-[1.5px] border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.04)] hover:bg-slate-50 transition-all transform hover:scale-[1.02]", children: "Book a Strategy Call" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-[18px] hover:from-blue-700 hover:to-blue-900 transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(28,91,255,0.4)]", children: [
          "Start for Free",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20, className: "text-white group-hover:translate-x-1 transition-transform" })
        ] })
      ] })
    ] }) })
  ] });
}
const $$Jobber = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "JobberHomepage", JobberHomepage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/integrations/JobberHomepage", "client:component-export": "default" })} ${renderComponent($$result2, "BookACall", BookACall, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/BookACall", "client:component-export": "default" })} ` })}`;
}, "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/integrations/jobber.astro", void 0);
const $$file = "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/integrations/jobber.astro";
const $$url = "/integrations/jobber";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Jobber,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
