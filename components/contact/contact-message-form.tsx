"use client";

import { useState } from "react";

import { ChevronDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { contactInterestOptions } from "./contact-message-data";

const fieldPlaceholderClassName =
  "pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-xs font-semibold uppercase tracking-wide text-[#545454]";

const textareaPlaceholderClassName =
  "pointer-events-none absolute left-4 top-3 z-10 text-xs font-semibold uppercase tracking-wide text-[#545454]";

const fieldClassName =
  "w-full rounded-sm border border-[#E1D2BF] max-h-[50px] px-4 text-sm font-medium text-[#1E1E1E] outline-none transition-colors focus:border-primary placeholder:text-[#545454] placeholder:font-bold";

export function ContactMessageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="relative block">
          {!firstName ? (
            <span className={fieldPlaceholderClassName}>First Name</span>
          ) : null}
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className={`${fieldClassName} h-[50px] py-2`}
            required
          />
        </label>

        <label className="relative block">
          {!lastName ? (
            <span className={fieldPlaceholderClassName}>Last Name</span>
          ) : null}
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className={`${fieldClassName} h-[50px] py-2`}
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="relative block">
          {!email ? (
            <span className={fieldPlaceholderClassName}>Email Address</span>
          ) : null}
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`${fieldClassName} h-[50px] py-2`}
            required
          />
        </label>

        <label className="relative block">
          {!phone ? (
            <span className={fieldPlaceholderClassName}>Phone Number</span>
          ) : null}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={`${fieldClassName} h-[50px] py-2`}
          />
        </label>
      </div>

      <div className="relative">
        {!interest ? (
          <span className={fieldPlaceholderClassName}>I Am Interested In</span>
        ) : null}
        <input type="hidden" name="interest" value={interest} required />
        <Select value={interest || undefined} onValueChange={setInterest}>
          <SelectTrigger
            className={`${fieldClassName} h-[50px] w-full items-center justify-between py-2 pr-10 shadow-none focus-visible:border-primary focus-visible:ring-0 data-[size=default]:h-[50px] [&_svg]:hidden`}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-sm border-[#E1D2BF]">
            {contactInterestOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <HugeiconsIcon
          icon={ChevronDown}
          size={16}
          strokeWidth={2}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
          aria-hidden
        />
      </div>

      <label className="relative block">
        {!message ? (
          <span className={textareaPlaceholderClassName}>Tell Us More</span>
        ) : null}
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${fieldClassName} min-h-[140px] resize-none ${message ? "py-3" : "pt-8 pb-3"}`}
        />
      </label>

      <Button
        type="submit"
        className="h-11.5 w-full rounded-sm font-semibold uppercase"
      >
        Send Message
      </Button>
    </form>
  );
}
