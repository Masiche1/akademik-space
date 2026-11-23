import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ech11-u6",
  code: "6",
  title: "Water and Aqueous Chemistry",
  description:
    "Study solutions, solubility and solubility curves, hard and soft water and methods of softening it, and how water is treated and purified for drinking.",
  lessons: [lesson61, lesson62, lesson63],
};
