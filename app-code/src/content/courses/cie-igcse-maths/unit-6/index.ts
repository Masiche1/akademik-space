import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ciem-u6",
  code: "6",
  title: "Trigonometry",
  description:
    "Right-angled trigonometry, exact values, sine and cosine rules, and trigonometry in three dimensions — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson61, lesson62, lesson63],
};
