import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { exam41 } from "./lesson-4-x1.ts";
import { exam42 } from "./lesson-4-x2.ts";
import { exam43 } from "./lesson-4-x3.ts";
import { exam44 } from "./lesson-4-x4.ts";
import { exam45 } from "./lesson-4-x5.ts";

export const unit4: Unit = {
  id: "edps5-u4",
  code: "4",
  title: "Scientific Enquiry and Investigation",
  description:
    "Year 5 science skills: identifying variables, designing fair tests, collecting and analysing data, presenting findings, drawing conclusions, evaluating investigations and applying enquiry skills across all topics.",
  lessons: [lesson41, lesson42, lesson43, exam41, exam42, exam43, exam44, exam45],
};
