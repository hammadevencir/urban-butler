import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ForCorporationsHeroSection = () => {
  return (
    <section className="overflow-hidden bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="grid h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] 2xl:grid-cols-[820px_1fr] xl:min-h-[638px] xl:max-h-[638px]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 3xl:py-16 2xl:px-20 3xl:pl-28">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Corporate Concierge
          </p>

          <h1 className="mt-5 font-heading text-[2.5rem] leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-[3.25rem] xl:text-[56px]">
            A Premium Concierge <p className="3xl:text-nowrap">Benefit for{" "}
              <span className="italic text-primary">Your Employees.</span></p>
          </h1>

          <p className="mt-6 max-w-md text-base text-[#545454] font-medium tracking-tight sm:text-lg lg:text-xl 2xl:text-2xl xl:max-w-[587px]">
            Urban Butler helps your team reclaim time, reduce stress, and enjoy
            a better quality of life. <br /> From everyday tasks to life&apos;s special
            moments, we handle the details—so your employees can focus on what
            matters most.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              asChild
              className="h-auto w-fit rounded-sm p-4 font-semibold uppercase"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>

            <p className="max-w-xs text-sm font-medium tracking-tight text-[#545454] sm:text-base">
              Tailored solutions for companies of all sizes.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/hero/for-corporate-hero.png"
            alt="Business professionals reviewing concierge services on a tablet in a modern office"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-left"
          />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FDF8F4] to-transparent lg:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsHeroSection;
