import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olec-u4",
  code: "4",
  title: "Macroeconomics",
  description:
    "National income, economic growth, unemployment and inflation — Cambridge O Level Economics 2281.",
  lessons: [lesson41, lesson42, lesson43],
};
