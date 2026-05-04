import React, { useEffect, useState, useRef } from 'react';
import { MessageCircleMore } from 'lucide-react';

const ChatWidgetAnimation = () => {
    const [shouldPlay, setShouldPlay] = useState(false);
    const [playKey, setPlayKey] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

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
            { threshold: 0.5 }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`relative flex justify-center w-full transition-all duration-1000 ease-out py-0 ${shouldPlay ? 'opacity-100' : 'opacity-0'}`}>
            <div key={playKey} className={`relative w-full max-w-[450px] scale-[1.05] lg:scale-[1.15] origin-center ${shouldPlay ? 'play-chat' : ''}`}>
                {/* Browser Frame */}
                <div className="bg-slate-950 rounded-t-[1.5rem] border-[12px] border-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden h-[380px]">
                    <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">
                        
                        {/* Mock Website Header */}
                        <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6 bg-white z-10 shrink-0">
                            <div className="font-extrabold text-blue-900 text-sm tracking-tighter">
                                ABC<span className="text-blue-500">RESTORATION</span>
                            </div>
                            <div className="flex gap-3 text-[8px] font-bold text-gray-500 uppercase">
                                <span>Services</span><span>About</span><span>Contact</span>
                            </div>
                        </div>

                        {/* Mock Website Content */}
                        <div className="flex-1 bg-gray-50 relative p-8">
                            <div className="h-2 w-16 bg-blue-500 mb-3"></div>
                            <h1 className="text-2xl font-extrabold text-blue-900 leading-tight mb-2">Water Damage?<br />We Can Help.</h1>
                            <p className="text-xs text-gray-600 max-w-[200px] mb-4">24/7 Emergency service for restoration.</p>
                            <div className="px-4 py-2 bg-blue-600 text-white text-[10px] font-bold inline-block rounded">Get a Quote</div>
                        </div>

                        {/* 1. The Chat Bubble (Stays visible until clicked) */}
                        <div className="chat-bubble absolute bottom-4 right-4 w-12 h-12 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white z-20">
                            <MessageCircleMore size={20} />
                        </div>

                        {/* 2. The Chat Window (Opens after bubble disappears) */}
                        <div className="chat-window absolute bottom-4 right-4 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-30 origin-bottom-right">
                            <div className="bg-blue-600 p-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-xs font-bold">Chat with Us</span>
                            </div>
                            
                            {/* Message Feed */}
                            <div className="h-40 bg-gray-50 p-3 flex flex-col gap-3 overflow-hidden relative">
                                <div className="chat-scroll-wrapper w-full flex flex-col gap-3">
                                    <div className="msg-1 self-end bg-blue-600 text-white text-xs p-2 rounded-l-lg rounded-tr-lg max-w-[90%]">
                                        Hi, I'd like to schedule an estimate.
                                    </div>
                                    <div className="msg-2 self-start bg-gray-200 text-gray-800 text-xs p-2 rounded-r-lg rounded-tl-lg max-w-[90%]">
                                        Hello! I can help with that. When works best?
                                    </div>
                                    <div className="msg-3 self-end bg-blue-600 text-white text-xs p-2 rounded-l-lg rounded-tr-lg max-w-[90%]">
                                        Tomorrow at 12 o'clock.
                                    </div>
                                    <div className="msg-4 self-start bg-gray-200 text-gray-800 text-xs p-2 rounded-r-lg rounded-tl-lg max-w-[90%]">
                                        Perfect. We will be there at 12:00 PM.
                                    </div>
                                </div>
                            </div>

                            {/* Input Field Area */}
                            <div className="p-2 border-t border-gray-100 bg-white">
                                <div className="h-8 bg-gray-100 rounded px-2 flex items-center">
                                    <span className="text-[10px] text-gray-400">Type a message...</span>
                                </div>
                            </div>
                        </div>

                        {/* 3. The Mouse Cursor (Simulated Movement) */}
                        <div className="mouse-cursor absolute top-1/2 left-1/2 w-4 h-4 pointer-events-none z-50">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                                <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWidgetAnimation;
