import Link from "next/link";

import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type MobileNavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function MobileNavLink({
  href,
  label,
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
        {label}
      </Link>
    </SheetClose>
  );
}
