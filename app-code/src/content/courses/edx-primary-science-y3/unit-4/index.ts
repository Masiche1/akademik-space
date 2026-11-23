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
  id: "edps3-u4",
  code: "4",
  title: "Scientific Enquiry Skills",
  description:
    "Year 3 science skills: forming testable questions, planning fair tests, recording and analysing data, drawing conclusions, evaluating investigations and connecting science to the real world.",
  lessons: [lesson41, lesson42, lesson43, exam41, exam42, exam43, exam44, exam45],
};
