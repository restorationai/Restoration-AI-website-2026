import React, { useEffect } from 'react';

export default function BookACall() {
    useEffect(() => {
        // Dynamically load the GHL form embed script
        const script = document.createElement("script");
        script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Listen for GHL booking complete event to redirect locally
        const handleMessage = (event) => {
            if (event.data && event.data[0] === "msgsndr-booking-complete") {
                window.location.href = "/thank-you";
            }
        };
        window.addEventListener("message", handleMessage);

        // Cleanup script and listener on component unmount
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <section className="relative isolate pt-6 pb-16 scroll-mt-24" id="calendar-section">
                {/* Background radial glow matching the site aesthetic */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-5">
              <h2 className="text-[34px] md:text-[42px] lg:text-[48px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-3">
                Want To Book A Time To Talk?
              </h2>
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium leading-relaxed">
                Pick a time that works best for you, quick and simple.
              </p>
            </div>

            {/* Calendar Container */}
            <div className="w-full max-w-6xl mx-auto flex flex-col relative z-10" id="calendar-container">
              <iframe 
                src="https://link.restorationai.io/widget/bookings/restorationai-specialiststrategy-callga8f5l59ir3zc44uai" 
                style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                id="BOuvQbEVWGytVmoDxqrJ_1765575687034"
              ></iframe>
            </div>
          </div>
        </section>
    );
}
