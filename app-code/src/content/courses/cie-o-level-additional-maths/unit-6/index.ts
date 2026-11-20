import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";
import { lesson64 } from "./lesson-6-4.ts";

export const unit6: Unit = {
  id: "olam-u6",
  code: "6",
  title: "Calculus",
  description: "Differentiation, integration, product/quotient/chain rules and implicit differentiation.",
  lessons: [lesson61, lesson62, lesson63, lesson64],
};
