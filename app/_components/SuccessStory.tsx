"use client";
import Image from "next/image";
import AppLink from "./AppLink";
import { motion, scale } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SuccessStory() {
  return (
    <section className="py-16 bg-primary-200 shadow-[0px_10px_20px_0px_#00000040]">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* LEFT — IMAGE */}
          <motion.div
            className="w-full md:w-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative w-full h-55 md:h-83 rounded-lg overflow-hidden">
              <Image
                src="/img/success.png"
                alt="Success Story"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            className="w-full md:w-1/2 text-white font-inter"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Small heading */}
            <motion.h3
              className="text-[30px] md:text-[50px] font-bold mb-2"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Success Story
            </motion.h3>

            {/* Main heading */}
            <motion.p
              className="text-xl md:text-4xl font-bold mb-3"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Boosting Efficiency for{" "}
              <span className="text-accent-50">TechCorp</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm md:text-2xl leading-relaxed mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Challenge: Outdated processes hindering growth,
            </motion.p>
            <motion.p
              className="text-sm md:text-2xl leading-relaxed mb-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Solution: Streamlined operations and automation,
            </motion.p>

            {/* Result */}
            <motion.p
              className="text-sm md:text-2xl mb-5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Result: 40% increase in productivity.
            </motion.p>

            {/* Button */}

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <AppLink
                href="/contact-us"
                text="Book a Consultation"
                radius="md"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
