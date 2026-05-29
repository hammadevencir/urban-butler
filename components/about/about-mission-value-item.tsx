import Image from "next/image";

import type { AboutMissionValue } from "./about-mission-data";

type AboutMissionValueItemProps = {
  value: AboutMissionValue;
};

export function AboutMissionValueItem({ value }: AboutMissionValueItemProps) {
  return (
    <div className="flex items-start gap-2">
      <Image
        src={value.icon}
        alt=""
        width={80}
        height={80}
        aria-hidden
        className="shrink-0 size-14 2xl:size-20"
      />

      <div>
        <p className="text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-base">
          {value.title}
        </p>
        <p className="mt-1 text-xs font-medium tracking-tight text-[#545454] sm:text-sm 2xl:text-base">
          {value.description}
        </p>
      </div>
    </div>
  );
}
