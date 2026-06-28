import Heroimg from '../assets/images/hero.png';
import React, { useRef, useEffect } from 'react';
const Hero = () => {
  // Parallax Ref
  const parallaxTextRef = useRef<HTMLSpanElement | null>(null);

  // Scroll listener for hero parallax text
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxTextRef.current) {
        const scrollVal = window.scrollY;
        const scale = 1.5 + scrollVal * 0.0008;
        const yTranslate = scrollVal * 0.15;
        parallaxTextRef.current.style.transform = `scale(${Math.min(scale, 2.5)}) translateY(${yTranslate}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 overflow-hidden">
      {/* Massive Parallax Backdrop text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
        <span
          ref={parallaxTextRef}
          className="font-display text-[60px] sm:text-[150px] lg:text-[280px] font-extrabold text-primary/[0.03] tracking-tight transition-transform duration-100 ease-out inline-block"
          style={{ transform: "scale(1.5)" }}
        >
          TECH
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center relative z-10 max-w-7xl">
        {/* MacBook Showcase Mockup */}
        <div className="w-full max-w-5xl mb-8 sm:mb-12">
          <img
            alt="MacBook Mockup with Technology Interface"
            className="w-full h-auto drop-shadow-[0_30px_50px_rgba(17,17,17,0.12)] rounded-lg"
            src={Heroimg}
          />
        </div>

        {/* Floating Glass CTA Panel */}
        <div className="glass-panel floating-cta max-w-4xl p-6 sm:p-8 md:p-12 rounded-container-radius shadow-2xl text-center md:-mt-32 relative z-20 w-full border border-secondary/10">
          <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest block mb-4">
            PREMIUM PARTNER FOR MODERN DIGITS
          </span>
          <h1 className="font-display text-2xl sm:text-4xl md:text-6xl font-black text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
            Building Technology That Powers Modern Businesses.
          </h1>
          <p className="font-sans text-xs sm:text-base md:text-lg text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            We create custom websites, enterprise applications, AI-powered
            automation systems, SaaS products, and digital solutions that help
            businesses operate smarter, scale faster, and stay ahead of the
            competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => {
                const buildSec = document.getElementById("estimator");
                if (buildSec) buildSec.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-lg"
            >
              Plan Project Scope
            </button>
            <button
              onClick={() => {
                const portSec = document.getElementById("portfolio");
                if (portSec) portSec.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-outline px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-surface-container transition-colors text-primary"
            >
              View Case Studies
            </button>
          </div>

          {/* Metrics Counter row */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-secondary/15 pt-6 sm:pt-8">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-primary">
                10+
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold mt-1">
                Projects Delivered
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-primary">
                AI-Driven
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold mt-1">
                Automation Stack
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-primary">
                End-to-End
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold mt-1">
                Engineering Teams
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-primary">
                98.4%
              </span>
              <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold mt-1">
                Client Retention
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;