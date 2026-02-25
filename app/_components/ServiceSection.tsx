import AppLink from "./AppLink";
import ServiceCard from "./ServiceCard";

const services = [
  {
    imageSrc: "/icons/strategy.svg",
    title: "Project & Operations Management Consulting",
  },
  {
    imageSrc: "/icons/digital.svg",
    title: "Human Resources Workforce System",
  },
  {
    imageSrc: "/icons/leadership.svg",
    title: "SaaS Enablement & Digital Tools Integration",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-inter font-bold mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
            />
          ))}
        </div>
        <AppLink href="/" text="Book a Consultation" radius="md" />
      </div>
    </section>
  );
}
