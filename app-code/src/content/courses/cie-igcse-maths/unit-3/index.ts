import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ciem-u3",
  code: "3",
  title: "Coordinate Geometry",
  description:
    "Gradients and equations of straight lines, parallel and perpendicular lines, circles, tangents, distances and coordinate problem solving — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson31, lesson32, lesson33],
};
