"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type AppLinkProps = {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "outline";
  radius?: "md" | "lg";
};

const variantClasses = {
  primary: "bg-accent-50 text-white hover:bg-accent-100",
  secondary:
    "text-white border border-white hover:text-accent-50 hover:border-accent-50",
  outline: "border border-black text-black hover:bg-white hover:text-black",
};

const radiusClasses = {
  md: "rounded-md",
  lg: "rounded-2xl",
};

function AppLink({
  href,
  text,
  variant = "primary",
  radius = "lg",
}: AppLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.96, y: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center px-4 py-2 font-semibold transition ${variantClasses[variant]} ${radiusClasses[radius]}`}
      >
        <span className="text-nowrap">{text}</span>
      </Link>
    </motion.div>
  );
}

export default AppLink;
