export const aboutMissionValues = [
  {
    icon: "/about/1.svg",
    title: "Your Time Is Precious",
    description: "We protect it by taking everything off your plate.",
  },
  {
    icon: "/about/2.svg",
    title: "Discretion Is Our Standard",
    description:
      "Your privacy is protected with the highest level of confidentiality.",
  },
  {
    icon: "/about/3.svg",
    title: "Quality Is Non-Negotiable",
    description: "We deliver only the best—every single time.",
  },
  {
    icon: "/about/4.svg",
    title: "Human, Personal, Reliable",
    description: "Real people. Real relationships. Always here for you.",
  },
  {
    icon: "/about/5.svg",
    title: "Globally Connected",
    description: "Local expertise. Global access. Anywhere, anytime.",
  },
] as const;

export type AboutMissionValue = (typeof aboutMissionValues)[number];
