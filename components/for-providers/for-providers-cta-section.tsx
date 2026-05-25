import Link from "next/link";

import { Button } from "@/components/ui/button";

const ForProvidersCtaSection = () => {
  return (
    <section className="border-y border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16 xl:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-[1.75rem] font-medium leading-[1.15] text-[#1D1D1D] sm:text-3xl lg:text-4xl">
              Let&apos;s deliver exceptional experiences,{" "}
              <span className="text-primary">together.</span>
            </h2>

            <p className="mt-3 text-base font-medium tracking-tight text-[#545454] sm:text-lg">
              Join Urban Butler and be part of a network that sets the standard
              for luxury services.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              className="h-auto rounded-sm p-4 font-semibold uppercase"
            >
              <Link href="/contact">Apply to Join</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto rounded-sm border-primary bg-transparent p-4 font-semibold uppercase text-primary hover:bg-primary/5"
            >
              <Link href="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProvidersCtaSection;
