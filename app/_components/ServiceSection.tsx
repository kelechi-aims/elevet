import ServiceCard from "./ServiceCard";

const services = [
  {
    imageSrc: "/icons/strategy.svg",
    title: "Business Strategy",
    description: "Lorem ipsum",
  },
  {
    imageSrc: "/icons/digital.svg",
    title: "Digital Transformation",
    description: "Lorem ipsum",
  },
  {
    imageSrc: "/icons/leadership.svg",
    title: "Leadership Training",
    description: "Lorem ipsum",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-inter font-bold mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
