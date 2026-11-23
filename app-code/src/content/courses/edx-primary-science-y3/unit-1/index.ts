import type { Unit } from "../../../types.ts";
import { lesson131 } from "./lesson-1-1.ts";
import { lesson132 } from "./lesson-1-2.ts";
import { lesson133 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edps3-u1",
  code: "1",
  title: "Living Things: Classification, Life Cycles and Food Chains",
  description:
    "Classifying vertebrates and invertebrates, animal and plant life cycles, habitats, adaptations and food chains.",
  lessons: [lesson131, lesson132, lesson133, exam11, exam12, exam13, exam14, exam15],
};
