import type { Unit } from "../../../types.ts";
import { lesson151 } from "./lesson-1-1.ts";
import { lesson152 } from "./lesson-1-2.ts";
import { lesson153 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edps5-u1",
  code: "1",
  title: "Living Things: Food Chains, Life Cycles and Evolution",
  description:
    "Food chains and energy transfer, ecosystems and human impact, life cycles including fungi and plants, classification keys and natural selection.",
  lessons: [lesson151, lesson152, lesson153, exam11, exam12, exam13, exam14, exam15],
};
