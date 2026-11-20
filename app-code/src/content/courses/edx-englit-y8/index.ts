import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLitY8: Course = {
  id: "edx-englit-y8",
  title: "Year 8 English Literature",
  shortTitle: "Lit Y8",
  grade: "Year 8",
  framework: "Pearson Edexcel Lower Secondary English (Key Stage 3)",
  description:
    "Poetry, A Christmas Carol and Romeo and Juliet: reading closely, analysing methods and writing analytical paragraphs.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "english-literature", year: 8 },
};
