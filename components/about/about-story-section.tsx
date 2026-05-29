import Image from "next/image";

import { aboutStoryBeliefs } from "./about-story-data";

const AboutStorySection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-11.25">
        <div className="grid items-start gap-12 lg:grid-cols-2 xl:grid-cols-[minmax(0,489px)_minmax(0,683px)_minmax(280px,416px)] xl:gap-10">
          <Image
            src="/about/last.png"
            alt="Urban Butler concierge opening the door of a luxury vehicle"
            width={489}
            height={360}
            className="w-full rounded-sm lg:max-w-[489px]"
          />

          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-lg">
              Our Story
            </p>

            <h2 className="mt-2 2xl:mt-3 font-heading text-2xl font-medium leading-snug text-[#1E1E1E] 2xl:text-4xl">
              Built on Experience.
              <br />
              Driven by a{" "}
              <span className="italic text-primary">passion for service.</span>
            </h2>

            <p className="mt-2 2xl:mt-5 text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-base 2xl:text-xl 3xl:text-2xl">
              Urban Butler was founded with a simple belief: life is better when
              you have the right people managing the details. Our team brings
              decades of experience in hospitality, luxury services, and
              lifestyle management. We saw the same problem high-performing
              individuals face every day—too many demands, not enough time.
            </p>

            <p className="mt-2 2xl:mt-4 text-base font-semibold text-[#1E1E1E] sm:text-lg xl:text-base 2xl:text-xl 3xl:text-2xl">
              So we built the solution.
            </p>
          </div>

          <aside className="rounded-sm border border-[#E1D2BF] p-5 sm:p-6 lg:col-span-2 xl:col-span-1">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm xl:text-lg">
              Our Story
            </p>

            <ul className="mt-3 space-y-3">
              {aboutStoryBeliefs.map((belief) => (
                <li key={belief} className="flex items-start gap-3">
                  <Image
                    src="/tick-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm font-medium tracking-tight text-[#545454] sm:text-base">
                    {belief}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
