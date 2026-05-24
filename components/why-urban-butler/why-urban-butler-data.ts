import {
  CallRinging01Icon,
  ClockCheckIcon,
  CustomerServiceIcon,
  SecurityCheckIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgObject } from "@hugeicons/react";

export const whyUrbanButlerFeatures = [
  {
    icon: ClockCheckIcon,
    title: "Time Back",
    description: "Reclaim hours every week.",
  },
  {
    icon: UserGroupIcon,
    title: "Trusted Network",
    description: "Vetted experts. Exceptional results.",
  },
  {
    icon: SecurityCheckIcon,
    title: "Discreet & Reliable",
    description: "Your privacy is our priority.",
  },
  {
    icon: CustomerServiceIcon,
    title: "Available 24/7",
    description: "Day or night we're here.",
  },
] as const satisfies ReadonlyArray<{
  icon: IconSvgObject;
  title: string;
  description: string;
}>;

export type WhyUrbanButlerFeature =
  (typeof whyUrbanButlerFeatures)[number];
