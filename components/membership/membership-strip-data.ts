export const membershipStripItems = [
  {
    icon: "/membership/availability-icon.svg",
    title: "24/7 Availability",
    description: "Day or Night, we're here.",
  },
  {
    icon: "/membership/discreet-secure-icon.svg",
    title: "Discreet & Secure",
    description: "Your privacy is our priority.",
  },
  {
    icon: "/membership/curated-excellence-icon.svg",
    title: "Curated Excellence",
    description: "Only the best, always.",
  },
  {
    icon: "/membership/personal-concierge-icon.svg",
    title: "Personal Concierge",
    description: "A dedicated expert, just for you.",
  },
] as const;

export type MembershipStripItem = (typeof membershipStripItems)[number];
