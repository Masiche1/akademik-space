import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseDevelopmentStudies: Course = {
  id: "cie-igcse-development-studies",
  title: "Cambridge IGCSE Development Studies 0453",
  shortTitle: "IGCSE Development Studies",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Introduction to Cambridge IGCSE Development Studies 0453: development concepts and indicators, causes of underdevelopment, and development strategies.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "development-studies-0453",
  },
};
