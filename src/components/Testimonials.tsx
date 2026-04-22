"use client";

import React, { useRef, useState } from 'react';
import { Star, Play, Pause } from 'lucide-react';

const testimonialsData = [
  { 
    type: 'video',
    name: "John",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f0368696a78b8df4fd26.mp4"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/6962c0dff8a93b113e9487e3.png"
  },
  { 
    type: 'video',
    name: "Mike",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f1b538381eafa86507d2.mp4"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/6962c0d3c7683b384a72265a.png"
  },
  { 
    type: 'video',
    name: "Darron",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3eeacc56ad27908b77d6d.mov"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e5665838381eafa8a80ce4.png"
  },
  { 
    type: 'video',
    name: "Garret",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050ac56ad27908bbe780.mov"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68b4b1bd93b6084c59912b6e.png"
  },
  {
    type: 'video',
    name: "Todd",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f17ec56ad27908b82177.mov"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68b4b1ccde84f462d40bc8c0.png"
  },
  {
    type: 'video',
    name: "Mario",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050a38381eafa868c6c0.mov"
  },
  { 
    type: 'video',
    name: "Jake",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3f17e38381eafa864fd69.mp4",
    thumbnailUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4022238381eafa8683b7a.jpg"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68d227bee6849c3c385ad5e0.png"
  },
  { 
    type: 'video',
    name: "Zero",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3fe1250b9a3263aebd54d.mov"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/6962bda9f8a93b1e8a91b5db.png"
  },
  {
    type: 'video',
    name: "Scott",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e4050a8696a78b8df913e6.mov"
  },
  {
    type: 'video',
    name: "Matt",
    videoUrl: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e3ee2850b9a3263ae89cbf.mov"
  },
  {
    type: 'image',
    url: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68b4ad56881e8eb117c07273.png"
  }
];

const VideoCard = ({ data }: { data: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        document.querySelectorAll('video').forEach(vid => {
          if (vid !== videoRef.current) vid.pause();
        });
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className="relative rounded-[20px] overflow-hidden break-inside-avoid mb-5 cursor-pointer group shadow-sm border border-slate-200"
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={data.videoUrl} 
        poster={data.thumbnailUrl}
        className="w-full aspect-[9/16] object-cover bg-black" 
        controls={false}
        playsInline
        loop
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      <div className={`absolute inset-0 transition-colors pointer-events-none ${isPlaying ? 'bg-transparent' : 'bg-black/20 group-hover:bg-black/30'}`} />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white backdrop-blur-md shadow-lg transition-all transform group-hover:scale-110 ${isPlaying ? 'bg-black/40 opacity-0 group-hover:opacity-100' : 'bg-blue-600/90'}`}>
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <span className="text-white font-bold text-[15px] drop-shadow-md">{data.name}</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={12} fill="currentColor" className="text-amber-400 drop-shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ url }: { url: string }) => (
  <div className="w-full relative rounded-[20px] overflow-hidden break-inside-avoid shadow-sm border border-slate-200 bg-white hover:shadow-md hover:border-slate-300 transition-all mb-5">
    <img src={url} alt="Customer feedback" className="w-full h-auto object-cover" loading="lazy" />
  </div>
);

export default function Testimonials() {

  const WIDE_URLS = [
    "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68b4ad56881e8eb117c07273.png",
    "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/68d227bee6849c3c385ad5e0.png"
  ];

  const V = testimonialsData.filter(t => t.type === 'video');
  const W = WIDE_URLS;
  const N = testimonialsData.filter(t => t.type === 'image' && !WIDE_URLS.includes(t.url as string)).map(t => t.url);

  // We have perfectly: 10 Videos, 6 Normal Images, 2 Wide Images!

  return (
    <section id="testimonials" className="py-20 md:py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1000px] bg-blue-500/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
      <div className="container mx-auto px-4 relative z-10 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Contractors who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 drop-shadow-sm">stopped the bleeding.</span>
          </h2>
        </div>

        {/* --- DESKTOP BESPOKE LAYOUT (lg and up) --- */}
        {/* Flawless true CSS Masonry for zero gaps. Wide elements forced to bottom as requested. */}
        <div className="hidden lg:block max-w-[1080px] mx-auto w-full font-sans">
          
          <div className="columns-3 gap-5">
            <VideoCard data={V[0]} />
            <ImageCard url={N[0] as string} />
            <VideoCard data={V[1]} />
            <VideoCard data={V[2]} />
            <ImageCard url={N[1] as string} />
            <VideoCard data={V[3]} />
            <ImageCard url={N[2] as string} />
            <VideoCard data={V[4]} />
            <VideoCard data={V[5]} />
            <ImageCard url={N[3] as string} />
            <VideoCard data={V[6]} />
            <ImageCard url={N[4] as string} />
            <VideoCard data={V[7]} />
            <VideoCard data={V[8]} />
            <ImageCard url={N[5] as string} />
            <VideoCard data={V[9]} />
          </div>

          <div className="flex gap-5 w-full mt-0">
             <div className="w-[calc((100%-40px)*0.666667+20px)]">
               <ImageCard url={W[0]} />
               <ImageCard url={W[1]} />
             </div>
             <div className="w-[calc((100%-40px)*0.333333)]"></div>
          </div>

        </div>

        {/* --- MOBILE/TABLET FALLBACK LAYOUT --- */}
        {/* Native column masonry for smaller devices gracefully degrading */}
        <div className="lg:hidden columns-1 sm:columns-2 gap-4 max-w-[1080px] mx-auto w-full font-sans">
          {testimonialsData.map((t, i) => (
            <React.Fragment key={i}>
              {t.type === 'video' ? (
                <VideoCard data={t} />
              ) : (
                <ImageCard url={t.url as string} />
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}
