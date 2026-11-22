import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxComputerScienceY11: Course = {
  id: "edx-computerscience-y11",
  title: "Year 11 Computer Science",
  shortTitle: "CS Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Computer Science (4CP1)",
  description:
    "International GCSE Computer Science, second year: advanced systems, networks and security, and programming techniques.",
  units: [unit4, unit5, unit6],
  edexcel: { stage: "igcse", subject: "computer-science", year: 11 },
};
