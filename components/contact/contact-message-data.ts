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
    detail: "212-4709071",
    href: "tel:+12124709071",
  },
  {
    label: "Email Us",
    detail: "hello@urbanbutlerconcierge.com",
    href: "mailto:hello@urbanbutlerconcierge.com",
  },
  {
    label: "WhatsApp",
    detail: "Message us directly. Quick. Easy. Confidential.",
    href: "https://wa.me/12124709071",
  },
  {
    label: "Office",
    detail: "Urban Butler Headquarters\nNew York, NY",
    subdetail: "By appointment only",
  },
] as const;

export type ContactInfoItem = (typeof contactInfoItems)[number];
