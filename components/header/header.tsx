"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "FOR BUILDINGS", href: "/for-buildings", hasDropdown: true },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

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

function MobileNavLink({
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

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={22} strokeWidth={2} />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-[#E8E0D8]/60 bg-[#FDF8F4] sm:max-w-sm"
      >
        <SheetHeader className="border-b border-[#E8E0D8]/60 pb-4">
          <SheetTitle className="text-left font-manrope text-sm font-semibold uppercase tracking-[0.12em] text-[#2D2D2D]">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-1 flex-col px-4">
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              hasDropdown={"hasDropdown" in link ? link.hasDropdown : false}
              isActive={isLinkActive(pathname, link.href)}
            />
          ))}
        </nav>

        <SheetFooter className="border-t border-[#E8E0D8]/60 pt-4">
          <SheetClose asChild>
            <Button
              asChild
              className="h-auto w-full rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4 lg:px-10 xl:max-w-[1820px]">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Urban Butler Private Concierge"
            width={271}
            height={64}
            priority
            className="h-8 w-auto lg:h-11 xl:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              hasDropdown={"hasDropdown" in link ? link.hasDropdown : false}
              isActive={isLinkActive(pathname, link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-auto rounded-sm px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] lg:inline-flex"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>

          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
};

export default Header;
