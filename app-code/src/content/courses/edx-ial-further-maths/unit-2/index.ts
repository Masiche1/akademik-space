import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edialfm-u2",
  code: "2",
  title: "Further Pure Mathematics 2",
  description:
    "WFM02 FP2: hyperbolic functions and their inverses, polar coordinates including tangents and intersections, and areas and arc lengths in polar form.",
  lessons: [lesson21, lesson22, lesson23],
};
