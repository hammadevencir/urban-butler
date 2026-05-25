import Image from "next/image";

const AboutVisionSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E1D2BF]">
      <div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
        <Image
          src="/about/our-vision.png"
          alt="Coastal landscape at golden hour"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0 bg-[#FDF8F2]/30"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[460px] sm:px-10 lg:min-h-[500px] xl:px-16">
          <p className="text-xs font-bold uppercase text-primary sm:text-sm lg:text-base">
            Our Vision
          </p>

          <h2 className="mt-4 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl lg:text-[2.75rem]">
            The world&apos;s most trusted lifestyle partner.
          </h2>

          <div className="mt-6 space-y-4 text-base font-medium tracking-tight text-[#545454] sm:text-lg lg:text-xl">
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
