import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "biosl-u4",
  code: "4",
  number: 4,
  title: "Evolution and Ecology",
  description:
    "Natural selection and the evidence for evolution, speciation and classification, then populations, communities, succession and nutrient cycles.",
  lessons: [lesson41, lesson42, lesson43],
};
