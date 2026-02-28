import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Neplatne data formulara.",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { website, ...payload } = parsed.data;

    if (website) {
      return NextResponse.json({ ok: true }, { status: 202 });
    }

    // Production integration point (email/helpdesk/CRM).
    console.info("contact_form_submission", {
      submittedAt: new Date().toISOString(),
      ...payload,
    });

    return NextResponse.json(
      {
        ok: true,
        message:
          "Dakujeme. Sprava bola prijata, skola vas bude kontaktovat.",
      },
      { status: 202 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Nastala chyba pri odoslani formulara.",
      },
      { status: 500 },
    );
  }
}
