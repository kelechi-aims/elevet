import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg shadow-[0px_10px_20px_0px_#00000040] overflow-hidden text-center font-inter">
      <div className="relative w-full h-56">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4 font-bold">
        <h3 className="text-white font-semibold text-lg md:text-2xl">{name}</h3>
        <p className="text-accent-50 text-sm md:text-lg mb-13">{role}</p>
      </div>
    </div>
  );
}
