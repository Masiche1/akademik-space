import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "aisl-u6",
  code: "6",
  title: "Calculus",
  description: "Differentiate to find rates of change, tangents and normals, optimize quantities in context, and integrate to find areas, including the trapezoidal rule.",
  lessons: [lesson61, lesson62, lesson63],
};
