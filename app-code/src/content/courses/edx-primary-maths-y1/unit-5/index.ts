import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edpm1-u5",
  code: "5",
  title: "Number Bonds and Quick Recall",
  description:
    "Year 1: securing number bonds to 10 and 20, doubles and halves, counting in 2s, 5s and 10s, and rapid recall of addition and subtraction facts.",
  lessons: [lesson51, lesson52, lesson53],
};
