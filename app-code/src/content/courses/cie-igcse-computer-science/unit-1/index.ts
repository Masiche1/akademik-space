import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-1-1.ts";
import { lesson52 } from "./lesson-1-2.ts";
import { lesson53 } from "./lesson-1-3.ts";
import { lesson54 } from "./lesson-1-4.ts";
import { lesson55 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "ciecs-u1",
  code: "1",
  title: "Data Representation and Communication",
  description:
    "Number systems, text/graphics/sound encoding, network types, protocols, internet security and compression — Cambridge IGCSE Computer Science 0478.",
  lessons: [lesson51, lesson52, lesson53, lesson54, lesson55],
};
