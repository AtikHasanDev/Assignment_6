"use client";

import { Bookmark, BookmarkCheck, CalendarCheck, CalendarPlus } from "lucide-react";
import toast from "react-hot-toast";
import { usePlan } from "@/context/PlanContext";
import { PLAN_CAP } from "@/lib/planStore";
import type { Workout } from "@/lib/types";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater, isInPlan, isSaved, isFull } = usePlan();

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);
  const planBlocked = !inPlan && isFull;

  function handleAdd() {
    const result = addToPlan(workout);
    if (result === "added") {
      toast.success(`Added ${workout.name} to today's plan`);
    } else if (result === "exists") {
      toast("Already in today's plan", { icon: "📋" });
    } else {
      toast.error(`Today's plan is full (${PLAN_CAP} lifts). Finish one first.`);
    }
  }

  function handleSave() {
    const result = saveForLater(workout);
    if (result === "added") {
      toast.success(`Saved ${workout.name} for later`);
    } else {
      toast("Already in your saved list", { icon: "🔖" });
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={handleAdd}
          disabled={inPlan || planBlocked}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold leading-5 text-[#0f1115] shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:brightness-100"
        >
          {inPlan ? (
            <CalendarCheck size={16} aria-hidden />
          ) : (
            <CalendarPlus size={16} aria-hidden />
          )}
          {inPlan ? "In today's plan" : "Add to today's plan"}
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={saved}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-medium leading-5 text-[#e5e7eb] transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:border-accent/40 disabled:text-accent disabled:hover:border-accent/40"
        >
          {saved ? (
            <BookmarkCheck size={16} aria-hidden />
          ) : (
            <Bookmark size={16} aria-hidden />
          )}
          {saved ? "Saved" : "Save for later"}
        </button>
      </div>

      {planBlocked && (
        <p className="text-xs text-muted">
          Today&apos;s plan already has {PLAN_CAP} lifts. Mark one as done to add more.
        </p>
      )}
    </div>
  );
}
