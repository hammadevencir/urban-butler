import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

const PlanConsultationSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:py-14 xl:max-w-[1820px] xl:px-16 xl:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)_auto] lg:gap-10 xl:gap-14">
          <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm lg:max-w-none">
            <Image
              src="/hero-right.png"
              alt="Luxury penthouse living room overlooking the New York City skyline"
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover object-center"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base">
              Not Sure Which Plan Is Right for You?
            </p>

            <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.15] text-[#1E1E1E] sm:text-3xl lg:text-4xl">
              We&apos;ll help you find the perfect fit.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4A4A4A] sm:text-lg">
              Our team is here to understand your needs and recommend the right
              level of support.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="h-auto w-full rounded-sm border-primary bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:bg-primary/5 lg:w-auto"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Speak With Our Team
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlanConsultationSection;
