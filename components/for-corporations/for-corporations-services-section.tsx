import { ForCorporationsServicesCard } from "./for-corporations-services-card";
import { forCorporationsServicesCategories } from "./for-corporations-services-data";

const ForCorporationsServicesSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-16 xl:max-w-[1820px] xl:px-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base tracking-tight">
            A Concierge Service That Supports Every Part of Life
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-3xl xl:text-4xl">
            Comprehensive Services Your Employees Will Love
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {forCorporationsServicesCategories.map((category) => (
            <ForCorporationsServicesCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsServicesSection;
