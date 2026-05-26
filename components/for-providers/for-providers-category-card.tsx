import Image from "next/image";

import type { ForProvidersCategory } from "./for-providers-categories-data";

type ForProvidersCategoryCardProps = {
  category: ForProvidersCategory;
};

export function ForProvidersCategoryCard({
  category,
}: ForProvidersCategoryCardProps) {
  if (!("image" in category)) {
    return (
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#E1D2BF] bg-[#FDF8F2] 3xl:items-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#FDF8F2]">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-1 rounded-full border-2 border-primary" />
            <span className="size-1 rounded-full border-2 border-primary" />
            <span className="size-1 rounded-full border-2 border-primary" />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-xs xl:text-sm">
            & More
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#E1D2BF] bg-[#FDF8F2] 3xl:items-center">
      <Image
        src={category.image}
        alt={category.title}
        width={173}
        height={106}
        className="aspect-4/3 w-full object-cover 3xl:aspect-auto 3xl:h-[106px] 3xl:w-[173px]"
      />

      <div className="flex items-center justify-center px-3 py-2.5">
        <h3 className="text-center text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs xl:text-sm">
          {category.title}
        </h3>
      </div>
    </article>
  );
}
