import { writeFileSync } from "node:fs";
import { expect, test } from "vitest";
import { getCourse } from "@/content/catalog.ts";
import { buildTermPdf } from "./term-pdf.ts";
import type { TermStudentData } from "./term-report.ts";

const course = getCourse("edx-maths-y10");
if (!course) throw new Error("Test course missing");
const concepts = course.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts));

const student = (name: string): TermStudentData => ({
  title: "Autumn 2026 mid-term",
  kind: "midterm",
  startDate: "2026-09-01",
  endDate: "2026-10-31",
  className: "10B Maths",
  orgName: "Northside High",
  teacherName: "Tara Teacher",
  studentName: name,
  comment: "Zoë has worked hard this term. ".repeat(40),
  courses: [course.id, "ib-aa-hl-1"].map((courseId) => ({
    courseId,
    practisedInTerm: 12,
    concepts: concepts.slice(0, 8).map((c, i) => ({ conceptId: c.id, earned: i, attempted: 1 })),
  })),
  sets: Array.from({ length: 12 }, (_, i) => ({
    title: `Set ${i + 1}`, kind: i % 3 ? "assignment" : "exam", createdAt: "2026-09-10T09:00:00Z", totalMarks: 10,
    status: i % 4 ? "marked" : "marking", marks: i % 10,
  })),
});

test("builds a multi-page PDF per student with long content", () => {
  const doc = buildTermPdf([student("Zoë Brontë"), student("Sam Student")]);
  expect(doc.getNumberOfPages()).toBeGreaterThanOrEqual(4);
  const out = doc.output("arraybuffer");
  expect(out.byteLength).toBeGreaterThan(5000);
  // Opt-in preview for layout review: TERM_PDF_OUT=/tmp/x.pdf
  const target = process.env.TERM_PDF_OUT;
  if (target) writeFileSync(target, Buffer.from(out));
});
