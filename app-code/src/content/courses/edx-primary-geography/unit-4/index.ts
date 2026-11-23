import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { exam41 } from "./lesson-4-x1.ts";
import { exam42 } from "./lesson-4-x2.ts";
import { exam43 } from "./lesson-4-x3.ts";
import { exam44 } from "./lesson-4-x4.ts";

export const unit4: Unit = {
  id: "edxpg-u4",
  code: "4",
  title: "Map Skills and Fieldwork",
  description:
    "Y3-Y6: Reading maps, keys and symbols, compass directions, map scale, fieldwork and data recording, local area study, OS maps, geographical enquiry.",
  lessons: [lesson41, lesson42, lesson43, exam41, exam42, exam43, exam44],
};
