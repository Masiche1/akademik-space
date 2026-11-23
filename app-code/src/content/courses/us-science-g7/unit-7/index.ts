import type { Unit } from "../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "s7-u7",
  code: "7",
  title: "Physical Science Deep Dive: Matter",
  description:
    "Explore atomic structure, elements and compounds, mixtures and solutions, and states of matter in depth.",
  lessons: [lesson71, lesson72, lesson73],
};
