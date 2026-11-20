import type { FunctionReturnType } from "convex/server";
import type { api } from "@/convex/_generated/api.js";
import { getCourse, plainPreview } from "@/content/catalog.ts";
import { markPercent, masteryLevel, type MasteryLevel } from "@/lib/mastery.ts";

export type TermStudentData = NonNullable<FunctionReturnType<typeof api.termReports.student>>;
export type TermKind = TermStudentData["kind"];

export const TERM_KIND_LABEL: Record<TermKind, string> = { midterm: "Mid-term report", endterm: "End-of-term report" };

export const termReportPath = (reportId: string) => `/teach/term-reports/${reportId}`;

type Score = { percent: number; level: MasteryLevel };
export type UnitSummary = Score & { code: string; title: string };
export type CourseSummary = Score & {
  title: string;
  conceptsSecure: number;
  conceptCount: number;
  practisedInTerm: number;
  units: UnitSummary[];
  strengths: string[];
  nextSteps: string[];
};
export type SetSummary = { title: string; kind: "assignment" | "exam"; date: string; result: string; percent: number | null };

export type TermSummary = {
  courses: CourseSummary[];
  sets: SetSummary[];
  /** Mean percent over marked sets in the term, or null when none are marked. */
  setAverage: number | null;
  setsDone: number;
};

const clean = (title: string) => plainPreview(title, 200);

/** Turns raw report data into the parent-facing summary: course and unit mastery, strengths, next steps and set scores. */
export function buildTermSummary(data: Pick<TermStudentData, "courses" | "sets">): TermSummary {
  const courses = data.courses.flatMap((row): CourseSummary[] => {
    const course = getCourse(row.courseId);
    if (!course) return [];
    const totals = new Map(row.concepts.map((c) => [c.conceptId, c]));
    const concepts: { title: string; percent: number; level: MasteryLevel }[] = [];
    let earned = 0;
    let available = 0;
    let attempted = 0;
    const units = course.units.map((u) => {
      let uEarned = 0;
      let uAvailable = 0;
      let uAttempted = 0;
      for (const c of u.lessons.flatMap((l) => l.concepts)) {
        const marks = c.questions.reduce((n, q) => n + q.totalMarks, 0);
        const t = totals.get(c.id);
        const got = Math.min(t?.earned ?? 0, marks);
        const percent = markPercent(got, marks);
        concepts.push({ title: clean(c.title), percent, level: masteryLevel(percent, t?.attempted ?? 0) });
        uEarned += got;
        uAvailable += marks;
        uAttempted += t?.attempted ?? 0;
      }
      earned += uEarned;
      available += uAvailable;
      attempted += uAttempted;
      const percent = markPercent(uEarned, uAvailable);
      return { code: u.code, title: clean(u.title), percent, level: masteryLevel(percent, uAttempted) };
    });
    const percent = markPercent(earned, available);
    const started = concepts.filter((c) => c.level !== "not-started");
    return [{
      title: course.title,
      percent,
      level: masteryLevel(percent, attempted),
      conceptsSecure: concepts.filter((c) => c.level === "secure").length,
      conceptCount: concepts.length,
      practisedInTerm: row.practisedInTerm,
      units,
      strengths: [...started].filter((c) => c.level === "secure").sort((a, b) => b.percent - a.percent).slice(0, 3).map((c) => c.title),
      nextSteps: [...started].filter((c) => c.level !== "secure").sort((a, b) => a.percent - b.percent).slice(0, 3).map((c) => c.title),
    }];
  });

  const sets = data.sets.map((s): SetSummary => {
    const percent = s.status === "marked" && s.marks !== null ? markPercent(s.marks, s.totalMarks) : null;
    const result =
      s.status === "marked" ? `${s.marks ?? 0}/${s.totalMarks} (${percent ?? 0}%)`
      : s.status === "marking" ? "Being marked"
      : s.status === "in-progress" ? "Not yet handed in"
      : "Not completed";
    return { title: s.title, kind: s.kind, date: s.createdAt, result, percent };
  });
  const marked = sets.filter((s): s is SetSummary & { percent: number } => s.percent !== null);
  return {
    courses,
    sets,
    setAverage: marked.length > 0 ? Math.round(marked.reduce((n, s) => n + s.percent, 0) / marked.length) : null,
    setsDone: data.sets.filter((s) => s.status === "marked" || s.status === "marking").length,
  };
}

/** Local calendar day as YYYY-MM-DD. */
export function localDay(date: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** UTC instants for the start of the first day and end of the last day, in the viewer's time zone. */
export function termWindow(startDate: string, endDate: string) {
  const [sy, sm, sd] = startDate.split("-").map(Number);
  const [ey, em, ed] = endDate.split("-").map(Number);
  return {
    startsAt: new Date(sy, sm - 1, sd, 0, 0, 0, 0).toISOString(),
    endsAt: new Date(ey, em - 1, ed, 23, 59, 59, 999).toISOString(),
  };
}

/** Parses a YYYY-MM-DD calendar day as a local date, for display. */
export const parseDay = (day: string) => {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(y, m - 1, d);
};
