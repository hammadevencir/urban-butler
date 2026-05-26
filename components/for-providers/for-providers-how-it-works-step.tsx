import type { ForProvidersHowItWorksStep } from "./for-providers-how-it-works-data";

type ForProvidersHowItWorksStepItemProps = {
  step: ForProvidersHowItWorksStep;
};

export function ForProvidersHowItWorksStepItem({
  step,
}: ForProvidersHowItWorksStepItemProps) {
  return (
    <div className="mx-auto max-w-[240px] 3xl:max-w-[355px] text-center">
      <span className="text-xl font-medium text-primary sm:text-2xl 2xl:text-[28px]">
        {step.step}
      </span>

      <p className="mt-3 text-sm font-bold uppercase text-primary sm:text-base xl:text-lg">
        {step.title}
      </p>

      <p className="mt-1 text-sm font-medium tracking-tight 3xl:text-xl text-[#545454] sm:text-base">
        {step.description}
      </p>
    </div>
  );
}
