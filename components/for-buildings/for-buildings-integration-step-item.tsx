import type { ForBuildingsIntegrationStep } from "./for-buildings-integration-data";

type ForBuildingsIntegrationStepItemProps = {
  step: ForBuildingsIntegrationStep;
  isLast: boolean;
};

export function ForBuildingsIntegrationStepItem({
  step,
  isLast,
}: ForBuildingsIntegrationStepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-[#F3EBE0]">
          <span className="text-sm font-semibold text-primary">{step.number}</span>
        </div>

        {!isLast ? (
          <span
            className="mt-2 w-px flex-1 min-h-10 bg-primary/35"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className={isLast ? "pb-0" : "pb-8"}>
        <h3 className="text-xs font-bold uppercase text-primary sm:text-sm">
          {step.title}
        </h3>
        <p className="mt-1 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
}
