import type { Unit } from "../../../types.ts";
import { lesson501 } from "./lesson-5-1.ts";
import { lesson502 } from "./lesson-5-2.ts";
import { lesson503 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edxbtecit-u5",
  code: "5",
  number: 5,
  title: "Unit 5: Systems Administration and IT Support",
  description:
    "Operating system administration, user access control, backup and recovery, system maintenance, IT support workflows and troubleshooting.",
  lessons: [lesson501, lesson502, lesson503],
};
