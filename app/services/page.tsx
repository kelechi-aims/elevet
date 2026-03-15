"use client";
import { motion } from "framer-motion";
import AppLink from "../_components/AppLink";
import Reveal from "../_components/Reveal";
import ServiceCard from "../_components/ServiceCard";
import { services } from "../_lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

function page() {
  return (
    <>
      <section>
        <div className="pt-5 text-center">
          <motion.h1
            className="font-inter font-bold text-3xl md:text-5xl pb-10 my-10"
            variants={scaleFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            Our Services
          </motion.h1>

          <motion.div
            className=" bg-primary-500 py-8 "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
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
          </motion.div>
        </div>
      </section>

      {/* services */}
      <section className="py-20 bg-[url('/img/dark-texture.png')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.32 }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {services.map((service, index) => {
              const cardVariant =
                index % 3 === 0
                  ? {
                      hidden: { opacity: 0, x: -50, y: 30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.7, ease: "easeOut" },
                      },
                    }
                  : index % 3 === 1
                    ? {
                        hidden: { opacity: 0.5, y: 50, scale: 0.95 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.7, ease: "easeOut" },
                        },
                      }
                    : {
                        hidden: { opacity: 0.5, x: 50, y: 30 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: { duration: 0.7, ease: "easeOut" },
                        },
                      };

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariant}
                  className="h-full"
                >
                  <ServiceCard
                    imageSrc={service.imageSrc}
                    title={service.title}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10 mb-10">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
        </motion.div>
      </section>
    </>
  );
}

export default page;
