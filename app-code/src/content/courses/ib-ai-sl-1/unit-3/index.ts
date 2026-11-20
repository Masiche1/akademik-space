import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "aisl-u3",
  code: "3",
  title: "Geometry and Trigonometry",
  description: "Calculate distances, volumes and angles in three dimensions; solve triangles with the sine and cosine rules in bearing and elevation problems; and use arcs, sectors, perpendicular bisectors and Voronoi diagrams to solve spatial problems.",
  lessons: [lesson31, lesson32, lesson33],
};
