export const howItWorksSteps = [
  {
    step: 1,
    title: "Request",
    description: "Submit anything in second.",
  },
  {
    step: 2,
    title: "We Handle It",
    description: "Your concierge manages every detail.",
  },
  {
    step: 3,
    title: "Done",
    description: "Executed exactly as expected.",
  },
] as const;

export type HowItWorksStepItem = (typeof howItWorksSteps)[number];
