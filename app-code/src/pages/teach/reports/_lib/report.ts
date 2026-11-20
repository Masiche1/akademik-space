import type { Course } from "@/content/types.ts";
import { masteryLevel, type MasteryLevel } from "@/lib/mastery.ts";

export type StudentConceptTotals = {
  userId: string;
  name: string;
  concepts: { conceptId: string; earned: number; attempted: number }[];
};

export type ConceptCell = { level: MasteryLevel; percent: number; attempted: number };

export type ConceptRow = {
  conceptId: string;
  title: string;
  lessonCode: string;
  lessonTitle: string;
  questionCount: number;
  /** Mean of every student's concept percent (students who have not started count as 0). */
  classPercent: number;
  counts: Record<MasteryLevel, number>;
};

export type ConceptReport = {
  concepts: ConceptRow[];
  /** cells[studentIndex][conceptIndex], in the same order as students and concepts. */
  cells: ConceptCell[][];
};

const emptyCounts = (): Record<MasteryLevel, number> => ({ "not-started": 0, learning: 0, developing: 0, secure: 0 });

/** Concept mastery for every student in a class, using the same rules as the student's own progress page. */
export function buildConceptReport(course: Course, students: StudentConceptTotals[]): ConceptReport {
  const flat = course.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts.map((c) => ({ c, l }))));
  const lookups = students.map((s) => new Map(s.concepts.map((t) => [t.conceptId, t])));
  const cells = lookups.map((map) =>
    flat.map(({ c }) => {
      const available = c.questions.reduce((n, q) => n + q.totalMarks, 0);
      const t = map.get(c.id);
      const attempted = t?.attempted ?? 0;
      const percent = available > 0 && t ? Math.round((Math.min(t.earned, available) / available) * 100) : 0;
      return { level: masteryLevel(percent, attempted), percent, attempted };
    }),
  );
  const concepts = flat.map(({ c, l }, i) => {
    const counts = emptyCounts();
    let sum = 0;
    for (const row of cells) {
      counts[row[i].level] += 1;
      sum += row[i].percent;
    }
    return {
      conceptId: c.id,
      title: c.title,
      lessonCode: l.code,
      lessonTitle: l.title,
      questionCount: c.questions.length,
      classPercent: cells.length > 0 ? Math.round(sum / cells.length) : 0,
      counts,
    };
  });
  return { concepts, cells };
}

/** Escapes one CSV field so commas, quotes and line breaks survive in Excel. */
export const csvField = (value: string | number) => {
  const s = String(value);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function toCsv(rows: (string | number)[][]): string {
  return rows.map((r) => r.map(csvField).join(",")).join("\r\n");
}

/** Starts a CSV download in the browser. The BOM lets Excel read accented names correctly. */
export function downloadCsv(filename: string, rows: (string | number)[][]) {
  const blob = new Blob(["\uFEFF", toCsv(rows)], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export const safeFilename = (s: string) => s.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "report";
