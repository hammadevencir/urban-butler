import Image from "next/image";

import type { MembershipStripItem } from "./membership-strip-data";

type MembershipStripItemCardProps = {
  item: MembershipStripItem;
};

export function MembershipStripItemCard({ item }: MembershipStripItemCardProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={item.icon}
        alt=""
        width={40}
        height={40}
        aria-hidden
        className="shrink-0"
      />

      <div>
        <p className="text-xs font-semibold uppercase text-primary sm:text-sm">
          {item.title}
        </p>
        <p className="mt-1 text-xs text-primary/75 sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}
