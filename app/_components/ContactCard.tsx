import Image from "next/image";

type ContactCardProps = {
  icon: string;
  title: string;
  value: string;
  subText: string;
};

export default function ContactCard({
  icon,
  title,
  value,
  subText,
}: ContactCardProps) {
  return (
    <div className="rounded-3xl bg-[url('/img/card-bg.png')] bg-cover bg-center px-6 py-10 text-center shadow-[0px_10px_20px_0px_#00000040] relative">
      <div className="mx-auto relative h-14 w-14">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>

      <h3 className="mt-5 text-[24px] font-bold text-accent-50 md:text-[30px]">
        {title}
      </h3>

      <p className="mt-2 text-[20px] font-bold text-white md:text-[24px] mb-4">
        {value}
      </p>

      <div className="absolute bottom-5 flex w-[90%] flex-col items-center ">
        <p className="mt-1 text-[16px] font-semibold text-accent-50 md:text-[20px] ">
          {subText}
        </p>
      </div>
    </div>
  );
}
