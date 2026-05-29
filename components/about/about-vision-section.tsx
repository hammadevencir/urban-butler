import Image from "next/image";

const AboutVisionSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E1D2BF]">
      <div className="relative min-h-[275px]">
        <Image
          src="/about/vision.png"
          alt="Coastal landscape at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative mx-auto flex flex-col items-center justify-center px-6 py-10 text-center sm:px-10 xl:px-16">
          <p className="text-xs font-semibold uppercase text-primary sm:text-sm lg:text-base 2xl:text-lg">
            Our Vision
          </p>

          <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            The world&apos;s most trusted lifestyle partner.
          </h2>

          <div className="mt-4 space-y-1 text-base font-medium tracking-tight text-[#545454] sm:text-lg lg:text-xl 3xl:text-2xl">
            <p>
              We envision a world where exceptional service is the
              standard—not the exception.
            </p>
            <p>
              Where people can live more, stress less, and focus on creating a
              life they love.
            </p>
            <p>Urban Butler is here to make that vision a reality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionSection;
