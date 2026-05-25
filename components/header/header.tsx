"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { hasDropdown, isLinkActive, navLinks } from "./nav-links";
import { MobileNav } from "./mobile-nav";
import { NavDropdownLink } from "./nav-dropdown-link";
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
            className="h-8 w-auto lg:h-11 2xl:h-16"
          />
        </Link>

        <nav className="hidden 3xl:items-end gap-7 3xl:h-16 lg:flex">
          {navLinks.map((link) =>
            hasDropdown(link) ? (
              <NavDropdownLink key={link.href} pathname={pathname} />
            ) : (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(pathname, link.href)}
              />
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-auto rounded-sm px-5 py-3 font-semibold uppercase lg:inline-flex"
          >
            <Link href="mailto:Hello@urbanbutlerconcierge.com">Get Started</Link>
          </Button>

          <MobileNav pathname={pathname} />
        </div>
      </div>
    </header>
  );
};

export default Header;
