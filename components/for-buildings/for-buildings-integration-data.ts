export const forBuildingsIntegrationSteps = [
  {
    number: 1,
    title: "We Integrate",
    description:
      "Seamlessly branded for your building and easy for your residents.",
  },
  {
    number: 2,
    title: "Residents Enjoy",
    description: "They request. We handle the rest. Every detail.",
  },
  {
    number: 3,
    title: "You Elevate",
    description:
      "Stronger satisfaction, higher retention, and a more valuable asset.",
  },
] as const;

export const forBuildingsIntegrationFeatures = [
  "Custom-Branded Resident App",
  "Onboarding & Communication Support",
  "Dedicated Account Management",
  "Data Insights & Resident Satisfaction Reporting",
] as const;

export const forBuildingsIntegrationTestimonial = {
  quote:
    "Urban Butler has become one of the most valued amenities in our building. Our residents love the convenience, and we love the impact it has on retention.",
  role: "Property Manager",
  attribution: "Luxury High-Rise | Manhattan",
} as const;

export type ForBuildingsIntegrationStep =
  (typeof forBuildingsIntegrationSteps)[number];
