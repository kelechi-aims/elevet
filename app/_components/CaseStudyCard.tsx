import Image from "next/image";
import Link from "next/link";
type CaseStudyCardProps = {
  slug: string;
  imageSrc: string;
  company: string;
  subtitle: string;
  problem: string;
  solution: string;
  resultValue?: string;
  resultText?: string;
};

export default function CaseStudyCard({
  slug,
  imageSrc,
  company,
  subtitle,
  problem,
  solution,
  resultValue,
  resultText,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      {" "}
      <div className="overflow-hidden rounded-2xl bg-[url(/img/casestudy-bg.png)] shadow-[0px_10px_20px_0px_#00000040]">
        {/* Image */}
        <div className="relative h-50 w-full">
          <Image src={imageSrc} alt={company} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 text-white font-inter font-extrabold">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wider">
            {company}
          </h3>
          <p className="text-base md:text-[18px] text-white font-extrabold">
            {subtitle}
          </p>

          <div className="mt-4 space-y-2 text-sm md:text-base text-white">
            <div className="grid grid-cols-[auto_1fr] gap-x-2">
              <span className="text-accent-50">Problem:</span>
              <span className="">{problem}</span>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-x-2">
              <span className="text-accent-50 ">Solution:</span>
              <span className="">{solution}</span>
            </div>
            {resultText && (
              <div className="grid grid-cols-[auto_1fr] gap-x-2">
                <span className="text-accent-50 ">Result:</span>
                <p>
                  <span className="text-accent-50 ">{resultValue} </span>
                  <span className="">{resultText}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

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
    <div className="rounded-2xl bg-accent-250 p-6 text-white shadow-[0px_10px_20px_0px_#00000040]">
      <h3 className="text-xl md:text-2xl font-extrabold tracking-wide mb-4 underline">
        {title}
      </h3>

      <ul className="space-y-3 mb-6">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-accent-50 text-5xl">✔</span>
            <span className="text-base md:text-2xl font-extrabold">
              {point}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center mb-3">
        <Link
          href={buttonHref}
          className="inline-flex items-center justify-center rounded-md bg-accent-50 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-100 transition"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
