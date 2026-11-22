import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxBtecInformationTechnology: Course = {
  id: "edx-btec-information-technology",
  title: "BTEC National Information Technology",
  shortTitle: "BTEC Information Technology",
  grade: "Level 3",
  framework: "Pearson BTEC Level 3 National (AAQ) Extended Certificate",
  description:
    "Applied information technology study aligned to the Pearson BTEC National in Information Technology (Extended Certificate): IT systems and components, cyber security and incident management, website development, and relational database development.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "btec", subject: "information-technology", year: 12 },
};
