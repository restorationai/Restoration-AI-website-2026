globalThis.process ??= {};
globalThis.process.env ??= {};
import { j as jsxRuntimeExports } from "./MainLayout_lnYWzVbu.mjs";
import { o as reactExports } from "./worker-entry_D4Rxi1Wr.mjs";
function BookACall() {
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.restorationai.io/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-12 pb-32", id: "calendar-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[38px] md:text-[50px] lg:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6", children: "Want To Book A Time To Talk?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] md:text-[20px] text-slate-600 font-medium leading-relaxed", children: "Pick a time that works best for you, quick and simple." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 min-h-[800px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border-2 border-blue-400/30 rounded-2xl pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.15)_inset]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-transparent flex flex-col relative z-10", id: "calendar-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            src: "https://link.restorationai.io/widget/booking/nxDQ6IYn3QIIvrXS6Ib0",
            style: { width: "100%", height: "800px", border: "none", overflow: "hidden" },
            scrolling: "no",
            id: "amzzk8cUTFJTWf00mnGo_1765575687034"
          }
        ) })
      ] }) })
    ] })
  ] });
}
export {
  BookACall as B
};
