import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "eiascs-u1",
  code: "1",
  title: "Computer Systems",
  description:
    "9CP01 Unit 1: CPU, memory, storage, input/output devices, networks, system types and evaluation.",
  lessons: [lesson11, lesson12, lesson13],
};
