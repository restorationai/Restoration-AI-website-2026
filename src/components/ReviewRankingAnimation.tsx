import React, { useEffect, useState, useRef } from 'react';

const ReviewRankingAnimation = () => {
    // Uses Intersection Observer to auto-play when in view
    const [shouldPlay, setShouldPlay] = useState(false);
    const [playKey, setPlayKey] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    
    // Animation States
    const [reviewCount, setReviewCount] = useState(12);
    const [rating, setRating] = useState(4.2);
    const [rank, setRank] = useState(3);
    const [showFullStars, setShowFullStars] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldPlay((prev) => {
                        if (!prev) setPlayKey((k) => k + 1);
                        return true;
                    });
                } else {
                    setShouldPlay(false);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Removed interval loop - component now completely resets only when scrolled out of view

    useEffect(() => {
        if (shouldPlay) {
            // Reset state
            setReviewCount(12);
            setRating(4.2);
            setRank(3);
            setShowFullStars(false);

            // 1. Animate Rank Number to #1 after 2 seconds (halfway point)
            const rankTimeout = setTimeout(() => setRank(1), 2000);
            
            // 2. Animate Review Count & Rating Growth
            let startCount = 12;
            const endCount = 358;
            const duration = 4000;
            const startTime = performance.now();
            let rafId: number;

            const animateStats = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                if (elapsed > 0) { 
                    // Count Reviews from 12 to 358
                    setReviewCount(Math.floor(startCount + (endCount - startCount) * progress));
                    // Boost Rating from 4.2 to 5.0
                    setRating(4.2 + (0.8 * progress));
                }

                if (progress < 1) {
                    rafId = requestAnimationFrame(animateStats);
                } else {
                    setShowFullStars(true);
                }
            };
            rafId = requestAnimationFrame(animateStats);

            return () => {
                clearTimeout(rankTimeout);
                cancelAnimationFrame(rafId);
            };
        }
    }, [shouldPlay, playKey]);

    return (
        <div ref={ref} className={`relative flex justify-center w-full transition-all duration-1000 ease-out py-0 ${shouldPlay ? 'opacity-100' : 'opacity-0'}`}>
            {/* 
                This wrapper resets via playKey. 
                Applying scale classes safely enlarges the fixed internal DOM properties visually.
            */}
            <div key={playKey} className={`relative w-full max-w-[450px] scale-[1.05] lg:scale-[1.15] origin-center ${shouldPlay ? 'play-ranking' : ''}`}>
                {/* Browser/Laptop Frame */}
                <div className="bg-slate-950 rounded-t-[1.5rem] border-[12px] border-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden h-[380px]">
                    <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">
                        
                        {/* Browser Header (Search Bar) */}
                        <div className="h-10 border-b border-gray-200 flex items-center px-4 gap-4 bg-white z-10 shrink-0">
                            <span className="text-lg font-bold text-blue-500">G</span>
                            <div className="flex-1 h-7 bg-slate-50 rounded-full border border-slate-200 flex items-center px-3">
                                <span className="text-[10px] text-slate-500 font-medium">water damage restoration near me</span>
                                <i className="fa-solid fa-magnifying-glass text-blue-500 ml-auto text-xs"></i>
                            </div>
                        </div>

                        {/* Search Results Area */}
                        <div className="flex-1 p-4 bg-slate-50 flex flex-col relative overflow-hidden">
                            <div className="text-[10px] font-bold text-slate-700 tracking-wider uppercase mb-2">Businesses</div>
                            
                            <div className="flex-1 relative mt-1">
                                {/* Competitor #1 (Moves Down) */}
                                <div className="competitor-1 absolute top-0 w-full h-[80px] bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                                    <div>
                                        <div className="text-[12px] font-bold text-slate-800 leading-tight">{rank === 1 ? '2.' : '1.'} Metro Restoration</div>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-[10px] text-orange-400 font-bold leading-none">4.8</span>
                                            <div className="flex text-[9px] text-orange-400 leading-none">
                                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <span className="text-[10px] text-slate-500 leading-none">(156)</span>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-image text-slate-300"></i>
                                    </div>
                                </div>

                                {/* Competitor #2 (Moves Down) */}
                                <div className="competitor-2 absolute top-[92px] w-full h-[80px] bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                                    <div>
                                        <div className="text-[12px] font-bold text-slate-800 leading-tight">{rank === 1 ? '3.' : '2.'} 24/7 Water Pros</div>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className="text-[10px] text-orange-400 font-bold leading-none">4.6</span>
                                            <div className="flex text-[9px] text-orange-400 leading-none">
                                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
                                            </div>
                                            <span className="text-[10px] text-slate-500 leading-none">(92)</span>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-image text-slate-300"></i>
                                    </div>
                                </div>

                                {/* Your Company (The Hero - Moves Up) */}
                                <div className="hero-listing absolute top-[184px] w-full h-[80px] bg-white px-4 rounded-xl shadow-sm flex justify-between items-center z-10 border-2 border-transparent">
                                    <div className="flex flex-col py-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[12px] font-bold text-slate-800 leading-none">{rank}.</span>
                                            <span className="text-[12px] font-bold text-slate-900 leading-none">Your Restoration Company</span>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1.5 stars-container">
                                            <span className="text-[10px] text-orange-400 font-bold leading-none">{rating.toFixed(1)}</span>
                                            <div className="flex text-[9px] text-orange-400 gap-[1px] leading-none">
                                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                                {showFullStars ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
                                            </div>
                                            <span className="text-[10px] text-slate-500 leading-none">({reviewCount})</span>
                                        </div>
                                        <div className="text-[9px] font-medium text-slate-400 mt-1 leading-none">Water damage restoration service</div>
                                    </div>
                                    <div className="w-8 h-8 bg-brand-accent/10 rounded flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-house-flood-water text-brand-accent text-sm"></i>
                                    </div>
                                    {/* The Yellow Glow Border */}
                                    <div className="glow-border absolute inset-0 border-2 border-yellow-400 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.5)] pointer-events-none opacity-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewRankingAnimation;
