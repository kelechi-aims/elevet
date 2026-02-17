import AppLink from "./AppLink";

export default function AboutSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 ">
        <div>
          <h2 className="text-primary-900 font-franklin text-4xl md:text-7xl">
            About Elevet
          </h2>
          <p className="text-black font-inter mt-4 text-base md:text-3xl">
            Trusted advisors committed to your success.
          </p>
        </div>
        <div className="pr-18">
          <AppLink text="Learn More >" href="/" variant="outline" />
        </div>
      </div>
    </section>
  );
}
