"use client";

import { motion } from "framer-motion";
import AppLink from "./AppLink";

export default function AboutSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-9 flex-col md:flex-row gap-8">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <h2 className="text-primary-900 font-franklin text-4xl md:text-7xl ">
            About Elevet
          </h2>
          <p className="text-black font-inter mt-4 text-base md:text-3xl">
            Elevet Limited operates a flexible engagement model including
            project-based consulting, monthly retainers, campaign execution,
            SaaS implementation fees, and training products-allowing scalability
            for both clients and partners
          </p>
        </motion.div>
        <motion.div
          className="pr-18 text-base md:text-3xl"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          <AppLink text="Learn More >" href="/about-us" variant="outline" />
        </motion.div>
      </div>
    </section>
  );
}
