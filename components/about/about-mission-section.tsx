import { AboutMissionValueItem } from "./about-mission-value-item";
import { aboutMissionValues } from "./about-mission-data";

const AboutMissionSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base">
            Our Mission
          </p>

          <h2 className="mt-4 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            To elevate everyday life.
          </h2>

          <p className="mt-5 text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-xl">
            Our mission is simple: to be the invisible force that makes your
            life run better. We anticipate needs, solve problems, and handle
            every detail—seamlessly and discreetly—so you can focus on what
            truly matters.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:mt-16 xl:grid-cols-5 xl:gap-0 xl:divide-x xl:divide-[#E1D2BF]">
          {aboutMissionValues.map((value, index) => (
            <div
              key={value.title}
              className={
                index === 0
                  ? "xl:pr-6"
                  : index === aboutMissionValues.length - 1
                    ? "xl:pl-6"
                    : "xl:px-6"
              }
            >
              <AboutMissionValueItem value={value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
