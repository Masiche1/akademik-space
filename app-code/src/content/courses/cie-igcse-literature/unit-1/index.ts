import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cieilit-u1",
  code: "1",
  title: "Reading Literature",
  description:
    "Themes and meaning, writers' methods, and close reading of unseen texts — Cambridge IGCSE Literature in English 0475.",
  lessons: [lesson11, lesson12, lesson13],
};
