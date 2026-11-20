import type { Concept, Course, QuestionResponse } from "../content/types.ts";
import type { CheckResult } from "./grading.ts";

/** Same threshold the backend uses for a "secure" question. */
export const SECURE_RATIO = 0.8;

export type SavedQuestion = { questionId: string; bestMarks: number; totalMarks: number; attemptCount: number };

export type MasteryLevel = "not-started" | "learning" | "developing" | "secure";

export type Mastery = {
  level: MasteryLevel;
  /** Best marks earned over every mark in the concept (unattempted questions count as 0). */
  percent: number;
  attempted: number;
  total: number;
};

export const MASTERY_LABEL: Record<MasteryLevel, string> = {
  "not-started": "Not started",
  learning: "Learning",
  developing: "Developing",
  secure: "Secure",
};

export const MASTERY_STYLE: Record<MasteryLevel, { text: string; bar: string }> = {
  "not-started": { text: "text-muted-foreground", bar: "bg-muted-foreground/30" },
  learning: { text: "text-destructive", bar: "bg-destructive" },
  developing: { text: "text-chart-1", bar: "bg-chart-1" },
  secure: { text: "text-chart-3", bar: "bg-chart-3" },
};

/** Whole-number share of marks earned; 0 when nothing is available. */
export const markPercent = (earned: number, available: number) => (available > 0 ? Math.round((earned / available) * 100) : 0);

export function masteryLevel(percent: number, attempted: number): MasteryLevel {
  if (attempted === 0) return "not-started";
  if (percent >= SECURE_RATIO * 100) return "secure";
  if (percent >= 40) return "developing";
  return "learning";
}

export function questionSecure(q: Pick<SavedQuestion, "bestMarks" | "totalMarks">): boolean {
  return q.totalMarks > 0 && q.bestMarks / q.totalMarks >= SECURE_RATIO;
}

export function conceptMastery(concept: Concept, saved: ReadonlyMap<string, SavedQuestion>): Mastery {
  let earned = 0;
  let available = 0;
  let attempted = 0;
  for (const q of concept.questions) {
    const s = saved.get(q.id);
    available += q.totalMarks;
    if (s) {
      attempted += 1;
      earned += Math.min(s.bestMarks, q.totalMarks);
    }
  }
  const percent = available === 0 ? 0 : Math.round((earned / available) * 100);
  return { level: masteryLevel(percent, attempted), percent, attempted, total: concept.questions.length };
}

/** Course-wide mastery: how many concepts sit at each level. */
export function courseMastery(course: Course, saved: ReadonlyMap<string, SavedQuestion>): Record<MasteryLevel, number> {
  const counts: Record<MasteryLevel, number> = { "not-started": 0, learning: 0, developing: 0, secure: 0 };
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      for (const concept of lesson.concepts) counts[conceptMastery(concept, saved).level] += 1;
    }
  }
  return counts;
}

/** Marks for an auto-marked attempt, or null when the student must mark themselves. */
export function autoMarks(response: QuestionResponse, result: CheckResult, totalMarks: number): number | null {
  if (result.status === "self") return null;
  if (result.status === "correct") return totalMarks;
  if (response.type === "numeric" && result.partResults && result.partResults.length > 0) {
    const right = result.partResults.filter(Boolean).length;
    return Math.round((right / result.partResults.length) * totalMarks);
  }
  return 0;
}
