import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "eiascs-u5",
  code: "5",
  title: "Advanced Concepts",
  description:
    "9CP01 Unit 5: Networks, protocols, security, databases, emerging technologies, system architecture, cloud/edge computing.",
  lessons: [lesson51, lesson52, lesson53],
};
