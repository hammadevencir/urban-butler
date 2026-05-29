import { ContactInfoItemCard } from "./contact-info-item";
import { ContactMessageForm } from "./contact-message-form";
import { contactInfoItems } from "./contact-message-data";

const ContactMessageSection = () => {
  return (
    <section className="border-b border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 xl:max-w-[1820px] xl:px-11.25">
        <div className="grid gap-12 lg:grid-cols-2 2xl:grid-cols-[792px_1fr] lg:gap-0 lg:divide-x lg:divide-[#E1D2BF]">
          <div className="lg:pr-11.5">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-base 3xl:text-lg">
              Send Us a Message
            </p>

            <h2 className="mt-2 font-heading text-[2rem] font-medium leading-[1.15] text-[#1E1E1E] sm:text-4xl">
              How can we help?
            </h2>

            <p className="mt-4 text-sm font-medium tracking-tight text-[#545454] sm:text-base 3xl:text-2xl">
              We are committed to protecting your privacy. Your data is
              encrypted and will not be shared.
            </p>

            <div className="mt-8">
              <ContactMessageForm />
            </div>
          </div>

          <div className="lg:pl-11.5">
            <p className="text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-base 3xl:text-lg">
              Send Us a Message
            </p>

            <div className="mt-5 3xl:mt-8">
              {contactInfoItems.map((item) => (
                <ContactInfoItemCard key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMessageSection;
