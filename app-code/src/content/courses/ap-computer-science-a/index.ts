import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apComputerScienceA: Course = {
  id: "ap-computer-science-a",
  title: "AP Computer Science A",
  shortTitle: "AP CSA",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Java programming — primitive types, control structures, methods, arrays, ArrayLists, and object-oriented basics — the AP Computer Science A course in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "computer-science-a" },
};
