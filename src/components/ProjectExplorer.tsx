import React from "react";
import { PROJECTS_DATA } from "../data";

const BEHANCE_URLS: Record<string, string> = {
  "01": "https://www.behance.net/gallery/251708427/Medio",
  "02": "https://www.behance.net/gallery/251708137/Cafe-ERP",
};

interface ProjectExplorerProps {
  onStartProjectClick: (details: string) => void;
}

export default function ProjectExplorer({
  onStartProjectClick,
}: ProjectExplorerProps) {
  // Show only the first two projects as requested
  const visibleProjects = PROJECTS_DATA.slice(0, 2);

  const handleProjectClick = (id: string) => {
    const url = BEHANCE_URLS[id] || "https://www.behance.net/kelvortech";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-24" id="portfolio">
      {/* Section Subtitle matching the image */}
      <div className="text-secondary/70 font-sans text-xs tracking-widest uppercase font-bold">
        CASE STUDIES
      </div>

      {/* Alternating Rows List */}
      <div className="space-y-32">
        {visibleProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center"
            >
              {/* Image Container */}
              <div className={`col-span-12 md:col-span-7 ${isEven ? "" : "md:order-last"}`}>
                <div 
                  onClick={() => handleProjectClick(project.id)}
                  className="rounded-lg overflow-hidden bg-surface-container aspect-[1.6/1] border border-secondary/5 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Info Container */}
              <div className={`col-span-12 md:col-span-5 space-y-5 ${isEven ? "" : "md:order-first"}`}>
                <span className="font-mono text-xs text-secondary/75 tracking-widest font-semibold block uppercase">
                  {project.id} / {project.category}
                </span>
                
                <h3 
                  onClick={() => handleProjectClick(project.id)}
                  className="font-display text-3xl md:text-4xl font-extrabold text-primary leading-tight hover:text-primary/70 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-secondary/80 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => handleProjectClick(project.id)}
                    className="inline-block font-sans text-xs font-bold tracking-wider uppercase border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors cursor-pointer border-x-0 border-t-0 bg-transparent outline-none"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
