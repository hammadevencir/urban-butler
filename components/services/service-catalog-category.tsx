import Image from "next/image";

import { cn } from "@/lib/utils";

import type { ServiceCatalogCategory } from "./service-catalog-data";
import { ServiceCatalogItemCard } from "./service-catalog-item-card";

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 xl:grid-cols-3",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
} as const;

type ServiceCatalogCategorySectionProps = {
  category: ServiceCatalogCategory;
  className?: string;
  stretchHeight?: boolean;
};

export function ServiceCatalogCategorySection({
  category,
  className,
  stretchHeight = false,
}: ServiceCatalogCategorySectionProps) {
  return (
    <section className={cn(stretchHeight && "flex h-full flex-col", className)}>
      <div className="flex items-center gap-3">
        <Image
          src={category.icon}
          alt=""
          width={28}
          height={28}
          aria-hidden
          className="shrink-0"
        />
        <h2 className="text-sm font-semibold uppercase text-primary sm:text-base xl:text-xl">
          {category.title}
        </h2>
      </div>

      <div
        className={cn(
          "mt-6 grid min-w-0 grid-cols-1 gap-4 sm:gap-5 xl:gap-6",
          stretchHeight && "flex-1 auto-rows-fr items-stretch",
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
