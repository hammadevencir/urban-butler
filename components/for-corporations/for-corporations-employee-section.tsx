import Image from "next/image";

import {
  forCorporationsEmployeeFeatures,
  forCorporationsEmployeeTestimonial,
} from "./for-corporations-employee-data";

const ForCorporationsEmployeeSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(240px,280px)] xl:gap-10">
          <Image
            src="/for-corporations/employee-benefit.png"
            alt="Employees using the Urban Butler concierge app in a modern office"
            width={489}
            height={360}
            className="w-full rounded-sm lg:max-w-md xl:max-w-none"
          />

          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm">
              A Concierge for Your Team
            </p>

            <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
              Support that fits seamlessly into your employees&apos; lives.
            </h2>

            <p className="mt-5 text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-xl">
              Urban Butler gives your team on-demand access to a dedicated
              concierge—help with everyday tasks, travel, wellness, and more.
            </p>

            <ul className="mt-6 space-y-4">
              {forCorporationsEmployeeFeatures.map((feature) => (
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

          <aside className="rounded-sm border border-[#E1D2BF] bg-white/70 p-5 sm:p-6 lg:col-span-2 xl:col-span-1">
            <span
              className="font-heading text-5xl leading-none text-primary"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="mt-1 text-sm font-medium leading-relaxed text-[#545454] sm:text-base">
              {forCorporationsEmployeeTestimonial.quote}
            </blockquote>

            <span
              className="mt-4 block h-px w-10 bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
              {forCorporationsEmployeeTestimonial.role}
            </p>
            <p className="mt-1 text-sm font-medium text-[#545454]">
              {forCorporationsEmployeeTestimonial.attribution}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForCorporationsEmployeeSection;
