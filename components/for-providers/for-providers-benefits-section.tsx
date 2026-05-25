import { ForProvidersBenefitsItem } from "./for-providers-benefits-item";
import { forProvidersBenefitsFeatures } from "./for-providers-benefits-data";

const ForProvidersBenefitsSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-0 xl:divide-x xl:divide-[#E1D2BF]">
          {forProvidersBenefitsFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={
                index === 0
                  ? "xl:pr-6"
                  : index === forProvidersBenefitsFeatures.length - 1
                    ? "xl:pl-6"
                    : "xl:px-6"
              }
            >
              <ForProvidersBenefitsItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForProvidersBenefitsSection;
