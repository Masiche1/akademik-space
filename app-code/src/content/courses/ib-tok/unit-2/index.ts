import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { lesson24 } from "./lesson-2-4.ts";

export const unit2: Unit = {
  id: "tok-u2",
  code: "2",
  title: "Areas of Knowledge",
  description: "Compare the nature and methods of knowledge in mathematics, the natural and human sciences, history, ethics, the arts and religion — asking what each area can and cannot tell us about the world.",
  lessons: [lesson21, lesson22, lesson23, lesson24],
};
