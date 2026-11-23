import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { exam41 } from "./lesson-4-x1.ts";
import { exam42 } from "./lesson-4-x2.ts";
import { exam43 } from "./lesson-4-x3.ts";
import { exam44 } from "./lesson-4-x4.ts";

export const unit4: Unit = {
  id: "edxph-u4",
  code: "4",
  title: "Significant People, Events and Enquiry",
  description:
    "Y5-Y6: Explorers, inventors and leaders, major 20th-century events, archives and museums, evaluating evidence, conducting enquiries, key dates and historical themes.",
  lessons: [lesson41, lesson42, lesson43, exam41, exam42, exam43, exam44],
};
