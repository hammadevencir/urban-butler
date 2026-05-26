"use client";

import { Button } from "@/components/ui/button";

import { contactInterestOptions } from "./contact-message-data";

const fieldClassName =
  "h-12 w-full rounded-sm border border-[#E1D2BF] bg-white px-4 text-sm font-medium text-[#1E1E1E] outline-none transition-colors placeholder:text-xs placeholder:font-semibold placeholder:uppercase placeholder:tracking-wide placeholder:text-[#545454]/80 focus:border-primary";

export function ContactMessageForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          autoComplete="given-name"
          className={fieldClassName}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          autoComplete="family-name"
          className={fieldClassName}
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
          className={fieldClassName}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          autoComplete="tel"
          className={fieldClassName}
        />
      </div>

      <select
        name="interest"
        defaultValue=""
        className={`${fieldClassName} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239D6E2F%22 strokeWidth=%222%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
        required
      >
        <option value="" disabled>
          I Am Interested In
        </option>
        {contactInterestOptions.map((option) => (
          <option key={option} value={option} className="normal-case">
            {option}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        placeholder="Tell Us More"
        rows={5}
        className={`${fieldClassName} h-auto min-h-[140px] resize-y py-3`}
      />

      <Button
        type="submit"
        className="h-auto w-full rounded-sm p-4 font-semibold uppercase sm:w-full"
      >
        Send Message
      </Button>
    </form>
  );
}
