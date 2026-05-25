import type { ForProvidersHowItWorksStep } from "./for-providers-how-it-works-data";

type ForProvidersHowItWorksStepItemProps = {
  step: ForProvidersHowItWorksStep;
};

export function ForProvidersHowItWorksStepItem({
  step,
}: ForProvidersHowItWorksStepItemProps) {
  return (
    <div className="mx-auto max-w-[240px] text-center">
      <span className="font-heading text-3xl font-medium text-primary sm:text-4xl">
        {step.step}
      </span>

      <p className="mt-3 text-sm font-bold uppercase text-primary sm:text-base">
        {step.title}
      </p>

      <p className="mt-1 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
        {step.description}
      </p>
    </div>
  );
}
