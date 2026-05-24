import Link from "next/link";

import { Button } from "@/components/ui/button";

const ServicesCtaSection = () => {
  return (
    <section className="border-t border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10 lg:py-20 xl:px-16 xl:py-24">
        <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
          Can&apos;t Find What You Need?
        </p>

        <h2 className="mt-4 font-heading text-[2rem] leading-[1.15] text-[#1E1E1E] sm:text-4xl lg:text-[2.5rem]">
          Just ask. We can handle it.
        </h2>

        <p className="mt-5 text-base leading-relaxed text-[#4A4A4A] sm:text-lg xl:text-xl">
          If it&apos;s possible, we&apos;ll make it happen. If it&apos;s
          impossible, we&apos;ll find a way.
        </p>

        <Button
          asChild
          className="mt-8 h-auto rounded-sm px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em]"
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
