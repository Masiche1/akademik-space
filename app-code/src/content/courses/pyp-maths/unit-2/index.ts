import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "pypm-u2",
  code: "2",
  title: "Geometry and Measurement",
  description:
    "Two- and three-dimensional shapes, position and direction, measuring length, area and perimeter, and telling time, mass and capacity — connected to the transdisciplinary themes Where We Are in Place and Time and How the World Works.",
  lessons: [lesson21, lesson22, lesson23],
};
