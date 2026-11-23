import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apush-u1",
  code: "1",
  title: "Foundations to the Early Republic",
  description: "Colonial societies, the Revolution, the Constitution, and the early national period.",
  lessons: [lesson11, lesson12, lesson13],
};
