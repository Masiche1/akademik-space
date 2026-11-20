import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olacc-u4",
  code: "4",
  title: "Further Books of Prime Entry",
  description:
    "Petty cash book, sales and purchases returns, and three-column cash book — Cambridge O Level Accounting 7706.",
  lessons: [lesson41, lesson42, lesson43],
};
