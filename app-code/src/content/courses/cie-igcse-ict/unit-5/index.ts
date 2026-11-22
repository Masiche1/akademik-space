import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { lesson54 } from "./lesson-5-4.ts";

export const unit5: Unit = {
  id: "cieict-u5",
  code: "5",
  title: "ICT Applications in Depth",
  description:
    "Spreadsheet modelling, database design and normalisation, web development and digital media — Cambridge IGCSE ICT 0417.",
  lessons: [lesson51, lesson52, lesson53, lesson54],
};
