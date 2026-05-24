import { HowItWorksStep } from "./how-it-works-step";
import { howItWorksSteps } from "./how-it-works-data";
import { StepArrow } from "./step-arrow";

const HowItWorksSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:px-21.25 xl:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
            Simple. Seamless. Done
          </p>

          <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            How it Works
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-14 lg:flex-row lg:justify-center lg:gap-8 xl:gap-9">
          {howItWorksSteps.map((step, index) => (
            <div key={step.step} className="contents">
              <HowItWorksStep step={step} index={index} />

              {index < howItWorksSteps.length - 1 ? (
                <StepArrow className="hidden h-3 w-24 shrink-0 text-primary lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
