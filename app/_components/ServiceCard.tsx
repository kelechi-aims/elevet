"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type ServiceCardProps = {
  imageSrc: string;
  title: string;
  description?: string;
};

export default function ServiceCard({
  imageSrc,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.1 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center rounded-2xl bg-[url(/img/card-bg.png)] p-8 text-center transition duration-300 hover:scale-105"
    >
      <div className="mb-10 h-26 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={100}
          height={60}
          className="object-contain"
        />
      </div>
      <div>
        <h3
          className={` text-white font-inter font-bold ${description ? "mb-2 text-nowrap text-xl md:text-3xl" : "text-xl"}`}
        >
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-base md:text-xl font-bold text-white font-inter">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
