const Stats = () => {
  return (
    <section className="bg-primary text-on-primary py-16 sm:py-24 lg:py-32 overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[96rem] ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <span className="font-display text-5xl md:text-7xl font-extrabold text-white">
              50+
            </span>
            <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest font-semibold">
              PROJECTS DELIVERED
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-display text-5xl md:text-7xl font-extrabold text-white">
              100%
            </span>
            <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest font-semibold">
              CUSTOM CODEBASES
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-display text-5xl md:text-7xl font-extrabold text-white">
              98.2%
            </span>
            <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest font-semibold">
              CLIENT RETENTION
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-display text-5xl md:text-7xl font-extrabold text-white">
              24/7
            </span>
            <p className="font-sans text-[10px] text-white/50 uppercase tracking-widest font-semibold">
              REDUNDANT MONITORING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
