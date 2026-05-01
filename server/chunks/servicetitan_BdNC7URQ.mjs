globalThis.process ??= {};
globalThis.process.env ??= {};
import "./page-ssr_DoeYdN5E.mjs";
import { c as createComponent } from "./astro-component_C8BU5KYa.mjs";
import { r as renderTemplate, l as renderComponent } from "./worker-entry_D4Rxi1Wr.mjs";
import { B as BookACall } from "./BookACall_Co-FmS82.mjs";
import { $ as $$MainLayout } from "./MainLayout_lnYWzVbu.mjs";
function ServiceTitanHomepage() {
  return null;
}
const $$ServiceTitanFAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/integrations/ServiceTitanFAQ.astro", void 0);
const $$ServiceTitanCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/integrations/ServiceTitanCTA.astro", void 0);
const $$Servicetitan = createComponent(($$result, $$props, $$slots) => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automated Restoration Dispatch for ServiceTitan",
    serviceType: "AI Receptionist & Automation",
    provider: {
      "@type": "SoftwareApplication",
      name: "Restoration AI"
    },
    description: "Automated 24/7 call answering, lead qualification, and emergency crew dispatch directly integrated into ServiceTitan for restoration contractors.",
    areaServed: "Worldwide"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Restoration AI integrate directly with ServiceTitan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Restoration AI is designed to work alongside your ServiceTitan workflow by capturing calls and structuring job details before they enter your system. This ensures every job starts with clean and complete information."
        }
      },
      {
        "@type": "Question",
        name: "Do I have to change how my team uses ServiceTitan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your team continues using ServiceTitan exactly as they do today. Restoration AI improves what happens before the job reaches your system without changing your workflow."
        }
      },
      {
        "@type": "Question",
        name: "Will this slow down our intake calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Restoration AI follows your intake process and only captures what matters. Calls stay efficient while still gathering the details your team needs."
        }
      },
      {
        "@type": "Question",
        name: "What does this improve if I already use ServiceTitan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ServiceTitan works best when jobs are created with complete information. Restoration AI ensures your team is not dealing with missing details or unclear scope, which reduces internal friction and speeds up operations."
        }
      },
      {
        "@type": "Question",
        name: "Can it handle after-hours calls and high call volume?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Restoration AI operates 24 hours a day so no call goes unanswered and no job is missed, even during nights or peak demand."
        }
      },
      {
        "@type": "Question",
        name: "Is this built specifically for restoration companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Restoration AI is designed specifically for restoration workflows and ensures your team receives structured, relevant job information every time."
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "jsonLd": [serviceJsonLd, faqJsonLd] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServiceTitanHomepage", ServiceTitanHomepage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/integrations/ServiceTitanHomepage", "client:component-export": "default" })} ${renderComponent($$result2, "ServiceTitanFAQ", $$ServiceTitanFAQ, {})} ${renderComponent($$result2, "ServiceTitanCTA", $$ServiceTitanCTA, {})} ${renderComponent($$result2, "BookACall", BookACall, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/components/BookACall", "client:component-export": "default" })} ` })}`;
}, "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/integrations/servicetitan.astro", void 0);
const $$file = "/Users/levicandiff/Desktop/Cllient Websites Astro/Restoration-AI-website-2026/src/pages/integrations/servicetitan.astro";
const $$url = "/integrations/servicetitan";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Servicetitan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
