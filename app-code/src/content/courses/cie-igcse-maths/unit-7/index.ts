import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "ciem-u7",
  code: "7",
  title: "Transformations",
  description:
    "Translations, reflections, rotations, enlargements, symmetry, and inverse and combined transformations — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson71, lesson72, lesson73],
};
