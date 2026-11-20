import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "pypsc-u3",
  code: "3",
  title: "Earth, Space and Science Inquiry",
  description:
    "Weather, seasons and the water cycle; the Sun, Earth and Moon; and the skills of a scientist — observing, predicting, fair testing and recording — connected to the themes Where We Are in Place and Time and How the World Works.",
  lessons: [lesson31, lesson32, lesson33],
};
