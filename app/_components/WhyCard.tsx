import Image from "next/image";

type WhyCardProps = {
  title: string;
  description: string;
};

function WhyCard({ title, description }: WhyCardProps) {
  return (
    <div
      className="
      rounded-lg
      p-6
      flex
      
      
    "
    >
      <Image src="/icons/check.svg" alt="check" width={80} height={80} />
      <div className="text-white text-left">
        <h3 className="text-xl md:text-xl font-bold text-nowrap">{title}</h3>
        <p className=" text-sm md:text-base mt-1">{description}</p>
      </div>
    </div>
  );
}

export default WhyCard;
