import { Hero } from "@/components/landing/Hero";
import { ProductLines } from "@/components/landing/ProductLines";
import { AboutTeaser } from "@/components/landing/AboutTeaser";
import { Stats } from "@/components/landing/Stats";
import { Teachers } from "@/components/landing/Teachers";
import { CTASection } from "@/components/landing/CTASection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TrialBooking } from "@/components/trial/TrialBooking";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <ProductLines />
      </ScrollReveal>
      <ScrollReveal>
        <AboutTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <Stats />
      </ScrollReveal>
      <ScrollReveal>
        <Teachers />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
      <ScrollReveal>
        <TrialBooking />
      </ScrollReveal>
    </>
  );
}
