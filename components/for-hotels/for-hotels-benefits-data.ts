import {
  ChartIncreaseIcon,
  Diamond01Icon,
  SecurityCheckIcon,
  ServingFoodIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/react";

export const forHotelsBenefitsFeatures = [
  {
    icon: ServingFoodIcon,
    title: "Enhance Guest Satisfaction",
    description:
      "Deliver seamless, on-demand service that exceeds expectations and earns 5-star reviews.",
  },
  {
    icon: Diamond01Icon,
    title: "Differentiate Your Brand",
    description:
      "Offer a modern, premium amenity that sets your hotel apart from the competition.",
  },
  {
    icon: UserGroupIcon,
    title: "Increase Loyalty",
    description:
      "Happy guests return. Urban Butler helps you build lasting relationships.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Drive Additional Revenue",
    description:
      "From experiences to local arrangements, we help unlock new ancillary revenue.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Zero Operational Burden",
    description:
      "We handle everything 24/7. No staffing, no training, no overhead.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgObject;
  title: string;
  description: string;
}>;

export type ForHotelsBenefitsFeature =
  (typeof forHotelsBenefitsFeatures)[number];
