"use client";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import AppLink from "./AppLink";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut", // cubic-bezier for easeOut
    },
  }),
};

function HomeHero() {
  const ref = useRef<HTMLElement | null>(null);
  // const isInView = true;
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section
      className="relative bg-[url(/img/hero.png)] bg-cover bg-center"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[#3B3939]/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 items-center py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-franklin leading-tight">
            <AnimatedText text="Human-Centric Consulting" isInview={isInView} />{" "}
            <br /> <AnimatedText text="for" delay={0.9} isInview={isInView} />
            <span className="text-accent-50">
              {" "}
              <AnimatedText
                text="Sustainable Growth"
                delay={1.1}
                isInview={isInView}
              />{" "}
            </span>
          </h1>

          {/* <p className="mt-4 text-base md:text-3xl">
            <AnimatedText
              text="Empowering businesses to thrive in the digital age with tailored strategies and innovative solutions."
              delay={1.5}
            />
          </p> */}
          <motion.p
            className="mt-4 text-base md:text-3xl"
            variants={fadeUp}
            initial="hidden"
            // animate="visible"
            animate={isInView ? "visible" : "hidden"}
            custom={1.8}
          >
            Empowering businesses to thrive in the digital age with tailored
            strategies and innovative solutions.{" "}
          </motion.p>

          <motion.div
            className="text-base md:text-3xl font-inter mt-8 flex flex-wrap gap-8"
            variants={fadeUp}
            initial="hidden"
            // animate="visible"
            animate={isInView ? "visible" : "hidden"}
            custom={3.2}
          >
            <AppLink href="/contact-us" text="Book a Consultation" />
            <AppLink
              href="/services"
              text="View Our Services"
              variant="secondary"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
