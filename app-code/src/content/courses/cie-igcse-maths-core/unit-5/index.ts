import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "cimg-u5",
  code: "5",
  title: "Mensuration",
  description: "Area, perimeter, surface area and volume of common shapes.",
  lessons: [lesson51, lesson52, lesson53],
};
