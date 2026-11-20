import type { Unit } from "../../../types.ts";
import { lesson321 } from "./lesson-3-1.ts";
import { lesson322 } from "./lesson-3-2.ts";
import { lesson323 } from "./lesson-3-3.ts";
import { lesson324 } from "./lesson-3-4.ts";
import { lesson325 } from "./lesson-3-5.ts";

export const unit3: Unit = {
  id: "cieigeo-u3",
  code: "3",
  title: "Geographical Skills",
  description:
    "Fieldwork, data interpretation, map skills, statistics and GIS — Cambridge IGCSE Geography 0460 Paper 4.",
  lessons: [lesson321, lesson322, lesson323, lesson324, lesson325],
};
