"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const REQUIREMENTS = [
  "Cloud Solutions",
  "Software Integration",
  "Cybersecurity",
  "Network Solutions",
  "Infrastructure",
  "Data Center",
  "Managed Services",
  "Digital Transformation",
  "Other",
];

type Fields = {
  fullName: string;
  company: string;
  email: string;
  requirement: string;
  message: string;
};

const EMPTY: Fields = {
  fullName: "",
  company: "",
  email: "",
  requirement: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!values.company.trim()) errors.company = "Please enter your company.";

  if (!values.email.trim()) {
    errors.email = "Please enter a business email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address does not look right.";
  }

  if (!values.requirement) errors.requirement = "Please select a requirement.";
  if (!values.message.trim()) errors.message = "Tell us briefly what you need.";

  return errors;
}

const fieldClasses =
  "w-full rounded-lg border bg-white px-4 py-3 text-[0.9375rem] text-navy-900 transition-colors duration-200 placeholder:text-ink-soft/70 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  /** Bot trap — a real person never fills this in. */
  const [botField, setBotField] = useState("");

  const update = (field: keyof Fields) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Silently accept and discard anything that trips the honeypot.
    if (botField) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-10 text-center shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-50 text-accent-600">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-6 font-display text-xl font-bold text-navy-900">
          Enquiry received
        </h3>
        <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
          Thank you — one of our consultants will review your requirement and come back
          with next steps or the questions we need answered first.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-accent-600 link-underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="fullName"
          value={values.fullName}
          onChange={update("fullName")}
          error={errors.fullName}
          placeholder="Your name"
          autoComplete="name"
          required
        />
        <Field
          label="Company"
          name="company"
          value={values.company}
          onChange={update("company")}
          error={errors.company}
          placeholder="Organisation name"
          autoComplete="organization"
          required
        />
        <Field
          label="Business Email"
          name="email"
          type="email"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          placeholder="name@company.com"
          autoComplete="email"
          required
        />
        <SelectField
          label="Requirement"
          name="requirement"
          value={values.requirement}
          onChange={update("requirement")}
          error={errors.requirement}
          placeholder="Select Requirement"
          options={REQUIREMENTS}
          required
        />

        <div className="sm:col-span-2">
          <Label htmlFor="message" required>
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            placeholder="What are you trying to achieve? Current environment, timelines, sites and any constraints all help."
            className={cn(
              fieldClasses,
              "resize-y",
              errors.message
                ? "border-red-400 focus:ring-red-200"
                : "border-navy-200 focus:border-accent-500",
            )}
          />
          <FieldError message={errors.message} />
        </div>
      </div>

      {/* Honeypot: visually hidden, never announced, never focusable */}
      <div className="h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={botField}
          onChange={(event) => setBotField(event.target.value)}
        />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <Icon name="close" size={16} className="mt-0.5 shrink-0" />
          Something went wrong sending the enquiry. Please try again, or email us
          directly.
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          withArrow={status !== "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Talk to Our Experts"}
        </Button>
        <p className="text-[0.75rem] leading-relaxed text-ink-soft sm:max-w-[16rem]">
          We use these details only to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.8125rem] font-semibold text-navy-800"
    >
      {children}
      {required ? <span className="ml-0.5 text-ember-500">*</span> : null}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-[0.75rem] font-medium text-red-600">
      {message}
    </p>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  options,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={cn(
            fieldClasses,
            "appearance-none pr-11",
            value ? "text-navy-900" : "text-ink-soft/80",
            error
              ? "border-red-400 focus:ring-red-200"
              : "border-navy-200 focus:border-accent-500",
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon
          name="chevronDown"
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft"
        />
      </div>
      <FieldError message={error} />
    </div>
  );
}

function Field({
  label,
  name,
  error,
  hint,
  required,
  ...props
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        className={cn(
          fieldClasses,
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-navy-200 focus:border-accent-500",
        )}
        {...props}
      />
      {hint && !error ? (
        <p className="mt-1.5 text-[0.75rem] text-ink-soft">{hint}</p>
      ) : null}
      <FieldError message={error} />
    </div>
  );
}
