import Image from "next/image";

type TestimonialCardProps = {
  image: string;
  quote: string;
  name: string;
  align: "left" | "right";
};

export default function TestimonialCard({
  image,
  quote,
  name,
  align,
}: TestimonialCardProps) {
  return (
    <div className="bg-[linear-gradient(90.01deg,rgba(34,87,34,0.6)_-95.06%,rgba(74,189,74,0.6)_125.06%)] text-white rounded-lg p-6 relative">
      {/* Quote */}

      {/* Author */}
      <div className="flex items-center gap-4 h-[80%]">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <p className="text-sm md:text-base italic mb-4 pt-4">“{quote}”</p>
      </div>
      <span
        className={`block text-sm font-medium ${align === "right" ? "text-right" : "text-left"}`}
      >
        - {name}
      </span>
    </div>
  );
}
