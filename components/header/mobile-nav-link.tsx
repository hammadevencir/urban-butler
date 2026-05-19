import Link from "next/link";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type MobileNavLinkProps = {
  href: string;
  label: string;
  hasDropdown?: boolean;
  isActive: boolean;
};

export function MobileNavLink({
  href,
  label,
  hasDropdown,
  isActive,
}: MobileNavLinkProps) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "flex items-center justify-between border-b border-[#E8E0D8]/60 py-4 text-sm font-medium uppercase tracking-[0.12em] transition-colors",
          isActive ? "text-primary" : "text-[#2D2D2D] hover:text-primary/80",
        )}
      >
        <span className="inline-flex items-center gap-1.5">
          {label}
          {hasDropdown ? (
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={14}
              strokeWidth={2}
              className="opacity-70"
            />
          ) : null}
        </span>
      </Link>
    </SheetClose>
  );
}
