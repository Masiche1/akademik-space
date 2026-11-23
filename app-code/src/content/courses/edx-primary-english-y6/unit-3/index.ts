import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-3-1.ts";
import { lesson122 } from "./lesson-3-2.ts";
import { lesson123 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";
import { exam35 } from "./lesson-3-x5.ts";

export const unit3: Unit = {
  id: "edpe6-u3",
  code: "3",
  title: "Writing Skills",
  description:
    "Formal and persuasive writing, narrative craft, descriptive writing, editing and proofreading.",
  lessons: [lesson121, lesson122, lesson123, exam31, exam32, exam33, exam34, exam35],
};
