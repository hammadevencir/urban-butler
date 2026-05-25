import Link from "next/link";

import { Button } from "@/components/ui/button";

const ServicesCtaSection = () => {
  return (
    <section className="bg-[#FDF8F2]">
      <div className="mx-auto px-6 py-10 text-center sm:px-10 xl:px-16">
        <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          Can&apos;t Find What You Need?
        </p>

        <h2 className="mt-4 font-heading font-medium text-[2rem] leading-[1.15] text-[#1E1E1E] sm:text-4xl lg:text-[2.5rem]">
          Just ask. We can handle it.
        </h2>

        <p className="mt-5 text-base leading-relaxed text-[#545454] font-medium tracking-tight sm:text-lg xl:text-xl 2xl:text-2xl">
          If it&apos;s possible, we&apos;ll make it happen. If it&apos;s
          impossible, we&apos;ll find a way.
        </p>

        <Button
          asChild
          className="mt-6 h-auto rounded-sm px-7 py-3 font-semibold uppercase tracking-[0.14em]"
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
