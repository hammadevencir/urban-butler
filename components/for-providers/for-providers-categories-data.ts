export const forProvidersCategories = [
  {
    title: "Private Chef",
    image: "/services/12.png",
  },
  {
    title: "Household Staff",
    image: "/services/1.png",
  },
  {
    title: "Transportation",
    image: "/services/17.png",
  },
  {
    title: "Wellness",
    image: "/services/14.png",
  },
  {
    title: "Personal Shopping",
    image: "/services/9.png",
  },
  {
    title: "Events",
    image: "/services/11.png",
  },
  {
    title: "Home Services",
    image: "/services/8.png",
  },
  {
    title: "Pet Care",
    image: "/services/7.png",
  },
  {
    title: "& More",
    isMore: true,
  },
] as const satisfies ReadonlyArray<{
  title: string;
  image?: string;
  isMore?: boolean;
}>;

export type ForProvidersCategory = (typeof forProvidersCategories)[number];
