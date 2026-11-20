import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "olcs-u7",
  code: "7",
  title: "Algorithm Design and Problem-Solving",
  description:
    "Program development, decomposition, standard algorithms, validation and testing — Cambridge O Level Computer Science 2210 topic 7.",
  lessons: [lesson71, lesson72, lesson73],
};
