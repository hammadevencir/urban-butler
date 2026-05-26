import Image from "next/image";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const ForBuildingsCtaSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,489px)_minmax(0,1fr)] lg:gap-10 2xl:grid-cols-[minmax(0,489px)_minmax(0,1fr)_auto] 2xl:gap-14">
          <Image
            src="/for-buildings/partner-cta.png"
            alt="New York City skyline at sunset"
            width={489}
            height={234}
            className="w-full rounded-sm xl:min-w-[489px] max-h-[239px]"
          />

          <div className="flex flex-col gap-6 lg:gap-8 2xl:contents">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
                Let&apos;s create an exceptional living experience, together.
              </p>

              <h2 className="mt-3 font-heading text-[1.75rem] font-medium leading-[1.15] text-[#1D1D1D] sm:text-3xl lg:text-4xl">
                We&apos;ll help you find the perfect fit.
              </h2>

              <p className="mt-4 text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-xl">
                Our team is here to understand your needs and recommend the
                right level of support.
              </p>
            </div>

            <Button
              asChild
              className="h-auto w-full rounded-sm p-4 font-semibold uppercase sm:w-fit 2xl:w-auto"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Partner With Us
                <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBuildingsCtaSection;
