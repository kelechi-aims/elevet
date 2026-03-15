"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AppLink from "@/app/_components/AppLink";
import InfoCard, { SolutionCard } from "@/app/_components/InfoCard";
import { useEffect, useMemo, useRef, useState } from "react";

type SolutionItem = {
  title: string;
  description: string;
};

type ResultItem = {
  label: string;
  value: string;
};

type StudyType = {
  slug: string;
  title: string;
  titleDesc: string;
  imageSrc1: string;
  challengeImage: string;
  company: string;
  closingTitle: string;
  companyInfo: {
    client: string;
    clientNiche: string;
    industry: string;
    duration: string;
  };
  problemInfo: {
    description: string;
    effect: string;
    providedSolutions?: SolutionItem[];
  };
  resultInfo?: ResultItem[];
};

const heroTextVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
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

const riseUpCard = {
  hidden: { opacity: 0, y: 45, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const leftReveal = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
    },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function extractNumericValue(value: string) {
  const match = value.match(/[\d,.]+/);
  if (!match) {
    return { number: null, prefix: "", suffix: value, original: value };
  }

  const numericText = match[0];
  const number = Number(numericText.replace(/,/g, ""));
  const startIndex = match.index ?? 0;
  const endIndex = startIndex + numericText.length;

  return {
    number: Number.isNaN(number) ? null : number,
    prefix: value.slice(0, startIndex),
    suffix: value.slice(endIndex),
    original: numericText,
  };
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, { amount: 0.5 });

  const parsed = useMemo(() => extractNumericValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(
    parsed.number === null ? value : `${parsed.prefix}0${parsed.suffix}`,
  );

  useEffect(() => {
    if (parsed.number === null) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) {
      setDisplayValue(`${parsed.prefix}0${parsed.suffix}`);
      return;
    }

    let start = 0;
    const end = parsed.number;
    const duration = 1400;
    const incrementTime = 1000 / 60;
    const totalSteps = Math.ceil(duration / incrementTime);
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;

      if (start >= end) {
        clearInterval(timer);
        setDisplayValue(`${parsed.prefix}${parsed.original}${parsed.suffix}`);
      } else {
        let formattedValue: string;

        if (end >= 1000) {
          formattedValue = Math.floor(start).toLocaleString();
        } else if (end % 1 !== 0) {
          formattedValue = start.toFixed(1);
        } else {
          formattedValue = Math.floor(start).toString();
        }

        setDisplayValue(`${parsed.prefix}${formattedValue}${parsed.suffix}`);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [parsed, value, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-accent-400 font-inter"
    >
      <p className="font-extrabold text-lg md:text-2xl">{displayValue}</p>
      <p className="mt-2 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

export default function CaseStudyDetailContent({
  study,
}: {
  study: StudyType;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* HERO IMAGE */}
        <div className="relative h-95 md:h-115 w-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={study.imageSrc1}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="absolute inset-0 bg-primary-600/60"
          />

          {/* Text Content */}
          <div className="absolute inset-0 max-w-7xl mx-auto flex items-center">
            <div className="relative z-10 px-6">
              <motion.h1
                variants={heroTextVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white w-[90%] md:w-[70%] text-3xl md:text-6xl font-bold leading-tight font-franklin"
              >
                {study.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.36 }}
                transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                className="text-white w-[90%] md:w-[40%] text-xl md:text-3xl mt-4 font-semibold"
              >
                {study.titleDesc}
              </motion.p>
            </div>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="relative -mt-14 md:-mt-16 z-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={riseUpCard}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <InfoCard
                label="Client"
                value={study.companyInfo.client}
                subValue={study.companyInfo.clientNiche}
              />
            </motion.div>

            <motion.div
              variants={riseUpCard}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <InfoCard
                label="Industry"
                value={study.company}
                subValue={study.companyInfo.industry}
              />
            </motion.div>

            <motion.div
              variants={riseUpCard}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <InfoCard
                label="Duration"
                value={study.companyInfo.duration}
                subValue="Project Timeline"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-14 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* THE CHALLENGE */}
          <motion.div
            variants={leftReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-2xl md:text-5xl font-bold leading-tight font-franklin text-white uppercase mb-8 list-disc pl-5 underline"
            >
              <li>the challenge</li>
            </motion.ul>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="text-xl md:text-3xl font-extrabold tracking-wide text-white"
            >
              {study.problemInfo.description}
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="text-xl md:text-3xl font-extrabold tracking-wide text-white mt-15"
            >
              {study.problemInfo.effect}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              className="mt-12 overflow-hidden rounded-2xl shadow-[0px_10px_20px_0px_#00000040]"
            >
              <div className="relative h-120 w-full">
                <Image
                  src={study.challengeImage}
                  alt="Challenge"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* OUR SOLUTION */}
          <motion.div
            variants={rightReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-2xl md:text-5xl font-bold leading-tight font-franklin text-white uppercase mb-4 list-disc pl-5 underline justify-center"
            >
              <li>our solution</li>
            </motion.ul>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {study?.problemInfo?.providedSolutions?.map((item) => (
                <motion.div
                  key={item.title}
                  variants={riseUpCard}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <SolutionCard item={item} />
                </motion.div>
              ))}
            </motion.div>

            {/* Results bar */}
            <motion.div
              variants={fadeScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="mt-10 rounded-xl border border-white bg-accent-300 p-10 shadow-[0px_10px_20px_0px_#00000040]"
            >
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-xl md:text-3xl font-bold leading-tight font-inter text-white mb-4 list-disc pl-5 justify-center"
              >
                <li>The Results</li>
              </motion.ul>

              <hr className="h-px bg-white" />

              <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                {study?.resultInfo?.map((r) => (
                  <AnimatedStat key={r.label} value={r.value} label={r.label} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex justify-center"
              >
                <AppLink href="/" text="Book a Consultation" radius="md" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold text-white"
          >
            {study.closingTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-white text-base md:text-xl mb-8 font-bold flex items-center justify-center gap-2"
          >
            <span>The results.</span>
            <hr className="w-40" />
            <span>exceeded our expectations.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.75, delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <AppLink href="/" text="Subscribe Now" radius="md" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
