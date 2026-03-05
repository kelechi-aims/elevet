import Image from "next/image";

type InfoCardProps = {
  label: string;
  value: string;
  subValue: string;
};

function InfoCard({ label, value, subValue }: InfoCardProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-[url('/img/card-bg.png')] bg-cover bg-center p-8 text-center shadow-[0px_10px_20px_0px_#00000040]">
      <p className="text-white font-semibold text-lg">{label}</p>

      <p className="text-green-500 font-bold text-2xl mt-2">{value}</p>

      <div className="w-24 h-px bg-gray-500 mx-auto my-4"></div>

      <p className="text-white font-semibold text-sm">{subValue}</p>
    </div>
  );
}

type SolutionCardProps = {
  title: string;
  desc: string;
  iconSrc: string;
};

export function SolutionCard({ item }: { item: SolutionCardProps }) {
  return (
    <div className="rounded-2xl bg-[url('/img/card-bg.png')] bg-cover bg-center p-6 shadow-[0px_10px_20px_0px_#00000040]">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative h-20 w-20 shrink-0">
          <Image
            src={item.iconSrc}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h4 className="text-white font-extrabold text-base md:text-lg">
            {item.title}
          </h4>
          <p className="mt-2 text-sm text-white ">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
