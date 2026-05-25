import {
  Clock01Icon,
  Diamond01Icon,
  GlobeIcon,
  SecurityCheckIcon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export const aboutMissionValues = [
  {
    icon: Clock01Icon,
    title: "Your Time Is Precious",
    description: "We protect it by taking everything off your plate.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Discretion Is Our Standard",
    description:
      "Your privacy is protected with the highest level of confidentiality.",
  },
  {
    icon: Diamond01Icon,
    title: "Quality Is Non-Negotiable",
    description: "We deliver only the best—every single time.",
  },
  {
    icon: UserCircleIcon,
    title: "Human, Personal, Reliable",
    description: "Real people. Real relationships. Always here for you.",
  },
  {
    icon: GlobeIcon,
    title: "Globally Connected",
    description: "Local expertise. Global access. Anywhere, anytime.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgElement;
  title: string;
  description: string;
}>;

export type AboutMissionValue = (typeof aboutMissionValues)[number];
