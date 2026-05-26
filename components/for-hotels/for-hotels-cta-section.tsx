import Image from "next/image";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const forHotelsCtaBenefits = [
  "Easy Integration",
  "No Long-Term Contracts",
  "Dedicated Account Support",
] as const;

const ForHotelsCtaSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,0.9fr)] xl:gap-6 2xl:gap-8 3xl:grid-cols-[minmax(0,489px)_minmax(0,1fr)_minmax(280px,360px)] 3xl:gap-12">
          <Image
            src="/for-hotels/fh2.png"
            alt="Luxury coastal resort at sunset"
            width={489}
            height={270}
            className="w-full min-w-0 rounded-sm lg:col-span-2 xl:col-span-1"
          />

          <div className="min-w-0 max-w-xl lg:max-w-none">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base 2xl:text-lg tracking-tight">
              Let&apos;s create exceptional guest experiences, together.
            </p>

            <h2 className="mt-3 font-heading text-[1.75rem] font-medium leading-[1.15] text-[#1D1D1D] sm:text-3xl 2xl:text-4xl">
              Partner with Urban Butler and redefine the guest experience.
            </h2>

            <Button
              asChild
              className="mt-6 h-auto w-full rounded-sm p-4 font-semibold uppercase sm:w-fit"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Partner With Us
                <HugeiconsIcon icon={ArrowRight02Icon} size={20} strokeWidth={2} />
              </Link>
            </Button>
          </div>

          <div className="min-w-0 max-w-sm lg:max-w-none">
            <p className="text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-lg 2xl:text-xl">
              Get started with a custom solution tailored to your property.
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {forHotelsCtaBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Image
                    src="/tick-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-semibold tracking-tight text-[#545454] sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHotelsCtaSection;
