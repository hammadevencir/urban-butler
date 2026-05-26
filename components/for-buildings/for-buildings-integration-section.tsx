import Image from "next/image";

import { ForBuildingsIntegrationStepItem } from "./for-buildings-integration-step-item";
import {
  forBuildingsIntegrationFeatures,
  forBuildingsIntegrationSteps,
  forBuildingsIntegrationTestimonial,
} from "./for-buildings-integration-data";

const ForBuildingsIntegrationSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-16 xl:py-11.5">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 3xl:grid-cols-[minmax(0,1fr)_273px_minmax(0,1.2fr)_minmax(240px,393px)] 3xl:gap-8">
          <div className="self-center xl:col-start-1 3xl:col-start-1">
            {forBuildingsIntegrationSteps.map((step, index) => (
              <ForBuildingsIntegrationStepItem
                key={step.title}
                step={step}
                isLast={index === forBuildingsIntegrationSteps.length - 1}
              />
            ))}
          </div>

          <div className="max-w-xl self-center lg:max-w-none xl:col-start-3 xl:row-start-1 3xl:col-start-3 3xl:pl-5">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm">
              Seamless Integration
            </p>

            <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
              A concierge experience, branded for your building.
            </h2>

            <ul className="mt-6 space-y-4">
              {forBuildingsIntegrationFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Image
                    src="/tick-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium tracking-tight text-[#545454] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center self-center lg:justify-center xl:col-start-2 xl:row-start-1 3xl:col-start-2">
            <Image
              src="/for-buildings/mockup.png"
              alt="Urban Butler resident app showing the Welcome Home screen"
              width={547}
              height={993}
              className="mx-auto h-auto w-full max-w-[273px]"
            />
          </div>

          <aside className="self-center rounded-sm border border-[#E1D2BF] p-5 sm:p-6 xl:col-span-3 xl:max-w-2xl xl:justify-self-center 3xl:col-span-1 3xl:col-start-4 3xl:max-w-none 3xl:justify-self-auto">
            <span
              className="font-heading text-5xl 3xl:text-[56px] leading-none text-primary"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="text-sm font-medium 3xl:text-xl tracking-tight text-[#545454] sm:text-base">
              "{forBuildingsIntegrationTestimonial.quote}"
            </blockquote>

            <span
              className="mt-4 block h-[3px] w-[73px] bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-tight text-primary sm:text-sm 3xl:text-lg">
              {forBuildingsIntegrationTestimonial.role}
            </p>
            <p className="mt-1 text-sm 3xl:text-xl tracking-tight font-medium text-[#545454]">
              {forBuildingsIntegrationTestimonial.attribution}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForBuildingsIntegrationSection;
