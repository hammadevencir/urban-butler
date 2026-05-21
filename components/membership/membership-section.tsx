import { MembershipCard } from "./membership-card";
import { membershipPlans } from "./membership-data";

const MembershipSection = () => {
  return (
    <section className="bg-[#FDF8F2] border-b border-[#E1D2BF]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20 xl:max-w-[1820px] xl:px-16 xl:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase text-primary sm:text-sm lg:text-base xl:text-lg">
            Membership
          </p>

          <h2 className="mt-3 font-heading text-[2rem] leading-[1.15] text-[#1E1E1E] sm:text-4xl">
            Choose how much of your life you want handled.
          </h2>

          <p className="mt-4 text-base text-[#4A4A4A] sm:text-lg xl:text-xl">
            Flexible plans. Personalized service. Always on your terms.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
