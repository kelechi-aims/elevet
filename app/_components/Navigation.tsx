import Link from "next/link";

import AppLink from "./AppLink";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About us",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "/sevices",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

function Navigation() {
  return (
    <div>
      <ul className="flex gap-14 items-center text-2xl">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}

        <li>
          <AppLink href="/consultation" text="Book a Consultation" />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
