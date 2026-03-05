import AppLink from "@/app/_components/AppLink";
import InfoCard, { SolutionCard } from "@/app/_components/InfoCard";
import { caseStudies } from "@/app/_lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  const p = await params;
  const study = caseStudies.find((item) => item.slug === p.slug);

  if (!study || !study.imageSrc1) return notFound();

  return (
    <>
      <section className="relative">
        {/* HERO IMAGE */}
        <div className="relative h-95 md:h-115 w-full overflow-hidden">
          <Image
            src={study.imageSrc1}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-primary-600/60"></div>

          {/* Text Content */}
          <div className="absolute inset-0 max-w-7xl mx-auto flex items-center">
            <div className="relative z-10  px-6">
              <h1 className="text-white w-[70%] text-3xl md:text-6xl font-bold leading-tight font-franklin">
                {study.title}
              </h1>

              <p className="text-white w-[40%] text-xl md:text-3xl mt-4 font-semibold">
                {study.titleDesc}
              </p>
            </div>
          </div>
        </div>

        {/* INFO CARDS (Overlapping) */}
        <div className="relative -mt-14 md:-mt-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              label="Client"
              value={study.companyInfo.client}
              subValue={study.companyInfo.clientNiche}
            />

            <InfoCard
              label="Industry"
              value={study.company}
              subValue={study.companyInfo.industry}
            />

            <InfoCard
              label="Duration"
              value={study.companyInfo.duration}
              subValue="Project Timeline"
            />
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* THE CHALLENGE */}
          <div>
            <ul className="flex items-center gap-2 text-2xl md:text-5xl font-bold leading-tight font-franklin text-white uppercase mb-4 list-disc pl-5 underline">
              <li>the challenge</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
              {study.problemInfo.description}
            </h2>

            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-white mt-4">
              {study.problemInfo.effect}
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-[0px_10px_20px_0px_#00000040]">
              <div className="relative h-100 w-full">
                <Image
                  src={study.challengeImage}
                  alt="Challenge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* OUR SOLUTION */}
          <div>
            <ul className="flex items-center gap-2 text-2xl md:text-5xl font-bold leading-tight font-franklin text-white uppercase mb-4 list-disc pl-5 underline justify-center">
              <li>our solution</li>
            </ul>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {study.problemInfo.providedSolutions.map((item) => (
                <SolutionCard key={item.title} item={item} />
              ))}
            </div>

            {/* Results bar */}
            <div className="mt-10 rounded-xl border border-white bg-accent-300 p-6 shadow-[0px_10px_20px_0px_#00000040]">
              <ul className="flex items-center gap-2 text-xl md:text-3xl font-bold leading-tight font-inter text-white  mb-4 list-disc pl-5 justify-center">
                <li>The Results</li>
              </ul>
              <hr className="h-px bg-white" />

              <div className="mt-5 grid grid-cols-3 gap-4 text-center">
                {study.resultInfo.map((r) => (
                  <div key={r.label}>
                    <p className="text-green-500 font-extrabold text-lg">
                      {r.value}
                    </p>
                    <p className="mt-1 text-xs text-white/80">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            {study.closingTitle}
          </h2>

          {/* Subtext */}
          <div className="mt-4 text-white text-base md:text-xl mb-8 font-bold flex items-center justify-center gap-2">
            <span>The results.</span> <hr className="w-40" />{" "}
            <span>exceeded our expectations.</span>
          </div>

          {/* Button */}
          <AppLink href="/" text="Subscribe Now" radius="md" />
        </div>
      </section>
    </>
  );
}
