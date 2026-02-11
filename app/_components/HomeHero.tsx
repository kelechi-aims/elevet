import AppLink from "./AppLink";

function HomeHero() {
  return (
    <section className="relative bg-[url(/img/hero.png)] min-h-[55vh] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#3B3939]/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 items-center py-56">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-franklin leading-tight">
            Human-Centric Consulting <br /> for
            <span className="text-accent-50"> Sustainable Growth</span>
          </h1>

          <p className="mt-4 text-base md:text-3xl">
            Empowering your business with expert solutions
          </p>

          <div className="text-base md:text-3xl font-inter mt-6 flex flex-wrap gap-8">
            <AppLink href="/" text="Book a Consultation" />
            <AppLink href="/" text="View Our Services" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
