"use client";

const partners = [
  { name: 'Albiware', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b3594cde4bbc2adc0763.png', medium: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507ee2c135a8c835819e7.png', large: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507ed38381eafa8930119.png', large: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507ee2c135a8c835819e8.png', large: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507ee50b9a3263a176bf9.png', large: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507f238381eafa8930222.webp', large: true },
  { name: '', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e507f28696a78b8d2337a3.png', large: true },
  { name: 'Workiz', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b1c39837053a7ee389e8.png' },
  { name: 'GoHighLevel', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e508e72c135a8c83584e85.png', large: true },
  { name: 'Slack', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b359c9e9d61b86511415.png' },
  { name: 'Monday', url: 'https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69d2b35984c045c2746ce83a.png' }
];

export default function Integrations() {
  return (
    <section className="py-24 font-sans relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-[1800px]">
        <div className="text-center w-full max-w-[1400px] mx-auto mb-16">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Keep Your System. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 drop-shadow-sm">Capture More Jobs.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium px-4 max-w-4xl mx-auto mt-4">
            We plug into your system so everything works the same with no changes or learning curve. The only thing you'll notice is more calls answered and more high ticket jobs booked.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full mx-auto">
          {/* Row 1: Large Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 xl:gap-14 w-full px-4">
            {partners.slice(0, 6).map((p, i) => (
              <div key={`row1-${i}`} className="flex flex-col items-center gap-2 group">
                <img 
                  src={p.url} 
                  alt={p.name || 'Integration Partner'} 
                  className={`${p.large ? 'h-14 md:h-24' : p.medium ? 'h-12 md:h-16' : 'h-8 md:h-12'} w-auto transition-all duration-300 hover:scale-110 object-contain`} 
                />
                {p.name && (
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Smaller Logos + MORE */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 xl:gap-14 w-full px-4">
            {partners.slice(6).map((p, i) => (
              <div key={`row2-${i}`} className="flex flex-col items-center gap-2 group">
                <img 
                  src={p.url} 
                  alt={p.name || 'Integration Partner'} 
                  className={`${p.large ? 'h-14 md:h-24' : p.medium ? 'h-12 md:h-16' : 'h-8 md:h-12'} w-auto transition-all duration-300 hover:scale-110 object-contain`} 
                />
                {p.name && (
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.name}
                  </span>
                )}
              </div>
            ))}
            <div className="text-slate-400 font-bold text-sm tracking-widest opacity-80 pl-4 relative top-[-10px]">+ MORE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
