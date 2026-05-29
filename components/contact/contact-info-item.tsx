import Image from "next/image";

import type { ContactInfoItem } from "./contact-message-data";

type ContactInfoItemCardProps = {
  item: ContactInfoItem;
};

export function ContactInfoItemCard({ item }: ContactInfoItemCardProps) {
  const content = (
    <>
      <Image
        src={item.icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className="shrink-0"
      />

      <div>
        <p className="text-xs font-bold uppercase text-primary sm:text-sm 2xl:text-base">
          {item.label}
        </p>

        {"subdetail" in item ? (
          <>
            <p className="mt-1 whitespace-pre-line text-sm font-medium tracking-tight text-[#545454] sm:text-base">
              {item.detail}
            </p>
            <p className="text-sm font-medium tracking-tight text-[#545454] sm:text-base">
              {item.subdetail}
            </p>
          </>
        ) : (
          <p className="mt-1 text-sm font-medium tracking-tight leading-snug text-[#545454] sm:text-base">
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
        className="flex items-start gap-4 border-b border-[#E1D2BF] py-6 3xl:py-8 transition-colors last:border-b-0 hover:text-primary"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-4 border-b border-[#E1D2BF] py-6 3xl:py-8 last:border-b-0">
      {content}
    </div>
  );
}
