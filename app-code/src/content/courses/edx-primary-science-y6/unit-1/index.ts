import type { Unit } from "../../../types.ts";
import { lesson161 } from "./lesson-1-1.ts";
import { lesson162 } from "./lesson-1-2.ts";
import { lesson163 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edps6-u1",
  code: "1",
  title: "Living Things: Classification, Food Webs and Survival",
  description:
    "Classification groups, adaptations and evolution, food webs and ecosystems, habitats and survival strategies.",
  lessons: [lesson161, lesson162, lesson163, exam11, exam12, exam13, exam14, exam15],
};
