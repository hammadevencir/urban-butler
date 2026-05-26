export const forBuildingsAmenityFeatures = [
  {
    icon: "/membership/availability-icon.svg",
    title: "Delight Residents",
    description:
      "Deliver exceptional, on-demand service that enhances satisfaction and loyalty.",
  },
  {
    icon: "/membership/discreet-secure-icon.svg",
    title: "Increase Retention",
    description:
      "Happy residents stay longer. Elevated experiences lead to stronger renewals.",
  },
  {
    icon: "/membership/diamond.svg",
    title: "Differentiate Your Brand",
    description:
      "Stand out in a competitive market with a premium concierge offering.",
  },
  {
    icon: "/membership/person.svg",
    title: "Zero Operational Burden",
    description:
      "We handle everything—so your team doesn't have to add headcount or complexity.",
  },
] as const;

export type ForBuildingsAmenityFeature =
  (typeof forBuildingsAmenityFeatures)[number];
