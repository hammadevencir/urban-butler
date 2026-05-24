import { cn } from "@/lib/utils";

import type { HowItWorksStepItem } from "./how-it-works-data";

type HowItWorksStepProps = {
  step: HowItWorksStepItem;
  index: number;
};

export function HowItWorksStep({ step, index }: HowItWorksStepProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        index === 0 && "min-w-[274px]",
        index === 1 && "min-w-[270px]",
        index === 2 && "min-w-[240px]",
      )}
    >
      <div className="flex size-13 shrink-0 items-center justify-center rounded-full bg-[#F3EBE0] sm:size-13">
        <span className="text-lg font-semibold text-primary">
          {step.step}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold uppercase text-primary sm:text-lg">
          {step.title}
        </p>
        <p className="mt-1 text-sm text-[#545454] font-medium sm:text-xl">
          {step.description}
        </p>
      </div>
    </div>
  );
}
