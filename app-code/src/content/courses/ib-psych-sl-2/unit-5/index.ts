import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "psych-u5",
  code: "5",
  title: "Abnormal Psychology",
  description:
    "How abnormality is defined and classified; anxiety disorders, depression, OCD, schizophrenia, personality disorders and treatment approaches.",
  lessons: [lesson51, lesson52, lesson53],
};
