import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";

export const unit10: Unit = {
  id: "olam-u10",
  code: "10",
  title: "Vectors in Two Dimensions",
  description: "2D vector notation, magnitude, unit vectors, position vectors, section formula and collinearity.",
  lessons: [lesson101, lesson102],
};
