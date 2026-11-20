import { describe, expect, test } from "vitest";
import { getCourse } from "@/content/catalog.ts";
import { buildTermSummary, termWindow } from "./term-report.ts";

const course = getCourse("edx-maths-y10");
if (!course) throw new Error("Test course missing");
const concepts = course.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts));
const marksOf = (i: number) => concepts[i].questions.reduce((n, q) => n + q.totalMarks, 0);

describe("buildTermSummary", () => {
  test("strengths, next steps and the set average use only marked work", () => {
    const summary = buildTermSummary({
      courses: [{
        courseId: course.id,
        practisedInTerm: 4,
        concepts: [
          { conceptId: concepts[0].id, earned: marksOf(0), attempted: 2 },
          { conceptId: concepts[1].id, earned: 0, attempted: 1 },
        ],
      }],
      sets: [
        { title: "A", kind: "assignment", createdAt: "2026-09-02T00:00:00Z", totalMarks: 10, status: "marked", marks: 8 },
        { title: "B", kind: "exam", createdAt: "2026-09-09T00:00:00Z", totalMarks: 20, status: "marking", marks: 5 },
        { title: "C", kind: "assignment", createdAt: "2026-09-10T00:00:00Z", totalMarks: 5, status: "not-done", marks: null },
      ],
    });
    const c = summary.courses[0];
    expect(c.conceptsSecure).toBe(1);
    expect(c.strengths).toHaveLength(1);
    expect(c.nextSteps).toHaveLength(1);
    expect(c.units[0].level).not.toBe("not-started");
    expect(summary.setAverage).toBe(80);
    expect(summary.setsDone).toBe(2);
    expect(summary.sets.map((s) => s.result)).toEqual(["8/10 (80%)", "Being marked", "Not completed"]);
  });

  test("unknown courses are skipped and no sets means no average", () => {
    const summary = buildTermSummary({ courses: [{ courseId: "gone", practisedInTerm: 0, concepts: [] }], sets: [] });
    expect(summary.courses).toEqual([]);
    expect(summary.setAverage).toBeNull();
  });
});

test("the term window spans whole local days", () => {
  const { startsAt, endsAt } = termWindow("2026-09-01", "2026-09-01");
  expect(Date.parse(endsAt) - Date.parse(startsAt)).toBe(86_400_000 - 1);
});
