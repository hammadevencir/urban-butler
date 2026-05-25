import Image from "next/image";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { forBuildingsResidentAppCategories } from "./for-buildings-integration-data";

export function ForBuildingsResidentAppMockup() {
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border-[6px] border-[#1E1E1E] bg-[#1E1E1E] p-1.5 shadow-[0_20px_50px_rgba(30,30,30,0.15)]">
      <div className="overflow-hidden rounded-[1.4rem] bg-white">
        <div className="bg-[#FDF8F2] px-4 pb-5 pt-6">
          <p className="font-heading text-xl font-medium text-[#1E1E1E]">
            Welcome Home
          </p>
          <p className="mt-1 text-xs font-medium text-[#545454]">
            How can we help you today?
          </p>

          <ul className="mt-5 space-y-3">
            {forBuildingsResidentAppCategories.map((category) => (
              <li
                key={category.label}
                className="flex items-center justify-between rounded-sm bg-white px-3 py-2.5 shadow-[0_1px_4px_rgba(30,30,30,0.06)]"
              >
                <div className="flex items-center gap-2.5">
                  <Image
                    src={category.icon}
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden
                    className="shrink-0"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#1E1E1E]">
                    {category.label}
                  </span>
                </div>

                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={14}
                  strokeWidth={2}
                  className="text-primary"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
