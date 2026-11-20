import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-1-1.ts";
import { lesson122 } from "./lesson-1-2.ts";
import { lesson123 } from "./lesson-1-3.ts";
import { lesson124 } from "./lesson-1-4.ts";
import { lesson125 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "ciealc-u1",
  code: "1",
  title: "Data Representation",
  description:
    "Number systems, text/images/sound encoding, compression, Boolean logic and encryption — Cambridge A Level Computer Science 9618.",
  lessons: [lesson121, lesson122, lesson123, lesson124, lesson125],
};
