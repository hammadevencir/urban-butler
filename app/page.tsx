import HeroSection from "@/components/hero/hero-section";
import HowItWorksSection from "@/components/how-it-works/how-it-works-section";
import MembershipSection from "@/components/membership/membership-section";
import PlanConsultationSection from "@/components/plan-consultation/plan-consultation-section";
import ServicesSection from "@/components/services/services-section";
import TimePreciousSection from "@/components/time-precious/time-precious-section";
import WhyUrbanButlerSection from "@/components/why-urban-butler/why-urban-butler-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <TimePreciousSection />
      <ServicesSection />
      <HowItWorksSection />
      <MembershipSection />
      <WhyUrbanButlerSection />
      <PlanConsultationSection />
    </div>
  );
}
