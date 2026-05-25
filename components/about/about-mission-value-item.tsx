import { HugeiconsIcon } from "@hugeicons/react";

import type { AboutMissionValue } from "./about-mission-data";

type AboutMissionValueItemProps = {
  value: AboutMissionValue;
};

export function AboutMissionValueItem({ value }: AboutMissionValueItemProps) {
  return (
    <div className="flex items-start gap-3">
      <HugeiconsIcon
        icon={value.icon}
        size={40}
        strokeWidth={1.25}
        className="shrink-0 text-primary"
      />

      <div>
        <p className="text-xs font-bold uppercase text-primary sm:text-sm">
          {value.title}
        </p>
        <p className="mt-1 text-xs font-medium tracking-tight text-[#545454] sm:text-sm">
          {value.description}
        </p>
      </div>
    </div>
  );
}
