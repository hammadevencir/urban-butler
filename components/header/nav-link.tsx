import Link from "next/link";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  hasDropdown?: boolean;
  isActive: boolean;
};

export function NavLink({
  href,
  label,
  hasDropdown,
  isActive,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-none transition-colors xl:text-base",
        isActive ? "text-primary" : "text-[#2D2D2D] hover:text-primary/80",
      )}
    >
      <span className="inline-flex items-center gap-1">
        {label}
        {hasDropdown ? (
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={12}
            strokeWidth={2}
            className="opacity-70"
          />
        ) : null}
      </span>
      <span
        className={cn(
          "h-px w-full bg-primary transition-opacity",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
        )}
      />
    </Link>
  );
}
