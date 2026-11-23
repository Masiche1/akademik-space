import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryScienceY2: Course = {
  id: "edx-primary-science-y2",
  title: "Year 2 Science",
  shortTitle: "Primary Science Y2",
  grade: "Year 2",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 2 Science: classifying living things, life cycles, habitats and adaptations, the human body, plants and seasonal change, material properties and states of matter, forces, light, sound and seasons.",
  edexcel: { stage: "primary", subject: "science", year: 2 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
