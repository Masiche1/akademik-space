import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "apush-u2",
  code: "2",
  title: "Antebellum America and the Civil War",
  description: "Slavery, expansion, reform movements, and the Civil War and Reconstruction.",
  lessons: [lesson21, lesson22, lesson23],
};
