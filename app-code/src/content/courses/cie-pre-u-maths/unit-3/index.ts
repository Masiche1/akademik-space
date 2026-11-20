import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "cipum-u3",
  code: "3",
  title: "Calculus",
  description:
    "Differentiation, integration and applications — rates of change, optimisation and kinematics — Cambridge Pre-U Mathematics 9794 Pure Mathematics.",
  lessons: [lesson31, lesson32, lesson33],
};
