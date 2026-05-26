export const forCorporationsServicesCategories = [
  {
    title: "Home",
    icon: "/services/home-icon.svg",
    image: "/services/1.png",
    services: [
      "Housekeeping",
      "Laundry & Dry Cleaning",
      "Moving Services",
      "Closet Organization",
    ],
  },
  {
    title: "Personal",
    icon: "/services/personal-icon.svg",
    image: "/services/7.png",
    services: [
      "Babysitting",
      "Pet Care",
      "Personal Shopping",
      "Flowers & Gifts",
    ],
  },
  {
    title: "Experiences",
    icon: "/services/experiences-icon.svg",
    image: "/services/11.png",
    services: [
      "Restaurant Reservations",
      "Event Tickets & Access",
      "Private Chef & Catering",
      "Member Events",
    ],
  },
  {
    title: "Wellness",
    icon: "/services/wellness-icon.svg",
    image: "/services/14.png",
    services: [
      "Beauty & Spa Services",
      "Personal Training",
      "Yoga & Fitness Classes",
      "Doctor Appointments",
    ],
  },
  {
    title: "Travel",
    icon: "/services/travel-icon.svg",
    image: "/services/16.png",
    services: [
      "Travel Planning",
      "Private Transportation",
      "Airport Services",
      "Hotel Bookings",
    ],
  },
] as const;

export type ForCorporationsServicesCategory =
  (typeof forCorporationsServicesCategories)[number];
