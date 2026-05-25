import { HugeiconsIcon } from "@hugeicons/react";

import type { ForBuildingsAmenityFeature } from "./for-buildings-amenity-data";

type ForBuildingsAmenityItemProps = {
  feature: ForBuildingsAmenityFeature;
};

export function ForBuildingsAmenityItem({
  feature,
}: ForBuildingsAmenityItemProps) {
  return (
    <div className="flex flex-col items-center text-center w-full min-w-[200px]">
      <HugeiconsIcon
        icon={feature.icon}
        size={80}
        strokeWidth={1}
        className="text-primary"
      />

      <h3 className="mt-4 text-xs font-bold uppercase text-primary sm:text-sm xl:text-base">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}
