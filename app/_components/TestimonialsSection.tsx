import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    image: "/img/client1.png",
    quote: "Elevet transformed our business. Highly recommended!",
    name: "Sarah M.",
    align: "right",
  },
  {
    id: 2,
    image: "/img/client2.png",
    quote: "Professional, reliable, and results-driven.",
    name: "James T.",
    align: "left",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 text-white font-inter">
      <div className="max-w-6xl mx-auto ">
        {/* Section Title */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-[30px] md:text-[50px] font-extrabold whitespace-nowrap">
            Clients Testimonials
          </h2>
          <div className="flex-1 h-px bg-white"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 px-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              align={testimonial.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
