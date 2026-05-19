export const services = [
  {
    title: "Home",
    description: "Effortless living, maintained to perfection.",
    image: "/services/home.png",
    icon: "/services/home-icon.svg",
  },
  {
    title: "Personal",
    description: "Your day-to-day, Beautifully managed.",
    image: "/services/personal.png",
    icon: "/services/personal-icon.svg",
  },
  {
    title: "Experiences",
    description: "Access to the best of the city and beyond.",
    image: "/services/experiences.png",
    icon: "/services/experiences-icon.svg",
  },
  {
    title: "Wellness",
    description: "Your well-being, prioritized and protected.",
    image: "/services/wellness.png",
    icon: "/services/wellness-icon.svg",
  },
  {
    title: "Travel",
    description: "Every trip, flawlessly planned and executed.",
    image: "/services/travel.png",
    icon: "/services/travel-icon.svg",
  },
] as const;

export type ServiceItem = (typeof services)[number];
