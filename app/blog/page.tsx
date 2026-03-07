import Image from "next/image";
import { featuredArticles, latestArticles } from "../_lib/data";
import BlogCard from "../_components/BlogCard";
import AppLink from "../_components/AppLink";

function page() {
  return (
    <main className="text-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-100 w-full overflow-hidden md:h-120">
          <Image
            src="/img/blog-hero.png"
            alt="Blog and Insights"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-primary-600/50" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="max-w-190">
                <h1 className="text-[38px] font-bold leading-tight md:text-[58px] font-franklin">
                  Blog &amp; Insights
                </h1>

                <p className="mt-4 max-w-225 text-[24px] font-semibold leading-tight text-white md:text-[30px]">
                  Expert advice, industry trends and actual fact for business
                  growth.
                </p>

                <div className="mt-7 flex max-w-175 flex-col gap-4 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search Articles.."
                    className="h-14.5 w-full rounded-lg bg-white px-5 text-[18px] text-black outline-none placeholder:text-gray-400"
                  />

                  <button className="h-14.5 rounded-lg bg-[#4ABD4A] px-8 text-[18px] font-semibold text-white transition hover:bg-[#3ea83e] sm:w-auto">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="bg-[url('/img/page-bg.png')] bg-cover bg-center bg-repeat py-14">
        <div className="mx-auto max-w-6xl px-6">
          {/* FEATURED ARTICLES */}
          <section>
            <h2 className="text-[36px] font-bold md:text-[44px]">
              Featured Articles
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <BlogCard
                  key={article.id}
                  imageSrc={article.imageSrc}
                  title={article.title}
                  description={article.description}
                  href={article.href}
                />
              ))}
            </div>
          </section>

          {/* LATEST ARTICLES */}
          <section className="mt-20">
            <h2 className="text-[36px] font-bold md:text-[44px]">
              Latest Articles
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => (
                <BlogCard
                  key={article.id}
                  imageSrc={article.imageSrc}
                  title={article.title}
                  description={article.description}
                  href={article.href}
                />
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-accent-150 bg-cover bg-center py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Stay Updated With Elevet Insights
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-white text-sm md:text-lg mb-8">
            Sign up for our newsletter to receive the latest business tips,
            insights, <br />
            and expert advice.{" "}
          </p>

          {/* Button */}
          <AppLink href="/" text="Subscribe Now" radius="md" />
        </div>
      </section>
    </main>
  );
}

export default page;
