"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { footerLinks, isFooterLinkActive } from "./footer-links";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="border-t border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between xl:max-w-[1820px] xl:px-16 xl:py-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Urban Butler"
            width={271}
            height={64}
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:justify-end lg:gap-x-8 xl:gap-x-10">
          {footerLinks.map((link) => {
            const isActive = isFooterLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive
                    ? "font-medium text-primary"
                    : "text-[#2D2D2D] hover:text-primary/80",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
