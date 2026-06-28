const Navbar = () => {
  return (
    // Floating header navigation bar
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full bg-surface/65 backdrop-blur-xl border border-secondary/15 shadow-[0_20px_40px_rgba(17,17,17,0.03)] flex justify-between items-center px-6 md:px-8 py-3.5 z-50 transition-all duration-300">
      {/* Brand / Logo - simple text logo for now */}
      <div className="font-display text-2xl font-black tracking-tighter text-primary">
        KELVOR
      </div>

      {/* Desktop Navigation - visible on large screens */}
      <div className="hidden lg:flex items-center gap-8">
        {/* Section links scroll to page anchors */}
        <a
          href="#solutions"
          className="font-sans text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors uppercase"
        >
          Solutions
        </a>
        <a
          href="#portfolio"
          className="font-sans text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors uppercase"
        >
          Case Studies
        </a>
        <a
          href="#methodology"
          className="font-sans text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors uppercase"
        >
          Our Process
        </a>
        
        <a
          href="#capabilities"
          className="font-sans text-xs font-semibold tracking-wider text-secondary hover:text-primary transition-colors uppercase"
        >
          Capabilities
        </a>
      </div>

      {/* Primary CTA - scrolls to the consultation form */}
      <button
        onClick={() => {
          const formSec = document.getElementById("consultation-form");
          if (formSec) formSec.scrollIntoView({ behavior: "smooth" });
        }}
        className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
      >
        Let's Talk
      </button>
    </nav>
  );
};
export default Navbar;
