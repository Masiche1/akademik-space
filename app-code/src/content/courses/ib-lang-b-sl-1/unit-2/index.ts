import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "langb-u2",
  code: "2",
  number: 2,
  title: "Productive Skills",
  description:
    "Move from accurate paragraphs to simple essays, learn register and audience awareness, and practise structured writing tasks including descriptions, narratives and instructions.",
  lessons: [lesson21, lesson22, lesson23],
};
