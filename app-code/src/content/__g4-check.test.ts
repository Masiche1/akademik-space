import { describe, expect, it } from "vitest";
import { usMathG4 } from "./courses/us-math-g4/index.ts";
import { usElaG4 } from "./courses/us-ela-g4/index.ts";
import { usScienceG4 } from "./courses/us-science-g4/index.ts";
import { findLatexErrors, findQuestionErrors, validateUnit } from "./validate.ts";
import type { Course, Unit } from "./types.ts";

const courses: Course[] = [usMathG4, usElaG4, usScienceG4];

function* allQuestions(course: Course) {
  for (const unit of course.units) {
    for (const lesson of unit.lessons) {
      for (const concept of lesson.concepts) {
        for (const q of concept.questions) {
          yield { unit, lesson, concept, q };
        }
      }
    }
  }
}

describe("US Grade 4 courses", () => {
  it("each course has 300+ questions", () => {
    for (const course of courses) {
      let count = 0;
      for (const _ of allQuestions(course)) count++;
      expect(count, `${course.id} has ${count} questions`).toBeGreaterThanOrEqual(300);
    }
  });

  it("all units pass validateUnit", () => {
    for (const course of courses) {
      for (const unit of course.units) {
        const errors = validateUnit(unit as Unit);
        expect(errors, `${course.id}/${unit.id}: ${errors.join("; ")}`).toEqual([]);
      }
    }
  });

  it("all LaTeX is clean", () => {
    for (const course of courses) {
      for (const { q } of allQuestions(course)) {
        const errors = findLatexErrors(q as never);
        expect(errors, `${course.id} q ${q.id}: ${errors.join("; ")}`).toEqual([]);
      }
    }
  });

  it("all questions pass findQuestionErrors", () => {
    for (const course of courses) {
      for (const { q } of allQuestions(course)) {
        const errors = findQuestionErrors(q as never);
        expect(errors, `${course.id} q ${q.id}: ${errors.join("; ")}`).toEqual([]);
      }
    }
  });
});
