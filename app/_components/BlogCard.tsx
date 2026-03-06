import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
};

export default function BlogCard({
  imageSrc,
  title,
  description,
  href,
}: BlogCardProps) {
  return (
    <div className="overflow-hidden rounded-[20px] bg-[url('/img/card-bg.png')] bg-cover bg-center shadow-[0px_10px_20px_0px_#00000040]">
      <div className="relative h-42.5 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5 text-white">
        <h3 className="text-[20px] font-bold leading-tight">{title}</h3>

        <p className="mt-3 text-[14px] leading-[1.35] text-white/90">
          {description}
        </p>

        <Link
          href={href}
          className="mt-5 inline-flex rounded-lg bg-[#4ABD4A] px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-[#3ea83e]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
