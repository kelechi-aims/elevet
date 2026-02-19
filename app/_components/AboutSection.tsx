import AppLink from "./AppLink";

export default function AboutSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 ">
        <div className="max-w-[60%] md:max-w-[70%]">
          <h2 className="text-primary-900 font-franklin text-4xl md:text-7xl ">
            About Elevet
          </h2>
          <p className="text-black font-inter mt-4 text-base md:text-3xl">
            Elevet Limited operates a flexible engagement model including
            project-based consulting, monthly retainers, campaign execution,
            SaaS implementation fees, and training products-allowing scalability
            for both clients and partners
          </p>
        </div>
        <div className="pr-18 text-base md:text-3xl">
          <AppLink text="Learn More >" href="/" variant="outline" />
        </div>
      </div>
    </section>
  );
}
