import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";

export const unit2: Unit = {
  id: "edxpg-u2",
  code: "2",
  title: "The United Kingdom",
  description:
    "Y3-Y6: Four countries of the UK, regions and cities, life and culture, UK in Europe and the world, communities.",
  lessons: [lesson21, lesson22, lesson23, exam21, exam22, exam23, exam24],
};
