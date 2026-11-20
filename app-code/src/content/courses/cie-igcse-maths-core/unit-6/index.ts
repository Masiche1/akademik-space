import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";

export const unit6: Unit = {
  id: "cimg-u6",
  code: "6",
  title: "Trigonometry",
  description: "Right-angled trigonometry, bearings and angles of elevation and depression.",
  lessons: [lesson61, lesson62],
};
