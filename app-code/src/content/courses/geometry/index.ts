import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const geometry: Course = {
  id: "geometry",
  title: "Geometry",
  grade: "Grade 10",
  framework: "Common Core State Standards",
  description:
    "Congruence and proof, trigonometry, transformations and similarity, circles, coordinate geometry and volume, with every theorem justified from first principles.",
  units: [unit1, unit2, unit3, unit4, unit5],
};
