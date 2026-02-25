import AppLink from "../_components/AppLink";
import ServiceCard from "../_components/ServiceCard";
import TeamCard from "../_components/TeamCard";
import WhyCard from "../_components/WhyCard";
import { teamMembers, missions, reasons } from "../_lib/data";

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
      <section className="py-20 text-white bg-primary-500 shadow-[0px_10px_20px_0px_#00000040]">
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

      {/* Meet the team */}
      <section className="pt-16 pb-8 text-center">
        <h2 className="text-white text-3xl md:text-6xl font-bold mb-2">
          Meet the Team
        </h2>
        <p className="text-white text-xl md:text-3xl font-bold mb-10">
          Our diverse team of experts is committed to your success.
        </p>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-400 text-center">
        {/* Top Line */}
        <div className="max-w-6xl mx-auto grid grid-cols-[20%_60%_20%] items-center">
          <div className="w-full h-[1.5px] bg-gray-500 mx-auto mb-4"></div>

          <h2 className="text-white text-3xl md:text-6xl font-bold mb-6">
            Why Choose Elevet?
          </h2>

          <div className="w-full h-[1.5px] bg-gray-500 mx-auto mb-4"></div>
        </div>

        <div className="max-w-6xl rounded-lg bg-accent-200 mx-auto px-1 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-[0px_10px_20px_0px_#00000040]">
          {reasons.map((reason) => (
            <WhyCard
              key={reason.id}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
