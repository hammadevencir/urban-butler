import ForHotelsBenefitsSection from "@/components/for-hotels/for-hotels-benefits-section";
import ForHotelsConciergeSection from "@/components/for-hotels/for-hotels-concierge-section";
import ForHotelsCtaSection from "@/components/for-hotels/for-hotels-cta-section";
import ForHotelsHeroSection from "@/components/for-hotels/for-hotels-hero-section";

export default function ForHotelsPage() {
  return (
    <div className="flex w-full flex-col">
      <ForHotelsHeroSection />
      <ForHotelsBenefitsSection />
      <ForHotelsConciergeSection />
      <ForHotelsCtaSection />
    </div>
  );
}
