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
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-5 sm:px-10 lg:flex-row lg:items-center lg:justify-between xl:max-w-[1820px] xl:px-8 xl:py-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Urban Butler"
            width={212}
            height={56}
            className="h-8 w-auto lg:h-14"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 justify-center xl:justify-end lg:gap-x-6 xl:gap-x-7">
          {footerLinks.map((link) => {
            const isActive = isFooterLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs xl:text-sm 2xl:text-base transition-colors",
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
        <div className="w-33 h-10 hidden 3xl:block"></div>
      </div>
    </footer>
  );
};

export default Footer;
