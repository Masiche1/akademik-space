import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edxpc-u6",
  code: "6",
  title: "Data, Networks and Technology",
  description:
    "Primary computing: collecting and presenting data, spreadsheets, networks and the internet, hardware components and responsible use.",
  lessons: [lesson61, lesson62, lesson63],
};
