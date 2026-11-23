import { describe, it, expect } from "vitest";
import { validateUnit, findLatexErrors, findQuestionErrors, validateEnglishUnit } from "./validate";
import type { Course, Unit } from "./types";
import { usMathG1 } from "./courses/us-math-g1/index";
import { usElaG1 } from "./courses/us-ela-g1/index";
import { usScienceG1 } from "./courses/us-science-g1/index";

const courses: Course[] = [usMathG1, usElaG1, usScienceG1];

describe("Grade 1 courses", () => {
  for (const course of courses) {
    it(`${course.id}: structure`, () => {
      expect(course.units.length).toBe(8);
      let lessons = 0, qs = 0;
      for (const u of course.units) {
        lessons += u.lessons.length;
        for (const l of u.lessons) {
          for (const c of l.concepts ?? []) qs += c.questions.length;
        }
      }
      expect(lessons).toBe(40);
      expect(qs).toBeGreaterThanOrEqual(300);
    });

    it(`${course.id}: LaTeX clean`, () => {
      const errors: string[] = [];
      for (const u of course.units) {
        for (const e of findLatexErrors(u as unknown as Unit)) errors.push(...e);
      }
      expect(errors).toEqual([]);
    });

    it(`${course.id}: units validate`, () => {
      const errors: string[] = [];
      for (const u of course.units) {
        for (const e of validateUnit(u as unknown as Unit)) errors.push(...e);
        for (const q of (u as unknown as { lessons: { concepts: { questions: unknown[] }[] }[] }).lessons.flatMap(l => l.concepts).flatMap(c => c.questions)) {
          const qe = findQuestionErrors(q as never);
          if (qe.length) errors.push(...qe.map((m: string) => `${u.id}: ${m}`));
        }
      }
      expect(errors).toEqual([]);
    });

    if (course.id.includes("ela")) {
      it(`${course.id}: English rules`, () => {
        const errors: string[] = [];
        for (const u of course.units) {
          for (const e of validateEnglishUnit(u as never)) errors.push(...e);
        }
        expect(errors).toEqual([]);
      });
    }
  }
});
