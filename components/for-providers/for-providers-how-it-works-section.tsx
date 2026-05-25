import { StepArrow } from "@/components/how-it-works/step-arrow";

import { ForProvidersHowItWorksStepItem } from "./for-providers-how-it-works-step";
import { forProvidersHowItWorksSteps } from "./for-providers-how-it-works-data";

const ForProvidersHowItWorksSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base">
            How It Works
          </p>

          <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            Simple. Seamless. Rewarding.
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-14 lg:flex-row lg:items-start lg:justify-center lg:gap-6 xl:gap-8">
          {forProvidersHowItWorksSteps.map((step, index) => (
            <div key={step.step} className="contents">
              <ForProvidersHowItWorksStepItem step={step} />

              {index < forProvidersHowItWorksSteps.length - 1 ? (
                <StepArrow className="hidden h-3 w-16 shrink-0 text-primary lg:block xl:w-20" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForProvidersHowItWorksSection;
