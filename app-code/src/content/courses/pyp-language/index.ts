import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypLanguage: Course = {
  id: "pyp-language",
  title: "PYP Language",
  shortTitle: "PYP Language",
  grade: "PYP",
  framework: "IB Primary Years Programme — Language",
  description:
    "Oral language, reading, writing and viewing across the full PYP age range 3-12, weaving in the transdisciplinary themes Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works and Sharing the Planet.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "language" },
};
