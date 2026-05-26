import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
};

export function NavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center gap-1 2xl:gap-2 3xl:gap-4 text-xs md:text-sm font-medium uppercase tracking-none transition-colors 2xl:text-base",
        isActive ? "text-primary" : "text-[#2D2D2D] hover:text-primary/80",
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "h-0.5 w-full bg-primary transition-opacity",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
        )}
      />
    </Link>
  );
}
