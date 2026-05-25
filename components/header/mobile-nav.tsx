"use client";

import Link from "next/link";
import { Menu01Icon } from "@hugeicons/core-free-icons";
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

import {
  forBuildingsDropdownLinks,
  hasDropdown,
  isLinkActive,
  navLinks,
} from "./nav-links";
import { MobileNavLink } from "./mobile-nav-link";

type MobileNavProps = {
  pathname: string;
};

export function MobileNav({ pathname }: MobileNavProps) {
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
          {navLinks.flatMap((link) =>
            hasDropdown(link)
              ? forBuildingsDropdownLinks.map((dropdownLink) => (
                  <MobileNavLink
                    key={dropdownLink.href}
                    href={dropdownLink.href}
                    label={dropdownLink.label}
                    isActive={isLinkActive(pathname, dropdownLink.href)}
                  />
                ))
              : [
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    isActive={isLinkActive(pathname, link.href)}
                  />,
                ],
          )}
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
