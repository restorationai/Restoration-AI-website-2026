"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function WorkAuthAnimation() {
  useEffect(() => {
    // Run the animation
    const tl = gsap.timeline({ repeat: -1 });

    // SCENE 1: Alert (0s - 4s)
    tl.set("#scene-lock", { display: 'flex', opacity: 1 })
      .set("#scene-form", { display: 'none', opacity: 0 })
      .fromTo("#notif-banner", 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }, 
        0
      )
      .to({}, { duration: 3.2 }); // Hold

    // SCENE 2: Interaction (4s - 4.5s)
    tl.to("#notif-banner", { 
      scale: 1.05, 
      filter: "brightness(1.5)", 
      duration: 0.2, 
      repeat: 1, 
      yoyo: true, 
      ease: "power2.inOut" 
    });

    // SCENE 3: Form Transition (4.5s - 10.5s)
    tl.to("#scene-lock", { opacity: 0, duration: 0.4 })
      .set("#scene-lock", { display: 'none' })
      .set("#scene-form", { display: 'flex', opacity: 0 })
      .to("#scene-form", { opacity: 1, duration: 0.4 })
      
      // Signature Animation
      .fromTo("#sig-path", 
        { strokeDasharray: 1000, strokeDashoffset: 1000 }, 
        { strokeDashoffset: 0, duration: 2.5, ease: "power1.inOut" }, 
        "+=0.5"
      )
      .to({}, { duration: 2.5 }); // Hold final screen

    return () => {
      tl.kill(); // Cleanup
    };
  }, []);

  return (
    <div className="phone-animation-wrapper">
      <style>{`
        .phone-animation-wrapper {
          display: flex;
          justify-content: center;
          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          width: 100%;
        }

        .phone-hardware {
          position: relative;
          width: 320px;
          height: 640px;
          background: #0A192F;
          border-radius: 50px;
          padding: 8px;
          border: 1px solid #1e293b;
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          background: #0b1426;
          border-radius: 42px;
          overflow: hidden;
          border: 1px solid #0f172a;
        }

        .scene {
          position: absolute;
          inset: 0;
          opacity: 0;
          display: none;
          flex-direction: column;
        }

        .scene.active {
          opacity: 1;
          display: flex;
        }

        /* Lock Screen */
        .lock-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 60px;
        }

        .lock-clock h1 { color: white; font-size: 64px; font-weight: 200; margin: 0; line-height: 1; }
        .lock-clock p { color: rgba(255,255,255,0.6); margin: 0; text-align: center; font-size: 20px; margin-top: 10px; }

        .banner {
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

        .banner-icon { width: 40px; height: 40px; background: #3b82f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .banner-label { color: rgba(255,255,255,0.5); font-size: 10px; font-weight: bold; text-transform: uppercase; }
        .banner-text p { color: white; font-size: 13px; margin: 4px 0 0 0; line-height: 1.4; }
        .banner-link { color: #60a5fa; text-decoration: underline; }

        /* Form Screen */
        #scene-form { background: white; }
        .form-header { padding: 50px 24px 20px; border-bottom: 1px solid #f1f5f9; }
        .form-header h2 { font-size: 20px; margin: 0; color: #0f172a; }
        .authorization-text { padding: 24px; font-size: 18px; color: #334155; line-height: 1.6; font-style: italic; }
        .sig-box { height: 100px; border: 1px solid #dbeafe; background: #eff6ff; border-radius: 12px; position: relative; }
        .signature-area { margin-top: auto; padding: 24px; }
        .signature-area label { display: block; font-size: 11px; font-weight: bold; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; }

        .submit-button {
          width: 100%;
          background: #2563eb;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: bold;
          margin-top: 16px;
        }

        .swipe-indicator { margin-bottom: 40px; display: flex; flex-direction: column; align-items: center; }
        .swipe-bar { width: 140px; height: 5px; background: white; border-radius: 10px; opacity: 0.3; }
        .swipe-text { color: white; font-size: 11px; margin-top: 12px; opacity: 0.4; letter-spacing: 2px; text-transform: uppercase; }

        .home-bar { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; background: rgba(0,0,0,0.1); border-radius: 10px; }

        .btn { position: absolute; background: #1e293b; border-radius: 2px; }
        .side-power { right: -3px; top: 120px; width: 3px; height: 60px; }
        .side-vol-up { left: -3px; top: 100px; width: 3px; height: 40px; }
        .side-vol-down { left: -3px; top: 150px; width: 3px; height: 40px; }
        
        .status-bar { padding: 12px 24px; display: flex; justify-content: space-between; color: white; font-size: 12px; font-weight: 600; }
        .battery { width: 20px; height: 10px; border: 1px solid white; border-radius: 3px; position: relative; }
        .battery::after { content: ''; position: absolute; right: -3px; top: 2px; width: 2px; height: 4px; background: white; border-radius: 1px; }
        .battery::before { content: ''; position: absolute; left: 1px; top: 1px; bottom: 1px; width: 14px; background: white; border-radius: 1px; }
      `}</style>
      <div className="phone-hardware">
        <div className="phone-screen">
          {/* Scene 1: Notification */}
          <div id="scene-lock" className="scene active">
            <div className="status-bar">
              <span>9:41</span>
              <div className="notif-icons">
                 <div className="battery"></div>
              </div>
            </div>
            <div className="lock-content">
              <div className="lock-clock">
                <h1>9:41</h1>
                <p>Friday, May 1</p>
              </div>
              <div id="notif-banner" className="banner">
                <div className="banner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="banner-text">
                  <span className="banner-label">New Message</span>
                  <p>Your Work Authorization is ready for signature. <span className="banner-link">Click to review.</span></p>
                </div>
              </div>
            </div>
            <div className="swipe-indicator">
              <div className="swipe-bar"></div>
              <span className="swipe-text">Swipe up to open</span>
            </div>
          </div>

          {/* Scene 2: Form */}
          <div id="scene-form" className="scene">
            <div className="form-header">
              <h2>Work Authorization Form</h2>
            </div>
            <div className="form-body">
              <div className="authorization-text">
                "I hereby authorize <strong>ABC Restoration</strong> to proceed with emergency services..."
              </div>
              <div className="signature-area">
                <label>Sign Here</label>
                <div className="sig-box">
                  <svg id="sig-svg" viewBox="0 0 300 120">
                    <path id="sig-path" d="M40,75 c10,-30 20,-60 35,-60 c15,0 10,80 -10,80 c20,-20 40,-40 60,-40 c10,0 5,30 20,30 c15,0 10,-40 30,-40 c15,0 10,40 25,40 c15,0 20,-30 40,-10 c10,10 5,30 25,30" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <button className="submit-button">Submit</button>
            </div>
          </div>
          <div className="home-bar"></div>
        </div>
        {/* Hardware Buttons */}
        <div className="btn side-power"></div>
        <div className="btn side-vol-up"></div>
        <div className="btn side-vol-down"></div>
      </div>
    </div>
  );
}
