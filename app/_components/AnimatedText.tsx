"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  isInview?: boolean;
};

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  isInview,
}: AnimatedTextProps) {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.04,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      // animate="visible"
      animate={isInview ? "visible" : "hidden"}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
