import Image from "next/image";
import Link from "next/link";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const forCorporationsCtaBenefits = [
  "Flexible Implementation",
  "Scalable for Any Team Size",
  "Dedicated Account Support",
] as const;

const ForCorporationsCtaSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(0,489px)_minmax(0,1fr)_minmax(280px,360px)] xl:gap-12">
          <Image
            src="/for-corporations/partner-cta.png"
            alt="Professional team collaborating in a modern office"
            width={489}
            height={270}
            className="w-full rounded-sm lg:col-span-2 xl:col-span-1 xl:min-w-[489px]"
          />

          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base">
              Let&apos;s invest in your people, together.
            </p>

            <h2 className="mt-3 font-heading text-[1.75rem] font-medium leading-[1.15] text-[#1D1D1D] sm:text-3xl lg:text-4xl">
              Partner with Urban Butler and elevate your employee experience.
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

          <div className="max-w-sm lg:col-span-2 xl:col-span-1">
            <p className="text-base font-medium tracking-tight text-[#545454] sm:text-lg">
              Get started with a custom solution tailored to your
              organization.
            </p>

            <ul className="mt-5 space-y-4">
              {forCorporationsCtaBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Image
                    src="/tick-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium tracking-tight text-[#545454] sm:text-base">
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

export default ForCorporationsCtaSection;
