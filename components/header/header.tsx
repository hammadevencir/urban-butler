"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "FOR BUILDINGS", href: "/for-buildings", hasDropdown: true },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

function NavLink({
  href,
  label,
  hasDropdown,
  isActive,
}: {
  href: string;
  label: string;
  hasDropdown?: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
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

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#E8E0D8]/60 bg-[#FDF8F4]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Urban Butler Private Concierge"
            width={220}
            height={48}
            priority
            className="h-10 w-auto lg:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              hasDropdown={"hasDropdown" in link ? link.hasDropdown : false}
              isActive={
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              }
            />
          ))}
        </nav>

        <Button
          asChild
          className="h-auto rounded-sm px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em]"
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
