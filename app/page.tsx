import { CTABanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero";
import { ImpactSection } from "@/components/sections/impact";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}
