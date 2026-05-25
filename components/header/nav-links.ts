export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "FOR BUILDINGS", href: "/for-buildings", hasDropdown: true },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const forBuildingsDropdownLinks = [
  { label: "FOR BUILDINGS", href: "/for-buildings" },
  { label: "FOR HOTELS", href: "/for-hotels" },
  { label: "FOR PROVIDERS", href: "/for-providers" },
  { label: "FOR CORPORATIONS", href: "/for-corporations" },
] as const;

export type NavLinkItem = (typeof navLinks)[number];
export type ForBuildingsDropdownLink = (typeof forBuildingsDropdownLinks)[number];

export function isLinkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function hasDropdown(link: NavLinkItem) {
  return "hasDropdown" in link && link.hasDropdown;
}

export function isForBuildingsDropdownActive(pathname: string) {
  return forBuildingsDropdownLinks.some((link) => isLinkActive(pathname, link.href));
}

export function getForBuildingsDropdownLabel(pathname: string) {
  const match = forBuildingsDropdownLinks.find((link) =>
    isLinkActive(pathname, link.href),
  );

  return match?.label ?? "FOR BUILDINGS";
}
