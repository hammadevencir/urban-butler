"use client";

import Link from "next/link";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

import {
  forBuildingsDropdownLinks,
  getForBuildingsDropdownLabel,
  isForBuildingsDropdownActive,
  isLinkActive,
} from "./nav-links";

type NavDropdownLinkProps = {
  pathname: string;
};

export function NavDropdownLink({ pathname }: NavDropdownLinkProps) {
  const isActive = isForBuildingsDropdownActive(pathname);
  const selectedLabel = getForBuildingsDropdownLabel(pathname);

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button
          type="button"
          className={cn(
            "group flex flex-col items-center gap-1 2xl:gap-2 3xl:gap-4 text-xs md:text-sm font-medium uppercase tracking-none transition-colors 2xl:text-base",
            isActive ? "text-primary" : "text-[#2D2D2D] hover:text-primary/80",
          )}
        >
          <span className="inline-flex items-center gap-1">
            {selectedLabel}
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              size={20}
              strokeWidth={2}
              className="opacity-70"
            />
          </span>
          <span
            className={cn(
              "h-px w-full bg-primary transition-opacity",
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
            )}
          />
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align="start"
          sideOffset={12}
          className="z-50 min-w-[179px] max-w-[179px] overflow-hidden rounded-b-lg border border-[#E1D2BF] bg-white py-2 shadow-lg data-[side=bottom]:animate-in data-[side=bottom]:fade-in-0 data-[side=bottom]:slide-in-from-top-2"
        >
          {forBuildingsDropdownLinks.map((link) => {
            const isSelected = isLinkActive(pathname, link.href);

            return (
              <DropdownMenuPrimitive.Item key={link.href} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-1.5 font-semibold tracking-tight uppercase outline-none transition-colors 2xl:text-base",
                    isSelected
                      ? "bg-[#F3EBE0] text-primary"
                      : "text-[#545454] hover:bg-[#F3EBE0]/60 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
