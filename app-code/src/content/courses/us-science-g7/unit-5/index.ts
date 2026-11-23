import type { Unit } from "../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "s7-u5",
  code: "5",
  title: "Life Science Deep Dive: Cells and Body Systems",
  description:
    "Explore cell membranes and transport, the circulatory and respiratory systems, and the digestive and immune systems in depth.",
  lessons: [lesson51, lesson52, lesson53],
};
