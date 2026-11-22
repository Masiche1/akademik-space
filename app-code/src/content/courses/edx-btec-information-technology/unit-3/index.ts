import type { Unit } from "../../../types.ts";
import { lesson301 } from "./lesson-3-1.ts";
import { lesson302 } from "./lesson-3-2.ts";
import { lesson303 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edxbtecit-u3",
  code: "3",
  title: "Unit 3: Website Development",
  description:
    "Website planning and design, HTML and CSS fundamentals, client-side scripting, hosting and deployment, testing and accessibility.",
  lessons: [lesson301, lesson302, lesson303],
};
