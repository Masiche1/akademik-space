import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edialbio-u4",
  code: "4",
  title: "Respiration, Internal Environment, Coordination and Gene Technology",
  description:
    "WBI15: aerobic and anaerobic respiration, homeostasis and negative feedback, nervous and hormonal coordination, and gene technology.",
  lessons: [lesson41, lesson42, lesson43],
};
