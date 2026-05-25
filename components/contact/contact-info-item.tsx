"use client";

import {
  Building01Icon,
  CallRinging01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgObject } from "@hugeicons/react";

import type { ContactInfoItem } from "./contact-message-data";

const contactIcons: Record<ContactInfoItem["label"], IconSvgObject> = {
  "Call Us": CallRinging01Icon,
  "Email Us": Mail01Icon,
  WhatsApp: WhatsappIcon,
  Office: Building01Icon,
};

type ContactInfoItemCardProps = {
  item: ContactInfoItem;
};

export function ContactInfoItemCard({ item }: ContactInfoItemCardProps) {
  const content = (
    <>
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-white">
        <HugeiconsIcon
          icon={contactIcons[item.label]}
          size={22}
          strokeWidth={1.25}
          className="text-primary"
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase text-primary sm:text-sm">
          {item.label}
        </p>

        {"subdetail" in item ? (
          <>
            <p className="mt-1 whitespace-pre-line text-sm font-medium tracking-tight text-[#545454] sm:text-base">
              {item.detail}
            </p>
            <p className="mt-1 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
              {item.subdetail}
            </p>
          </>
        ) : (
          <p className="mt-1 text-sm font-medium tracking-tight text-[#545454] sm:text-base">
            {item.detail}
          </p>
        )}
      </div>
    </>
  );

  if ("href" in item) {
    return (
      <a
        href={item.href}
        className="flex items-start gap-4 border-b border-[#E1D2BF] py-6 transition-colors last:border-b-0 hover:text-primary"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-4 border-b border-[#E1D2BF] py-6 last:border-b-0">
      {content}
    </div>
  );
}
