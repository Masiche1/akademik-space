import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryGeography: Course = {
  id: "edx-primary-geography",
  title: "Edexcel Primary Geography",
  shortTitle: "Primary Geography",
  grade: "Years 1-6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Locality and the wider world for Years 1-6: maps and compass directions, the United Kingdom, continents and countries, weather and climate, rivers and mountains, and people and communities.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "geography", year: 1 },
};
