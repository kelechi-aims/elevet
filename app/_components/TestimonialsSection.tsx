"use client";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const testimonials: {
  id: number;
  image: string;
  quote: string;
  name: string;
  align: "left" | "right";
}[] = [
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
          <motion.h2
            className="text-[30px] md:text-[50px] font-extrabold whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Clients Testimonials
          </motion.h2>
          <div className="flex-1 h-px bg-white"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 px-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="h-full"
              initial={{ opacity: 0, y: index === 0 ? -60 : 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                align={testimonial.align}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
