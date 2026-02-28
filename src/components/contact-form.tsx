"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must have at least 2 characters."),
  email: z.email("Enter a valid email."),
  message: z.string().min(20, "Message must have at least 20 characters."),
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactData) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.info("Contact form payload", data);
    setSubmitted(true);
    reset();
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="fullName">
          Full name
        </label>
        <Input id="fullName" {...register("fullName")} placeholder="Alex Novak" />
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
          placeholder="name@example.com"
        />
        {errors.email ? (
          <p className="text-xs text-red-700">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="How can we help your school website project?"
        />
        {errors.message ? (
          <p className="text-xs text-red-700">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </Button>

      {submitted ? (
        <p className="rounded-lg bg-emerald-100 px-3 py-2 text-sm text-emerald-900">
          Message sent. Connect this form to your API route in production.
        </p>
      ) : null}
    </form>
  );
}
