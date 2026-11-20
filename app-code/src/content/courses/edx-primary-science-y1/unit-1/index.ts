import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edps1-u1",
  code: "1",
  title: "Working Scientifically and Living Things",
  description:
    "Observing and describing, comparing and classifying, the human body, growth, living vs non-living things, habitats and animal needs.",
  lessons: [lesson101, lesson102, lesson103],
};
