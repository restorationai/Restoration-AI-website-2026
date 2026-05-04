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

            {/* Calendar Container */}
            <div className="w-full max-w-6xl mx-auto flex flex-col relative z-10" id="calendar-container">
              <iframe 
                src="https://link.restorationai.io/widget/booking/BOuvQbEVWGytVmoDxqrJ" 
                style={{ width: '100%', height: '800px', border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                id="amzzk8cUTFJTWf00mnGo_1765575687034"
              ></iframe>
            </div>
          </div>
        </section>
    );
}
