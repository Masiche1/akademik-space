import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edxbtechsc-u5",
  code: "5",
  number: 5,
  title: "Unit 5: Health Conditions and Physiology",
  description:
    "The body's major systems and common chronic conditions: cardiovascular and respiratory physiology, metabolism and hormonal control, and the causes, risk factors and care needs of diabetes, hypertension and cardiovascular disease.",
  lessons: [lesson51, lesson52, lesson53],
};
