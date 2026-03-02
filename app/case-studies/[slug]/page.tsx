import AppLink from "@/app/_components/AppLink";
import InfoCard from "@/app/_components/InfoCard";
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
            alt="Case Study"
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
              value="TechCorp"
              subValue="Technology Company"
            />

            <InfoCard
              label="Industry"
              value="TechCorp"
              subValue="SaaS / IT Services"
            />

            <InfoCard
              label="Duration"
              value="4 Months"
              subValue="Project Timeline"
            />
          </div>
        </div>
      </section>

      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Elevet transformed how we operate`{" "}
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
