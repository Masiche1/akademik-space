import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "aahl-u3",
  code: "3",
  title: "Vectors",
  description: "Develop vector methods in three dimensions: magnitude and scalar product, lines and their relationships, the vector product, and equations of planes with intersections and angles.",
  lessons: [lesson31, lesson32, lesson33],
};
