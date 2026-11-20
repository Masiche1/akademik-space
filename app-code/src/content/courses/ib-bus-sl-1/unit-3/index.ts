import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "bus-u3",
  code: "3",
  title: "Human Resources and Leadership",
  description:
    "Human resource functions from recruitment to motivation, communication and group behaviour, and leadership styles and organisational structure.",
  lessons: [lesson31, lesson32, lesson33],
};
