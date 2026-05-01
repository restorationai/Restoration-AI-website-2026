"use client";

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  { 
    id: 1, 
    quote: '"Since I’ve been using this AI service, every call gets answered... it helps out a lot as far as having more time for yourself and not having a phone strapped to you."', 
    name: "Darron",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3eeacc56ad27908b77d6d.mov"
  },
  {
    id: 8,
    quote: '"...It was one simple fix and too be honest it feels like im working even less…"',
    name: "Scott",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050a8696a78b8df913e6.mov"
  },
  { 
    id: 3, 
    quote: '"... And what\'s been really nice is it sends out a work authorization over the phone… So the job is locked in before we even roll out…"', 
    name: "Todd",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f17ec56ad27908b82177.mov"
  },
  { 
    id: 2, 
    quote: '"Super smooth, super easy to work with... The AI receptionist answers every call 24/7"', 
    name: "Matt",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3ee2850b9a3263ae89cbf.mov"
  },
  {
    id: 9,
    quote: '"Every call is getting answered in the right way now. Our crews are getting dispatched on their own… We\'re not losing jobs and stuff like that anymore, as well as were securing more jobs than we were before"',
    name: "Mario",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050a38381eafa868c6c0.mov"
  },
  { 
    id: 4, 
    quote: '"... Its the best decision i’ve ever made...The AI answers every single call the way I want it to every time…"', 
    name: "Mike",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69f42e36a6108a48585c8b9d.mp4",
    fit: "contain"
  },
  { 
    id: 5, 
    quote: '"... I didn\'t realize how much money I was actually losing from missing phone calls…My revenue has jumped up more then expected…"', 
    name: "Mike",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f1b538381eafa86507d2.mp4"
  },
  {
    id: 10,
    quote: '"Considering how many calls we get now, it\'s nice knowing that no calls will go un-answered. And I can just book jobs for us while we work all day."',
    name: "Garret",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050ac56ad27908bbe780.mov"
  },
  { 
    id: 6, 
    quote: '"... There is no call that goes unanswered… It\'s made such a huge difference for us…Saves me a lot of time…"', 
    name: "Jake",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f17e38381eafa864fd69.mp4",
    thumbnailUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4022238381eafa8683b7a.jpg"
  },
  { 
    id: 7, 
    quote: '"...Now every single call gets answered right away exactly how we want it handled, no matter how many calls we come in at once… Our revenue has gone up since making the switch…"', 
    name: "Zero",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3fe1250b9a3263aebd54d.mov"
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(testimonialsData.length);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [playingCount, setPlayingCount] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    if (isHovered || playingCount > 0) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered, playingCount]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonialsData.length);
    } else if (currentIndex >= testimonialsData.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonialsData.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Small timeout to allow the DOM jump to render without animation before turning transitions back on
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Duplicate items for infinite visual sliding
  const allItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  // Helper for the custom Chevron
  const CustomArrow = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg 
      width="40" height="60" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="3" 
      strokeLinecap="round" strokeLinejoin="round" 
      className="text-amber-500 drop-shadow-sm"
    >
      {direction === 'left' ? <path d="m15 18-6-6 6-6"/> : <path d="m9 18 6-6-6-6"/>}
    </svg>
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-outfit">
            The proof is in the pudding... <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Let's see what our clients have to say</span>
          </h2>
        </div>

        <div 
          className="relative flex items-center group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 z-20 hover:scale-110 active:scale-95 transition-transform"
            aria-label="Previous testimonial"
          >
            <CustomArrow direction="left" />
          </button>

          {/* Carousel Track Wrapper */}
          <div className="w-full overflow-hidden px-2 relative">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''} gap-6`}
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 24px) / 2))`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              <style>{`
                @media (max-width: 768px) {
                  .mobile-track { transform: translateX(calc(-${currentIndex} * (100% + 24px))) !important; }
                }
              `}</style>
              
              {allItems.map((t, i) => (
                <div 
                  key={`${t.id}-${i}`} 
                  className="mobile-track flex-shrink-0 w-full md:w-[calc(50%-12px)] bg-white rounded-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] p-5 md:p-6 flex flex-col md:flex-row gap-6 border border-slate-100"
                >
                  {/* Left Side: Video Placeholder or Real Video */}
                  <div className="w-full md:w-[240px] aspect-[4/5] bg-black rounded-xl overflow-hidden relative flex-shrink-0 flex items-center justify-center border-4 border-black group/video cursor-pointer">
                    {t.videoUrl ? (
                      <video 
                        src={t.videoUrl} 
                        poster={t.thumbnailUrl}
                        className={`w-full h-full ${t.fit === 'contain' ? 'object-contain' : 'object-cover'}`} 
                        controls 
                        controlsList="nofullscreen nodownload noremoteplayback"
                        disablePictureInPicture
                        playsInline
                        preload="metadata"
                        onPlay={() => setPlayingCount(p => p + 1)}
                        onPause={() => setPlayingCount(p => Math.max(0, p - 1))}
                        onEnded={() => setPlayingCount(p => Math.max(0, p - 1))}
                      />
                    ) : (
                      <>
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover/video:opacity-80 transition-opacity" alt="Placeholder portrait" />
                        
                        {/* Fake Video UI Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3 pointer-events-none">
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                              <span className="text-[10px] text-white font-mono font-medium tracking-wider">0:00</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9m-8.586-4.243a1 1 0 00-1.414 0L4 17h16" /></svg>
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                            </div>
                          </div>
                          <div className="w-full h-0.5 bg-white/30 rounded-full mt-2 relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Side: Text & Quote */}
                  <div className="flex-1 flex flex-col pt-1">
                    <div className="flex gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[15px] leading-[1.65] text-slate-700 font-medium whitespace-pre-wrap">
                      {t.quote}
                    </p>
                    <div className="mt-auto pt-6 block text-left">
                      <span className="font-extrabold text-[15px] text-slate-900 tracking-tight">-{t.name}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:-right-12 z-20 hover:scale-110 active:scale-95 transition-transform"
            aria-label="Next testimonial"
          >
            <CustomArrow direction="right" />
          </button>
        </div>

      </div>
    </section>
  );
}
