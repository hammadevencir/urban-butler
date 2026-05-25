import { HugeiconsIcon } from "@hugeicons/react";

import type { ForProvidersBenefitsFeature } from "./for-providers-benefits-data";

type ForProvidersBenefitsItemProps = {
  feature: ForProvidersBenefitsFeature;
};

export function ForProvidersBenefitsItem({
  feature,
}: ForProvidersBenefitsItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <HugeiconsIcon
        icon={feature.icon}
        size={48}
        strokeWidth={1.25}
        className="text-primary"
      />

      <h3 className="mt-4 text-xs font-bold uppercase text-primary sm:text-sm">
        {feature.title}
      </h3>

      <p className="mt-2 max-w-[220px] text-sm font-medium tracking-tight text-[#545454] sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}
