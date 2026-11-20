import { describe, expect, test } from "vitest";
import { getCourse } from "@/content/catalog.ts";
import { buildConceptReport, toCsv } from "./report.ts";

const course = getCourse("edx-maths-y10");
if (!course) throw new Error("Test course missing");
const first = course.units[0].lessons[0].concepts[0];
const firstMarks = first.questions.reduce((n, q) => n + q.totalMarks, 0);

describe("buildConceptReport", () => {
  test("uses each student's concept percent and counts not-started students as 0", () => {
    const report = buildConceptReport(course, [
      { userId: "a", name: "Ann", concepts: [{ conceptId: first.id, earned: firstMarks, attempted: first.questions.length }] },
      { userId: "b", name: "Ben", concepts: [] },
    ]);
    expect(report.cells[0][0]).toEqual({ level: "secure", percent: 100, attempted: first.questions.length });
    expect(report.cells[1][0]).toEqual({ level: "not-started", percent: 0, attempted: 0 });
    expect(report.concepts[0]).toMatchObject({ conceptId: first.id, classPercent: 50, counts: { secure: 1, "not-started": 1, learning: 0, developing: 0 } });
  });

  test("caps earned marks at what the concept is worth", () => {
    const report = buildConceptReport(course, [{ userId: "a", name: "Ann", concepts: [{ conceptId: first.id, earned: firstMarks * 5, attempted: 1 }] }]);
    expect(report.cells[0][0].percent).toBe(100);
  });
});

test("CSV escapes commas, quotes and line breaks", () => {
  expect(toCsv([["Smith, Jo", 'Say "hi"', "a\nb", 5]])).toBe('"Smith, Jo","Say ""hi""","a\nb",5');
});
