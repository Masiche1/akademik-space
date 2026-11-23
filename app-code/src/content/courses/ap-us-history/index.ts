import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apUsHistory: Course = {
  id: "ap-us-history",
  title: "AP United States History",
  shortTitle: "APUSH",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Colonial America through the modern era — political, social, economic, and cultural change in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "us-history" },
};
