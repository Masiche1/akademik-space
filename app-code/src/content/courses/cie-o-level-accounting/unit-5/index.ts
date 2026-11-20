import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "olacc-u5",
  code: "5",
  title: "Incomplete Records",
  description:
    "Accounting for businesses without full double-entry records — Cambridge O Level Accounting 7706.",
  lessons: [lesson51, lesson52, lesson53],
};
