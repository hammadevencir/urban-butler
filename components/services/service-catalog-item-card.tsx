import Image from "next/image";

import type { ServiceCatalogItem } from "./service-catalog-data";

type ServiceCatalogItemCardProps = {
  item: ServiceCatalogItem;
  index: number;
};

export function ServiceCatalogItemCard({
  item,
  index,
}: ServiceCatalogItemCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E1D2BF] bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
        <h3 className="text-sm font-bold uppercase text-[#1E1E1E] sm:text-base">
          {index + 1}. {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
          {item.description}
        </p>
      </div>
    </article>
  );
}
