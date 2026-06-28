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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12">
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

        <div className="grid md:grid-cols-12 gap-8">
          {/* Bento 1: Left Big Block */}
          <div
            onClick={() => handleBentoClick(MEDIO_URL)}
            className="md:col-span-8 relative group rounded-container-radius overflow-hidden h-[400px] md:h-[600px] border border-secondary/15 cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={medioImg}
              alt="Medio Showcase"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12 text-white">
              <span className="bg-tertiary-fixed text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-4">
                BRAND DESIGN & ART DIRECTION
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-black">
                Medio Identity System
              </h3>
              <p className="text-white/70 font-sans text-sm md:text-base mt-2 max-w-md">
                Minimalist grid structure, gorgeous visual production, and bespoke packaging materials created for Medio.
              </p>
              <span className="mt-4 text-xs font-mono font-bold tracking-wider text-tertiary-fixed inline-flex items-center gap-2 group-hover:underline">
                EXPLORE ON BEHANCE{" "}
                <span className="material-symbols-outlined text-[12px]">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>

          {/* Right stack (2 items) */}
          <div className="md:col-span-4 flex flex-col gap-8 h-[600px]">
            {/* Bento 2: Top Right Small */}
            <div
              onClick={() => handleBentoClick(CAFE_ERP_URL)}
              className="flex-1 relative group rounded-container-radius overflow-hidden border border-secondary/15 cursor-pointer bg-surface-container-low"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                src={cafeErpImg}
                alt="Cafe ERP System"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full self-start mb-2">
                  ERP SYSTEM & POS WORKFLOWS
                </span>
                <h4 className="font-display text-xl font-bold leading-none">
                  Cafe ERP Management Portal
                </h4>
                <span className="text-[11px] text-white/60 font-mono mt-1">
                  Click to view on Behance
                </span>
              </div>
            </div>

            {/* Bento 3: Bottom Right Small */}
            <div
              onClick={() => handleBentoClick(MEDIO_URL)}
              className="flex-1 relative group rounded-container-radius overflow-hidden border border-secondary/15 cursor-pointer bg-surface-container-low"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                src={medioArtImg}
                alt="Medio Packaging & Styling"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full self-start mb-2">
                  PACKAGING & LAYOUTS
                </span>
                <h4 className="font-display text-xl font-bold leading-none">
                  Medio Art Direction details
                </h4>
                <span className="text-[11px] text-white/60 font-mono mt-1">
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