export type ServiceCatalogItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export type ServiceCatalogCategory = {
  slug: string;
  title: string;
  icon: string;
  columns: 2 | 3 | 5;
  items: ServiceCatalogItem[];
};

export const serviceCatalogCategories: ServiceCatalogCategory[] = [
  {
    slug: "home",
    title: "Home",
    icon: "/services/home-icon.svg",
    columns: 5,
    items: [
      {
        slug: "housekeeping",
        title: "Housekeeping",
        description:
          "Impeccable home cleaning services tailored to your schedule.",
        image: "/services/items/housekeeping.png",
      },
      {
        slug: "laundry-dry-tailor",
        title: "Laundry / Dry / Tailor",
        description: "Professional laundry, dry cleaning and tailoring.",
        image: "/services/items/laundry-dry-tailor.png",
      },
      {
        slug: "furniture-assembly",
        title: "Furniture Assembly",
        description:
          "Professional assembly of all types of furniture, quickly and efficiently.",
        image: "/services/items/furniture-assembly.png",
      },
      {
        slug: "moving-services",
        title: "Moving Services",
        description: "Seamless moving experience with trusted professionals.",
        image: "/services/items/moving-services.png",
      },
      {
        slug: "home-organization",
        title: "Home Organization",
        description:
          "Organized spaces, styled closets, and calm, functional homes.",
        image: "/services/items/home-organization.png",
      },
    ],
  },
  {
    slug: "personal",
    title: "Personal",
    icon: "/services/personal-icon.svg",
    columns: 5,
    items: [
      {
        slug: "babysitting",
        title: "Babysitting",
        description: "Trusted, experienced caregivers for your children.",
        image: "/services/items/babysitting.png",
      },
      {
        slug: "pet-care",
        title: "Pet Care",
        description:
          "Dog walking, grooming, pet sitting and spa services you can trust.",
        image: "/services/items/pet-care.png",
      },
      {
        slug: "shoe-bag-repair",
        title: "Shoe & Bag Repair",
        description:
          "Expert repair and restoration to keep your items looking like new.",
        image: "/services/items/shoe-bag-repair.png",
      },
      {
        slug: "personal-shopping",
        title: "Personal Shopping",
        description:
          "Personalized shopping services to find exactly what you need.",
        image: "/services/items/personal-shopping.png",
      },
      {
        slug: "flowers-gifts",
        title: "Flowers & Gifts",
        description:
          "Beautiful arrangements and thoughtful gifts for any occasion.",
        image: "/services/items/flowers-gifts.png",
      },
    ],
  },
  {
    slug: "experiences",
    title: "Experiences",
    icon: "/services/experiences-icon.svg",
    columns: 3,
    items: [
      {
        slug: "restaurant-events-reservation",
        title: "Restaurant & Events Reservation",
        description:
          "Exclusive access to top restaurants and events. We get you the best table.",
        image: "/services/items/restaurant-events-reservation.png",
      },
      {
        slug: "event-planning-catering",
        title: "Event Planning & Catering/Private Chef",
        description: "Exquisite dining experiences and flawless event planning.",
        image: "/services/items/event-planning-catering.png",
      },
      {
        slug: "members-only-events",
        title: "Members Only Events",
        description:
          "Exclusive access to private events and unique member experiences.",
        image: "/services/items/members-only-events.png",
      },
    ],
  },
  {
    slug: "wellness",
    title: "Wellness",
    icon: "/services/wellness-icon.svg",
    columns: 2,
    items: [
      {
        slug: "wellness-beauty",
        title: "Wellness & Beauty",
        description:
          "At-home beauty services, personal trainers, yoga and fitness classes.",
        image: "/services/items/wellness-beauty.png",
      },
      {
        slug: "doctors-appointment",
        title: "Doctors Appointment",
        description:
          "We schedule and manage your medical appointments with ease.",
        image: "/services/items/doctors-appointment.png",
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    icon: "/services/travel-icon.svg",
    columns: 3,
    items: [
      {
        slug: "travel-planning",
        title: "Travel Planning",
        description: "Custom travel planning and bookings.",
        image: "/services/items/travel-planning.png",
      },
      {
        slug: "transportation",
        title: "Transportation",
        description: "Private transportation services for any occasion.",
        image: "/services/items/transportation.png",
      },
      {
        slug: "vehicle-care",
        title: "Vehicle Care",
        description: "Car wash, detailing, and maintenance.",
        image: "/services/items/vehicle-care.png",
      },
    ],
  },
];

export const serviceCatalogPrimaryCategories =
  serviceCatalogCategories.filter(
    (category) => category.slug !== "wellness" && category.slug !== "travel",
  );

export const serviceCatalogWellnessCategory = serviceCatalogCategories.find(
  (category) => category.slug === "wellness",
)!;

export const serviceCatalogTravelCategory = serviceCatalogCategories.find(
  (category) => category.slug === "travel",
)!;
