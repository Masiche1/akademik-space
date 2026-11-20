import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usBiologyG9: Course = {
  id: "us-biology-g9",
  title: "Biology",
  shortTitle: "Biology",
  grade: "Grade 9",
  framework: "Next Generation Science Standards (High School Life Science)",
  description:
    "Biomolecules, cells and homeostasis; photosynthesis, respiration and matter cycling; DNA, cell division and inheritance; and evolution and ecosystems.",
  units: [unit1, unit2, unit3, unit4],
  us: { subject: "biology", grade: 9 },
};
