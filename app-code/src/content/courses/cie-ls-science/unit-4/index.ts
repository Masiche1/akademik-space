import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "cils-u4",
  code: "4",
  title: "Human Body Systems",
  description:
    "Digestive, circulatory, respiratory, nervous, musculoskeletal systems, hormones, reproduction and ecosystem basics — Cambridge Lower Secondary Science 0893.",
  lessons: [lesson41, lesson42, lesson43],
};
