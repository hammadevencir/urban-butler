import Image from "next/image";

const features = [
  {
    icon: "/tick-circle.svg",
    title: "No Follow-Ups",
    description: "We handle every detail.",
  },
  {
    icon: "/calendar.svg",
    title: "No Scheduling",
    description: "We coordinate everything.",
  },
  {
    icon: "/no-stress-emoji.svg",
    title: "No Stress",
    description: "We anticipate your needs",
  },
  {
    icon: "/clock.svg",
    title: "Just Results",
    description: "Deliver exactly as expected",
  },
] as const;

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 xl:gap-5">
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className="shrink-0"
      />
      <div>
        <p className="text-sm font-semibold uppercase text-primary xl:text-base">
          {title}
        </p>
        <p className="mt-1 text-sm text-[#4A4A4A] xl:text-base">{description}</p>
      </div>
    </div>
  );
}

const TimePreciousSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)_minmax(0,1fr)] lg:gap-8 lg:py-11.25 xl:max-w-[1820px] xl:grid-cols-[minmax(0,1fr)_360px_minmax(0,1fr)] xl:gap-12 xl:px-16">
        <div className="max-w-lg lg:max-w-none">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
            Your Time Is Precious
          </p>

          <h2 className="mt-4 font-heading font-medium text-[2rem] leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            Your time is not for coordination.
          </h2>

          <p className="mt-5 max-w-md text-base text-[#4A4A4A] sm:text-lg lg:max-w-none xl:text-2xl">
            From everyday needs to elevated experiences, everything is handled
            with care.
          </p>
        </div>

        <Image
          src="/precious-time.png"
          alt="Man in a suit overlooking the city skyline from a high-rise balcony"
          width={400}
          height={252}
          className="rounded-sm"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-5 lg:gap-y-12 xl:gap-x-8">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimePreciousSection;
