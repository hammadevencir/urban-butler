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

export const forBuildingsResidentAppCategories = [
  { label: "Home", icon: "/services/home-icon.svg" },
  { label: "Personal", icon: "/services/personal-icon.svg" },
  { label: "Experiences", icon: "/services/experiences-icon.svg" },
  { label: "Wellness", icon: "/services/wellness-icon.svg" },
  { label: "Travel", icon: "/services/travel-icon.svg" },
  { label: "Business", icon: "/services/person-icon.svg" },
  { label: "Gifts & More", icon: "/services/star-icon.svg" },
] as const;

export const forBuildingsIntegrationTestimonial = {
  quote:
    "Urban Butler has become one of the most valued amenities in our building. Our residents love the convenience, and we love the impact it has on retention.",
  role: "Property Manager",
  attribution: "Luxury High-Rise | Manhattan",
} as const;

export type ForBuildingsIntegrationStep =
  (typeof forBuildingsIntegrationSteps)[number];
