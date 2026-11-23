import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "phys11-u5",
  code: "5",
  title: "Capstone: Applied Physics and Evaluation",
  description:
    "Apply mechanics, energy, and waves to real systems; analyze data critically; construct evidence-based arguments; and evaluate physics claims and technologies.",
  lessons: [lesson51, lesson52, lesson53],
};
