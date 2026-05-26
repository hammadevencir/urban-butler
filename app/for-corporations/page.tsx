import ForCorporationsHeroSection from "@/components/for-corporations/for-corporations-hero-section";
import ForCorporationsHowItWorksSection from "@/components/for-corporations/for-corporations-how-it-works-section";
import ForCorporationsPartnerBannerSection from "@/components/for-corporations/for-corporations-partner-banner-section";
import ForCorporationsServicesSection from "@/components/for-corporations/for-corporations-services-section";
import ForCorporationsValueSection from "@/components/for-corporations/for-corporations-value-section";

export default function ForCorporationsPage() {
  return (
    <div className="flex w-full flex-col">
      <ForCorporationsHeroSection />
      <ForCorporationsValueSection />
      <ForCorporationsServicesSection />
      <ForCorporationsHowItWorksSection />
      <ForCorporationsPartnerBannerSection />
    </div>
  );
}
