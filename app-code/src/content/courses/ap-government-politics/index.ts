import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apGovernmentPolitics: Course = {
  id: "ap-government-politics",
  title: "AP United States Government and Politics",
  shortTitle: "AP Gov",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "The Constitution, political behavior, parties, institutions, civil liberties, and public policy in exam-style questions.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "government-politics" },
};
