import { CAPABILITIES } from "../data";

const Capabilities = () => {
  return (
    <section
      className="py-32 bg-[#F7F7F5] border-t border-secondary/10"
      id="capabilities"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12">
        <div>
          <span className="font-sans text-xs font-bold tracking-widest text-secondary uppercase block mb-2">
            SPECIFIC CAPABILITIES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary">
            Full-Stack Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, cIdx) => (
            <div
              key={cIdx}
              className="group p-8 bg-white rounded-container-radius border border-secondary/10 hover:bg-primary hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-white">
                  {cap.title}
                </h4>
                <p className="text-sm text-secondary group-hover:text-white/70 line-clamp-2">
                  {cap.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/10 group-hover:border-white/10 text-xs">
                <span className="text-[10px] text-secondary group-hover:text-tertiary-fixed block uppercase tracking-widest font-bold mb-1">
                  TECH CORE
                </span>
                <p className="text-secondary/90 group-hover:text-white/80 line-clamp-2 font-mono">
                  {cap.detailedTech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Capabilities;