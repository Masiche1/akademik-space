import type { Unit } from "../../../types.ts";
import { lessonp101 } from "./lesson-10-1.ts";
import { lessonp102 } from "./lesson-10-2.ts";
import { lessonp103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ciep-u10",
  code: "10",
  title: "Space",
  description:
    "Solar system, planets, stars, galaxies and the expanding universe — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp101, lessonp102, lessonp103],
};
