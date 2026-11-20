import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "langb-u1",
  code: "1",
  number: 1,
  title: "Comprehension and Text Types",
  description:
    "Develop reading strategies for gist and detail, recognise common text types such as articles, emails, messages and reports, and build vocabulary and inference skills.",
  lessons: [lesson11, lesson12, lesson13],
};
