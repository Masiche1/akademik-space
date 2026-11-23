import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usEarthSpaceG12: Course = {
  id: "us-earth-space-g12",
  title: "Grade 12 Earth & Space Science",
  shortTitle: "Earth & Space G12",
  grade: "Grade 12",
  framework: "Next Generation Science Standards (NGSS)",
  description: "Explore Earth's systems interactions, weather and climate, natural resources and hazards, and space science.",
  units: [unit1, unit2, unit3, unit4],
  us: { subject: "earth-space", grade: 12 },
};
