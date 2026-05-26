import { ForProvidersCategoryCard } from "./for-providers-category-card";
import { forProvidersCategories } from "./for-providers-categories-data";

const ForProvidersCategoriesSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-16 xl:max-w-[1820px] xl:px-16">
        <p className="text-center text-xs font-bold uppercase text-primary sm:text-sm lg:text-base">
          Categories We Work With
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:mt-10 lg:grid-cols-5 xl:gap-5 3xl:grid-cols-9">
          {forProvidersCategories.map((category) => (
            <ForProvidersCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForProvidersCategoriesSection;
