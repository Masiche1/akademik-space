import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edialpm-u6",
  code: "6",
  title: "Further Pure Mathematics 2",
  description:
    "WFM02 FP2: hyperbolic functions and their inverses, polar coordinates including tangents and intersections, and areas and arc lengths in polar form.",
  lessons: [lesson61, lesson62, lesson63],
};
