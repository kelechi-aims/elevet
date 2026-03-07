import AppLink from "../_components/AppLink";
import ServiceCard from "../_components/ServiceCard";
import { services } from "../_lib/data";

function page() {
  return (
    <>
      <section>
        <div className="pt-5 text-center">
          {" "}
          <h1 className="font-inter font-bold text-3xl md:text-5xl  my-5">
            Our Services
          </h1>
          <div className=" bg-primary-500 py-8">
            <div className="max-w-7xl mx-auto">
              <p className="font-inter text-2xl md:text-4xl mb-4">
                <span className="font-extrabold text-accent-50">
                  Tailored consulting solutions
                </span>{" "}
                to drive growth and success for your business.
              </p>
              <p className="font-inter font-bold text-xl md:text-2xl">
                At Elevet, we provide a range of experts consulting services
                designed to help your business thrive <br />
                in a ever-changing landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="py-20 bg-[url('/img/dark-texture.png')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                imageSrc={service.imageSrc}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10 mb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Elevate your business with our proven expertise
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white text-sm md:text-lg mb-8">
            Let&apos;s discuss how we can help you achieve your goals
          </p>

          {/* Button */}
          <AppLink href="/contact-us" text="Book a Consultation" radius="lg" />
        </div>
      </section>
    </>
  );
}

export default page;
