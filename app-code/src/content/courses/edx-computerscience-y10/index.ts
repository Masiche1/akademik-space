import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxComputerScienceY10: Course = {
  id: "edx-computerscience-y10",
  title: "Year 10 Computer Science",
  shortTitle: "CS Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Computer Science (4CP1)",
  description:
    "International GCSE Computer Science, first year: computer systems, programming fundamentals, networks and data handling.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "computer-science", year: 10 },
};
