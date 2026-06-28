import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Solutions", id: "solutions" },
    { label: "Case Studies", id: "portfolio" },
    { label: "Our Process", id: "methodology" },
    { label: "Capabilities", id: "capabilities" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full bg-surface/65 backdrop-blur-xl border border-secondary/15 shadow-[0_20px_40px_rgba(17,17,17,0.03)] flex justify-between items-center px-5 md:px-8 py-3.5 z-50 transition-all duration-300">
        {/* Brand / Logo */}
        <div className="font-display text-2xl font-black tracking-tighter text-primary">
          KELVOR
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="font-sans text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors uppercase bg-transparent border-none outline-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* CTA button — hidden on mobile, visible on tablet+ */}
          <button
            onClick={() => scrollTo("consultation-form")}
            className="hidden sm:block bg-primary text-on-primary px-4 md:px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Let's Talk
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2 rounded-xl hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        {/* Slide-in panel */}
        <div className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-surface shadow-2xl flex flex-col pt-28 px-8 gap-6 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left font-display text-2xl font-bold text-primary hover:text-secondary transition-colors bg-transparent border-none outline-none cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <div className="mt-auto pb-12">
            <button
              onClick={() => scrollTo("consultation-form")}
              className="w-full bg-primary text-on-primary px-6 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
