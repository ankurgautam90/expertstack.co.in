import { NextResponse } from "next/server";

/**
 * Enquiry endpoint.
 *
 * Validation happens here as well as in the browser — the client form can be
 * bypassed. Delivery is intentionally left as a single, obvious hook: wire the
 * `deliver` step to your mail transport, CRM or ticketing system.
 */

type Enquiry = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry?: string;
  requirement: string;
  message: string;
};

const REQUIRED: (keyof Enquiry)[] = [
  "fullName",
  "company",
  "email",
  "phone",
  "requirement",
  "message",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LENGTH = 4000;

function sanitise(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const enquiry: Enquiry = {
    fullName: sanitise(body.fullName),
    company: sanitise(body.company),
    email: sanitise(body.email),
    phone: sanitise(body.phone),
    industry: sanitise(body.industry),
    requirement: sanitise(body.requirement),
    message: sanitise(body.message),
  };

  const missing = REQUIRED.filter((field) => !enquiry[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing required fields.", fields: missing },
      { status: 422 },
    );
  }

  if (!EMAIL_PATTERN.test(enquiry.email)) {
    return NextResponse.json(
      { error: "Invalid email address.", fields: ["email"] },
      { status: 422 },
    );
  }

  // TODO: replace with real delivery — SMTP, a transactional email API, or a CRM
  // webhook. Keep it server-side so credentials never reach the browser.
  console.info("[enquiry]", {
    receivedAt: new Date().toISOString(),
    ...enquiry,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
