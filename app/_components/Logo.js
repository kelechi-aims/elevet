import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/logo.svg"
        width={150}
        height={150}
        alt="Elevet logo"
        className="py-3 px-3"
      />
    </Link>
  );
}

export default Logo;
