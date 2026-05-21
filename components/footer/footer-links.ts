export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "For Buildings", href: "/for-buildings" },
  { label: "For Hotels", href: "/for-hotels" },
  { label: "For Providers", href: "/for-providers" },
  { label: "For Corporations", href: "/for-corporations" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export type FooterLinkItem = (typeof footerLinks)[number];

export function isFooterLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
