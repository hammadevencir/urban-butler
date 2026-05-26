import Image from "next/image";

import type { MembershipStripItem } from "./membership-strip-data";

type MembershipStripItemCardProps = {
  item: MembershipStripItem;
};

export function MembershipStripItemCard({ item }: MembershipStripItemCardProps) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src={item.icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className="shrink-0"
      />

      <div>
        <p className="text-xs font-bold uppercase text-primary sm:text-sm xl:text-base">
          {item.title}
        </p>
        <p className="mt-1 text-xs text-[#545454] sm:text-sm xl:text-base font-medium">
          {item.description}
        </p>
      </div>
    </div>
  );
}
