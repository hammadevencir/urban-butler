import Image from "next/image";

import type { ForBuildingsAmenityFeature } from "./for-buildings-amenity-data";

type ForBuildingsAmenityItemProps = {
  feature: ForBuildingsAmenityFeature;
};

export function ForBuildingsAmenityItem({
  feature,
}: ForBuildingsAmenityItemProps) {
  return (
    <div className="flex w-full min-w-0 flex-col items-center text-center">
      <Image
        src={feature.icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className="shrink-0"
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
