"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function VisualIntakeAnimation() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    // SCENE 1: Alert (0s - 4s)
    tl.set("#vi-scene-lock", { display: 'flex', opacity: 1 })
      .set("#vi-scene-form", { display: 'none', opacity: 0 })
      .set("#vi-photo", { opacity: 0, scale: 1.1 })
      .set("#vi-placeholder", { opacity: 1 })
      .set("#vi-scan-line", { opacity: 0, top: '0%' })
      .set("#vi-submit", { background: '#e2e8f0', color: '#94a3b8' })
      .set("#vi-flash", { opacity: 0 })
      
      .fromTo("#vi-notif-banner", 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, 
        0
      )
      .to({}, { duration: 3.2 }); // Hold

    // SCENE 2: Interaction (4s - 4.5s)
    tl.to("#vi-notif-banner", { 
      scale: 1.05, 
      filter: "brightness(1.5)", 
      duration: 0.2, 
      repeat: 1, 
      yoyo: true, 
      ease: "power2.inOut" 
    });

    // SCENE 3: App Transition
    tl.to("#vi-scene-lock", { opacity: 0, duration: 0.4 })
      .set("#vi-scene-lock", { display: 'none' })
      .set("#vi-scene-form", { display: 'flex', opacity: 0 })
      .to("#vi-scene-form", { opacity: 1, duration: 0.4 })
      .to({}, { duration: 1.0 }) // User reading prompt
      
      // Camera Flash
      .to("#vi-flash", { opacity: 1, duration: 0.05 })
      .set("#vi-placeholder", { opacity: 0 })
      .to("#vi-photo", { opacity: 1, scale: 1, duration: 0.01 })
      .to("#vi-flash", { opacity: 0, duration: 0.4 })
      
      // AI Scanning Effect
      .to("#vi-scan-line", { opacity: 0.8, duration: 0.2 })
      .to("#vi-scan-line", { top: '100%', duration: 1.5, ease: "linear" })
      .to("#vi-scan-line", { opacity: 0, duration: 0.2 })
      
      // Button turns active
      .to("#vi-submit", { background: '#2563eb', color: 'white', duration: 0.3 })
      .to({}, { duration: 2.5 }); // Hold final screen

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="vi-phone-animation-wrapper">
      <style>{`
        .vi-phone-animation-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          width: 100%;
        }

        .vi-phone-hardware {
          position: relative;
          width: 320px;
          height: 640px;
          background: #0A192F;
          border-radius: 50px;
          padding: 8px;
          border: 1px solid #1e293b;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
          /* No scale down, requested to be bigger and cleaner */
        }

        .vi-phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          background: #0b1426;
          border-radius: 42px;
          overflow: hidden;
          border: 1px solid #0f172a;
        }

        .vi-scene {
          position: absolute;
          inset: 0;
          opacity: 0;
          display: none;
          flex-direction: column;
        }

        .vi-scene.active {
          opacity: 1;
          display: flex;
        }

        /* Lock Screen */
        .vi-lock-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 60px;
        }

        .vi-lock-clock h1 { color: white; font-size: 64px; font-weight: 200; margin: 0; line-height: 1; }
        .vi-lock-clock p { color: rgba(255,255,255,0.6); margin: 0; text-align: center; font-size: 20px; margin-top: 10px; }

        .vi-banner {
          margin-top: 80px;
          width: 90%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 15px;
          display: flex;
          gap: 12px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .vi-banner-icon { width: 40px; height: 40px; background: #3b82f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .vi-banner-label { color: rgba(255,255,255,0.5); font-size: 10px; font-weight: bold; text-transform: uppercase; }
        .vi-banner-text p { color: white; font-size: 13px; margin: 4px 0 0 0; line-height: 1.4; }
        .vi-banner-link { color: #60a5fa; text-decoration: underline; }

        /* Form Screen */
        #vi-scene-form { background: white; }
        .vi-form-header { padding: 50px 24px 20px; border-bottom: 1px solid #f1f5f9; }
        .vi-form-header h2 { font-size: 20px; margin: 0; color: #0f172a; }
        .vi-authorization-text { font-size: 16px; color: #334155; line-height: 1.5; margin-bottom: 16px; text-align: center; }
        
        .vi-submit-button {
          width: 100%;
          background: #e2e8f0;
          color: #94a3b8;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: bold;
          margin-top: 16px;
          transition: all 0.3s ease;
        }

        .vi-swipe-indicator { margin-bottom: 40px; display: flex; flex-direction: column; align-items: center; }
        .vi-swipe-bar { width: 140px; height: 5px; background: white; border-radius: 10px; opacity: 0.3; }
        .vi-swipe-text { color: white; font-size: 11px; margin-top: 12px; opacity: 0.4; letter-spacing: 2px; text-transform: uppercase; }

        .vi-home-bar { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; background: rgba(0,0,0,0.1); border-radius: 10px; z-index: 10; }

        .vi-btn { position: absolute; background: #1e293b; border-radius: 2px; }
        .vi-side-power { right: -3px; top: 120px; width: 3px; height: 60px; }
        .vi-side-vol-up { left: -3px; top: 100px; width: 3px; height: 40px; }
        .vi-side-vol-down { left: -3px; top: 150px; width: 3px; height: 40px; }
        
        .vi-status-bar { padding: 12px 24px; display: flex; justify-content: space-between; color: white; font-size: 12px; font-weight: 600; }
        .vi-battery { width: 20px; height: 10px; border: 1px solid white; border-radius: 3px; position: relative; }
        .vi-battery::after { content: ''; position: absolute; right: -3px; top: 2px; width: 2px; height: 4px; background: white; border-radius: 1px; }
        .vi-battery::before { content: ''; position: absolute; left: 1px; top: 1px; bottom: 1px; width: 14px; background: white; border-radius: 1px; }
      `}</style>
      <div className="vi-phone-hardware">
        <div className="vi-phone-screen">
          {/* Scene 1: Notification */}
          <div id="vi-scene-lock" className="vi-scene active">
            <div className="vi-status-bar">
              <span>9:41</span>
              <div className="notif-icons">
                 <div className="vi-battery"></div>
              </div>
            </div>
            <div className="vi-lock-content">
              <div className="vi-lock-clock">
                <h1>9:41</h1>
                <p>Friday, May 1</p>
              </div>
              <div id="vi-notif-banner" className="vi-banner">
                <div className="vi-banner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="vi-banner-text">
                  <span className="vi-banner-label">Restoration AI</span>
                  <p>Please upload photos of the damage. <span className="vi-banner-link">Tap here to open camera.</span></p>
                </div>
              </div>
            </div>
            <div className="vi-swipe-indicator">
              <div className="vi-swipe-bar"></div>
              <span className="vi-swipe-text">Swipe up to open</span>
            </div>
          </div>

          {/* Scene 2: Form */}
          <div id="vi-scene-form" className="vi-scene">
            <div className="vi-form-header">
              <h2>Damage Assessment</h2>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px' }}>
              <div className="vi-authorization-text">
                Point your camera at the affected area so we can dispatch the right equipment.
              </div>
              <div style={{ flex: 1, border: '2px dashed #cbd5e1', borderRadius: '16px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                <div id="vi-placeholder" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#64748b', zIndex: 1 }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  <span style={{ marginTop: '8px', fontSize: '13px', fontWeight: 'bold' }}>Tap to capture</span>
                </div>
                
                <img id="vi-photo" src="https://images.unsplash.com/photo-1620021614282-3db3a47b1983?q=80&w=400&h=400&fit=crop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} alt="Water damage" />
                
                <div id="vi-scan-line" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: '#3b82f6', boxShadow: '0 0 15px 2px #3b82f6', zIndex: 3 }}></div>
                
                {/* Camera Flash */}
                <div id="vi-flash" style={{ position: 'absolute', inset: 0, background: 'white', zIndex: 4, pointerEvents: 'none' }}></div>
              </div>
              <button id="vi-submit" className="vi-submit-button">Upload Photo</button>
            </div>
          </div>
          <div className="vi-home-bar"></div>
        </div>
        {/* Hardware Buttons */}
        <div className="vi-btn vi-side-power"></div>
        <div className="vi-btn vi-side-vol-up"></div>
        <div className="vi-btn vi-side-vol-down"></div>
      </div>
    </div>
  );
}
