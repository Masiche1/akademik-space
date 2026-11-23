import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const satReadingWriting: Course = {
  id: "sat-reading-writing",
  title: "SAT Reading and Writing",
  shortTitle: "SAT R&W",
  grade: "11-12",
  framework: "College Board SAT",
  description: "Reading comprehension, evidence-based analysis, rhetoric, grammar, and expression — the SAT Reading and Writing section in exam-style questions.",
  units: [unit1, unit2, unit3],
  sat: { section: "reading-writing" },
};
