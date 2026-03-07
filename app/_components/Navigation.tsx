"use client";
import Link from "next/link";

import AppLink from "./AppLink";
import { useState } from "react";

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
    href: "/services",
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
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop Menu */}

      <ul className="hidden md:flex gap-14 items-center text-2xl ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}

        <li>
          <AppLink href="/contact-us" text="Book a Consultation" />
        </li>
      </ul>

      {/* Hamburger (Mobile only) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 relative"
      >
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
        <span className="h-0.5 w-6 bg-white"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-18 right-0 z-20 h-screen bg-[url('/img/bg.png')] px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

            <li>
              <AppLink href="/contact-us" text="Book a Consultation" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;
