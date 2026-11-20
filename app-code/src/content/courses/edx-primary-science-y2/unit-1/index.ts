import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edps2-u1",
  code: "1",
  title: "Living Things",
  description:
    "Classifying animals, life cycles, habitats and adaptations, the human body, plants and seasonal change.",
  lessons: [lesson101, lesson102, lesson103],
};
