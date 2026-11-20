import { useSyncExternalStore } from "react";
import type { ExamTier, Question } from "@/content/types.ts";

export type TierFilter = ExamTier | "all";

const KEY = "ariela-tier";
const listeners = new Set<() => void>();

function read(): TierFilter {
  const v = typeof localStorage === "undefined" ? null : localStorage.getItem(KEY);
  return v === "foundation" || v === "higher" ? v : "all";
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** The student's chosen International GCSE tier, remembered across visits. */
export function useTier(): [TierFilter, (t: TierFilter) => void] {
  const tier = useSyncExternalStore(subscribe, read, () => "all" as const);
  const setTier = (t: TierFilter) => {
    localStorage.setItem(KEY, t);
    listeners.forEach((l) => l());
  };
  return [tier, setTier];
}

/** Untiered questions always match; tiered ones match their own tier or "all". */
export function matchesTier(q: Question, tier: TierFilter): boolean {
  return tier === "all" || !q.tier || q.tier === tier;
}
