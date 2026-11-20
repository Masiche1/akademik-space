import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edialpm-u4",
  code: "4",
  title: "Pure Mathematics 4",
  description:
    "WMA14 P4: vectors in 3D and vector equations of lines, polar coordinates and parametric equations, and differential equations, hyperbolic functions and improper integrals.",
  lessons: [lesson41, lesson42, lesson43],
};
