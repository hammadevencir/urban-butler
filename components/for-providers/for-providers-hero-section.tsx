import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ForProvidersHeroSection = () => {
  return (
    <section className="overflow-hidden bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="grid h-full md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] 2xl:grid-cols-[820px_1fr] xl:min-h-[638px] xl:max-h-[638px]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 3xl:py-16 2xl:px-20 3xl:pl-28">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            For Service Providers
          </p>

          <h1 className="mt-5 font-heading text-[2.5rem] leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-4xl 2xl:text-[56px]">
            Exceptional clients.
            <br />
            <span className="italic text-primary xl:text-nowrap">Extraordinary opportunity.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-[#545454] font-medium tracking-tight sm:text-lg lg:text-xl 2xl:text-2xl xl:max-w-[587px]">
            Join a curated network of world-class professionals delivering
            exceptional services to discerning clients. We connect you with
            consistent demand—while we handle the logistics, so you can focus on
            what you do best.
          </p>

          <Button
            asChild
            className="mt-8 h-auto w-fit rounded-sm p-4 font-semibold uppercase"
          >
            <Link href="/contact">Apply to Join</Link>
          </Button>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/hero/for-providers-hero.png"
            alt="Private chef preparing a dish in a luxury apartment with city views"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-right"
          />

          <div className="absolute bottom-0 left-0 w-10 h-full bg-gradient-to-r from-[#FDF8F4] to-transparent" />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FDF8F4] to-transparent lg:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default ForProvidersHeroSection;
