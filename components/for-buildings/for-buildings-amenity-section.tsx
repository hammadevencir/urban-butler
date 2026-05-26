import { ForBuildingsAmenityItem } from "./for-buildings-amenity-item";
import { forBuildingsAmenityFeatures } from "./for-buildings-amenity-data";

const ForBuildingsAmenitySection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16">
        <div className="grid items-start gap-12 min-[1700px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[1700px]:gap-10">
          <div className="w-full min-[1700px]:max-w-xl">
            <h2 className="font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl min-[1700px]:max-w-lg">
              A modern amenity for the modern resident.
            </h2>

            <p className="mt-5 text-base font-medium tracking-tight text-[#545454] sm:text-lg xl:text-2xl">
              Today&apos;s residents expect more than just a beautiful
              building—they expect a lifestyle that&apos;s effortless. <br /> Urban
              Butler seamlessly integrates into your community, enhancing
              everyday living and elevating your brand.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-0 lg:grid-cols-4 min-[1700px]:gap-0 lg:divide-x lg:divide-[#E1D2BF]">
            {forBuildingsAmenityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={
                  index === 0
                    ? "px-4"
                    : index === forBuildingsAmenityFeatures.length - 1
                      ? "pl-4"
                      : "px-4"
                }
              >
                <ForBuildingsAmenityItem feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBuildingsAmenitySection;
