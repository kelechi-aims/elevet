"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactCards } from "../_lib/data";
import ContactCard from "../_components/ContactCard";
import AppLink from "../_components/AppLink";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 45, scale: 0.96 },
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

function page() {
  return (
    <main className="text-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-82.5 w-full overflow-hidden md:h-95">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/img/contact-hero.png"
              alt="Contact us"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-primary-600/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-130">
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-[44px] font-bold leading-none md:text-[64px]"
                >
                  Contact Us
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mt-4 text-[24px] font-semibold leading-tight text-white md:text-[32px]"
                >
                  Get in touch with us to elevate your business:
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE BODY */}
      <section className="bg-[url('/img/page-bg.png')] bg-cover bg-center bg-repeat py-14">
        <div className="mx-auto max-w-6xl px-6">
          {/* CONTACT CARDS */}
          <section>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {contactCards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={cardVariant}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <ContactCard
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    subText={card.subText}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* SEND MESSAGE */}
          <section className="mt-16">
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-[42px] font-bold leading-tight md:text-[58px]"
            >
              Send Us A Message
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 max-w-5xl text-[22px] font-semibold leading-tight text-white md:text-[30px]"
            >
              Have a question or want to discuss your business needs?
              <br /> Fill out the form below and our team will get back to you
              shortly.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* FORM */}
              <motion.form
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.15 }}
                className="space-y-6"
              >
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Name"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Email"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  placeholder="Phone"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Message"
                  rows={7}
                  className="w-full rounded-md bg-[#2D2D2D] px-6 py-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-lg bg-accent-50 px-8 py-5 text-[20px] font-semibold text-white transition hover:bg-[#3ea83e]"
                >
                  Send Message
                </motion.button>
              </motion.form>

              {/* MAP */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{ scale: 1.01 }}
                className="relative min-h-105 overflow-hidden rounded-[34px] md:min-h-155 shadow-[0px_10px_25px_0px_rgba(0,0,0,0.35)]"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.019692227929!2d3.3440204126869832!3d6.644476021713554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93faff71fac9%3A0xa3b596a284e79248!2s68%20Abo-Aba%20St%2C%20Ojodu%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1772860195066!5m2!1sen!2sng"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-accent-150 bg-cover bg-center py-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Ready to elevate your business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-white text-base md:text-xl mb-8 font-bold"
          >
            Book a consultation with our experts and lets build
            <br /> solutions that move your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <AppLink href="/contact-us" text="Subscribe Now" radius="md" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default page;
