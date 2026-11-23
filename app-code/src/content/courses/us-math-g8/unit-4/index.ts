import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "m8-u4",
  code: "4",
  title: "Capstone: Applying Grade 8 Math",
  description:
    "Apply exponents, linear equations, systems, functions, geometry, transformations, and data analysis to real-world problems.",
  lessons: [lesson41, lesson42, lesson43],
};
