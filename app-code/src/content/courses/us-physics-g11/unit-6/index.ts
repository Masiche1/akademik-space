import type { Unit } from "../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "phys11-u6",
  code: "6",
  title: "Kinematics Deep Dive",
  description:
    "Motion graphs, kinematic equations, relative motion, acceleration, projectile motion, circular motion, and real-world applications.",
  lessons: [lesson61, lesson62, lesson63],
};
