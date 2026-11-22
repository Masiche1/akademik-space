import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edxbtecit-u1",
  code: "1",
  title: "Unit 1: Information Technology Systems",
  description:
    "IT system components (hardware, software, data, people, procedures), operating systems, networks, system performance and maintenance.",
  lessons: [lesson101, lesson102, lesson103],
};
