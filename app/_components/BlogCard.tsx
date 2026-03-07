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
      <div className="relative h-50 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5 text-white relative h-80">
        <h3 className="text-[20px] md:text-[24px] font-bold leading-tight h-[31%]">
          {title}
        </h3>

        <p className="mt-3 text-[14px] md:text-[18px] leading-[1.35] text-white">
          {description}
        </p>

        <div className="bottom-5 absolute w-full px-5">
          <Link
            href={href}
            className="mt-5 inline-flex rounded-lg bg-accent-50 px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-accent-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
