import Image from "next/image";
import { contactCards } from "../_lib/data";
import ContactCard from "../_components/ContactCard";
import AppLink from "../_components/AppLink";

function page() {
  return (
    <main className="text-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-82.5 w-full overflow-hidden md:h-95">
          <Image
            src="/img/contact-hero.png"
            alt="Contact us"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-primary-600/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-130">
                <h1 className="text-[44px] font-bold leading-none md:text-[64px]">
                  Contact Us
                </h1>

                <p className="mt-4 text-[24px] font-semibold leading-tight text-white md:text-[32px]">
                  Get in touch with us to elevate your business:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE BODY */}
      <section className="bg-[url('/img/page-bg.png')] bg-cover bg-center bg-repeat py-14">
        <div className="mx-auto max-w-6xl px-6">
          {/* CONTACT CARDS */}
          <section>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {contactCards.map((card) => (
                <ContactCard
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                  subText={card.subText}
                />
              ))}
            </div>
          </section>

          {/* SEND MESSAGE */}
          <section className="mt-16">
            <h2 className="text-[42px] font-bold leading-tight md:text-[58px]">
              Send Us A Message
            </h2>

            <p className="mt-4 max-w-5xl text-[22px] font-semibold leading-tight text-white md:text-[30px]">
              Have a question or want to discuss your business needs?
              <br /> Fill out the form below and our team will get back to you
              shortly.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* FORM */}
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="h-20.5 w-full rounded-md bg-[#2D2D2D] px-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <textarea
                  placeholder="Message"
                  rows={7}
                  className="w-full rounded-md bg-[#2D2D2D] px-6 py-6 text-[20px] font-semibold text-white outline-none placeholder:text-white"
                />

                <button
                  type="submit"
                  className="rounded-lg bg-accent-50 px-8 py-5 text-[20px] font-semibold text-white transition hover:bg-[#3ea83e]"
                >
                  Send Message
                </button>
              </form>

              {/* MAP */}
              <div className="relative min-h-105 overflow-hidden rounded-[34px] md:min-h-155">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.019692227929!2d3.3440204126869832!3d6.644476021713554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93faff71fac9%3A0xa3b596a284e79248!2s68%20Abo-Aba%20St%2C%20Ojodu%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1772860195066!5m2!1sen!2sng"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Ready to elevate your business?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white text-base md:text-xl mb-8 font-bold">
            Book a consultation with our experts and lets build
            <br /> solutions that move your business forward.{" "}
          </p>

          {/* Button */}
          <AppLink href="/contact-us" text="Subscribe Now" radius="md" />
        </div>
      </section>
    </main>
  );
}

export default page;
