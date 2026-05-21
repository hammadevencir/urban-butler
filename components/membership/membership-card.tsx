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
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#E1D2BF] bg-[#FDF8F3] p-6 sm:p-7 xl:p-8">
      {"badge" in plan && plan.badge ? (
        <div className="pointer-events-none absolute right-0 top-0 size-28 overflow-hidden">
          <span className="absolute right-[-34px] top-[22px] w-[140px] rotate-45 bg-primary py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-white">
            {plan.badge}
          </span>
        </div>
      ) : null}

      <div>
        <h3 className="text-lg font-semibold text-primary xl:text-xl">
          {plan.number}. {plan.name}
        </h3>
        <p className="mt-1 text-sm text-[#4A4A4A] sm:text-base">
          {plan.description}
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Image
              src="/tick-circle.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden
              className="mt-0.5 shrink-0"
            />
            <span className="text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="text-[#1E1E1E]">
          <span className="text-3xl font-semibold sm:text-4xl">
            ${plan.price}
          </span>
          <span className="text-base text-[#4A4A4A] sm:text-lg">/Month</span>
        </p>

        <Button
          asChild
          variant={plan.highlighted ? "default" : "outline"}
          className={cn(
            "mt-5 h-auto w-full rounded-sm px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em]",
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
