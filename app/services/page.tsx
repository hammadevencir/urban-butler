import ServiceCatalogSection from "@/components/services/service-catalog-section";
import ServicesHeroSection from "@/components/services/services-hero-section";

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <ServicesHeroSection />
      <ServiceCatalogSection />
    </div>
  );
}
