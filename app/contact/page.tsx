import ContactHeroSection from "@/components/contact/contact-hero-section";
import ContactMessageSection from "@/components/contact/contact-message-section";
import PlanConsultationSection from "@/components/plan-consultation/plan-consultation-section";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <ContactHeroSection />
      <ContactMessageSection />
      <PlanConsultationSection />
    </div>
  );
}
