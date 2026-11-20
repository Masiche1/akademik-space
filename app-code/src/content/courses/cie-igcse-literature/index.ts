import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseLiterature: Course = {
  id: "cie-igcse-literature",
  title: "Cambridge IGCSE Literature in English 0475",
  shortTitle: "IGCSE Literature",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Introduction to Cambridge IGCSE Literature in English 0475: reading for theme and meaning, analysing writers' methods, unseen texts, and essay writing.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "literature-in-english-0475",
  },
};
