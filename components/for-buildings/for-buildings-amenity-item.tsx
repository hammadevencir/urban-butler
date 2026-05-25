import { HugeiconsIcon } from "@hugeicons/react";

import type { ForBuildingsAmenityFeature } from "./for-buildings-amenity-data";

type ForBuildingsAmenityItemProps = {
  feature: ForBuildingsAmenityFeature;
};

export function ForBuildingsAmenityItem({
  feature,
}: ForBuildingsAmenityItemProps) {
  return (
    <div className="flex flex-col">
      <HugeiconsIcon
        icon={feature.icon}
        size={48}
        strokeWidth={1.25}
        className="text-primary"
      />

      <h3 className="mt-4 text-xs font-bold uppercase text-primary sm:text-sm">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}
