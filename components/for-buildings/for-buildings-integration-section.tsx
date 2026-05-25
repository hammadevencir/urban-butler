import Image from "next/image";

import { ForBuildingsIntegrationStepItem } from "./for-buildings-integration-step-item";
import { ForBuildingsResidentAppMockup } from "./for-buildings-resident-app-mockup";
import {
  forBuildingsIntegrationFeatures,
  forBuildingsIntegrationSteps,
  forBuildingsIntegrationTestimonial,
} from "./for-buildings-integration-data";

const ForBuildingsIntegrationSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_220px_minmax(0,1.15fr)_minmax(240px,280px)] xl:gap-8">
          <div className="xl:col-start-1">
            {forBuildingsIntegrationSteps.map((step, index) => (
              <ForBuildingsIntegrationStepItem
                key={step.title}
                step={step}
                isLast={index === forBuildingsIntegrationSteps.length - 1}
              />
            ))}
          </div>

          <div className="max-w-xl lg:max-w-none xl:col-start-3">
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

          <div className="flex justify-center lg:justify-center xl:col-start-2 xl:row-start-1">
            <ForBuildingsResidentAppMockup />
          </div>

          <aside className="rounded-sm border border-[#E1D2BF] bg-white/70 p-5 sm:p-6 xl:col-start-4">
            <span
              className="font-heading text-5xl leading-none text-primary"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="mt-1 text-sm font-medium leading-relaxed text-[#545454] sm:text-base">
              {forBuildingsIntegrationTestimonial.quote}
            </blockquote>

            <span
              className="mt-4 block h-px w-10 bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
              {forBuildingsIntegrationTestimonial.role}
            </p>
            <p className="mt-1 text-sm font-medium text-[#545454]">
              {forBuildingsIntegrationTestimonial.attribution}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForBuildingsIntegrationSection;
