import Image from "next/image";

import type { ForCorporationsServicesCategory } from "./for-corporations-services-data";

type ForCorporationsServicesCardProps = {
  category: ForCorporationsServicesCategory;
};

export function ForCorporationsServicesCard({
  category,
}: ForCorporationsServicesCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#E1D2BF] bg-[#FDF8F2] 3xl:items-center">
      <Image
        src={category.image}
        alt={category.title}
        width={312}
        height={191}
        className="aspect-8/5 w-full object-cover 3xl:aspect-auto 3xl:h-[191px] 3xl:w-[312px]"
      />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2.5">
          <Image
            src={category.icon}
            alt=""
            width={24}
            height={24}
            aria-hidden
            className="shrink-0"
          />
          <h3 className="text-xs font-bold uppercase text-primary sm:text-sm">
            {category.title}
          </h3>
        </div>

        <ul className="mt-4">
          {category.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2 text-sm font-medium tracking-tight text-[#545454] sm:text-base"
            >
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-[#545454]"
                aria-hidden="true"
              />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
