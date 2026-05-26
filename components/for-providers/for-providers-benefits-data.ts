import {
  Calendar01Icon,
  CustomerServiceIcon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export const forProvidersBenefitsFeatures = [
  {
    icon: UserCircleIcon,
    title: "Premium Clientele",
    description:
      "Access high-net-worth individuals who value quality and discretion.",
  },
  {
    icon: Calendar01Icon,
    title: "Consistent Demand",
    description:
      "Receive regular requests for your services tailored to your expertise.",
  },
  {
    icon: "/for-hotels/shield.svg",
    title: "Reliable Payments",
    description: "We handle payments promptly and securely—every time.",
  },
  {
    icon: "/membership/diamond.svg",
    title: "Long-Term Partnerships",
    description: "Build lasting relationships and grow your business with us.",
  },
  {
    icon: CustomerServiceIcon,
    title: "Dedicated Support",
    description: "Our team is here to support you every step of the way.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgElement | string;
  title: string;
  description: string;
}>;

export type ForProvidersBenefitsFeature =
  (typeof forProvidersBenefitsFeatures)[number];
