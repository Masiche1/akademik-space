import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-2-1.ts";
import { lesson62 } from "./lesson-2-2.ts";
import { lesson63 } from "./lesson-2-3.ts";
import { lesson64 } from "./lesson-2-4.ts";
import { lesson65 } from "./lesson-2-5.ts";

export const unit2: Unit = {
  id: "ciecs-u2",
  code: "2",
  title: "Hardware, Software and Automatic Systems",
  description:
    "CPU/memory/storage, I/O devices, operating systems, sensors/actuators and internet applications — Cambridge IGCSE Computer Science 0478.",
  lessons: [lesson61, lesson62, lesson63, lesson64, lesson65],
};
