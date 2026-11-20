import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { lesson24 } from "./lesson-2-4.ts";
import { lesson25 } from "./lesson-2-5.ts";
import { lesson26 } from "./lesson-2-6.ts";
import { lesson27 } from "./lesson-2-7.ts";
import { lesson28 } from "./lesson-2-8.ts";

export const unit2: Unit = {
  id: "cilc-u2",
  code: "2",
  title: "Data, Networks and Computer Systems",
  description:
    "Sorting and searching, data representation, networks and protocols, system components, binary, databases and cyber security — Cambridge Lower Secondary Computing 0860 (Stages 7-9).",
  lessons: [lesson21, lesson22, lesson23, lesson24, lesson25, lesson26, lesson27, lesson28],
};
