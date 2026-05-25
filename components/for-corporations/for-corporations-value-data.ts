import {
  Award01Icon,
  ChartIncreaseIcon,
  FavouriteIcon,
  StarIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/react";

export const forCorporationsValueFeatures = [
  {
    icon: UserGroupIcon,
    title: "Improve Retention",
    description:
      "Employees feel valued when their time and well-being are prioritized.",
  },
  {
    icon: StarIcon,
    title: "Increase Productivity",
    description:
      "Less time on errands and planning means more focus at work.",
  },
  {
    icon: FavouriteIcon,
    title: "Enhance Well-Being",
    description:
      "Reduce stress and simplify life with trusted help for everyday needs.",
  },
  {
    icon: Award01Icon,
    title: "Attract Top Talent",
    description:
      "Stand out with a modern, premium benefit that today's professionals value.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Save Time & Resources",
    description:
      "No need to build or manage multiple vendor relationships—we handle it all.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgObject;
  title: string;
  description: string;
}>;

export type ForCorporationsValueFeature =
  (typeof forCorporationsValueFeatures)[number];
