import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "physsl-u2",
  code: "2",
  title: "Work, Energy and Circular Motion",
  description:
    "Work done by forces, kinetic and gravitational potential energy, conservation of energy and efficiency, mechanical power, and an introduction to uniform circular motion.",
  lessons: [lesson21, lesson22, lesson23],
};
