"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

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
        message: payload.message ?? "Odoslanie sa nepodarilo. Skúste to znova.",
      });
      return;
    }

    setSubmitState({
      kind: "ok",
      message: payload.message ?? "Správa bola odoslaná.",
    });
    reset();
  }

  return (
    <form
      className="max-w-xl space-y-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold" htmlFor="fullName">
          Meno a priezvisko
        </label>
        <Input id="fullName" {...register("fullName")} placeholder="Jana Nováková" />
        {errors.fullName && (
          <p className="text-xs text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="meno@domena.sk"
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold" htmlFor="message">
          Správa
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Napíšte nám, s čím potrebujete pomôcť."
          rows={5}
        />
        {errors.message && (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          "Odosielam..."
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Odoslať správu
          </>
        )}
      </Button>

      {submitState.kind === "ok" && (
        <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {submitState.message}
        </div>
      )}

      {submitState.kind === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {submitState.message}
        </div>
      )}
    </form>
  );
}
