import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "cipub-u2",
  code: "2",
  title: "Genetics, Evolution and Ecology",
  description:
    "DNA and protein synthesis, inheritance and variation, natural selection, speciation and ecology — Cambridge Pre-U Biology 9769.",
  lessons: [lesson21, lesson22, lesson23],
};
