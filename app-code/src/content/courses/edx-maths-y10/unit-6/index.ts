import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edm10-u6",
  code: "6",
  title: "Mensuration, Coordinate Geometry and Similarity",
  description:
    "Volumes and surface areas of prisms, cylinders and composite solids; midpoints, distances, gradients and equations of straight lines; similar shapes, enlargements and area and volume scale factors.",
  lessons: [lesson61, lesson62, lesson63],
};
