"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { hasDropdown, isLinkActive, navLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";

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
              hasDropdown={hasDropdown(link)}
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
