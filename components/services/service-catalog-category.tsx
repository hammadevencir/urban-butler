import Image from "next/image";

import { cn } from "@/lib/utils";

import type { ServiceCatalogCategory } from "./service-catalog-data";
import { ServiceCatalogItemCard } from "./service-catalog-item-card";

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
} as const;

type ServiceCatalogCategorySectionProps = {
  category: ServiceCatalogCategory;
  className?: string;
};

export function ServiceCatalogCategorySection({
  category,
  className,
}: ServiceCatalogCategorySectionProps) {
  return (
    <section className={className}>
      <div className="flex items-center gap-3 border-b border-[#E1D2BF] pb-4">
        <Image
          src={category.icon}
          alt=""
          width={24}
          height={24}
          aria-hidden
          className="shrink-0"
        />
        <h2 className="text-sm font-semibold uppercase text-primary sm:text-base">
          {category.title}
        </h2>
      </div>

      <div
        className={cn(
          "mt-6 grid grid-cols-1 gap-6",
          columnClasses[category.columns],
        )}
      >
        {category.items.map((item, index) => (
          <ServiceCatalogItemCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
