import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edm10-u3",
  code: "3",
  title: "Geometry and Trigonometry",
  description:
    "Angle reasoning in polygons and circles, trigonometry in right-angled and non-right-angled triangles, and the measurement of arcs, sectors and solids such as cones, spheres and pyramids.",
  lessons: [lesson31, lesson32, lesson33],
};
