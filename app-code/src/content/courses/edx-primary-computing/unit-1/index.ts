import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edxpc-u1",
  code: "1",
  title: "Digital Literacy",
  description:
    "Y1-Y3: Digital devices, using computers and tablets, files and folders, saving work.",
  lessons: [lesson11, lesson12, lesson13, exam11, exam12, exam13, exam14, exam15],
};
