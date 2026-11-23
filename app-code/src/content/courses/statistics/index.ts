import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const statistics: Course = {
  id: "statistics",
  title: "Statistics",
  shortTitle: "Statistics",
  grade: "Grade 12",
  framework: "Common Core State Standards for Mathematics — Statistics",
  description: "Summarize and interpret data, make inferences from samples, apply probability rules, and use probability for decision-making.",
  units: [unit1, unit2, unit3],
};
