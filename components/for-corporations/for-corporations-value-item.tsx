import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";

import type { ForCorporationsValueFeature } from "./for-corporations-value-data";

type ForCorporationsValueItemProps = {
  feature: ForCorporationsValueFeature;
};

export function ForCorporationsValueItem({
  feature,
}: ForCorporationsValueItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {typeof feature.icon === "string" ? (
        <Image
          src={feature.icon}
          alt=""
          width={80}
          height={80}
          aria-hidden
          className="shrink-0"
        />
      ) : (
        <HugeiconsIcon
          icon={feature.icon}
          size={80}
          strokeWidth={1.25}
          className="text-primary"
        />
      )}

      <h3 className="mt-4 text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-base tracking-tight">
        {feature.title}
      </h3>

      <p className="mt-2 max-w-[220px] 3xl:max-w-[274px] text-sm font-medium text-[#545454] sm:text-base 3xl:text-xl tracking-tight">
        {feature.description}
      </p>
    </div>
  );
}
