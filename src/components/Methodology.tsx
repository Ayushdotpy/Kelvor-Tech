import MethodologyViewer from "../components/MethodologyViewer";
const Methodology = () => {
  return (
    <section className="bg-surface-container py-16 sm:py-24 lg:py-32 rounded-t-[48px] border-t border-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="mb-10 sm:mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
            HOW WE EXECUTE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-primary tracking-tight leading-none">
            Our Precise
            <br />
            Methodology
          </h2>
        </div>


        <MethodologyViewer />
      </div>
    </section>
  );
};
export default Methodology;
