import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { MembershipPlan } from "./membership-data";

type MembershipCardProps = {
  plan: MembershipPlan;
};

export function MembershipCard({ plan }: MembershipCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-b-lg border border-[#E1D2BF] p-6 3xl:min-w-[470px]">
      {"badge" in plan && plan.badge ? (
        <div className="pointer-events-none  absolute right-0 top-0 size-28 2xl:size-32 overflow-hidden">
          <span className="absolute right-[-34px] 2xl:right-[-38px] top-[22px] 2xl:top-[26px] w-[140px] 2xl:w-[171px] rotate-45 bg-primary py-1.5 text-center text-xs 2xl:text-base 2xl:pl-3 font-semibold tracking-wide text-white">
            {plan.badge}
          </span>
        </div>
      ) : null}

      <div className="flex flex-col gap-1 items-center">
        <h3 className="text-lg font-semibold text-primary xl:text-xl">
          {plan.number}. <span className="text-[#1D1D1D]">{plan.name}</span>
        </h3>
        <p className="mt-1 text-sm text-[#4A4A4A] sm:text-base xl:text-xl tracking-tight">
          {plan.description}
        </p>
      </div>

      <ul className="mt-4 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Image
              src="/tick-circle.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
              className="mt-0.5 shrink-0"
            />
            <span className="text-sm text-[#545454] font-medium sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col items-center">
        <p className="text-[#1D1D1D]">
          <span className="text-3xl font-semibold sm:text-4xl">
            ${plan.price}
          </span>
          <span className="text-base text-[#545454] sm:text-xl font-semibold">/Month</span>
        </p>

        <Button
          asChild
          variant={plan.highlighted ? "default" : "outline"}
          className={cn(
            "mt-4 h-auto w-full rounded-sm px-6 py-3 font-semibold uppercase",
            !plan.highlighted &&
              "border-primary bg-transparent text-primary hover:bg-primary/5",
          )}
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
    </article>
  );
}
