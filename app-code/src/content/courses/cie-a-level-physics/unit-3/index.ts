import type { Unit } from "../../../types.ts";
import { lesson311 } from "./lesson-3-1.ts";
import { lesson312 } from "./lesson-3-2.ts";
import { lesson313 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "cial-p-unit-3",
  code: "3",
  title: "Thermal Physics",
  description:
    "Temperature, heat transfer, ideal gases, thermodynamics and heat engines.",
  lessons: [lesson311, lesson312, lesson313],
};
