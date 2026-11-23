import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";

export const unit4: Unit = {
  id: "apmt-u4",
  code: "4",
  title: "Analysis and Composition",
  description: "Musical analysis, form, and composition techniques.",
  lessons: [lesson41, lesson42],
};
