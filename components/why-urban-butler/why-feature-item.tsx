import { HugeiconsIcon } from "@hugeicons/react";

import type { WhyUrbanButlerFeature } from "./why-urban-butler-data";

type WhyFeatureItemProps = {
  feature: WhyUrbanButlerFeature;
};

export function WhyFeatureItem({ feature }: WhyFeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <HugeiconsIcon
        icon={feature.icon}
        size={64}
        strokeWidth={1.25}
        className="text-primary"
      />

      <h3 className="mt-5 text-sm font-semibold uppercase text-[#1D1D1D] tracking-tight sm:text-base">
        {feature.title}
      </h3>

      <p className="mt-1 max-w-[188px] tracking-tight leading-tight text-[#545454] font-medium sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}
