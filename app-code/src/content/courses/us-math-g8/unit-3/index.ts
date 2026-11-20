import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "m8-u3",
  code: "3",
  title: "Geometry",
  description: "Transform figures with translations, reflections, rotations and dilations, use angle relationships and the Pythagorean Theorem, and find the volume of cylinders, cones, spheres and composite solids.",
  lessons: [lesson31, lesson32, lesson33],
};
