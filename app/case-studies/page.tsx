import AppLink from "../_components/AppLink";
import CaseStudyCard, { CaseStudyCTA } from "../_components/CaseStudyCard";
import { caseStudies } from "../_lib/data";

function page() {
  return (
    <>
      <section className="py-20">
        <div className="text-center text-white">
          {/* Small Label */}
          <h1 className="font-inter font-bold text-3xl md:text-5xl text-white mb-3">
            Case Studies
          </h1>

          {/* Heading */}
          <div className="py-6 bg-primary-100 border border-x-0 border-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-snug text-white">
                Real-world examples of how we’ve helped business
                <br />
                <span className="text-accent-50">
                  achieve remarkable success
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-white text-lg md:text-2xl leading-relaxed">
                Explore our case studies to see how Elevet has empowered
                <br /> various organizations to overcome challenges, implement
                effective
                <br />
                solutions and achieve tangible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* First row: 2 cards + CTA */}
            <CaseStudyCard {...caseStudies[0]} />
            <CaseStudyCard {...caseStudies[1]} />

            <div className="h-fit">
              <CaseStudyCTA
                title="Read Case Study"
                points={[
                  "Expert Guidance",
                  "Tailored Solutions",
                  "Measurable Results",
                ]}
                buttonText="Book a Consultation"
                buttonHref="/consultation"
              />
            </div>

            {/* Remaining cards */}
            {caseStudies.slice(2).map((cs) => (
              <CaseStudyCard
                slug={cs.slug}
                key={cs.id}
                imageSrc={cs.imageSrc}
                company={cs.company}
                subtitle={cs.subtitle}
                problem={cs.problem}
                solution={cs.solution}
                resultText={cs.resultText}
                resultValue={cs.resultValue}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Partner with Experts Who Deliver Results.{" "}
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white text-base md:text-xl mb-8 font-bold">
            Let&apos;s discuss how we can achieve your business goals together
          </p>

          {/* Button */}
          <AppLink href="/" text="Book a Consultation" radius="md" />
        </div>
      </section>
    </>
  );
}

export default page;
