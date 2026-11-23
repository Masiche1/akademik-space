import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apSeminar: Course = {
  id: "ap-seminar",
  title: "AP Seminar",
  shortTitle: "AP Seminar",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Academic inquiry, evidence evaluation, argumentation, and collaborative research methods for college readiness.",
  units: [unit1, unit2, unit3],
  ap: { exam: "seminar" },
};
