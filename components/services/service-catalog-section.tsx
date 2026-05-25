import { ServiceCatalogCategorySection } from "./service-catalog-category";
import {
  serviceCatalogPrimaryCategories,
  serviceCatalogTravelCategory,
  serviceCatalogWellnessCategory,
} from "./service-catalog-data";

const ServiceCatalogSection = () => {
  return (
    <section className="bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl space-y-14 px-6 py-11.5 sm:px-10 lg:space-y-16 xl:max-w-[1820px] xl:px-16">
        {serviceCatalogPrimaryCategories.map((category) => (
          <ServiceCatalogCategorySection key={category.slug} category={category} />
        ))}

        <div className="grid gap-14 lg:grid-cols-5 lg:gap-8 xl:gap-12">
          <ServiceCatalogCategorySection
            category={serviceCatalogWellnessCategory}
            className="lg:col-span-2"
          />
          <ServiceCatalogCategorySection
            category={serviceCatalogTravelCategory}
            className="lg:col-span-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCatalogSection;
