import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";

export const unit1: Unit = {
  id: "bus-u1",
  code: "1",
  title: "Business Objectives and Types",
  description:
    "Business aims and stakeholders, the types of business organisation from sole trader to PLC, and the nature of enterprise and entrepreneurship.",
  lessons: [lesson11, lesson12, lesson13, lesson14],
};
