import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "pc-u4",
  code: "4",
  title: "Vectors, Matrices and Complex Numbers",
  description: "Represent and combine vectors in component form, use the dot product in geometric and physical applications, perform matrix operations and solve systems with inverses, and work with complex numbers in polar form including De Moivre's Theorem.",
  lessons: [lesson41, lesson42, lesson43],
};
