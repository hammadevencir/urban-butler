import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-[#FDF8F4]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] 2xl:grid-cols-[820px_1fr] xl:min-h-[638px] xl:max-h-[638px] h-full">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            A Private Concierge
          </p>

          <h1 className="mt-5 font-heading text-[2.5rem] leading-[1.08] text-[#1E1E1E] sm:text-5xl lg:text-[3.25rem] xl:text-[56px]">
            Life, Without
            <br />
            <span className="italic text-primary">the Friction.</span>
          </h1>

          <span className="mt-5 block h-px w-12 bg-primary" aria-hidden="true" />

          <p className="mt-6 max-w-md xl:max-w-[587px] text-base leading-relaxed text-[#4A4A4A] sm:text-lg lg:text-xl 2xl:text-2xl">
            Urban Butler removes every demand on your time—quietly, seamlessly
            and on your terms.
          </p>

          <p className="mt-3 max-w-md text-base font-semibold text-[#2D2D2D] sm:text-lg lg:text-xl">
            Everything handled. So you can live.
          </p>

          <Button
            asChild
            className="mt-8 h-auto w-fit rounded-sm px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
          >
            <Link href="/services">View Services</Link>
          </Button>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <Image
            src="/hero-right.png"
            alt="Luxury penthouse living room overlooking the New York City skyline"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
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

export default HeroSection;
