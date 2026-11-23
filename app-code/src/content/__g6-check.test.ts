import { describe, it, expect } from "vitest";
import { usMathG6 } from "./courses/us-math-g6";
import { usElaG6 } from "./courses/us-ela-g6";
import { usScienceG6 } from "./courses/us-science-g6";
import { validateUnit } from "./validate";

const courses = [
  { id: "us-math-g6", course: usMathG6 },
  { id: "us-ela-g6", course: usElaG6 },
  { id: "us-science-g6", course: usScienceG6 },
];

describe("Grade 6 US courses", () => {
  for (const { id, course } of courses) {
    it(`${id} has valid structure`, () => {
      expect(course.units.length).toBeGreaterThanOrEqual(7);
      let totalQuestions = 0;
      for (const unit of course.units) {
        for (const lesson of unit.lessons) {
          for (const concept of lesson.concepts) {
            totalQuestions += concept.questions.length;
          }
        }
      }
      expect(totalQuestions).toBeGreaterThanOrEqual(300);
    });

    it(`${id} units pass validation`, () => {
      for (const unit of course.units) {
        const errors = validateUnit(unit);
        expect(errors, `${id} unit ${unit.id}: ${errors.join(", ")}`).toHaveLength(0);
      }
    });
  }
});
