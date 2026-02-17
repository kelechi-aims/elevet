import AboutSection from "./_components/AboutSection";
import HomeHero from "./_components/HomeHero";
import ServiceSection from "./_components/ServiceSection";
import SuccessStory from "./_components/SuccessStory";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <SuccessStory />
      <TestimonialsSection />
    </div>
  );
}
