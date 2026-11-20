import type { Unit } from "../../../types.ts";
import { lesson1101 } from "./lesson-10-1.ts";
import { lesson1102 } from "./lesson-10-2.ts";
import { lesson1103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ciecy-u10",
  code: "10",
  title: "Organic Chemistry",
  description:
    "Hydrocarbons, homologous series, alkanes, alkenes, cracking, polymers, esters and organic reactions — Cambridge IGCSE Chemistry 0654.",
  lessons: [lesson1101, lesson1102, lesson1103],
};
