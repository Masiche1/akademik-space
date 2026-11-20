import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcsePsychology: Course = {
  id: "cie-igcse-psychology",
  title: "Cambridge IGCSE Psychology 0266",
  shortTitle: "IGCSE Psychology",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Introduction to Cambridge IGCSE Psychology 0266: approaches to psychology, research methods, memory and learning, and social influence.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "psychology-0266",
  },
};
