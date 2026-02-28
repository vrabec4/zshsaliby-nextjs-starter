"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SubmitState =
  | { kind: "idle" }
  | { kind: "ok"; message: string }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ kind: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const payload = (await response.json()) as {
      ok?: boolean;
      message?: string;
    };

    if (!response.ok || !payload.ok) {
      setSubmitState({
        kind: "error",
        message: payload.message ?? "Odoslanie sa nepodarilo. Skuste to znova.",
      });
      return;
    }

    setSubmitState({
      kind: "ok",
      message: payload.message ?? "Sprava bola odoslana.",
    });
    reset();
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="fullName">
          Meno a priezvisko
        </label>
        <Input id="fullName" {...register("fullName")} placeholder="Jana Novakova" />
        {errors.fullName ? (
          <p className="text-xs text-red-700">{errors.fullName.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="meno@domena.sk"
        />
        {errors.email ? (
          <p className="text-xs text-red-700">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="message">
          Sprava
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Napisete nam, s cim potrebujete pomoct."
        />
        {errors.message ? (
          <p className="text-xs text-red-700">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Odosielam..." : "Odoslat spravu"}
      </Button>

      {submitState.kind === "ok" ? (
        <p className="rounded-lg bg-emerald-100 px-3 py-2 text-sm text-emerald-900">
          {submitState.message}
        </p>
      ) : null}

      {submitState.kind === "error" ? (
        <p className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-900">
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
