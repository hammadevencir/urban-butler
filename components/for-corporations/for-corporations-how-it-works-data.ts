export const forCorporationsHowItWorksSteps = [
  {
    step: 1,
    title: "Your Employees Request",
    description: "Employees submit requests through our app.",
    image: "/for-corporations/1.png",
  },
  {
    step: 2,
    title: "We Take Care of It",
    description:
      "Your dedicated concierge manages every detail with our trusted network.",
    image: "/for-corporations/2.png",
  },
  {
    step: 3,
    title: "It Gets Done",
    description:
      "We coordinate, confirm, and ensure everything is completed to perfection.",
    image: "/for-corporations/3.png",
  },
  {
    step: 4,
    title: "Employees Save Time",
    description:
      "More time for what matters most—work, life, and everything in between.",
    image: "/for-corporations/4.png",
  },
] as const;

export const forCorporationsHowItWorksTestimonial = {
  quote:
    "Urban Butler has been a game changer for our team. It's a benefit that our employees genuinely use and love.",
  role: "Chief People Officer",
  attribution: "Leading Investment Firm",
} as const;

export type ForCorporationsHowItWorksStep =
  (typeof forCorporationsHowItWorksSteps)[number];
