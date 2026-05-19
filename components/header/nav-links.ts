export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "FOR BUILDINGS", href: "/for-buildings", hasDropdown: true },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

export type NavLinkItem = (typeof navLinks)[number];

export function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function hasDropdown(link: NavLinkItem) {
  return "hasDropdown" in link && link.hasDropdown;
}
