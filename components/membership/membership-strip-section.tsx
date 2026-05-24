import { MembershipStripItemCard } from "./membership-strip-item";
import { membershipStripItems } from "./membership-strip-data";

const MembershipStripSection = () => {
  return (
    <section className="border-y border-[#E1D2BF] bg-[#FDF8F2]">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:py-10 xl:max-w-[1820px] xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {membershipStripItems.map((item) => (
            <MembershipStripItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipStripSection;
