"use client";

import React, { useEffect, useRef } from 'react';

/**
 * Soft blue glow that trails the cursor across the whole site.
 * Uses the hero's blue (blue-500) at low opacity. Desktop pointers only.
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;

    let tx = -1000, ty = -1000; // target
    let x = -1000, y = -1000;   // rendered
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!visible) { visible = true; el.style.opacity = '1'; }
    };
    const onLeave = () => { visible = false; el.style.opacity = '0'; };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[70] opacity-0 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0.05) 40%, rgba(59,130,246,0) 68%)',
        willChange: 'transform'
      }}
    />
  );
}
