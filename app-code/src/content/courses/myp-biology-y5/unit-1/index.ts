import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypb5-unit-1",
  number: 1,
  code: "1",
  title: "Advanced Cell Biology and Genetics",
  description:
    "DNA structure and replication, protein synthesis, mitosis versus meiosis, monohybrid inheritance with Punnett squares, and genetic engineering and biotechnology.",
  lessons: [lesson11, lesson12, lesson13],
};
