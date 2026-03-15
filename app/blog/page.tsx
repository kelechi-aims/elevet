"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredArticles, latestArticles } from "../_lib/data";
import BlogCard from "../_components/BlogCard";
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
  hidden: { opacity: 0, x: -35 },
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
  hidden: { opacity: 0, x: 35 },
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

const latestCardVariant = {
  hidden: { opacity: 0, y: 55, rotate: 0.5, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

function page() {
  return (
    <main className="text-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-100 w-full overflow-hidden md:h-120">
          <motion.div
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/img/blog-hero.png"
              alt="Blog and Insights"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-primary-600/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-190">
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  className="text-[38px] font-bold leading-tight md:text-[58px] font-franklin"
                >
                  Blog &amp; Insights
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                  className="mt-4 max-w-225 text-[24px] font-semibold leading-tight text-white md:text-[30px]"
                >
                  Expert advice, industry trends and actual fact for business
                  growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
                  className="mt-7 flex max-w-175 flex-col gap-4 sm:flex-row"
                >
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    placeholder="Search Articles.."
                    className="h-14.5 w-full rounded-lg bg-white px-5 text-[18px] text-black outline-none placeholder:text-gray-400"
                  />

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-14.5 rounded-lg bg-[#4ABD4A] px-8 text-[18px] font-semibold text-white transition hover:bg-[#3ea83e] sm:w-auto"
                  >
                    Search
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="bg-[url('/img/page-bg.png')] bg-cover bg-center bg-repeat py-14">
        <div className="mx-auto max-w-6xl px-6">
          {/* FEATURED ARTICLES */}
          <section>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-[36px] font-bold md:text-[44px]"
            >
              Featured Articles
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.12 }}
              className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {featuredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={cardVariant}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <BlogCard
                    imageSrc={article.imageSrc}
                    title={article.title}
                    description={article.description}
                    href={article.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* LATEST ARTICLES */}
          <section className="mt-20">
            <motion.h2
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="text-[36px] font-bold md:text-[44px]"
            >
              Latest Articles
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.12 }}
              className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {latestArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={latestCardVariant}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <BlogCard
                    imageSrc={article.imageSrc}
                    title={article.title}
                    description={article.description}
                    href={article.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            Stay Updated With Elevet Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-white text-sm md:text-lg mb-8"
          >
            Sign up for our newsletter to receive the latest business tips,
            insights,
            <br />
            and expert advice.
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
            <AppLink href="/" text="Subscribe Now" radius="md" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default page;
