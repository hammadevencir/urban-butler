import HeroSection from "@/components/hero/hero-section";
import ServicesSection from "@/components/services/services-section";
import TimePreciousSection from "@/components/time-precious/time-precious-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <TimePreciousSection />
      <ServicesSection />
    </div>
  );
}
