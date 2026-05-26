import Image from "next/image";

import {
  forHotelsConciergeFeatures,
  forHotelsConciergeTestimonial,
} from "./for-hotels-concierge-data";

const ForHotelsConciergeSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,0.9fr)] xl:gap-6 2xl:gap-8 3xl:grid-cols-[minmax(0,489px)_minmax(0,1fr)_minmax(240px,393px)] 3xl:gap-10">
          <Image
            src="/for-hotels/fh1.png"
            alt="Guest using the Urban Butler concierge app on a smartphone"
            width={489}
            height={360}
            className="w-full min-w-0 rounded-sm lg:max-w-md xl:max-w-none"
          />

          <div className="min-w-0 max-w-xl lg:max-w-none">
            <p className="text-xs font-semibold uppercase text-primary sm:text-sm 2xl:text-lg tracking-tight">
              A Concierge in Every Guest&apos;s Pocket
            </p>

            <h2 className="mt-2 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-2xl 2xl:text-4xl">
              Seamless service, anytime, anywhere.
            </h2>

            <p className="mt-4 text-base font-medium tracking-tight text-[#545454] sm:text-base 2xl:text-xl 3xl:text-2xl">
              Your guests get instant access to a dedicated concierge through
              our beautifully designed app—before, during, and after their stay.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {forHotelsConciergeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Image
                    src="/tick-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-semibold tracking-tight text-[#545454] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="min-w-0 rounded-sm border border-[#E1D2BF] p-5 sm:p-6 lg:col-span-2 xl:col-span-1">
            <span
              className="font-heading text-5xl leading-none text-primary"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="mt-1 text-sm font-medium text-[#545454] sm:text-base 2xl:text-xl tracking-tight">
              {forHotelsConciergeTestimonial.quote}
            </blockquote>

            <span
              className="mt-4 block h-[3px] w-[73px] bg-primary"
              aria-hidden="true"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-tight text-primary sm:text-sm 2xl:text-lg">
              {forHotelsConciergeTestimonial.role}
            </p>
            <p className="mt-1 text-sm font-medium text-[#545454] 2xl:text-xl tracking-tight">
              {forHotelsConciergeTestimonial.attribution}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ForHotelsConciergeSection;
