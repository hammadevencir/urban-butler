import Image from "next/image";

const MembershipHeroSection = () => {
  return (
    <section className="overflow-hidden border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="grid h-full lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] 2xl:grid-cols-[820px_1fr] xl:max-h-[638px] xl:min-h-[638px]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20 xl:pl-28">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Membership
          </p>

          <h1 className="mt-5 font-heading text-[2.5rem] leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-[3.25rem] xl:text-[56px]">
            Choose how much of your life you want{" "}
            <span className="italic text-primary">handled.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#4A4A4A] sm:text-lg lg:text-xl 2xl:text-2xl xl:max-w-[587px]">
            From light support to fully managed living, Urban Butler adapts to
            your lifestyle.
          </p>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/membership/membership-hero.png"
            alt="Man overlooking the New York City skyline from a luxury residence"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FDF8F2] to-transparent lg:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default MembershipHeroSection;
