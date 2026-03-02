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

export default InfoCard;
