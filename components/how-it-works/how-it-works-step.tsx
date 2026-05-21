import type { HowItWorksStepItem } from "./how-it-works-data";

type HowItWorksStepProps = {
  step: HowItWorksStepItem;
};

export function HowItWorksStep({ step }: HowItWorksStepProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#F3EBE0] sm:size-16">
        <span className="font-heading text-2xl text-primary sm:text-[1.75rem]">
          {step.step}
        </span>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase text-primary sm:text-base">
          {step.title}
        </p>
        <p className="mt-1 text-sm text-[#4A4A4A] sm:text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
}
