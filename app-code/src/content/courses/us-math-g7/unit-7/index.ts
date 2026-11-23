import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "m7-u7",
  code: "7",
  title: "Geometry in Depth",
  description:
    "Deepen geometric reasoning: circle measurements, angles in circles and polygons, surface area and volume of three-dimensional figures, scale drawings, and real-world geometry applications.",
  lessons: [lesson71, lesson72, lesson73],
};
