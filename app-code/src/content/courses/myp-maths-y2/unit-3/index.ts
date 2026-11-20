import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypm2-u3",
  code: "3",
  title: "Geometry and Statistics",
  description: "Work with circles, arcs, sectors and cylinders, transform shapes and use bearings, scale drawings and parallel line angles, and analyse grouped data, scatter graphs and probability using sample spaces, Venn diagrams and two-way tables.",
  lessons: [lesson31, lesson32, lesson33],
};
