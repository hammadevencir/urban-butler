import ContactHeroSection from "@/components/contact/contact-hero-section";
import ContactMessageSection from "@/components/contact/contact-message-section";
import ContactStandardSection from "@/components/contact/contact-standard-section";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <ContactHeroSection />
      <ContactMessageSection />
      <ContactStandardSection />
    </div>
  );
}
