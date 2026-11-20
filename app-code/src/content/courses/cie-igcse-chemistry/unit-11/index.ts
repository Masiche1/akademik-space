import type { Unit } from "../../../types.ts";
import { lesson1111 } from "./lesson-11-1.ts";
import { lesson1112 } from "./lesson-11-2.ts";
import { lesson1113 } from "./lesson-11-3.ts";

export const unit11: Unit = {
  id: "ciecy-u11",
  code: "11",
  title: "Chemical Tests",
  description:
    "Tests for gases, ions, flame colours, qualitative analysis and organic compounds — Cambridge IGCSE Chemistry 0654.",
  lessons: [lesson1111, lesson1112, lesson1113],
};
