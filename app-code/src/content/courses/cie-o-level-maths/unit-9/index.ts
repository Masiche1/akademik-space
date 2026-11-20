import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";
import { lesson94 } from "./lesson-9-4.ts";

export const unit9: Unit = {
  id: "olm-u9",
  code: "9",
  title: "Transformations and Vectors",
  description: "Reflections, rotations, translations, enlargements, column vectors and vector geometry.",
  lessons: [lesson91, lesson92, lesson93, lesson94],
};
