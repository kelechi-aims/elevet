import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src="/img/logo.svg"
        width={200}
        height={40}
        alt="Elevet logo"
        className="py-3 px-3"
      />
    </Link>
  );
}

export default Logo;
