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
    <div className="flex items-stretch gap-4">
      <div className="flex w-11 shrink-0 flex-col items-center">
        <div className="flex size-11 3xl:size-13 shrink-0 items-center justify-center rounded-full border border-[#E1D2BF] bg-[#FDF8F2]">
          <span className="text-base font-medium text-[#545454]">
            {step.number}
          </span>
        </div>

        {!isLast ? (
          <div className="flex flex-col h-full items-center justify-center">
            <span className="w-px flex-1 max-h-[26px] bg-primary" aria-hidden="true" />
          </div>
        ) : null}
      </div>

      <div className={isLast ? "pt-2.5" : "pb-6"}>
        <h3 className="text-sm lg:text-base 3xl:text-lg font-bold uppercase text-primary">
          {step.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#545454] lg:text-base 3xl:text-xl max-w-[337px] tracking-tight">
          {step.description}
        </p>
      </div>
    </div>
  );
}
