"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="sk">
      <body className="p-8">
        <h2 className="mb-3 text-2xl font-semibold">Unexpected error</h2>
        <p className="mb-4 text-sm">Please try again. If the problem persists, contact support.</p>
        <button
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold"
          onClick={() => reset()}
          type="button"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
