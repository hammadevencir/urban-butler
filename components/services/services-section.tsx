import { ServiceCard } from "./service-card";
import { services } from "./services-data";

const ServicesSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto max-w-7xl px-6 py-11.5 sm:px-10 lg:py-11.5 xl:max-w-[1820px] xl:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
            Everything You Need. Handled.
          </p>
          <h2 className="mt-3 font-heading text-[2rem] leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            Services for every part of your life.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
