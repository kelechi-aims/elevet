import Image from "next/image";

type CaseStudyCardProps = {
  imageSrc: string;
  company: string;
  subtitle: string;
  problem: string;
  solution: string;
  result?: string;
};

export default function CaseStudyCard({
  imageSrc,
  company,
  subtitle,
  problem,
  solution,
  result,
}: CaseStudyCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-black/60 shadow-[0px_10px_20px_0px_#00000040]">
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image src={imageSrc} alt={company} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <h3 className="text-xl font-bold">{company}</h3>
        <p className="text-sm text-gray-300">{subtitle}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p>
            <span className="text-green-400 font-semibold">Problem:</span>{" "}
            {problem}
          </p>
          <p>
            <span className="text-green-400 font-semibold">Solution:</span>{" "}
            {solution}
          </p>
          {result && (
            <p>
              <span className="text-green-400 font-semibold">Result:</span>{" "}
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

type CaseStudyCTAProps = {
  title: string;
  points: string[];
  buttonText: string;
  buttonHref: string;
};

export function CaseStudyCTA({
  title,
  points,
  buttonText,
  buttonHref,
}: CaseStudyCTAProps) {
  return (
    <div className="rounded-2xl bg-[linear-gradient(90.01deg,rgba(34,87,34,0.6)_-95.06%,rgba(74,189,74,0.6)_125.06%)] p-6 text-white shadow-[0px_10px_20px_0px_#00000040]">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <ul className="space-y-3 mb-6">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-300">✔</span>
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>

      <Link
        href={buttonHref}
        className="inline-flex items-center justify-center rounded-md bg-green-500 px-5 py-2 text-sm font-semibold text-black hover:bg-green-400 transition"
      >
        {buttonText}
      </Link>
    </div>
  );
}
