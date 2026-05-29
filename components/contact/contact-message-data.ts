export const contactInterestOptions = [
  "Personal Concierge / Membership",
  "Services",
  "For Buildings",
  "For Hotels",
  "For Providers",
  "For Corporations",
  "General Inquiry",
] as const;

export const contactInfoItems = [
  {
    label: "Call Us",
    icon: "/contact/1.svg",
    detail: "212-4709071",
    href: "tel:+12124709071",
  },
  {
    label: "Email Us",
    icon: "/contact/2.svg",
    detail: "hello@urbanbutlerconcierge.com",
    href: "mailto:hello@urbanbutlerconcierge.com",
  },
  {
    label: "WhatsApp",
    icon: "/contact/3.svg",
    detail: "Message us directly. Quick. Easy. Confidential.",
    href: "https://wa.me/12124709071",
  },
  {
    label: "Office",
    icon: "/contact/4.svg",
    detail: "Urban Butler Headquarters New York, NY",
    subdetail: "By appointment only",
  },
] as const;

export type ContactInfoItem = (typeof contactInfoItems)[number];
