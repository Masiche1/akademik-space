import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const satPracticeStrategy: Course = {
  id: "sat-practice-strategy",
  title: "SAT Practice and Strategy",
  shortTitle: "SAT Prep",
  grade: "11-12",
  framework: "College Board SAT",
  description: "Test-day strategy, time management, question-type tactics, and score interpretation for the digital SAT — Reading & Writing and Math.",
  units: [unit1, unit2, unit3],
  sat: { section: "practice" },
};
