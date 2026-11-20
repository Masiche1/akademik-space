import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ciem-u4",
  code: "4",
  title: "Geometry",
  description:
    "Angle properties, polygon angle sums, triangle congruence and similarity, and circle theorems — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson41, lesson42, lesson43],
};
