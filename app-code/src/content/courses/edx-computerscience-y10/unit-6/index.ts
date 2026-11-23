import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ecs10-u6",
  code: "6",
  title: "Testing, Debugging and Software Development",
  description:
    "Program testing, test data, error types, debugging techniques, documentation and software maintenance.",
  lessons: [lesson61, lesson62, lesson63],
};
