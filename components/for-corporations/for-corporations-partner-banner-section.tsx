import Image from "next/image";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const ForCorporationsPartnerBannerSection = () => {
  return (
    <section className="border-y border-[#E1D2BF] bg-[#F7F0EA]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1348px] xl:px-11.25 xl:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="flex items-center gap-6 sm:gap-8 lg:flex-1">
            <Image
              src="/contact/4.svg"
              alt=""
              width={80}
              height={80}
              aria-hidden
              className="shrink-0"
            />

            <div className="max-w-[712px]">
              <h2 className="font-heading text-[1.75rem] font-medium text-[#1E1E1E] sm:text-3xl xl:text-4xl">
                Ready to elevate your employee experience?
              </h2>

              <p className="mt-3 text-sm font-medium tracking-tight text-[#545454] sm:text-base xl:text-lg 3xl:text-2xl">
                Let&apos;s create a concierge benefit that makes a real impact.
              </p>
            </div>
          </div>

          <Button
            asChild
            className="h-11.5 w-full shrink-0 rounded-sm py-4 px-9 font-semibold uppercase sm:w-fit"
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
