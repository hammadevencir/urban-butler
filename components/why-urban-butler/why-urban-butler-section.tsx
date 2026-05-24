import Link from "next/link";

import { Button } from "@/components/ui/button";

import { WhyFeatureItem } from "./why-feature-item";
import { whyUrbanButlerFeatures } from "./why-urban-butler-data";

const WhyUrbanButlerSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:py-11.25 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,546px)_minmax(0,1.2fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
              Why Urban Butler
            </p>

            <h2 className="mt-4 font-heading text-[2rem] leading-[1.15] font-medium text-[#1E1E1E] sm:text-4xl">
              A life where nothing needs to be managed.
            </h2>

            <p className="mt-5 text-base text-[#545454] font-medium sm:text-lg xl:text-2xl">
              We anticipate, coordinate & deliver—so you can focus on what
              matters most.<br />Decision, Precision, Trust.<br /> That is our standard.
            </p>

            <Button
              asChild
              className="mt-8 h-auto rounded-sm px-7 py-3 text-base font-semibold uppercase"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-6 xl:gap-8">
            {whyUrbanButlerFeatures.map((feature) => (
              <WhyFeatureItem key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUrbanButlerSection;
