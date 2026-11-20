import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "cipuc-u2",
  code: "2",
  title: "Organic, Inorganic and Environmental Chemistry",
  description:
    "Organic structure and reactions, polymers and spectroscopy, transition metals, complexes and qualitative analysis — Cambridge Pre-U Chemistry 9791.",
  lessons: [lesson21, lesson22, lesson23],
};
