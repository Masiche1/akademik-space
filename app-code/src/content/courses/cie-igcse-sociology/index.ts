import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseSociology: Course = {
  id: "cie-igcse-sociology",
  title: "Cambridge IGCSE Sociology 0495",
  shortTitle: "IGCSE Sociology",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Introduction to Cambridge IGCSE Sociology 0495: sociological theory, social structure and agency, culture and identity, beliefs in society, and social inequality.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "sociology-0495",
  },
};
