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

      <h3 className="mt-5 text-sm font-semibold uppercase text-primary sm:text-base">
        {feature.title}
      </h3>

      <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}
