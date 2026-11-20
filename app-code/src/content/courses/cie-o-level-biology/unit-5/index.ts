import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "olbio-u5",
  code: "5",
  title: "Respiration and Gas Exchange",
  description:
    "Aerobic and anaerobic respiration, uses of energy, ventilation, and gas exchange in alveoli — Cambridge O Level Biology 5090.",
  lessons: [lesson51, lesson52, lesson53],
};
