import Image from "next/image";
import AppLink from "./AppLink";

export default function SuccessStory() {
  return (
    <section className="py-16 bg-primary-200 shadow-[0px_10px_20px_0px_#00000040]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* LEFT — IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-55 md:h-83 rounded-lg overflow-hidden">
              <Image
                src="/img/success.png"
                alt="Success Story"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="w-full md:w-1/2 text-white font-inter">
            {/* Small heading */}
            <h3 className="text-[30px] md:text-[50px] font-bold mb-2">
              Success Story
            </h3>

            {/* Main heading */}
            <p className="text-xl md:text-4xl font-bold mb-3">
              Boosting Efficiency for{" "}
              <span className="text-accent-50">TechCorp</span>
            </p>

            {/* Description */}
            <p className="text-sm md:text-2xl leading-relaxed mb-4">
              Challenge: Outdated processes hindering growth,
            </p>
            <p className="text-sm md:text-2xl leading-relaxed mb-4">
              Solution: Streamlined operations and automation,
            </p>

            {/* Result */}
            <p className="text-sm md:text-2xl mb-5">
              Result: 40% increase in productivity.
            </p>

            {/* Button */}

            <AppLink
              href="/contact-us"
              text="Book a Consultation"
              radius="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
