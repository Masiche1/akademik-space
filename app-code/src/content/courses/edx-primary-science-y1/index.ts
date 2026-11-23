import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryScienceY1: Course = {
  id: "edx-primary-science-y1",
  title: "Year 1 Science",
  shortTitle: "Primary Science Y1",
  grade: "Year 1",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 1 Science: working scientifically (observing, comparing, classifying), the human body, living things and habitats, materials, light, sound, forces, seasons, weather, plants and simple machines.",
  edexcel: { stage: "primary", subject: "science", year: 1 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
