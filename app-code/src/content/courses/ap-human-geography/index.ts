import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apHumanGeography: Course = {
  id: "ap-human-geography",
  title: "AP Human Geography",
  shortTitle: "AP Human Geo",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Population, migration, cultural patterns, political geography, urbanization, agriculture, industry, and development.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "human-geography" },
};
