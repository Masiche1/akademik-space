import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypc5-unit-3",
  number: 3,
  code: "3",
  title: "Materials, Organic and Environmental Chemistry",
  description:
    "Polymers and plastics, combustion and atmospheric chemistry, chemical analysis techniques and green chemistry principles.",
  lessons: [lesson31, lesson32, lesson33],
};
