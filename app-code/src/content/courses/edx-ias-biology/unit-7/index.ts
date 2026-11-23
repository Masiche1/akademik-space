import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "ediasbio-u7",
  code: "7",
  number: 7,
  title: "Energy, Respiration and Photosynthesis",
  description:
    "WBI14-style core: aerobic and anaerobic respiration and ATP, photosynthesis in chloroplasts, leaf adaptations for gas exchange, and limiting factors affecting rate.",
  lessons: [lesson71, lesson72, lesson73],
};
