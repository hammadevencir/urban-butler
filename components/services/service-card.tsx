import Image from "next/image";

import type { ServiceItem } from "./services-data";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[#E1D2BF] bg-[#FDF8F3]">
      <div className="relative">
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute -bottom-5 xl:-bottom-8 left-1/2 flex size-10 lg:size-16 -translate-x-1/2 items-center justify-center rounded-full border bg-[#FDF7EE] border-[#E1D2BF]">
          <Image
            src={service.icon}
            alt=""
            width={24}
            height={24}
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-col items-center px-4 pb-6 pt-8 xl:pt-12 text-center">
        <h3 className="text-sm font-semibold uppercase text-primary xl:text-base">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A] xl:text-base">
          {service.description}
        </p>
      </div>
    </article>
  );
}
