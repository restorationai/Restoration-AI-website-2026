import React, { useEffect } from 'react';

export default function BookACall() {
    useEffect(() => {
        // Dynamically load the GHL form embed script
        const script = document.createElement("script");
        script.src = "https://link.restorationai.io/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="relative pt-12 pb-32" id="calendar-section">
          {/* Background radial glow matching the site aesthetic */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[38px] md:text-[50px] lg:text-[60px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Want To Book A Time To Talk?
              </h2>
              <p className="text-[18px] md:text-[20px] text-slate-600 font-medium leading-relaxed">
                Pick a time that works best for you, quick and simple.
              </p>
            </div>

            {/* Calendar Container (Wide Square Version) */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 min-h-[800px]">
                {/* Subtle glowing blue border overlay */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.15)_inset]"></div>
                
                <div className="w-full h-full bg-transparent flex flex-col relative z-10" id="calendar-container">
                  
                  <iframe 
                    src="https://link.restorationai.io/widget/booking/nxDQ6IYn3QIIvrXS6Ib0" 
                    style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    id="amzzk8cUTFJTWf00mnGo_1765575687034"
                  ></iframe>

                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
