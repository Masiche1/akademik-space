import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edialbio-u2",
  code: "2",
  title: "Cells, Development, Biodiversity and Conservation",
  description:
    "WBI12: cell structure and organisation, development and differentiation, biodiversity, classification, conservation and genetics.",
  lessons: [lesson21, lesson22, lesson23],
};
