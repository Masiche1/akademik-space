import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { exam51 } from "./lesson-5-x1.ts";

export const unit5: Unit = {
  id: "cilm-u5",
  code: "5",
  title: "Angles, Shapes and Symmetry",
  description:
    "Angle rules, triangles, polygons, circles and lines of symmetry — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson51, lesson52, lesson53, exam51],
};
