import MembershipHeroSection from "@/components/membership/membership-hero-section";
import MembershipSection from "@/components/membership/membership-section";
import MembershipStripSection from "@/components/membership/membership-strip-section";
import PlanConsultationSection from "@/components/plan-consultation/plan-consultation-section";

export default function MembershipPage() {
  return (
    <div className="flex w-full flex-col">
      <MembershipHeroSection />
      <MembershipStripSection />
      <MembershipSection />
      <PlanConsultationSection imageSrc="/membership/plan-cons.png" />
    </div>
  );
}
