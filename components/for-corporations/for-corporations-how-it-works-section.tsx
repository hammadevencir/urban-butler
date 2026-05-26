import { StepArrow } from "@/components/how-it-works/step-arrow";
import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ForCorporationsHowItWorksStepItem } from "./for-corporations-how-it-works-step";
import {
  forCorporationsHowItWorksSteps,
  forCorporationsHowItWorksTestimonial,
} from "./for-corporations-how-it-works-data";

const ForCorporationsHowItWorksSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:py-16 xl:max-w-[1820px] xl:px-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base tracking-tight">
            Simple. Seamless. Personalized.
          </p>

          <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:mt-12 3xl:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] 3xl:gap-8">
          <div className="min-w-0 overflow-x-auto pb-2 3xl:overflow-visible">
            <div className="flex w-max min-w-full flex-nowrap items-center justify-center gap-2 sm:gap-3 3xl:w-auto 3xl:justify-between">
              {forCorporationsHowItWorksSteps.map((step, index) => (
                <div key={step.step} className="contents">
                  <ForCorporationsHowItWorksStepItem step={step} />

                  {index < forCorporationsHowItWorksSteps.length - 1 ? (
                    <>
                      <HugeiconsIcon
                        icon={ChevronRight}
                        size={32}
                        strokeWidth={1.5}
                        className="shrink-0 text-primary 3xl:hidden"
                      />
                      <StepArrow className="hidden h-3 w-20 shrink-0 text-primary 3xl:block" />
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <aside className="mx-auto min-w-0 w-full max-w-2xl rounded-sm border border-[#E1D2BF] p-5 sm:p-6 3xl:mx-0 3xl:max-w-none">
            <span
              className="font-heading text-5xl leading-none text-primary"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="mt-1 text-sm font-medium tracking-tight text-[#545454] sm:text-base 2xl:text-xl">
              {forCorporationsHowItWorksTestimonial.quote}
            </blockquote>

            <span
              className="mt-4 block h-[3px] w-[73px] bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-tight text-primary sm:text-sm 2xl:text-lg">
              {forCorporationsHowItWorksTestimonial.role}
            </p>
            <p className="mt-1 text-sm font-medium tracking-tight text-[#545454] 2xl:text-xl">
              {forCorporationsHowItWorksTestimonial.attribution}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsHowItWorksSection;
