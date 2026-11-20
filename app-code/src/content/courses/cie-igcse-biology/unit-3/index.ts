import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "cieb-u3",
  code: "3",
  title: "Nutrition",
  description:
    "Photosynthesis, plant mineral requirements, balanced diet, and digestion — Cambridge IGCSE Biology 0653.",
  lessons: [lesson31, lesson32, lesson33],
};
