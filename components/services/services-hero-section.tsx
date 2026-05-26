import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ServicesHeroSection = () => {
  return (
    <section className="overflow-hidden border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="grid h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] 2xl:grid-cols-[820px_1fr] xl:min-h-[600px] 2xl:min-h-[638px] xl:max-h-[638px]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-16 3xl:px-20 3xl:pl-28">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 3xl:text-xl">
            Our Services
          </p>

          <h1 className="mt-5 font-heading text-[2.5rem] leading-snug text-[#1E1E1E] sm:text-5xl 2xl:text-[3.25rem] 3xl:text-[56px]">
            Everything you need,
            <br />
            <span className="italic text-primary">handled </span>
            to perfection.
          </h1>

          <span className="mt-3 block h-0.75 rounded-full w-12 xl:w-[73px] bg-primary" aria-hidden="true" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#4E4E4E] font-medium tracking-tight sm:text-lg lg:text-xl 2xl:text-2xl xl:max-w-[587px]">
            From everyday essentials to exceptional experiences, Urban Butler
            is here for you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              asChild
              className="h-auto w-fit rounded-sm px-7 py-3 font-semibold uppercase tracking-[0.14em]"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>

            <p className="text-sm text-[#545454] sm:text-base lg:text-xl font-semibold">
              Available 24/7. Always.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/services-right.png"
            alt="Professional concierge preparing a luxury bedroom"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-left"
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

export default ServicesHeroSection;
