import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "edxbtecit-u10",
  code: "10",
  number: 10,
  title: "Unit 10: Systems Development and Implementation",
  description:
    "The software development life cycle, methodologies and requirements, programming constructs, testing and debugging, implementation strategies and usability.",
  lessons: [lesson101, lesson102, lesson103],
};
