import ForCorporationsCtaSection from "@/components/for-corporations/for-corporations-cta-section";
import ForCorporationsEmployeeSection from "@/components/for-corporations/for-corporations-employee-section";
import ForCorporationsHeroSection from "@/components/for-corporations/for-corporations-hero-section";
import ForCorporationsPartnerBannerSection from "@/components/for-corporations/for-corporations-partner-banner-section";
import ForCorporationsValueSection from "@/components/for-corporations/for-corporations-value-section";

export default function ForCorporationsPage() {
  return (
    <div className="flex w-full flex-col">
      <ForCorporationsHeroSection />
      <ForCorporationsValueSection />
      <ForCorporationsEmployeeSection />
      <ForCorporationsCtaSection />
      <ForCorporationsPartnerBannerSection />
    </div>
  );
}
