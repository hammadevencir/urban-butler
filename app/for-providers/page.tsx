import ForProvidersBenefitsSection from "@/components/for-providers/for-providers-benefits-section";
import ForProvidersCategoriesSection from "@/components/for-providers/for-providers-categories-section";
import ForProvidersCtaSection from "@/components/for-providers/for-providers-cta-section";
import ForProvidersHeroSection from "@/components/for-providers/for-providers-hero-section";
import ForProvidersHowItWorksSection from "@/components/for-providers/for-providers-how-it-works-section";

export default function ForProvidersPage() {
  return (
    <div className="flex w-full flex-col">
      <ForProvidersHeroSection />
      <ForProvidersBenefitsSection />
      <ForProvidersHowItWorksSection />
      <ForProvidersCategoriesSection />
      <ForProvidersCtaSection />
    </div>
  );
}
