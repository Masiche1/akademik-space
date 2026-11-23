import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "ecs10-u9",
  code: "9",
  title: "Data Representation, Encoding and Storage",
  description:
    "Hexadecimal and number conversions, data units, ASCII and Unicode encoding, compression and storage calculations.",
  lessons: [lesson91, lesson92, lesson93],
};
