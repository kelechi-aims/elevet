import AppLink from "../_components/AppLink";
import ServiceCard from "../_components/ServiceCard";

const missions = [
  {
    imageSrc: "/icons/mission1.svg",
    title: "Integrity & Trust",
    description: "Lorem ipsum",
  },
  {
    imageSrc: "/icons/mission2.svg",
    title: "Client Success",
    description: "Lorem ipsum",
  },
  {
    imageSrc: "/icons/mission3.svg",
    title: "Innovation & Excellence",
    description: "Lorem ipsum",
  },
];

function page() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[url(/img/about-bg.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#3B3939]/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 items-center py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-franklin leading-tight">
              Elevating Your Business <br /> to
              <span className="text-accent-50"> New Heights</span>
            </h1>

            <p className="mt-4 text-base md:text-3xl">
              Elevet is your partner in business consulting,
              <br />
              dedicated to empowering organizations to reach full potential.{" "}
              <br />
              With years of experience and a human-centric approach, we provide{" "}
              tailored solutions that drive growth, efficiency, and success.
            </p>
          </div>
        </div>

        {/* Our mission and vision section */}
      </section>
      <section className="py-16 bg-primary-200 shadow-[0px_10px_20px_0px_#00000040]">
        <div className="font-franklin text-white max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl  font-bold leading-tight">
            Our Mission & Value
          </h2>
          <p className="text-base md:text-3xl">
            We believe in making sustainable impact through{" "}
            <span className="text-accent-50">
              integrity, innovation, and excellence.
            </span>
          </p>
          <p className="text-base md:text-3xl">
            Our mission is to empower businesses to achieve sustainable and
            long-term growth.
          </p>
        </div>
      </section>

      {/* mission cards */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-6xl font-inter font-bold mb-12">
            Our Mission & Values{" "}
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {missions.map((mission) => (
              <ServiceCard
                key={mission.title}
                imageSrc={mission.imageSrc}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </div>
          <AppLink href="/" text="View All Services" />
        </div>
      </section>
    </>
  );
}

export default page;
