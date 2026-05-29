import Image from "next/image";
import { ServingFoodIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ContactStandardSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-11.25 xl:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,739px)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          <div className="flex flex-col justify-center lg:pr-6 xl:pr-10">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm">
              Expect More.
            </p>

            <h2 className="mt-2 font-heading text-[1.75rem] font-medium leading-snug text-[#1E1E1E] sm:text-3xl xl:text-4xl">
              Experience the <br />
              <span className="text-nowrap text-primary">Urban Butler standard.</span>
            </h2>

            <p className="mt-4 text-sm font-medium tracking-tight text-[#545454] sm:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
              Discretion. Precision. Care. <br /> That&apos;s not just how we work— <br /> it&apos;s
              who we are.
            </p>
          </div>

          <Image
            src="/contact/last.png"
            alt="Urban Butler concierge opening a luxury car door in white gloves"
            width={739}
            height={243}
            className="h-auto w-full min-w-0 object-cover"
          />

          <div className="flex flex-col justify-center lg:border-l lg:border-[#E1D2BF] lg:pl-8">
            <HugeiconsIcon
              icon={ServingFoodIcon}
              size={56}
              strokeWidth={1.25}
              className="text-primary"
            />

            <p className="mt-4 text-sm font-medium tracking-tight text-[#545454] max-w-[226px] sm:text-base">
              Once you connect with us, <br /> your concierge experience begins the
              moment you need it.
            </p>

            <p className="mt-1 text-xs font-bold uppercase text-primary sm:text-sm xl:text-base max-w-[180px]">
              We look forward to serving you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStandardSection;
