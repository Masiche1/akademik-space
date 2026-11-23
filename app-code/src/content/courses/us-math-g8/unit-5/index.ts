import type { Unit } from "../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "us-math-g8-u5",
  code: "U5",
  title: "Rational and Irrational Numbers",
  description:
    "Deep dive into real numbers: classification, approximation, radical operations.",
  lessons: [lesson51, lesson52, lesson53],
};
