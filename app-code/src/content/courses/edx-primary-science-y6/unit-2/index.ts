import type { Unit } from "../../../types.ts";
import { lesson211 } from "./lesson-2-1.ts";
import { lesson212 } from "./lesson-2-2.ts";
import { lesson213 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edps6-u2",
  code: "2",
  title: "The Human Body: Nutrition, Systems and Reproduction",
  description:
    "Nutrition and digestion, circulation and breathing, nervous system, excretion and reproduction.",
  lessons: [lesson211, lesson212, lesson213, exam21, exam22, exam23, exam24, exam25],
};
