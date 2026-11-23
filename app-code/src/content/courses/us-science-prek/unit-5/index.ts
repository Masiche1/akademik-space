import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { lesson54 } from "./lesson-5-4.ts";
import { lesson55 } from "./lesson-5-5.ts";

export const unit5: Unit = {
  id: "spk-u5",
  code: "5",
  title: "Materials and Properties",
  description: "Explore materials: sort by properties like hard/soft, rough/smooth, heavy/light, and test which materials suit which jobs.",
  lessons: [lesson51, lesson52, lesson53, lesson54, lesson55],
};
