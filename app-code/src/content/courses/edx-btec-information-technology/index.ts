import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBtecInformationTechnology: Course = {
  id: "edx-btec-information-technology",
  title: "BTEC National Information Technology",
  shortTitle: "BTEC Information Technology",
  grade: "Level 3",
  framework: "Pearson BTEC Level 3 National (AAQ) Extended Certificate",
  description:
    "Applied information technology study aligned to the Pearson BTEC National in Information Technology (Extended Certificate): IT systems and components, cyber security and incident management, website development, and relational database development.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "btec", subject: "information-technology", year: 12 },
};
