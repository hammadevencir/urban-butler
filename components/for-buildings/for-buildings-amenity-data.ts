import {
  Clock01Icon,
  Diamond01Icon,
  SecurityCheckIcon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/react";

export const forBuildingsAmenityFeatures = [
  {
    icon: Clock01Icon,
    title: "Delight Residents",
    description:
      "Deliver exceptional, on-demand service that enhances satisfaction and loyalty.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Increase Retention",
    description:
      "Happy residents stay longer. Elevated experiences lead to stronger renewals.",
  },
  {
    icon: Diamond01Icon,
    title: "Differentiate Your Brand",
    description:
      "Stand out in a competitive market with a premium concierge offering.",
  },
  {
    icon: UserCircleIcon,
    title: "Zero Operational Burden",
    description:
      "We handle everything—so your team doesn't have to add headcount or complexity.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgObject;
  title: string;
  description: string;
}>;

export type ForBuildingsAmenityFeature =
  (typeof forBuildingsAmenityFeatures)[number];
