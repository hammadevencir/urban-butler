import { ForCorporationsValueItem } from "./for-corporations-value-item";
import { forCorporationsValueFeatures } from "./for-corporations-value-data";

const ForCorporationsValueSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-11.25">
        <div className="text-center">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base xl:text-lg tracking-tight">
            The Value for Your Company
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-2xl xl:text-4xl">
            Happier Employees. Stronger Teams. Better Results.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16 xl:grid-cols-5 xl:gap-0 xl:divide-x xl:divide-[#E1D2BF]">
          {forCorporationsValueFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={
                index === 0
                  ? "xl:pr-6"
                  : index === forCorporationsValueFeatures.length - 1
                    ? "xl:pl-6"
                    : "xl:px-6"
              }
            >
              <ForCorporationsValueItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsValueSection;
