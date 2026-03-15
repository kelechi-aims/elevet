"use client";
import { motion, easeOut } from "framer-motion";
import { heroServices } from "../_lib/data";
import AppLink from "./AppLink";
import ServiceCard from "./ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardWrapperVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function ServiceSection() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-6xl font-inter font-bold mb-12"
          variants={cardWrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {heroServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardWrapperVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ServiceCard imageSrc={service.imageSrc} title={service.title} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardWrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AppLink href="/contact-us" text="Book a Consultation" radius="md" />
        </motion.div>
      </div>
    </section>
  );
}
