import Image from "next/image";

import type { ForCorporationsHowItWorksStep } from "./for-corporations-how-it-works-data";

type ForCorporationsHowItWorksStepItemProps = {
  step: ForCorporationsHowItWorksStep;
};

export function ForCorporationsHowItWorksStepItem({
  step,
}: ForCorporationsHowItWorksStepItemProps) {
  return (
    <div className="w-full max-w-[210px] shrink-0 p-4 text-center">
      <div className="mx-auto flex size-8 items-center justify-center rounded-full bg-primary">
        <span className="text-sm font-medium text-white">{step.step}</span>
      </div>

      <Image
        src={step.image}
        alt=""
        width={102}
        height={102}
        aria-hidden
        className="mx-auto mt-4 size-[102px]"
      />

      <p className="mt-4 text-xs font-bold uppercase leading-snug text-primary">
        {step.title}
      </p>

      <p className="mt-2 text-sm font-medium leading-snug tracking-tight text-[#545454]">
        {step.description}
      </p>
    </div>
  );
}
