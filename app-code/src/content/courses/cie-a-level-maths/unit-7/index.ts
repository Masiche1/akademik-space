import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";

export const unit7: Unit = {
  id: "cial-m-unit-7",
  code: "7",
  title: "Vectors",
  description:
    "Vector notation, magnitude and dot product, vector equations of lines and coplanarity.",
  lessons: [lesson71, lesson72],
};
