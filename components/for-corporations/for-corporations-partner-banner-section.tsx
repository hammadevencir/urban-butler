import Link from "next/link";
import { ArrowRight02Icon, Building01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const ForCorporationsPartnerBannerSection = () => {
  return (
    <section className="border-y border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16 xl:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center lg:flex-1 lg:gap-10">
            <HugeiconsIcon
              icon={Building01Icon}
              size={72}
              strokeWidth={1.25}
              className="shrink-0 text-primary"
            />

            <div className="max-w-2xl">
              <h2 className="font-heading text-[1.75rem] font-medium leading-[1.15] text-[#1D1D1D] sm:text-3xl lg:text-4xl">
                Ready to elevate your employee experience?
              </h2>

              <p className="mt-3 text-base font-medium tracking-tight text-[#545454] sm:text-lg">
                Let&apos;s create a concierge benefit that makes a real impact.
              </p>
            </div>
          </div>

          <Button
            asChild
            className="h-auto w-full rounded-sm p-4 font-semibold uppercase sm:w-fit lg:shrink-0"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Partner With Us
              <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsPartnerBannerSection;
