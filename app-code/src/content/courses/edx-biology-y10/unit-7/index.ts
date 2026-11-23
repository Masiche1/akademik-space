import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "ebi10-u7",
  code: "7",
  number: 7,
  title: "Health, Disease and Immunity",
  description:
    "Study pathogens and transmission, white blood cells and antibody responses, vaccination and memory cells, blood clotting and hygiene measures that control disease.",
  lessons: [lesson71, lesson72, lesson73],
};
