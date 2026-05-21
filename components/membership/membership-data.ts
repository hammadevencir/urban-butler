export const membershipPlans = [
  {
    number: 1,
    name: "Access",
    description: "Essential Support, on demand.",
    features: [
      "Housekeeping",
      "Laundry/Dry Cleaning/Tailor",
      "Restaurant & Events Reservations",
      "Private Transportation",
      "Flowers & Gifts",
      "Furniture Assembly",
    ],
    price: 0,
    highlighted: false,
  },
  {
    number: 2,
    name: "Preferred",
    description: "Elevated responsiveness and priority.",
    features: [
      "Babysitting",
      "Wellness & Beauty",
      "Moving Services",
      "Pet Care",
      "Shoe & Bag Repair",
      "Home Organization & Closet Styling",
      "Returns & Shipping Service",
    ],
    price: 59,
    highlighted: true,
    badge: "Most Popular",
  },
  {
    number: 3,
    name: "Dedicated",
    description: "Full lifestyle management, personalized to you.",
    features: [
      "Personal Shopping",
      "Travel Planning (Domestic & International)",
      "Event Planning & Catering/Private Chef & Bartender",
      "Members Only Events",
      "Doctors Appointment",
      "Vehicle Care Services",
      "Restaurant Access/Last Minute Requests",
    ],
    price: 99,
    highlighted: false,
  },
] as const;

export type MembershipPlan = (typeof membershipPlans)[number];
