import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypb5-unit-3",
  number: 3,
  code: "3",
  title: "Ecology and Evolution",
  description:
    "Population dynamics and carrying capacity, nutrient cycles in detail, natural selection and evidence for evolution, biodiversity and human impact, and conservation strategies and sustainability.",
  lessons: [lesson31, lesson32, lesson33],
};
