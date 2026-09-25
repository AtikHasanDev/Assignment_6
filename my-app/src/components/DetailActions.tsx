"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import type { Workout } from "@/lib/types";

// Button behaviour (add to plan / save + toasts) is wired up in the next step.
export default function DetailActions({ workout }: { workout: Workout }) {
  void workout;
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold leading-5 text-[#0f1115] shadow-sm transition hover:brightness-110"
      >
        <CalendarPlus size={16} aria-hidden />
        Add to today&apos;s plan
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-medium leading-5 text-[#e5e7eb] transition hover:border-accent hover:text-accent"
      >
        <Bookmark size={16} aria-hidden />
        Save for later
      </button>
    </div>
  );
}
