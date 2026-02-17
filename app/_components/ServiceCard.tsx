import Image from "next/image";

type ServiceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  imageSrc,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-[url(/img/card-bg.png)] p-8 text-center transition duration-300 hover:scale-105">
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
        <h3 className="text-xl md:text-3xl text-white font-inter font-bold text-nowrap">
          {title}
        </h3>
        <p className="mt-2 text-base md:text-xl font-bold text-white font-inter">
          {description}
        </p>
      </div>
    </div>
  );
}
