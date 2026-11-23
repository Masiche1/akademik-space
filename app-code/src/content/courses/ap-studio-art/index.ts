import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const apStudioArt: Course = {
  id: "ap-studio-art",
  title: "AP Studio Art",
  shortTitle: "AP Studio Art",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Portfolio-based art course — sustained investigation, 2D/3D design, drawing, and critical reflection for college credit.",
  units: [unit1, unit2, unit3, unit4],
  ap: { exam: "studio-art" },
};
