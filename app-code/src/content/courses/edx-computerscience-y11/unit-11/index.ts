import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-11-1.ts";
import { lesson112 } from "./lesson-11-2.ts";
import { lesson113 } from "./lesson-11-3.ts";

export const unit11: Unit = {
  id: "ecs11-u11",
  code: "11",
  number: 11,
  title: "The Wider World",
  description:
    "Web technologies, legal and ethical issues, and the impact of emerging technologies.",
  lessons: [lesson111, lesson112, lesson113],
};
