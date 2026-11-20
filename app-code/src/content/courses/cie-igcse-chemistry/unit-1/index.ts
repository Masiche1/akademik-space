import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-1-1.ts";
import { lesson112 } from "./lesson-1-2.ts";
import { lesson113 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ciecy-u1",
  code: "1",
  title: "States of Matter",
  description:
    "The particle model, gas laws, changing state, diffusion and separating mixtures — Cambridge IGCSE Chemistry 0654.",
  lessons: [lesson111, lesson112, lesson113],
};
