import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { lesson44 } from "./lesson-4-4.ts";
import { lesson45 } from "./lesson-4-5.ts";
import { lesson46 } from "./lesson-4-6.ts";

export const unit4: Unit = {
  id: "olm-u4",
  code: "4",
  title: "Geometry",
  description: "Angles, polygons, congruence, similarity, Pythagoras, circle theorems, loci, constructions and symmetry.",
  lessons: [lesson41, lesson42, lesson43, lesson44, lesson45, lesson46],
};
