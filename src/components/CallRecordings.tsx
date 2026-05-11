"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

const mockRecordings = [
  {
    company: "SERVPRO",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a162c135a8c8334ab39.png",
    badge: "EMERGENCY NIGHT DISPATCH",
    title: "Basement mold remediation assessment.",
    audioSrc: "/recordings/ServeProSacremento.mp3"
  },
  {
    company: "DRY1OUT",
    logo: "/logos/dry1out.jpg",
    badge: "PRE-QUALIFIED COMMERCIAL LEAD",
    title: "Dishwasher supply line flood.",
    audioSrc: "/recordings/Dry1out.mp3"
  },
  {
    company: "SERVPRO",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a162c135a8c8334ab39.png",
    badge: "URGENT RESIDENTIAL INQUIRY",
    title: "Tenant-reported mold inspection.",
    audioSrc: "/recordings/ServeProTeamRay.mp3"
  },
  {
    company: "AMERICLEAN",
    logo: "https://assets.cdn.filesafe.space/Tx5eKisj3Xluq1SeZKe3/media/69e42a178696a78b8dffaf10.png",
    badge: "OFFICE COMPLEX INTAKE",
    title: "Residential apartment flood extraction.",
    audioSrc: "/recordings/americlean.mp3"
  }
];

function formatTime(s: number) {
  if (!isFinite(s) || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    a.addEventListener('ended', onEnd);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
      a.removeEventListener('ended', onEnd);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      document.querySelectorAll('audio').forEach(el => { if (el !== a) el.pause(); });
      a.play();
      setPlaying(true);
    }
  }, [playing]);

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setCurrent(Number(e.target.value));
  };

  const cycleSpeed = () => {
    const a = audioRef.current;
    if (!a) return;
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    a.playbackRate = next;
    setSpeed(next);
  };

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className="w-full space-y-2">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Timeline */}
      <div className="relative w-full h-2 group">
        <div className="absolute inset-0 rounded-full bg-slate-100" />
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-blue-500 pointer-events-none"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.1}
          value={current}
          onChange={seek}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label="Seek"
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-3">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 hover:bg-blue-700 transition-colors"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing
            ? <Pause size={14} fill="currentColor" />
            : <Play size={14} fill="currentColor" className="ml-0.5" />}
        </button>

        {/* Time */}
        <span className="text-[11px] text-slate-400 tabular-nums shrink-0">
          {formatTime(current)} / {formatTime(duration)}
        </span>

        {/* Speed — pushes to right */}
        <button
          onClick={cycleSpeed}
          className="ml-auto text-[11px] font-bold text-slate-500 hover:text-blue-600 transition-colors tabular-nums px-1.5 py-0.5 rounded border border-slate-200 hover:border-blue-300"
          aria-label="Playback speed"
        >
          {speed === 1 ? '1×' : `${speed}×`}
        </button>
      </div>
    </div>
  );
}

export default function CallRecordings() {
  return (
    <section className="py-24 relative bg-transparent font-sans">
      <div className="absolute top-[20%] left-0 w-[500px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none z-0 -translate-x-1/2" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none z-0 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div className="relative inline-block px-4 sm:px-10 md:px-24">
            <div className="absolute left-0 md:left-2 lg:-left-2 bottom-4 md:bottom-2 transform hidden md:block">
              <svg className="w-10 h-10 md:w-16 md:h-16 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14m0 0V9m0 10H9" />
              </svg>
            </div>
            <h2 className="text-[30px] sm:text-[36px] md:text-[46px] lg:text-[52px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1] relative z-10">
              Don't Take Our Word For It. Listen. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 drop-shadow-sm">
                In Real Life Scenarios
              </span>
            </h2>
            <div className="absolute right-0 md:right-2 lg:-right-2 bottom-4 md:bottom-2 transform hidden md:block">
              <svg className="w-10 h-10 md:w-16 md:h-16 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5L5 19m0 0V9m0 10h10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Outer Interface Boundary */}
        <div className="relative p-6 md:p-8 lg:p-10 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.05)] ring-1 ring-slate-900/5 mx-auto w-full">
          <div className="absolute inset-x-10 inset-y-10 bg-blue-600/5 blur-[140px] rounded-[50px] pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 rounded-[40px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 w-full mx-auto">
            {mockRecordings.map((rec, i) => (
              <div
                key={i}
                className="w-full bg-white border border-slate-100 rounded-[20px] overflow-hidden shadow-sm flex flex-col font-sans hover:shadow-lg transition-all duration-300"
              >
                {/* Logo */}
                <div className="w-full bg-white border-b border-slate-100 flex items-center justify-center overflow-hidden mix-blend-multiply relative">
                  <img src={rec.logo} alt={`${rec.company} logo`} className="w-full h-auto object-cover scale-[1.03]" />
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <div className="flex justify-between items-start min-h-[28px] gap-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wide flex items-center gap-1.5 shrink-0 pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      {rec.company}
                    </span>
                  </div>

                  <div className="min-h-[76px] flex flex-col justify-start mb-2">
                    <h3 className="text-[19px] lg:text-[21px] xl:text-[22px] leading-[1.25] font-bold text-slate-900 font-outfit tracking-tight">
                      {rec.title}
                    </h3>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t-[2px] border-dotted border-slate-300 w-full mb-5" />
                    <AudioPlayer src={rec.audioSrc} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
