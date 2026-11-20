import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypScience: Course = {
  id: "pyp-science",
  title: "PYP Science",
  shortTitle: "PYP Science",
  grade: "PYP",
  framework: "IB Primary Years Programme — Science",
  description:
    "Living things, materials, forces and motion, energy, earth and space, and science inquiry skills across the full PYP age range 3-12, with connections to the transdisciplinary themes Who We Are, Where We Are in Place and Time, How the World Works and Sharing the Planet.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "science" },
};
