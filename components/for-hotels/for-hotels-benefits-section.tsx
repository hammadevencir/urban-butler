import { ForHotelsBenefitsItem } from "./for-hotels-benefits-item";
import { forHotelsBenefitsFeatures } from "./for-hotels-benefits-data";

const ForHotelsBenefitsSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <h2 className="mx-auto max-w-4xl text-center font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
          A luxury experience your guests will remember—{" "}
          <span className="text-primary">and you&apos;ll be recognized for.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16 xl:grid-cols-5 xl:gap-0 xl:divide-x xl:divide-[#E1D2BF]">
          {forHotelsBenefitsFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={
                index === 0
                  ? "xl:pr-6"
                  : index === forHotelsBenefitsFeatures.length - 1
                    ? "xl:pl-6"
                    : "xl:px-6"
              }
            >
              <ForHotelsBenefitsItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForHotelsBenefitsSection;
