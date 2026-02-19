import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 text-sm border-t border-[#FFFFFFBF] font-inter">
      {/* Top Section */}
      <div className="bg-primary-200">
        <div className=" max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 shadow-[0px_10px_20px_0px_#00000040]">
          {/* Contact Us */}
          <div className="md:border-r border-[#FFFFFFBF] text-[20px]">
            <h3 className="text-white font-extrabold text-[30px] md:text-[40px] mb-4">
              Contact Us
            </h3>
            <p>Email: info@elevetlimited.com</p>
            <p>Phone: 07010028865</p>
          </div>

          {/* Quick Links */}
          <div className="md:border-r border-[#FFFFFFBF] text-[20px]">
            <h3 className="text-white font-extrabold text-[30px] md:text-[40px] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-wrap gap-4">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Case Studies</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Home</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-[20px]">
            <h3 className="text-white font-extrabold text-[30px] md:text-[40px] mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4 text-lg">
              <Image
                src="/img/linkedIn.png"
                alt="linkedIn logo"
                width={30}
                height={30}
              />
              <Image
                src="/img/instagram.png"
                alt="instagram logo"
                width={30}
                height={30}
              />
              <Image
                src="/img/twitter.png"
                alt="twitter logo"
                width={30}
                height={30}
              />
              {/* <FaFacebookF className="hover:text-green-500 cursor-pointer" />
              <FaInstagram className="hover:text-green-500 cursor-pointer" />
              <FaLinkedinIn className="hover:text-green-500 cursor-pointer" /> */}
            </div>
            <p className="mt-3 tracking-[6px]">@ElevetLimited</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#FFFFFFBF] text-center py-4 text-xs">
        <p className="font-semibold textxl md:text2xl">
          © 2025 Elevet Limited. All rights reserved | Powered by Greenmouse
          Technologies{" "}
        </p>
      </div>
    </footer>
  );
}
