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
    <article className="flex h-full flex-col overflow-hidden rounded-[8px] border border-[#E1D2BF] bg-[#FDF8F3]">
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={400}
        className="w-full h-auto min-h-[191px]"
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold uppercase text-[#1E1E1E] sm:text-base xl:text-xl">
          {index + 1}. {item.title}
        </h3>
        <p className="mt-2 text-sm text-[#4A4A4A] sm:text-base font-medium tracking-tight xl:text-lg">
          {item.description}
        </p>
      </div>
    </article>
  );
}
