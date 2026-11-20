import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { lesson24 } from "./lesson-2-4.ts";

export const unit2: Unit = {
  id: "cialfm-u2",
  code: "2",
  title: "Matrices",
  description: "Matrix operations, inverses, determinants, systems of equations, eigenvalues and matrix transformations.",
  lessons: [lesson21, lesson22, lesson23, lesson24],
};
