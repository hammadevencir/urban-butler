import Image from "next/image";

import type { ForProvidersCategory } from "./for-providers-categories-data";

type ForProvidersCategoryCardProps = {
  category: ForProvidersCategory;
};

export function ForProvidersCategoryCard({
  category,
}: ForProvidersCategoryCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-sm border border-[#E1D2BF] bg-[#FDF8F2] 3xl:items-center">
      {category.isMore ? (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-[#F3EBE0] 3xl:aspect-auto 3xl:h-[106px] 3xl:w-[173px]">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        </div>
      ) : (
        <Image
          src={category.image!}
          alt={category.title}
          width={173}
          height={106}
          className="aspect-[4/3] w-full object-cover 3xl:aspect-auto 3xl:h-[106px] 3xl:w-[173px]"
        />
      )}

      <div className="flex items-center justify-center px-3 py-3 sm:py-4">
        <h3 className="text-center text-[10px] font-bold uppercase tracking-wide text-primary sm:text-xs">
          {category.title}
        </h3>
      </div>
    </article>
  );
}
