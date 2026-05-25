import ForBuildingsAmenitySection from "@/components/for-buildings/for-buildings-amenity-section";
import ForBuildingsCtaSection from "@/components/for-buildings/for-buildings-cta-section";
import ForBuildingsHeroSection from "@/components/for-buildings/for-buildings-hero-section";
import ForBuildingsIntegrationSection from "@/components/for-buildings/for-buildings-integration-section";

export default function ForBuildingsPage() {
  return (
    <div className="flex w-full flex-col">
      <ForBuildingsHeroSection />
      <ForBuildingsAmenitySection />
      <ForBuildingsIntegrationSection />
      <ForBuildingsCtaSection />
    </div>
  );
}
