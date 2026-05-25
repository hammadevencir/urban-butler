export const forProvidersHowItWorksSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Tell us about your business and the services you provide.",
  },
  {
    step: "02",
    title: "Get Approved",
    description:
      "Our team reviews your application to ensure the perfect fit.",
  },
  {
    step: "03",
    title: "Get Matched",
    description: "We connect you with clients who need your expertise.",
  },
  {
    step: "04",
    title: "Deliver & Grow",
    description:
      "Provide exceptional service and grow with a network that values you.",
  },
] as const;

export type ForProvidersHowItWorksStep =
  (typeof forProvidersHowItWorksSteps)[number];
