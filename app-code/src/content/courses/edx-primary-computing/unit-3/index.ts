import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";
import { exam35 } from "./lesson-3-x5.ts";

export const unit3: Unit = {
  id: "edxpc-u3",
  code: "3",
  title: "Data and Information",
  description:
    "Y3-Y6: What data is, input and output, presenting data, sorting and searching, queries, sensors.",
  lessons: [lesson31, lesson32, lesson33, exam31, exam32, exam33, exam34, exam35],
};
