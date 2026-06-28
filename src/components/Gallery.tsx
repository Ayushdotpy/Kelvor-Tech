import React from "react";
import medioImg from "../assets/medio.png";
import medioArtImg from "../assets/medio-art.png";
import cafeErpImg from "../assets/cafe-erp.png";

const MEDIO_URL = "https://www.behance.net/gallery/251708427/Medio";
const CAFE_ERP_URL = "https://www.behance.net/gallery/251708137/Cafe-ERP";

const Gallery = () => {
  const handleBentoClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl space-y-8 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs font-bold tracking-widest text-secondary uppercase">
            BENTO GALLERY
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary tracking-tight">
            Modern Stack Showcase
          </h2>
          <p className="font-sans text-sm text-secondary max-w-lg mx-auto">
            Explore our product design layouts and full technological contexts on our Behance profile.
          </p>
        </div>

        {/* Bento grid — stacks vertically on mobile, side-by-side from md */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Bento 1: Big Left Block */}
          <div
            onClick={() => handleBentoClick(MEDIO_URL)}
            className="md:col-span-8 relative group rounded-container-radius overflow-hidden h-[280px] sm:h-[400px] md:h-[600px] border border-secondary/15 cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={medioImg}
              alt="Medio Showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 lg:p-12 text-white">
              <span className="bg-tertiary-fixed text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-3">
                BRAND DESIGN & ART DIRECTION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-black">
                Medio Identity System
              </h3>
              <p className="text-white/70 font-sans text-sm md:text-base mt-2 max-w-md hidden sm:block">
                Minimalist grid structure, gorgeous visual production, and bespoke packaging materials created for Medio.
              </p>
              <span className="mt-3 text-xs font-mono font-bold tracking-wider text-tertiary-fixed inline-flex items-center gap-2 group-hover:underline">
                EXPLORE ON BEHANCE{" "}
                <span className="material-symbols-outlined text-[12px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>

          {/* Right stack (2 items) — row on mobile, column from md */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6 lg:gap-8 md:h-[600px]">
            {/* Bento 2 */}
            <div
              onClick={() => handleBentoClick(CAFE_ERP_URL)}
              className="relative group rounded-container-radius overflow-hidden h-[160px] sm:h-[220px] md:h-full border border-secondary/15 cursor-pointer bg-surface-container-low"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={cafeErpImg}
                alt="Cafe ERP System"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full self-start mb-1.5">
                  ERP SYSTEM & POS
                </span>
                <h4 className="font-display text-base sm:text-xl font-bold leading-none">
                  Cafe ERP Portal
                </h4>
                <span className="text-[11px] text-white/60 font-mono mt-1 hidden sm:block">
                  Click to view on Behance
                </span>
              </div>
            </div>

            {/* Bento 3 */}
            <div
              onClick={() => handleBentoClick(MEDIO_URL)}
              className="relative group rounded-container-radius overflow-hidden h-[160px] sm:h-[220px] md:h-full border border-secondary/15 cursor-pointer bg-surface-container-low"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={medioArtImg}
                alt="Medio Packaging & Styling"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full self-start mb-1.5">
                  PACKAGING & LAYOUTS
                </span>
                <h4 className="font-display text-base sm:text-xl font-bold leading-none">
                  Medio Art Direction
                </h4>
                <span className="text-[11px] text-white/60 font-mono mt-1 hidden sm:block">
                  Click to view on Behance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;