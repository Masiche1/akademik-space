import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";
import { exam71 } from "./lesson-7-x1.ts";

export const unit7: Unit = {
  id: "cilm-u7",
  code: "7",
  title: "Transformations",
  description:
    "Translations, reflections, rotations, enlargements, describing transformations and patterns — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson71, lesson72, lesson73, exam71],
};
