import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "cieb-u6",
  code: "6",
  title: "Homeostasis",
  description:
    "Negative feedback, temperature regulation, blood glucose control, and kidney osmoregulation — Cambridge IGCSE Biology 0653.",
  lessons: [lesson61, lesson62, lesson63],
};
