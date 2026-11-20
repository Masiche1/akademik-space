import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "biohl-u2",
  code: "2",
  title: "Metabolism: Respiration and Photosynthesis",
  description:
    "Additional higher level detail of glycolysis, the Krebs cycle, oxidative phosphorylation and the light reactions, Calvin cycle and limiting factors of photosynthesis.",
  lessons: [lesson21, lesson22, lesson23],
};
