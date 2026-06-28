const Footer = () => {
  return (
    <footer className="w-full bg-primary text-on-primary rounded-t-[40px] mt-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-6">
          <h2 className="font-display text-5xl font-black tracking-tighter text-white">
            KELVOR
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-xs leading-relaxed uppercase tracking-wider">
            SCALABLE TECHNOLOGY SOLUTIONS FOR THE NEXT GENERATION OF BUSINESS.
          </p>
        </div>

        <div className="flex flex-col items-end gap-12 w-full md:w-auto">
          <div className="flex flex-wrap gap-8 justify-start md:justify-end text-sm">
            <a
              href="#"
              className="text-white/60 hover:text-tertiary-fixed transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-tertiary-fixed transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-tertiary-fixed transition-colors"
            >
              Twitter
            </a>
            <a
              href="#consultation-form"
              className="text-white/60 hover:text-tertiary-fixed transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-[11px] text-white/45 uppercase tracking-widest font-semibold font-mono text-right w-full">
            © {new Date().getFullYear()} KELVOR TECHNOLOGY GROUP. ALL RIGHTS
            RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
