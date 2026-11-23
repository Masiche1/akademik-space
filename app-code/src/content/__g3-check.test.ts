import { describe, it, expect } from "vitest";
import { usMathG3 } from "./courses/us-math-g3/index.ts";
import { usElaG3 } from "./courses/us-ela-g3/index.ts";
import { usScienceG3 } from "./courses/us-science-g3/index.ts";
import { validateUnit, findLatexErrors, findQuestionErrors } from "./validate.ts";

const courses = [usMathG3, usElaG3, usScienceG3];

describe("US Grade 3 courses", () => {
  it("each course has 300+ questions", () => {
    for (const course of courses) {
      const total = course.units.reduce(
        (sum, u) => sum + u.lessons.reduce((s, l) => s + l.concepts.reduce((cs, c) => cs + c.questions.length, 0), 0),
        0,
      );
      expect(total).toBeGreaterThanOrEqual(300);
    }
  });

  it("all units pass validateUnit", () => {
    for (const course of courses) {
      for (const unit of course.units) {
        const errors = validateUnit(unit);
        expect(errors, `${course.id}/${unit.id}: ${errors.join("; ")}`).toEqual([]);
      }
    }
  });

  it("all LaTeX is clean", () => {
    for (const course of courses) {
      const errors = findLatexErrors(course);
      expect(errors, `${course.id}: ${errors.join("; ")}`).toEqual([]);
    }
  });

  it("all questions pass findQuestionErrors", () => {
    for (const course of courses) {
      for (const unit of course.units) {
        for (const lesson of unit.lessons) {
          for (const concept of lesson.concepts) {
            for (const q of concept.questions) {
              const errors = findQuestionErrors(q);
              expect(errors, `${course.id}/${unit.id}/${lesson.slug}/${q.id}: ${errors.join("; ")}`).toEqual([]);
            }
          }
        }
      }
    }
  });
});
