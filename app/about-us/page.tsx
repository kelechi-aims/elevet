"use client";
import { motion } from "framer-motion";
import AppLink from "../_components/AppLink";
import ServiceCard from "../_components/ServiceCard";
import TeamCard from "../_components/TeamCard";
import WhyCard from "../_components/WhyCard";
import { teamMembers, missions, reasons } from "../_lib/data";

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

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      {/* Hero section */}
      <section className="relative bg-[url(/img/about-bg.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#3B3939]/60"></div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 items-center py-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="max-w-4xl">
            <motion.h1
              className="text-4xl md:text-7xl font-franklin leading-tight"
              variants={fadeUp}
            >
              Elevating Your Business <br /> to
              <span className="text-accent-50"> New Heights</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base md:text-3xl">
              Elevet is your partner in business consulting,
              <br />
              dedicated to empowering organizations to reach full potential.{" "}
              <br />
              With years of experience and a human-centric approach, we provide{" "}
              tailored solutions that drive growth, efficiency, and success.
            </motion.p>
          </div>
        </motion.div>

        {/* Our mission and vision section */}
      </section>
      <section className="py-16 bg-primary-200 shadow-[0px_10px_20px_0px_#00000040]">
        <motion.div
          className="font-franklin text-white max-w-7xl mx-auto px-6"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-6xl  font-bold leading-tight">
            Our Mission & Value
          </h2>
          <p className="text-base md:text-3xl">
            We believe in making sustainable impact through{" "}
            <span className="text-accent-50">
              integrity, innovation, and excellence.
            </span>
          </p>
          <p className="text-base md:text-3xl">
            Our mission is to empower businesses to achieve sustainable and
            long-term growth.
          </p>
        </motion.div>
      </section>

      {/* mission cards */}
      <section className="py-20 text-white bg-primary-500 shadow-[0px_10px_20px_0px_#00000040]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-6xl font-inter font-bold mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Our Mission & Values{" "}
          </motion.h2>

          <motion.div
            className="grid gap-8 md:grid-cols-3 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {missions.map((mission) => (
              <motion.div
                key={mission.title}
                variants={scaleIn}
                className="h-full"
              >
                <ServiceCard
                  imageSrc={mission.imageSrc}
                  title={mission.title}
                  description={mission.description}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <AppLink href="/services" text="View All Services" />
          </motion.div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="pt-16 pb-8 text-center">
        <motion.h2
          className="text-white text-3xl md:text-6xl font-bold mb-2"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Meet the Team
        </motion.h2>

        <motion.p
          className="text-white text-xl md:text-3xl font-bold mb-10"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Our diverse team of experts is committed to your success.
        </motion.p>

        <motion.div
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.id} variants={scaleIn} className="h-full">
              <TeamCard
                name={member.name}
                role={member.role}
                image={member.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-400 text-center">
        {/* Top Line */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-[20%_60%_20%] items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-full h-[1.5px] bg-gray-500 mx-auto mb-4"></div>

          <h2 className="text-white text-3xl md:text-6xl font-bold mb-6">
            Why Choose Elevet?
          </h2>

          <div className="w-full h-[1.5px] bg-gray-500 mx-auto mb-4"></div>
        </motion.div>

        <div className="max-w-6xl rounded-lg bg-accent-200 mx-auto px-1 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-[0px_10px_20px_0px_#00000040]">
          {reasons.map((reason, index) => {
            const variants =
              index === 0 ? fadeLeft : index === 1 ? fadeUp : fadeRight;

            return (
              <motion.div
                key={reason.id}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="h-full"
              >
                <WhyCard
                  title={reason.title}
                  description={reason.description}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default page;
