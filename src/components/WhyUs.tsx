const WhyUs = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-xs font-bold tracking-widest text-secondary uppercase">
            WHY PARTNER WITH US
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-primary">
            Uncompromising Quality
          </h2>
          <p className="font-sans text-sm text-secondary">
            We replace quick generic solutions with durable digital frameworks
            tailored to long-term business scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              dashboard_customize
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              Zero-Template Architecture
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Every component, database entity, and API layout is designed from
              scratch around your operations to guarantee peak modularity.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              settings_ethernet
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              High-Performance Stack
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Utilizing state-of-the-art TS frameworks, robust SQL servers, fast
              bundle loaders, and lightweight visual engines.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              psychology
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              AI-First Core Integrations
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Integrating LLMs (such as Gemini models) directly to parse files,
              automate queries, and power customer-facing service agents.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              cloud_queue
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              Elastic Cloud Infrastructures
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Deploying server environments statefully inside redundant
              container fleets (AWS, GCP) backed by auto-scaling logic.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              forum
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              Fast Communication
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Live Slack integrations, weekly code reviews, clear task tickets,
              and direct lines to lead system architects.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl hover:bg-[#F7F7F5] transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl text-primary mb-2">
              hub
            </span>
            <h4 className="font-display text-xl font-bold text-primary">
              Reliable Long-Term Support
            </h4>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              Continuous security patching, metric logs management, and seamless
              capability upgrades as your user volumes scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
