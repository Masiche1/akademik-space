import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const pypMaths: Course = {
  id: "pyp-maths",
  title: "PYP Mathematics",
  shortTitle: "PYP Mathematics",
  grade: "PYP",
  framework: "IB Primary Years Programme — Mathematics",
  description:
    "Number, algebra, geometry and measurement, and statistics and probability across the full PYP age range 3-12, with an inquiry approach and connections to the transdisciplinary themes Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works and Sharing the Planet.",
  units: [unit1, unit2, unit3],
  pyp: { subject: "maths" },
};
