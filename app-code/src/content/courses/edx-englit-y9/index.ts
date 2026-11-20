import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLitY9: Course = {
  id: "edx-englit-y9",
  title: "Year 9 English Literature",
  shortTitle: "Lit Y9",
  grade: "Year 9",
  framework: "Pearson Edexcel Lower Secondary English (Key Stage 3)",
  description:
    "Gothic fiction, poetry from the Romantics to the First World War, and Julius Caesar.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "english-literature", year: 9 },
};
