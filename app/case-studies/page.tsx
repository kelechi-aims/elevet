"use client";
import { motion } from "framer-motion";
import AppLink from "../_components/AppLink";
import CaseStudyCard, { CaseStudyCTA } from "../_components/CaseStudyCard";
import { caseStudies } from "../_lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function page() {
  return (
    <>
      <section className="py-20">
        <div className="text-center text-white">
          {/* Small Label */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="font-inter font-bold text-3xl md:text-5xl text-white mb-6"
          >
            Case Studies
          </motion.h1>

          {/* Heading */}
          <div className="py-6 bg-primary-100 border border-x-0 border-white">
            <div className="max-w-6xl mx-auto px-6">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-4xl font-extrabold leading-snug text-white"
              >
                Real-world examples of how we’ve helped business
                <br />
                <span className="text-accent-50">
                  achieve remarkable success
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                transition={{ delay: 0.45 }}
                className="mt-6 text-white text-lg md:text-2xl leading-relaxed"
              >
                Explore our case studies to see how Elevet has empowered
                <br /> various organizations to overcome challenges, implement
                effective
                <br />
                solutions and achieve tangible results.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* First row: 2 cards + CTA */}
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <CaseStudyCard {...caseStudies[0]} />
            </motion.div>
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <CaseStudyCard {...caseStudies[1]} />
            </motion.div>

            <motion.div
              variants={zoomIn}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              className="h-fit"
            >
              <CaseStudyCTA
                title="Read Case Study"
                points={[
                  "Expert Guidance",
                  "Tailored Solutions",
                  "Measurable Results",
                ]}
                buttonText="Book a Consultation"
                buttonHref="/contact-us"
              />
            </motion.div>

            {/* Remaining cards */}
            {caseStudies.slice(2).map((cs) => (
              <motion.div
                key={cs.id}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <CaseStudyCard
                  slug={cs.slug}
                  imageSrc={cs.imageSrc}
                  company={cs.company}
                  subtitle={cs.subtitle}
                  problem={cs.problem}
                  solution={cs.solution}
                  resultText={cs.resultText}
                  resultValue={cs.resultValue}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Partner with Experts Who Deliver Results.{" "}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-white text-base md:text-xl mb-8 font-bold"
          >
            Let&apos;s discuss how we can achieve your business goals together
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <AppLink
              href="/contact-us"
              text="Book a Consultation"
              radius="md"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default page;
