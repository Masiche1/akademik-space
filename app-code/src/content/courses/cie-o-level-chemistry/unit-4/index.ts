import type { Unit } from "../../../types.ts";
import { lesson141 } from "./lesson-4-1.ts";
import { lesson142 } from "./lesson-4-2.ts";
import { lesson143 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olchem-u4",
  code: "4",
  title: "Electrochemistry",
  description:
    "Electrolysis, cells, redox reactions, oxidation numbers and the reactivity series — Cambridge O Level Chemistry 5070.",
  lessons: [lesson141, lesson142, lesson143],
};
